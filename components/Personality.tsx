import React, { useState } from 'react';
import Section from './Section';
import ThemedImage from './ThemedImage';

type CharId = 'eleven' | 'dustin' | 'steve' | 'max' | 'hopper' | 'mike';

interface Result {
  name: string;
  tagline: string;
  blurb: string;
  kind: 'hero' | 'adult';
}

const RESULTS: Record<CharId, Result> = {
  eleven: {
    name: 'Eleven',
    tagline: 'Quiet, fierce, and unstoppable.',
    kind: 'hero',
    blurb:
      'You feel everything deeply and protect the people you love with everything you have. You\'ve been through a lot, but your strength is exactly what your friends need when the world turns Upside Down.',
  },
  dustin: {
    name: 'Dustin Henderson',
    tagline: 'The curious genius of the party.',
    kind: 'hero',
    blurb:
      'Endlessly enthusiastic and whip-smart, you\'re the one who actually reads the manual — and then saves everyone with it. Loyal to a fault and never short on a plan (or a snack).',
  },
  steve: {
    name: 'Steve Harrington',
    tagline: 'The unexpected hero (and babysitter).',
    kind: 'adult',
    blurb:
      'You grew into the dependable one. Beneath the great hair is someone who shows up, takes the hits, and looks after the little ones. Nail-bat optional, big heart mandatory.',
  },
  max: {
    name: 'Max Mayfield',
    tagline: 'Independent, brave, and a little guarded.',
    kind: 'hero',
    blurb:
      'You do things your own way and don\'t need anyone\'s approval. Tough on the outside, deeply loyal underneath — and when it counts, you\'re the bravest person in the room.',
  },
  hopper: {
    name: 'Jim Hopper',
    tagline: 'Gruff exterior, fierce protector.',
    kind: 'adult',
    blurb:
      'You carry a lot, but you\'d burn down the world to keep your people safe. Mornings are for coffee and contemplation — the rest of the day is for getting things done.',
  },
  mike: {
    name: 'Mike Wheeler',
    tagline: 'The loyal heart of the group.',
    kind: 'hero',
    blurb:
      'You\'re the glue that holds everyone together — the planner, the believer, the one who never gives up on a friend. When you commit to someone, it\'s for life.',
  },
};

interface QItem {
  q: string;
  options: { label: string; weights: Partial<Record<CharId, number>> }[];
}

const QUESTIONS: QItem[] = [
  {
    q: 'A monster appears in Hawkins. Your first move?',
    options: [
      { label: 'Face it head-on — no hesitation', weights: { eleven: 2, hopper: 1 } },
      { label: 'Come up with a clever plan', weights: { dustin: 2, mike: 1 } },
      { label: 'Grab a weapon and protect the kids', weights: { steve: 2, hopper: 1 } },
      { label: 'Stay calm and do it my own way', weights: { max: 2 } },
    ],
  },
  {
    q: 'Your ideal Friday night?',
    options: [
      { label: 'Campaign night — Dungeons & Dragons', weights: { mike: 2, dustin: 1 } },
      { label: 'Arcade high-score run', weights: { max: 2, dustin: 1 } },
      { label: 'Quiet night in with Eggos', weights: { eleven: 2 } },
      { label: 'Cruising around with the radio up', weights: { steve: 2, hopper: 1 } },
    ],
  },
  {
    q: 'Friends would describe you as…',
    options: [
      { label: 'Loyal and warm-hearted', weights: { mike: 2, steve: 1 } },
      { label: 'Smart and a little geeky', weights: { dustin: 2 } },
      { label: 'Brave and independent', weights: { max: 2, eleven: 1 } },
      { label: 'Protective and dependable', weights: { hopper: 2, steve: 1 } },
    ],
  },
  {
    q: 'Pick a superpower:',
    options: [
      { label: 'Telekinesis', weights: { eleven: 3 } },
      { label: 'Genius-level intellect', weights: { dustin: 2, mike: 1 } },
      { label: 'Fearlessness under pressure', weights: { max: 2, hopper: 1 } },
      { label: 'Always knowing what to say', weights: { steve: 2 } },
    ],
  },
  {
    q: 'What matters most to you?',
    options: [
      { label: 'Protecting the people I love', weights: { hopper: 2, eleven: 1 } },
      { label: 'Solving the mystery', weights: { dustin: 2, mike: 1 } },
      { label: 'Freedom to be myself', weights: { max: 2 } },
      { label: 'Keeping the group together', weights: { mike: 2, steve: 1 } },
    ],
  },
];

const Personality: React.FC = () => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<CharId, number>>({
    eleven: 0, dustin: 0, steve: 0, max: 0, hopper: 0, mike: 0,
  });
  const [result, setResult] = useState<CharId | null>(null);

  const answer = (weights: Partial<Record<CharId, number>>) => {
    const next = { ...scores };
    (Object.keys(weights) as CharId[]).forEach((k) => {
      next[k] += weights[k] ?? 0;
    });
    setScores(next);
    if (step + 1 >= QUESTIONS.length) {
      const winner = (Object.keys(next) as CharId[]).reduce((a, b) => (next[b] > next[a] ? b : a));
      setResult(winner);
    } else {
      setStep((s) => s + 1);
    }
  };

  const restart = () => {
    setStep(0);
    setScores({ eleven: 0, dustin: 0, steve: 0, max: 0, hopper: 0, mike: 0 });
    setResult(null);
  };

  const q = QUESTIONS[step];

  return (
    <Section id="quiz" title="Which Hawkins Hero Are You?" className="bg-gray-900/60">
      <div className="max-w-2xl mx-auto bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-10 shadow-2xl">
        {result ? (
          <div className="text-center">
            <p className="uppercase tracking-widest text-gray-400 mb-4">You are…</p>
            <div className="w-40 h-56 mx-auto mb-5 rounded-lg overflow-hidden border-2 border-red-700/60 shadow-lg">
              <ThemedImage
                seed={RESULTS[result].name}
                alt={RESULTS[result].name}
                kind={RESULTS[result].kind}
                width={320}
                height={448}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-display font-bold text-red-500 text-glow-red">{RESULTS[result].name}</h3>
            <p className="text-red-400 italic mb-4">{RESULTS[result].tagline}</p>
            <p className="text-gray-300 leading-relaxed mb-8">{RESULTS[result].blurb}</p>
            <button
              onClick={restart}
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-transform hover:scale-105"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between text-sm uppercase tracking-widest text-gray-400 mb-3">
              <span>Question {step + 1} / {QUESTIONS.length}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 mb-8">
              <div className="bg-red-600 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-6">{q.q}</h3>
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(opt.weights)}
                  className="w-full text-left px-5 py-3 rounded-lg border-2 border-gray-600 hover:border-red-500 hover:bg-gray-700/50 transition-all duration-200"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default Personality;
