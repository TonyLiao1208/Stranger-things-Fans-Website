
import React from 'react';
import Section from './Section';

const ThemeItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-red-600 backdrop-blur-sm">
        <h4 className="text-2xl font-bold text-red-500 mb-3">{title}</h4>
        <p className="text-gray-300 leading-relaxed">{children}</p>
    </div>
);


const Themes: React.FC = () => {
    return (
        <Section id="themes" title="More Than a TV Show" className="bg-black/20" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=3')", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
           <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
               <ThemeItem title="80s Nostalgia">
                   From the synth-heavy soundtrack to the fashion, Dungeons & Dragons, and classic movie references (E.T., The Goonies, Alien), Stranger Things is a love letter to the 1980s. It doesn't just use the era as a setting; it immerses the audience in the culture and technology of the time, creating a powerful sense of nostalgia for those who lived it and a fascinating world for newcomers.
               </ThemeItem>
               <ThemeItem title="Friendship & Loyalty">
                   At its core, the show is about the unbreakable bond of friendship. The kids' loyalty to each other, especially in their unwavering search for Will in Season 1, is the heart of the story. They face otherworldly horrors, but their strength comes from sticking together. "Friends don't lie" isn't just a quote; it's their code.
               </ThemeItem>
               <ThemeItem title="Coming of Age">
                   We watch the characters grow from kids playing D&D in a basement to teenagers navigating the complexities of high school, relationships, and trauma. Each season presents new challenges that force them to mature, confronting not just monsters but also the everyday struggles of growing up, making their journey incredibly relatable.
               </ThemeItem>
               <ThemeItem title="The Battle of Light and Dark">
                   The show masterfully blends genres. It's a sci-fi mystery, a supernatural horror story, and a heartwarming drama. This combination creates a unique tone where terrifying monster encounters can be followed by a touching scene of friendship or family love. It's this balance that keeps audiences captivated, never knowing whether to laugh, cry, or scream.
               </ThemeItem>
           </div>
        </Section>
    );
}

export default Themes;
