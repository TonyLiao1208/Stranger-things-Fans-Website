
import React from 'react';
import type { ICharacter, ISeason, IMonster } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Seasons from './components/Seasons';
import Characters from './components/Characters';
import UpsideDown from './components/UpsideDown';
import Themes from './components/Themes';
import Footer from './components/Footer';

const seasonsData: ISeason[] = [
  {
    title: "The Vanishing of Will Byers",
    year: 2016,
    imageUrl: "https://picsum.photos/seed/s1/800/1200",
    summary: "When a young boy, Will Byers, vanishes from the small town of Hawkins, Indiana, his friends, family, and local police are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces, and one very strange little girl.",
    keyPoints: [
      "Will Byers disappears on his way home.",
      "A mysterious girl with psychokinetic powers, Eleven, appears.",
      "The discovery of a monstrous creature, the Demogorgon, and the portal to the Upside Down.",
      "Joyce Byers's relentless effort to communicate with her son through Christmas lights.",
      "The kids band together to find their friend and battle the Demogorgon."
    ]
  },
  {
    title: "The Mind Flayer",
    year: 2017,
    imageUrl: "https://picsum.photos/seed/s2/800/1200",
    summary: "A year after Will's return, everything seems back to normal... but a darkness lurks just beneath the surface, threatening all of Hawkins. A new, larger entity from the Upside Down, the Mind Flayer, possesses Will and begins its invasion of our world.",
    keyPoints: [
      "Will suffers from PTSD-like visions of the Upside Down.",
      "New characters Max and Billy arrive in Hawkins, shaking up the group dynamic.",
      "The introduction of the Mind Flayer, a colossal shadow monster.",
      "A network of tunnels from the Upside Down grows under Hawkins.",
      "Eleven closes the gate to the Upside Down, severing the Mind Flayer's connection."
    ]
  },
  {
    title: "The Battle of Starcourt",
    year: 2019,
    imageUrl: "https://picsum.photos/seed/s3/800/1200",
    summary: "It's the summer of 1985 in Hawkins. The new Starcourt Mall is the town's centerpiece, but underneath it, the Soviets are trying to reopen the gate to the Upside Down. The Mind Flayer finds a new way into our world, creating a grotesque monster of flesh to terrorize the town.",
    keyPoints: [
      "The kids are growing up and relationships are changing.",
      "Steve, Dustin, Robin, and Erica uncover a secret Russian lab under the mall.",
      "The Mind Flayer possesses people, including Billy, to build a physical form.",
      "The epic 'Battle of Starcourt' brings all the characters together.",
      "Heartbreaking sacrifices are made to save Hawkins once again."
    ]
  },
  {
    title: "The Curse of Vecna",
    year: 2022,
    imageUrl: "https://picsum.photos/seed/s4/800/1200",
    summary: "Six months after the Battle of Starcourt, the group is separated for the first time. A new and horrifying supernatural threat emerges from the Upside Down, a sentient creature named Vecna who murders Hawkins teens by preying on their past trauma, presenting a gruesome mystery that might finally hold the key to ending the horrors of the Upside Down.",
    keyPoints: [
      "The main group is split between Hawkins, California, and Russia.",
      "Vecna, a powerful new villain with a deep connection to Hawkins Lab and Eleven, is introduced.",
      "Max's harrowing confrontation with Vecna and the power of music.",
      "Eleven explores her past to regain her powers and learns the truth about the Upside Down.",
      "Vecna succeeds in opening multiple gates, leaving Hawkins on the brink of apocalypse."
    ]
  },
];

const charactersData: ICharacter[] = [
  {
    name: "Eleven",
    actor: "Millie Bobby Brown",
    imageUrl: "https://picsum.photos/seed/eleven/400/600",
    description: "A powerful young girl with psychokinetic abilities who was raised and experimented on in Hawkins National Laboratory. After escaping, she befriends Mike, Dustin, and Lucas, becoming an integral part of their group and the primary defense against the threats from the Upside Down.",
    quote: "Friends don't lie."
  },
  {
    name: "Mike Wheeler",
    actor: "Finn Wolfhard",
    imageUrl: "https://picsum.photos/seed/mike/400/600",
    description: "A smart and compassionate boy who serves as the unofficial leader of his friend group. His determination to find his missing friend Will leads him to discover Eleven, with whom he forms an immediate and deep bond. Mike is the heart of the party, often rallying them to face danger.",
    quote: "If anyone asks where I am, I've left the country."
  },
  {
    name: "Dustin Henderson",
    actor: "Gaten Matarazzo",
    imageUrl: "https://picsum.photos/seed/dustin/400/600",
    description: "The group's tech-savvy and scientific mind, Dustin's curiosity and intelligence are crucial in understanding the strange happenings in Hawkins. He provides both comic relief and brilliant insights, often forming unlikely but powerful friendships, most notably with Steve Harrington.",
    quote: "She's our friend, and she's crazy!"
  },
  {
    name: "Lucas Sinclair",
    actor: "Caleb McLaughlin",
    imageUrl: "https://picsum.photos/seed/lucas/400/600",
    description: "Initially the most pragmatic and skeptical member of the group, Lucas is fiercely loyal and protective of his friends. He is resourceful and brave, always ready with his slingshot. Over time, he learns to trust in the unbelievable and becomes a key fighter in their battles.",
    quote: "We have a Demogorgon to hunt."
  },
  {
    name: "Will Byers",
    actor: "Noah Schnapp",
    imageUrl: "https://picsum.photos/seed/will/400/600",
    description: "A kind and artistic boy whose disappearance into the Upside Down kickstarts the entire series. His ordeal leaves him with a lingering connection to the other dimension and its ruler, the Mind Flayer, making him both a victim and a vital sensor for supernatural threats.",
    quote: "The Demogorgon... it got me."
  },
  {
    name: "Max Mayfield",
    actor: "Sadie Sink",
    imageUrl: "https://picsum.photos/seed/max/400/600",
    description: "A tough and independent girl who moves to Hawkins and quickly catches the attention of Dustin and Lucas. An expert skateboarder and arcade gamer, she eventually becomes a core member of the group, proving her bravery and resilience time and again, especially in her face-off against Vecna.",
    quote: "There's more to life than stupid boys."
  },
  {
    name: "Jim Hopper",
    actor: "David Harbour",
    imageUrl: "https://picsum.photos/seed/hopper/400/600",
    description: "The gruff but well-meaning Chief of Police in Hawkins. Haunted by his past, he becomes a reluctant hero, investigating the strange occurrences with a ferocity that puts him at odds with the secretive Hawkins Lab. He develops a powerful fatherly bond with Eleven.",
    quote: "Mornings are for coffee and contemplation."
  },
  {
    name: "Steve Harrington",
    actor: "Joe Keery",
    imageUrl: "https://picsum.photos/seed/steve/400/600",
    description: "Starting as a stereotypical popular jock, Steve undergoes one of the show's greatest character developments. He evolves into a brave, protective figure, famously becoming the 'babysitter' for the younger kids and a loyal friend to Dustin and Robin.",
    quote: "I may be a pretty shitty boyfriend, but it turns out I'm a pretty damn good babysitter."
  },
];

const monstersData: IMonster[] = [
    {
        name: "The Demogorgon",
        imageUrl: "https://picsum.photos/seed/demogorgon/600/400",
        description: "The original nightmare. A humanoid predator from the Upside Down with a terrifying, flower-like head that opens to reveal rows of sharp teeth. It is drawn to blood and can travel between dimensions, hunting its prey with relentless ferocity."
    },
    {
        name: "The Mind Flayer",
        imageUrl: "https://picsum.photos/seed/mindflayer/600/400",
        description: "The supreme ruler of the Upside Down. A colossal, spider-like entity made of shadow and dust, it operates as a hive mind, controlling all the creatures of its dimension. It seeks to invade and conquer our world by possessing hosts and building a physical body."
    },
    {
        name: "Vecna",
        imageUrl: "https://picsum.photos/seed/vecna/600/400",
        description: "The Mind Flayer's five-star general. A sentient, powerful being who was once human (Henry Creel / Number 001). Vecna preys on the trauma and guilt of his victims, killing them psychically from the Upside Down to open gates to our world."
    },
];

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <Header />
      <main>
        <Hero />
        <Seasons seasons={seasonsData} />
        <Characters characters={charactersData} />
        <UpsideDown monsters={monstersData} />
        <Themes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
