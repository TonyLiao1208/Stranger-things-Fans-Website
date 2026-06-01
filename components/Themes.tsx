import React from 'react';
import Section from './Section';
import Reveal from './Reveal';

const ThemeItem: React.FC<{ title: string; children: React.ReactNode; delay?: number }> = ({ title, children, delay }) => (
  <Reveal delay={delay} className="h-full">
    <div className="bg-gray-800/60 p-6 rounded-lg border-l-4 border-red-600 backdrop-blur-sm h-full transition-transform duration-300 hover:-translate-y-1">
      <h4 className="text-2xl font-bold text-red-500 mb-3 font-display">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{children}</p>
    </div>
  </Reveal>
);

const Themes: React.FC = () => {
  return (
    <Section
      id="themes"
      title="More Than a TV Show"
      className="bg-black/40"
      style={{
        backgroundImage: "linear-gradient(rgba(10,10,15,0.85), rgba(10,10,15,0.92)), url('https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ThemeItem title="80s Nostalgia">
          From the synth-heavy soundtrack to the fashion, Dungeons & Dragons, and classic movie
          references (E.T., The Goonies, Alien), Stranger Things is a love letter to the 1980s. It
          immerses the audience in the culture and technology of the time, creating a powerful sense of
          nostalgia for those who lived it and a fascinating world for newcomers.
        </ThemeItem>
        <ThemeItem title="Friendship & Loyalty" delay={80}>
          At its core, the show is about the unbreakable bond of friendship. The kids' loyalty to each
          other, especially in their unwavering search for Will in Season 1, is the heart of the story.
          They face otherworldly horrors, but their strength comes from sticking together. "Friends
          don't lie" isn't just a quote; it's their code.
        </ThemeItem>
        <ThemeItem title="Coming of Age" delay={160}>
          We watch the characters grow from kids playing D&D in a basement to teenagers navigating the
          complexities of high school, relationships, and trauma. Each season forces them to mature,
          confronting not just monsters but also the everyday struggles of growing up, making their
          journey incredibly relatable.
        </ThemeItem>
        <ThemeItem title="The Battle of Light and Dark" delay={240}>
          The show masterfully blends genres. It's a sci-fi mystery, a supernatural horror story, and a
          heartwarming drama. Terrifying monster encounters can be followed by a touching scene of
          friendship or family love. It's this balance that keeps audiences captivated — never knowing
          whether to laugh, cry, or scream.
        </ThemeItem>
      </div>
    </Section>
  );
};

export default Themes;
