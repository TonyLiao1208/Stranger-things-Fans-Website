import React, { useState } from 'react';
import type { IQuizQuestion } from '../types';
import Section from './Section';

interface TriviaProps {
  questions: IQuizQuestion[];
}

const Trivia: React.FC<TriviaProps> = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const answered = selected !== null;

  const choose = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const verdict = () => {
    const pct = score / questions.length;
    if (pct === 1) return 'Eleven-level. You ARE the Mind Flayer\'s worst nightmare.';
    if (pct >= 0.7) return 'Hawkins AV Club material. Dustin would be proud.';
    if (pct >= 0.4) return 'Not bad — but maybe rewatch with Eddie\'s Hellfire Club.';
    return 'The Demogorgon got you. Time for a binge rewatch.';
  };

  return (
    <Section id="trivia" title="Hawkins Trivia Challenge" className="bg-black/40">
      <div className="max-w-2xl mx-auto bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-10 shadow-2xl">
        {finished ? (
          <div className="text-center">
            <p className="text-gray-400 uppercase tracking-widest mb-2">Final Score</p>
            <p className="text-6xl font-display font-bold text-red-500 text-glow-red mb-4">
              {score}/{questions.length}
            </p>
            <p className="text-xl text-gray-200 mb-8">{verdict()}</p>
            <button
              onClick={restart}
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-transform hover:scale-105"
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6 text-sm uppercase tracking-widest text-gray-400">
              <span>Question {current + 1} / {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 mb-8">
              <div
                className="bg-red-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }}
              />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-6">{q.question}</h3>

            <div className="space-y-3">
              {q.options.map((opt, i) => {
                let style = 'border-gray-600 hover:border-red-500 hover:bg-gray-700/50';
                if (answered) {
                  if (i === q.answer) style = 'border-green-500 bg-green-900/30 text-green-300';
                  else if (i === selected) style = 'border-red-600 bg-red-900/30 text-red-300';
                  else style = 'border-gray-700 opacity-50';
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    disabled={answered}
                    className={`w-full text-left px-5 py-3 rounded-lg border-2 transition-all duration-200 ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="mt-6 p-4 bg-gray-900/60 rounded-lg border-l-4 border-red-600 text-gray-300">
                <span className="font-bold text-red-500">Lore: </span>{q.fact}
              </div>
            )}

            <div className="mt-8 text-right">
              <button
                onClick={next}
                disabled={!answered}
                className="bg-red-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-transform hover:scale-105"
              >
                {current + 1 >= questions.length ? 'See Results' : 'Next'}
              </button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default Trivia;
