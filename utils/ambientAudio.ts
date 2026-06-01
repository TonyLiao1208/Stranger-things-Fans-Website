/**
 * A tiny Web Audio synth that plays a dark, 80s-style arpeggio + drone —
 * evoking the Hawkins mood without using any copyrighted recording. All sound
 * is generated live from oscillators, so there are no audio assets to ship.
 */
export class AmbientSynth {
  private ctx?: AudioContext;
  private master?: GainNode;
  private filter?: BiquadFilterNode;
  private drones: OscillatorNode[] = [];
  private timer?: number;
  private step = 0;
  private nextNoteTime = 0;
  private readonly tempo = 92; // bpm
  // Semitone offsets from C3 — a brooding minor arpeggio.
  private readonly pattern = [0, 7, 12, 15, 19, 24, 19, 15, 12, 7];
  private _playing = false;

  get playing() {
    return this._playing;
  }

  async start() {
    if (this._playing) return;
    const Ctor = window.AudioContext || (window as any).webkitAudioContext;
    if (!Ctor) return;
    this.ctx = new Ctor();
    await this.ctx.resume();

    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.value = 1100;
    this.filter.Q.value = 7;
    this.filter.connect(this.master);

    // Low detuned drone for atmosphere.
    [-7, 6].forEach((detune) => {
      const o = this.ctx!.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = 65.41; // C2
      o.detune.value = detune;
      const g = this.ctx!.createGain();
      g.gain.value = 0.05;
      o.connect(g).connect(this.filter!);
      o.start();
      this.drones.push(o);
    });

    this.master.gain.linearRampToValueAtTime(0.16, this.ctx.currentTime + 2.5);
    this.nextNoteTime = this.ctx.currentTime + 0.1;
    this.step = 0;
    this._playing = true;
    this.timer = window.setInterval(() => this.scheduler(), 25);
  }

  private scheduler() {
    if (!this.ctx) return;
    const secondsPerBeat = 60 / this.tempo;
    const noteLen = secondsPerBeat / 2; // eighth notes
    while (this.nextNoteTime < this.ctx.currentTime + 0.2) {
      this.playNote(this.nextNoteTime, noteLen);
      this.nextNoteTime += noteLen;
      this.step = (this.step + 1) % this.pattern.length;
    }
  }

  private playNote(time: number, len: number) {
    if (!this.ctx || !this.filter) return;
    const semis = this.pattern[this.step];
    const freq = 130.81 * Math.pow(2, semis / 12); // C3 base
    const o = this.ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(0.2, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, time + len * 0.95);
    o.connect(g).connect(this.filter);
    o.start(time);
    o.stop(time + len);
  }

  async stop() {
    if (!this._playing || !this.ctx || !this.master) return;
    this._playing = false;
    if (this.timer) window.clearInterval(this.timer);
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0, now + 0.6);
    const ctx = this.ctx;
    const drones = this.drones;
    this.drones = [];
    window.setTimeout(() => {
      drones.forEach((d) => {
        try {
          d.stop();
        } catch {
          /* already stopped */
        }
      });
      ctx.close().catch(() => {});
    }, 700);
    this.ctx = undefined;
  }
}

let singleton: AmbientSynth | null = null;
export const getAmbientSynth = () => {
  if (!singleton) singleton = new AmbientSynth();
  return singleton;
};
