import React from 'react';
import type { ICharacter, ISeason, IMonster, ITimelineEvent, IQuizQuestion } from './types';
import { UpsideDownProvider } from './context/UpsideDownContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Seasons from './components/Seasons';
import Characters from './components/Characters';
import UpsideDown from './components/UpsideDown';
import LightsWall from './components/LightsWall';
import Timeline from './components/Timeline';
import Trivia from './components/Trivia';
import Personality from './components/Personality';
import Themes from './components/Themes';
import Footer from './components/Footer';
import Atmosphere from './components/Atmosphere';
import ScrollProgress from './components/ScrollProgress';
import FloatingControls from './components/FloatingControls';

const seasonsData: ISeason[] = [
  {
    title: 'The Vanishing of Will Byers',
    year: 2016,
    episodes: 8,
    tagline: 'Friends don\'t lie.',
    imageUrl: 'https://picsum.photos/seed/s1/800/1200',
    summary:
      'When a young boy, Will Byers, vanishes from the small town of Hawkins, Indiana, his friends, family, and local police are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces, and one very strange little girl.',
    keyPoints: [
      'Will Byers disappears on his way home.',
      'A mysterious girl with psychokinetic powers, Eleven, appears.',
      'The discovery of a monstrous creature, the Demogorgon, and the portal to the Upside Down.',
      "Joyce Byers's relentless effort to communicate with her son through Christmas lights.",
      'The kids band together to find their friend and battle the Demogorgon.',
    ],
  },
  {
    title: 'The Mind Flayer',
    year: 2017,
    episodes: 9,
    tagline: 'One year later.',
    imageUrl: 'https://picsum.photos/seed/s2/800/1200',
    summary:
      "A year after Will's return, everything seems back to normal... but a darkness lurks just beneath the surface, threatening all of Hawkins. A new, larger entity from the Upside Down, the Mind Flayer, possesses Will and begins its invasion of our world.",
    keyPoints: [
      'Will suffers from PTSD-like visions of the Upside Down.',
      'New characters Max and Billy arrive in Hawkins, shaking up the group dynamic.',
      'The introduction of the Mind Flayer, a colossal shadow monster.',
      'A network of tunnels from the Upside Down grows under Hawkins.',
      "Eleven closes the gate to the Upside Down, severing the Mind Flayer's connection.",
    ],
  },
  {
    title: 'The Battle of Starcourt',
    year: 2019,
    episodes: 8,
    tagline: 'One summer can change everything.',
    imageUrl: 'https://picsum.photos/seed/s3/800/1200',
    summary:
      "It's the summer of 1985 in Hawkins. The new Starcourt Mall is the town's centerpiece, but underneath it, the Soviets are trying to reopen the gate to the Upside Down. The Mind Flayer finds a new way into our world, creating a grotesque monster of flesh to terrorize the town.",
    keyPoints: [
      'The kids are growing up and relationships are changing.',
      'Steve, Dustin, Robin, and Erica uncover a secret Russian lab under the mall.',
      'The Mind Flayer possesses people, including Billy, to build a physical form.',
      "The epic 'Battle of Starcourt' brings all the characters together.",
      'Heartbreaking sacrifices are made to save Hawkins once again.',
    ],
  },
  {
    title: 'The Curse of Vecna',
    year: 2022,
    episodes: 9,
    tagline: 'The world is turning Upside Down.',
    imageUrl: 'https://picsum.photos/seed/s4/800/1200',
    summary:
      'Six months after the Battle of Starcourt, the group is separated for the first time. A new and horrifying supernatural threat emerges from the Upside Down, a sentient creature named Vecna who murders Hawkins teens by preying on their past trauma, presenting a gruesome mystery that might finally hold the key to ending the horrors of the Upside Down.',
    keyPoints: [
      'The main group is split between Hawkins, California, and Russia.',
      'Vecna, a powerful new villain connected to Hawkins Lab and Eleven, is introduced.',
      "Max's harrowing confrontation with Vecna and the power of music.",
      'Eleven explores her past to regain her powers and learns the truth about the Upside Down.',
      'Vecna succeeds in opening multiple gates, leaving Hawkins on the brink of apocalypse.',
    ],
  },
  {
    title: 'The Final Chapter',
    year: 2025,
    episodes: 8,
    tagline: 'It ends where it began.',
    imageUrl: 'https://picsum.photos/seed/s5/800/1200',
    summary:
      'The final season returns to Hawkins, now scarred by the gates Vecna tore open. With the town under military quarantine and the Upside Down bleeding into reality, the heroes reunite for one last stand. Every secret of Eleven, Henry Creel, and the Upside Down converges as the party fights to close the rift for good.',
    keyPoints: [
      'Hawkins is under a government quarantine after the great earthquake.',
      'The hunt for Vecna becomes the singular mission that unites the party.',
      "Eleven's full origin and powers come to a head.",
      'Long-running threads from every season pay off in the finale.',
      'The fate of Hawkins — and our world — is decided once and for all.',
    ],
  },
];

const charactersData: ICharacter[] = [
  {
    name: 'Eleven',
    actor: 'Millie Bobby Brown',
    role: 'The Party',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/eleven/400/600',
    description:
      'A powerful young girl with psychokinetic abilities who was raised and experimented on in Hawkins National Laboratory. After escaping, she befriends Mike, Dustin, and Lucas, becoming an integral part of their group and the primary defense against the threats from the Upside Down.',
    quote: "Friends don't lie.",
  },
  {
    name: 'Mike Wheeler',
    actor: 'Finn Wolfhard',
    role: 'The Party',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/mike/400/600',
    description:
      'A smart and compassionate boy who serves as the unofficial leader of his friend group. His determination to find his missing friend Will leads him to discover Eleven, with whom he forms an immediate and deep bond. Mike is the heart of the party.',
    quote: "If anyone asks where I am, I've left the country.",
  },
  {
    name: 'Dustin Henderson',
    actor: 'Gaten Matarazzo',
    role: 'The Party',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/dustin/400/600',
    description:
      "The group's tech-savvy and scientific mind, Dustin's curiosity and intelligence are crucial in understanding the strange happenings in Hawkins. He provides both comic relief and brilliant insights, forming an unlikely but powerful friendship with Steve Harrington.",
    quote: "She's our friend, and she's crazy!",
  },
  {
    name: 'Lucas Sinclair',
    actor: 'Caleb McLaughlin',
    role: 'The Party',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/lucas/400/600',
    description:
      'Initially the most pragmatic and skeptical member of the group, Lucas is fiercely loyal and protective of his friends. He is resourceful and brave, always ready with his slingshot, and becomes a key fighter in their battles.',
    quote: 'We have a Demogorgon to hunt.',
  },
  {
    name: 'Will Byers',
    actor: 'Noah Schnapp',
    role: 'The Party',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/will/400/600',
    description:
      'A kind and artistic boy whose disappearance into the Upside Down kickstarts the entire series. His ordeal leaves him with a lingering connection to the other dimension and its ruler, the Mind Flayer, making him both a victim and a vital sensor for supernatural threats.',
    quote: 'The Demogorgon... it got me.',
  },
  {
    name: 'Max Mayfield',
    actor: 'Sadie Sink',
    role: 'The Party',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/max/400/600',
    description:
      'A tough and independent girl who moves to Hawkins and quickly catches the attention of Dustin and Lucas. An expert skateboarder and arcade gamer, she proves her bravery time and again, especially in her face-off against Vecna.',
    quote: 'There\'s more to life than stupid boys.',
  },
  {
    name: 'Eddie Munson',
    actor: 'Joseph Quinn',
    role: 'Hellfire Club',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/eddie/400/600',
    description:
      "The charismatic leader of Hawkins High's Hellfire Club D&D group. Branded an outcast and falsely accused of murder, Eddie becomes an unlikely hero whose legendary guitar solo in the Upside Down rallies the fight against the demobats.",
    quote: 'Welcome to the Hellfire Club.',
  },
  {
    name: 'Robin Buckley',
    actor: 'Maya Hawke',
    role: 'Scoops Troop',
    affiliation: 'hero',
    imageUrl: 'https://picsum.photos/seed/robin/400/600',
    description:
      "Witty, sharp, and multilingual, Robin starts as Steve's co-worker at Scoops Ahoy and becomes one of the franchise's most beloved characters. Her quick thinking helps crack a Russian code, and her friendship with Steve is a fan favorite.",
    quote: "I'm not gonna lie, this is a lot.",
  },
  {
    name: 'Jim Hopper',
    actor: 'David Harbour',
    role: 'Chief of Police',
    affiliation: 'adult',
    imageUrl: 'https://picsum.photos/seed/hopper/400/600',
    description:
      'The gruff but well-meaning Chief of Police in Hawkins. Haunted by his past, he becomes a reluctant hero, investigating the strange occurrences with a ferocity that puts him at odds with the secretive Hawkins Lab. He develops a powerful fatherly bond with Eleven.',
    quote: 'Mornings are for coffee and contemplation.',
  },
  {
    name: 'Joyce Byers',
    actor: 'Winona Ryder',
    role: 'Will\'s Mother',
    affiliation: 'adult',
    imageUrl: 'https://picsum.photos/seed/joyce/400/600',
    description:
      "Will's fiercely devoted mother, who refuses to give up on her son even when the whole town thinks she's losing her mind. Her improvised wall of Christmas lights becomes one of the most iconic images of the series.",
    quote: 'He\'s out there, and he\'s alone, and he\'s scared.',
  },
  {
    name: 'Steve Harrington',
    actor: 'Joe Keery',
    role: 'The Babysitter',
    affiliation: 'adult',
    imageUrl: 'https://picsum.photos/seed/steve/400/600',
    description:
      "Starting as a stereotypical popular jock, Steve undergoes one of the show's greatest character developments, evolving into a brave, protective figure — famously the 'babysitter' for the younger kids and a loyal friend to Dustin and Robin.",
    quote: "It turns out I'm a pretty damn good babysitter.",
  },
  {
    name: 'Vecna / Henry Creel',
    actor: 'Jamie Campbell Bower',
    role: 'Number 001',
    affiliation: 'villain',
    imageUrl: 'https://picsum.photos/seed/vecnachar/400/600',
    description:
      "The series' central antagonist. Once Henry Creel, the first child experimented on at Hawkins Lab, he was banished to the Upside Down where he became Vecna — the architect behind every horror that has plagued Hawkins.",
    quote: "I want you to remember.",
  },
];

const monstersData: IMonster[] = [
  {
    name: 'The Demogorgon',
    threatLevel: 3,
    imageUrl: 'https://picsum.photos/seed/demogorgon/600/400',
    description:
      'The original nightmare. A humanoid predator from the Upside Down with a terrifying, flower-like head that opens to reveal rows of sharp teeth. It is drawn to blood and can travel between dimensions, hunting its prey with relentless ferocity.',
  },
  {
    name: 'The Mind Flayer',
    threatLevel: 5,
    imageUrl: 'https://picsum.photos/seed/mindflayer/600/400',
    description:
      'The supreme ruler of the Upside Down. A colossal, spider-like entity made of shadow and dust, it operates as a hive mind, controlling all the creatures of its dimension. It seeks to invade and conquer our world by possessing hosts and building a physical body.',
  },
  {
    name: 'Vecna',
    threatLevel: 5,
    imageUrl: 'https://picsum.photos/seed/vecna/600/400',
    description:
      "The Mind Flayer's five-star general. A sentient, powerful being who was once human (Henry Creel / Number 001). Vecna preys on the trauma and guilt of his victims, killing them psychically from the Upside Down to open gates to our world.",
  },
];

const timelineData: ITimelineEvent[] = [
  { year: '1959', title: 'The Creel House', description: 'The Creel family moves to Hawkins. Young Henry Creel\'s emerging powers lead to a family tragedy that goes unexplained for decades.' },
  { year: '1979', title: 'The Hawkins Lab Massacre', description: 'Henry — now orderly-turned-monster Number 001 — slaughters the lab\'s test subjects before Eleven banishes him to the Upside Down.' },
  { year: '1983', title: 'Will Vanishes', description: 'Will Byers disappears, Eleven escapes the lab, and the gate to the Upside Down opens beneath Hawkins. The story begins.' },
  { year: '1984', title: 'The Mind Flayer Rises', description: 'Will is haunted by visions as the Mind Flayer extends its tunnels under the town. Eleven seals the gate once more.' },
  { year: '1985', title: 'The Battle of Starcourt', description: 'The Soviets reopen the gate beneath Starcourt Mall. A devastating battle costs Hawkins dearly — and Hopper vanishes.' },
  { year: '1986', title: 'The Curse of Vecna', description: 'Vecna begins murdering Hawkins teens, opening four gates that fracture the town in a catastrophic earthquake.' },
  { year: 'The End', title: 'The Final Chapter', description: 'Quarantined and surrounded by the Upside Down, the party reunites for a last stand to end the nightmare forever.' },
];

const quizData: IQuizQuestion[] = [
  {
    question: 'What is the name of the alternate dimension in Stranger Things?',
    options: ['The Nether', 'The Upside Down', 'The Shadow Realm', 'The Void'],
    answer: 1,
    fact: 'The kids name it "the Upside Down" after the flipped board of their Dungeons & Dragons game.',
  },
  {
    question: "Which song saves Max from Vecna in Season 4?",
    options: ['Africa by Toto', 'Running Up That Hill by Kate Bush', 'Should I Stay or Should I Go', 'Material Girl'],
    answer: 1,
    fact: 'Kate Bush\'s 1985 hit "Running Up That Hill" re-entered the global charts decades later thanks to the show.',
  },
  {
    question: 'What does Eleven love to eat throughout the series?',
    options: ['Pizza', 'Eggo Waffles', 'Hamburgers', 'Ice cream'],
    answer: 1,
    fact: 'Eggo waffles became Eleven\'s signature food — and a real-world sales phenomenon for the brand.',
  },
  {
    question: "What is Dustin's girlfriend's name, whom he meets at science camp?",
    options: ['Nancy', 'Suzie', 'Robin', 'Erica'],
    answer: 1,
    fact: 'Suzie helps the gang by providing Planck\'s constant — after they sing the NeverEnding Story theme together.',
  },
  {
    question: 'Who was the first test subject, also known as Number 001?',
    options: ['Dr. Brenner', 'Henry Creel', 'Billy Hargrove', 'Murray Bauman'],
    answer: 1,
    fact: 'Henry Creel becomes Vecna — the mastermind tying together every season\'s horrors.',
  },
  {
    question: 'What was the name of the secret Russian-infiltrated mall in Season 3?',
    options: ['Hawkins Plaza', 'Starcourt Mall', 'Mirkwood Mall', 'Hawkins Galleria'],
    answer: 1,
    fact: 'Beneath Starcourt Mall, the Soviets built a machine to reopen the gate to the Upside Down.',
  },
];

const App: React.FC = () => {
  return (
    <UpsideDownProvider>
      <div className="relative bg-gray-900 text-gray-200 overflow-x-hidden">
        <Atmosphere />
        <ScrollProgress />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Seasons seasons={seasonsData} />
            <Characters characters={charactersData} />
            <UpsideDown monsters={monstersData} />
            <LightsWall />
            <Timeline events={timelineData} />
            <Trivia questions={quizData} />
            <Personality />
            <Themes />
          </main>
          <Footer />
        </div>
        <FloatingControls />
      </div>
    </UpsideDownProvider>
  );
};

export default App;
