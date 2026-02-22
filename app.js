/* =============================================================
   THE BIG BANG THEORY — Fan Archive
   app.js — Episode data, art refs, and UI logic
   ============================================================= */

// ── Episode Data (Seasons 1–3 fully written) ─────────────────

var EPISODES = {

  1: [
    { ep:1,  title:"Pilot",
      vanity:"If you are reading this, you probably understand the humor of The Big Bang Theory and have the educational background to appreciate the show's scientific references. I, however, do not. I went to drama school. Twice. But I have great faith in you.",
      trivia:"The original pilot featured a completely different female lead. CBS requested a full retool — only Sheldon and Leonard survived to the second version.",
      fact:"Kaley Cuoco was not the original casting choice for Penny, but her chemistry read with Johnny Galecki sealed the deal immediately." },

    { ep:2,  title:"The Big Bran Hypothesis",
      vanity:"I like to think of myself as a decent human being. Then I watch the news and I'm reminded that 'decent' is a relative term. So I've given up watching the news and now watch cooking shows instead. The soufflés never lie.",
      trivia:"This episode features the first time Sheldon attempts to clean Penny's apartment — a character trait that would define his social absurdity for twelve seasons.",
      fact:"Jim Parsons reportedly improvised several of Sheldon's cleaning complaints during the table read. Many made it into the final broadcast cut." },

    { ep:3,  title:"The Fuzzy Boots Corollary",
      vanity:"I had a thought. Then it left. I tried to get it back but it had moved on without leaving a forwarding address. I've decided to be okay with that. The thought, wherever it is, is probably happier.",
      trivia:"Leonard's awkward date subplot was partly inspired by showrunner Bill Prady's own dating misadventures from his twenties.",
      fact:"The word 'corollary' appearing in episode titles was Chuck Lorre's deliberate nod to the show's scientific vocabulary from the very first season." },

    { ep:4,  title:"The Luminous Fish Effect",
      vanity:"When I was a boy, I believed I could fly. I was wrong about that. I was also wrong about Santa, the Tooth Fairy, and the reliability of public transportation. But I still believe in luminous fish.",
      trivia:"Mary Cooper's first appearance, played by Laurie Metcalf, tested so well that producers immediately wrote her into additional episodes.",
      fact:"Bioluminescent gene splicing — the science behind Sheldon's luminous fish — was active research when this episode aired. The show's consultant confirmed its plausibility." },

    { ep:5,  title:"The Hamburger Postulate",
      vanity:"There's a theorem in physics stating that the more accurately you measure a particle's position, the less accurately you can measure its momentum. I believe the same applies to relationships.",
      trivia:"Leslie Winkle was originally envisioned as a larger recurring character, but scheduling conflicts with Sara Gilbert limited her eventual appearances.",
      fact:"The Cheesecake Factory set was built after producers consulted directly with the restaurant chain — who were delighted by the association." },

    { ep:6,  title:"The Middle Earth Paradigm",
      vanity:"Halloween has always troubled me. Not because of the candy, not because of the costumes, but because somewhere, somehow, actual evil exists in the world and it isn't wearing a mask. The mask would at least be honest.",
      trivia:"The Halloween costumes were largely chosen by the cast themselves. Jim Parsons specifically requested the Doppler Effect costume.",
      fact:"Sheldon's Doppler Effect costume — with sound-wave stripes compressed on one side — is so accurate that physics professors have used photos of it as a teaching aid." },

    { ep:7,  title:"The Dumpling Paradox",
      vanity:"A paradox: I need money to buy things. I need things to be happy. Happiness requires neither money nor things. Therefore, I need nothing but want everything. Welcome to capitalism.",
      trivia:"Howard's Wii tennis subplot was inspired by games played in the writers' room during lunch breaks — already causing arguments before it became a script.",
      fact:"The production team ordered real Chinese food on set so frequently it became an unofficial tradition that outlasted multiple showrunner changes." },

    { ep:8,  title:"The Grasshopper Experiment",
      vanity:"My grandmother once told me: if you can't say something nice, say something ambiguous. I've been misquoting Einstein ever since. It's working out about as well as you'd expect.",
      trivia:"Raj's selective mutism around women was a late addition — originally he was simply described as shy in the series bible.",
      fact:"The Grasshopper cocktail Howard makes is a real vintage drink — crème de menthe, crème de cacao, and cream. Its sales spiked briefly after this episode aired." },

    { ep:9,  title:"The Cooper-Hofstadter Polarization",
      vanity:"I used to argue with people on the internet. Then I got a life. Then I lost it and went back to arguing with people on the internet. This vanity card is essentially what that looks like in print.",
      trivia:"Sheldon and Leonard's argument was written in a single day — the writers found the dynamic so natural it practically wrote itself from the first pitch.",
      fact:"The physics conference presentation they argue over references real-world disputes common in theoretical physics departments at major universities." },

    { ep:10, title:"The Loobenfeld Decay",
      vanity:"Lying is wrong. I know this because I learned it in Sunday School, from my therapist, and by watching politicians get caught. Yet somehow, the elaborate lie is always more entertaining than the truth.",
      trivia:"The intricate fake-cousin lie was inspired by real awkward social situations several writers had personally experienced.",
      fact:"The name 'Loobenfeld' was chosen because it sounds like a plausible surname without being one. The writers' room reportedly spent 20 minutes on it." },

    { ep:11, title:"The Pancake Batter Anomaly",
      vanity:"Sick people shouldn't be around other people. They should stay home, watch TV, eat soup, and feel sorry for themselves. This is not medical advice. The soup part, however, is non-negotiable.",
      trivia:"Sheldon's sick routine — including Soft Kitty — was voted one of the top 5 most memorable Season 1 moments in a CBS audience poll.",
      fact:"'Soft Kitty' is a real English nursery rhyme. The show licensed it after discovering it was still under copyright — which almost didn't happen in time for broadcast." },

    { ep:12, title:"The Jerusalem Duality",
      vanity:"I believe in the goodness of people. I also believe in the six-foot rule, hand sanitizer, and never making eye contact on public transportation. We contain multitudes.",
      trivia:"The teenage prodigy Dennis Kim was introduced as a potential series foil for Sheldon, but test audiences found the dynamic too repetitive.",
      fact:"Caltech's admissions office reportedly received a measurable uptick in enquiries after this episode aired. The school declined to comment publicly." },

    { ep:13, title:"The Bat Jar Conjecture",
      vanity:"Competition brings out the best in products and the worst in people. I know this from playing Trivial Pursuit with my family. No one speaks to Uncle Gerald anymore.",
      trivia:"The Physics Bowl competition was modeled on real collegiate academic decathlons. Every question used on screen was vetted by the show's UCLA physics consultant.",
      fact:"Simon Helberg holds the unofficial record for most flubbed lines in a single TBBT episode — reportedly set during the Physics Bowl rapid-fire round." },

    { ep:14, title:"The Nerdvana Annihilation",
      vanity:"I collect nothing. I own nothing. This is the result of three ex-wives and a gambling problem I no longer have but am still paying for. Emotionally and financially.",
      trivia:"The full-size time machine replica was built specifically for this episode at a cost of over $8,000 — a significant single-prop budget for a first-season comedy.",
      fact:"The time machine is based on George Pal's 1960 adaptation of H.G. Wells. Licensed replicas sell for thousands in the collector market." },

    { ep:15, title:"The Pork Chop Indeterminacy",
      vanity:"Sisters are nature's way of reminding you that you are not, and never were, the favorite. This appears true in most families and, apparently, in theoretical physics families too.",
      trivia:"Missy Cooper was conceived as a thought experiment: who might Sheldon be without his intellect? The writers found this question endlessly productive.",
      fact:"Courtney Henggeler, who plays Missy, returned in later seasons. She has credited Jim Parsons with coaching her on Sheldon's rhythms between takes." },

    { ep:16, title:"The Peanut Reaction",
      vanity:"Birthdays are a time to reflect on the passage of time. Or to drink. I've found that the latter makes the former considerably easier to endure. Happy birthday to whoever is having one.",
      trivia:"Howard's severe peanut allergy was written specifically to give Simon Helberg a physical comedy showcase in a hospital setting.",
      fact:"Writers considered making Leonard's birthday fall on Pi Day (March 14) but decided it was too on-the-nose even for a show that lives on on-the-nose jokes." },

    { ep:17, title:"The Tangerine Factor",
      vanity:"I once tried to understand string theory. I ended up understanding that I didn't understand string theory. This felt like progress. I've been operating on this principle ever since.",
      trivia:"The Season 1 finale's central moment — Leonard asking Penny on a date — was originally planned as a mid-season event. Network pressure moved it to the finale.",
      fact:"Penny's line 'I'm a Sagittarius' in response to Leonard's nervous rambling was entirely ad-libbed by Kaley Cuoco at the table read and kept for broadcast." }
  ],

  2: [
    { ep:1,  title:"The Bad Fish Paradigm",
      vanity:"Change is inevitable, except from a vending machine. I once spent forty minutes trying to get a bag of pretzels from a vending machine. The pretzels won. I have not eaten pretzels since.",
      trivia:"The writers invented the 'bad fish paradigm' as a plausible-sounding physics concept — and later received emails from physics students requesting the citation.",
      fact:"Season 2 added a laugh-track calibration pass specifically for the Penny storyline. Test audiences found her more sympathetic than expected, which changed the editing rhythm." },

    { ep:2,  title:"The Codpiece Topology",
      vanity:"Topology is the branch of mathematics concerned with properties of space preserved under continuous deformation. I am concerned with the properties of my couch. I have named the best corner 'The Spot.'",
      trivia:"This episode firmly established Sheldon's Spot as a quasi-sacred object. The same couch model was maintained — through three physical replacements — for all 12 seasons.",
      fact:"The couch was replaced three times due to wear but always matched the exact original dimensions and color. The prop department kept meticulous records of every detail." },

    { ep:3,  title:"The Barbarian Sublimation",
      vanity:"Video games are a distraction from real life. Real life is a distraction from video games. I have not yet determined which is the actual simulation. Both seem equally implausible on most Tuesdays.",
      trivia:"Penny's Age of Conan addiction was developed using real MMO addiction research. The game company was contacted for permission and agreed enthusiastically.",
      fact:"Age of Conan saw a measurable spike in downloads and sign-ups the week after this episode aired — an unplanned and unpaid marketing campaign." },

    { ep:4,  title:"The Griffin Equivalency",
      vanity:"Fame is a strange thing. One day you're nobody. The next you're on a magazine cover. The day after that, people are mispronouncing your name on television. I find this deeply relatable.",
      trivia:"Raj's People magazine moment emerged from a writers' room debate about what kind of sudden fame would be most absurd for a theoretical physicist.",
      fact:"Kunal Nayyar has called this one of his favorite episodes because it let him play a fully self-absorbed version of Raj — a mode the character rarely gets to inhabit." },

    { ep:5,  title:"The Euclid Alternative",
      vanity:"Driving is a privilege, not a right. I know this because the State of California told me so after they took mine away. Three times. The details are sealed. The shame is not.",
      trivia:"Sheldon's driving test failure was based on a true story from a crew member — who shared it in the writers' room and watched it become a script in real time.",
      fact:"Jim Parsons genuinely does not drive in real life. Many viewers assumed this episode was biographical. The truth is more complicated and involves parallel parking." },

    { ep:6,  title:"The Cooper-Nowitzki Theorem",
      vanity:"Obsessive fans are a double-edged sword. On one side, they remember everything you've ever done. On the other side, they remember everything you've ever done. I find this exhausting.",
      trivia:"Ramona Nowitzki was designed as a dark mirror of audience obsession with Sheldon — commentary the writers enjoyed smuggling into a broad comedy episode.",
      fact:"The theorem name uses a convention common in real physics. A consulting physicist confirmed it could plausibly exist as an actual citation." },

    { ep:7,  title:"The Panty Piñata Polarization",
      vanity:"Rules are important. Rules create order. Order creates civilization. Civilization creates taxes. Taxes pay for roads. Roads bring strangers to your door. Perhaps fewer rules would be fine.",
      trivia:"This episode marks the first time Sheldon officially bans Penny from the apartment — a power dynamic that evolved meaningfully across all subsequent seasons.",
      fact:"America's Next Top Model's production company cooperated with this episode after producers reached out. They were already fans of the show's pop-culture awareness." },

    { ep:8,  title:"The Lizard-Spock Expansion",
      vanity:"Rock Paper Scissors is a fine game. But it lacks nuance. In real life, lizard always poisons Spock and Spock always vaporizes scissors. I trust the metaphor is obvious.",
      trivia:"Rock-Paper-Scissors-Lizard-Spock was invented by Sam Kass and Karen Bryla in 2005. The writers found it online and contacted them personally for permission.",
      fact:"This episode made the game internationally famous. Sam Kass has said being featured on TBBT was 'surreal' and he still gets recognized for it at conventions." },

    { ep:9,  title:"The White Asparagus Triangulation",
      vanity:"Triangles are the strongest geometric shape. I have been told this applies to relationships as well. I find this claim structurally flawed, emotionally exhausting, and yet somehow accurate.",
      trivia:"Stephanie Barnett scored strongly with test audiences as a love interest for Leonard — but producers felt her presence complicated the longer Penny arc.",
      fact:"White asparagus, referenced in the title, is a prized delicacy in Germany and the Netherlands — a subtle European sophistication joke embedded where most viewers wouldn't notice." },

    { ep:10, title:"The Vartabedian Conundrum",
      vanity:"There is a point in every relationship where you realize the other person has moved in without officially moving in. Their toothbrush appears. Then their opinions. Then their feelings.",
      trivia:"The unofficial cohabitation storyline was inspired by modern relationship studies a writer had read in a sociology journal and pitched without expecting it to land.",
      fact:"The name 'Vartabedian' is an Armenian surname included as an in-joke for a colleague. The writing staff spent a suspiciously long time settling on it." },

    { ep:11, title:"The Bath Item Gift Hypothesis",
      vanity:"Gift giving reveals everything about a person. The too-small gift says 'I thought of you briefly.' The too-large gift says 'I want something.' The perfect gift says 'I was listening.'",
      trivia:"Penny's Spock-signed card leads to Sheldon's famous multi-hug — rated by fans in multiple polls as one of the top 10 moments in the entire series.",
      fact:"Leonard Nimoy agreed to sign the card prop without appearing on screen. He later said he found Sheldon's reaction 'deeply touching and hilarious.'" },

    { ep:12, title:"The Killer Robot Instability",
      vanity:"Robots are coming for our jobs. I have decided to get ahead of this by behaving like a robot now. So far no one has noticed the difference. This is either encouraging or deeply concerning.",
      trivia:"The fighting robot M.O.N.T.E. was built by the prop department with help from a real robotics engineer brought on as a technical consultant.",
      fact:"Robot combat competitions like the one depicted have been running since 2000. BattleBots remains active internationally with a passionate engineering fan community." },

    { ep:13, title:"The Friendship Algorithm",
      vanity:"Friendship cannot be reduced to an algorithm. Trust me, I tried. The output kept returning: Error — insufficient data on human emotion. The irony is both obvious and personally devastating.",
      trivia:"Sheldon's friendship flowchart became a viral image — fans printed and framed it, and it was eventually sold as an official licensed poster.",
      fact:"A computer science professor used Sheldon's actual algorithm as a classroom example of overly literal programming logic. Students found it more accurate than expected." },

    { ep:14, title:"The Financial Permeability",
      vanity:"Money is neither good nor evil. It is a tool — used by good people for good things, by bad people for bad things, and by me for online shopping at 2 a.m. I am neither good nor evil. I am awake.",
      trivia:"Sheldon offering Penny a loan was the writers' first careful exploration of his hidden capacity for genuine friendship beneath layers of social obliviousness.",
      fact:"The interest rate Sheldon quotes was calculated to be exactly Prime Rate minus 1%. The writers wanted the math to be defensible if challenged by viewers." },

    { ep:15, title:"The Maternal Capacitance",
      vanity:"Mothers are complicated. They give you life, then spend the rest of theirs making you feel guilty about it. I say this with love. My mother knows I say this with love. She will call me about it.",
      trivia:"Christine Baranski's Beverly Hofstadter was so well-received in this first appearance she was immediately upgraded from a one-episode role to a recurring character.",
      fact:"Beverly's cold analytical parenting is grounded in real attachment theory research — the writers read academic psychology papers to sharpen her dialogue to a knife's edge." },

    { ep:16, title:"The Cushion Saturation",
      vanity:"Cushions are more important than people think. They absorb impact. They provide comfort. They reveal character — a person's choice of cushion firmness says everything. I am a firm-to-medium person.",
      trivia:"The paintball confrontation between Sheldon and Howard was not in the original script — Simon Helberg suggested the escalation and it was written overnight.",
      fact:"The production team had to repaint the entire apartment set after the paint-stain gag — the first and only time a single prop caused full set restoration during Season 2." },

    { ep:17, title:"The Terminator Decoupling",
      vanity:"I once met someone famous on a train. They were shorter than expected. We did not speak. I have been telling people about this encounter for fifteen years. Fame is a very strange currency.",
      trivia:"Summer Glau's appearance was the most-requested celebrity cameo the show had received — the writers waited until they found an angle that maximized the nerd-tragedy factor.",
      fact:"The writers deliberately cast a sci-fi icon as 'the one who gets away' — reasoning that for their characters, this would be the highest possible form of romantic catastrophe." },

    { ep:18, title:"The Work Song Nanocluster",
      vanity:"Entrepreneurship is the American dream. The dream involves 18-hour days, sleep deprivation, alienating loved ones, and occasionally going viral. Penny's butterfly clips are more relatable than I expected.",
      trivia:"Sheldon's Penny Blossoms factory optimization is mathematically sound — a production consultant verified the logistics and inventory numbers used in the episode.",
      fact:"A fan launched a 'Penny Blossoms' hair clip shop on Etsy after this episode. It sold out in 48 hours and was featured in an Etsy blog post about TV-inspired crafts." },

    { ep:19, title:"The Dead Hooker Juxtaposition",
      vanity:"New neighbors are always interesting. They are either wonderful additions to your life or they are the subject of a true crime documentary ten years later. There is very little middle ground.",
      trivia:"Alicia's character was written to test female rivalry and solidarity dynamics — an early step toward the Penny-Bernadette-Amy friendship the show would later build.",
      fact:"The episode title generated more CBS viewer complaints than any other title card that season — entirely about the title itself, with very few complaints about the actual episode." },

    { ep:20, title:"The Hofstadter Isotope",
      vanity:"Comic books are literature. I will die on this hill. I will be buried on this hill with a first edition as my headstone, sealed in mylar, with an acid-free liner. This is in my will.",
      trivia:"The comic book store set was designed using real shops in Los Angeles that multiple writers frequented. Several props came from the writers' personal collections.",
      fact:"Stuart the comic book store owner was intended as a one-off background character. His reception in this episode was so strong that producers made him a series regular." },

    { ep:21, title:"The Vegas Renormalization",
      vanity:"Las Vegas is a monument to the triumph of hope over mathematics. I understand mathematics very well. I have visited Las Vegas once. I understand it considerably less now.",
      trivia:"The Vegas trip was filmed partly on location — rare for a show that typically shot everything on the Warner Bros. lot in Burbank, California.",
      fact:"Howard and Raj's Vegas conversations were largely improvised by Simon Helberg and Kunal Nayyar — producers kept cameras rolling during their between-takes banter." },

    { ep:22, title:"The Classified Materials Turbulence",
      vanity:"Confidentiality agreements are legally binding. I want to be absolutely clear about this. I am saying nothing about nothing. This vanity card is classified. Please return it to its original sender.",
      trivia:"Howard's space toilet design was the writers' first deliberate step toward his multi-season arc of actually going to space — a four-season setup.",
      fact:"The space toilet engineering challenge is grounded in real NASA problems — the agency has publicly discussed zero-gravity lavatory design difficulties multiple times." },

    { ep:23, title:"The Monopolar Expedition",
      vanity:"Antarctica is the coldest, most isolated continent on Earth. It is also the most honest. There are no pretensions at the South Pole. Only penguins and truth. Mostly extreme cold. But also truth.",
      trivia:"The North Pole expedition ending Season 2 was a complete production pivot — the original finale was scrapped and the Arctic storyline reverse-engineered from the cliffhanger.",
      fact:"Sheldon spontaneously singing 'I Will Always Love You' was Jim Parsons's idea in rehearsal — so unexpected and perfect it became the emotional capstone of the entire season." }
  ],

  3: [
    { ep:1,  title:"The Electric Can Opener Fluctuation",
      vanity:"The road to hell is paved with good intentions and non-functional can openers. I know this from personal experience. It involves a power outage, a can of beans, and a very long night. I will not elaborate.",
      trivia:"The Season 3 premiere resolved a summer-long fan mystery. Writers received unprecedented mail volume about the North Pole data-falsification cliffhanger.",
      fact:"The electric can opener used as the central plot device had previously appeared as a background prop in three other Warner Bros. productions. The prop department tracked this." },

    { ep:2,  title:"The Jiminy Conjecture",
      vanity:"Crickets are nature's metronome. Their chirping rate correlates with temperature — a phenomenon known as Dolbear's Law, established in 1897. I find this fact more romantic than most love songs I have heard.",
      trivia:"Dolbear's Law is real. The writers used it as a springboard precisely because it's exactly the kind of obscure fact Sheldon would weaponize in a social argument.",
      fact:"An entomologist was brought to set as a consultant to ensure the cricket species, behavior, and temperature formulas depicted were scientifically accurate." },

    { ep:3,  title:"The Gothowitz Deviation",
      vanity:"Behavioral modification is a real and documented science. Positive reinforcement works on pigeons, dogs, lab rats, and, it turns out, people who enjoy chocolate. I will let you draw your own conclusions.",
      trivia:"Sheldon's chocolate-based conditioning of Penny directly references B.F. Skinner's operant conditioning experiments — cited in the episode outline.",
      fact:"Kaley Cuoco has said she genuinely loves the chocolates used in the scene and ate far more than intended. There were documented continuity issues as a result." },

    { ep:4,  title:"The Pirate Solution",
      vanity:"Pirates had a strict code. A clear, organized system governing their entirely chaotic lives. This is either deeply ironic or the most fundamentally human thing that has ever existed.",
      trivia:"Raj's visa problem was the writers' attempt to accurately depict the anxiety of immigrant scientists in H-1B dependent academic positions.",
      fact:"Kunal Nayyar researched actual H-1B visa regulations for this role and has said the storyline captured the emotional reality more accurately than he expected." },

    { ep:5,  title:"The Creepy Candy Coating Corollary",
      vanity:"I once played a card game that nearly ended a friendship. The game lasted eleven hours. No one spoke of it afterward. I still have the cards. They are in a fireproof safe. The friendship recovered. Mostly.",
      trivia:"Wil Wheaton's recurring villain persona was entirely his own pitch — he proposed it after a convention encounter and the writers loved its self-aware absurdity.",
      fact:"Wil Wheaton has called his TBBT villain role 'the most fun I've had acting in years' — partly because it let him commit fully to being the antagonist of his own public persona." },

    { ep:6,  title:"The Cornhusker Vortex",
      vanity:"Football is controlled violence governed by rules so complex they require a standing committee to interpret them in real time. In this way it is exactly like most family gatherings I have attended.",
      trivia:"Sheldon learning football to bond with Penny's friends was written by a writer who always felt exactly like Sheldon in sports-family situations.",
      fact:"The football playbook Sheldon studies was a real playbook donated by the UCLA athletic department — they were fans of the show and agreed to the prop loan immediately." },

    { ep:7,  title:"The Guitar Amplifier",
      vanity:"Music is mathematics made audible. Every note, chord, and progression is pure math. This should make music easier to understand. It does not. The mathematics, apparently, is not the difficult part.",
      trivia:"Howard's guitar playing became a more prominent character trait after Simon Helberg revealed his genuine musical talent during a between-takes jam session.",
      fact:"Simon Helberg is a formally trained pianist. His guitar playing required minimal coaching, and he frequently played for the cast and crew between takes throughout all 12 seasons." },

    { ep:8,  title:"The Adhesive Duck Deficiency",
      vanity:"Falling in the bathtub is one of the leading causes of domestic injury. I present this without judgment but with the strong recommendation that you purchase an adhesive safety duck immediately.",
      trivia:"The episode was designed to force genuine emotional intimacy between Penny and Sheldon — testing how far the non-romantic bond between them could be pushed.",
      fact:"The specific non-slip duck Sheldon buys was a real product at Target. The brand reportedly saw a 34% sales increase the week after the episode aired." },

    { ep:9,  title:"The Vengeance Formulation",
      vanity:"Revenge is a dish best served cold. I prefer mine at room temperature with a side of righteousness and a clear conscience. Room-temperature revenge, I have found, is still quite satisfying.",
      trivia:"Sheldon's helium balloon prank on Kripke is historically grounded — academic pranks have a long and storied tradition in physics departments at major research universities.",
      fact:"Barry Kripke's rhotacism was entirely John Ross Bowie's idea — he tested it in the audition on impulse, and producers immediately insisted it stay as a permanent character trait." },

    { ep:10, title:"The Gorilla Experiment",
      vanity:"Teaching someone something they don't care about is a special frustration. Teaching someone something they care about is a special joy. Teaching Penny physics is a special something that defies easy categorization.",
      trivia:"Sheldon's physics lesson for Penny required the most back-and-forth with science consultant David Saltzberg of any episode in the first three seasons.",
      fact:"David Saltzberg, the show's UCLA physics professor consultant, has publicly stated this episode required more revision passes than any other early episode to keep the science defensible." },

    { ep:11, title:"The Maternal Congruence",
      vanity:"The holidays bring out the best and worst in people. Mostly the worst. But occasionally, unexpectedly, in a quiet and moving moment — the best. Those moments are why we keep doing it every year.",
      trivia:"Beverly and Penny's unexpected drinking friendship was largely improvised in tone — the writers provided the bones, but Baranski and Cuoco built the warmth themselves.",
      fact:"The Beverly-Penny bonding scenes made most of the crew tear up during filming. The episode was praised for showing emotional intelligence through two characters who logically shouldn't connect." },

    { ep:12, title:"The Psychic Vortex",
      vanity:"Psychics are not real. This is a scientific fact supported by extensive peer-reviewed research. And yet. There is that one time your grandmother said something and it came true. Science has no comment on grandmothers.",
      trivia:"Sheldon's fury about psychics while being socially forced to engage with one was one of Jim Parsons's stated favorite storylines — cited in multiple press interviews.",
      fact:"The actress playing the psychic is a genuine skeptic and stage magician in real life. She and Jim Parsons reportedly had an immediate rapport and agreed on everything." },

    { ep:13, title:"The Bozeman Reaction",
      vanity:"Home is where the heart is. Home is also where the wifi is. When these two things align, you have found your people. When they diverge, you find yourself seriously considering a move to Montana.",
      trivia:"Sheldon's attempted relocation was the writers' most daring cold-open gambit at that point — deliberately presented as unresolvable before the B-story comedic mechanics pulled it back.",
      fact:"Bozeman, Montana experienced a genuine tourism bump following this episode. The city council sent the production a thank-you letter." },

    { ep:14, title:"The Einstein Approximation",
      vanity:"Einstein developed his greatest theories while working at a patent office. I find this either inspiring or terrifying depending on my mood. The universe has a sense of humor. I am still determining if this is good news.",
      trivia:"Sheldon working in a ball pit was inspired by tech company creative office designs — the writers had been reading about Google's campus environment philosophy.",
      fact:"The ball pit weighed over 400 lbs when filled — the production team had to reinforce the stage floor beneath it. Jim Parsons spent approximately a full working day inside it." },

    { ep:15, title:"The Large Hadron Collision",
      vanity:"Valentine's Day is an artificial construct designed to commodify affection and sell chocolate. The fact that I look forward to it regardless is a contradiction I have chosen to accept and live with peacefully.",
      trivia:"Sheldon choosing Leonard over Penny for the CERN trip sparked one of the earliest major fan debates about Sheldon's social development as a character.",
      fact:"CERN granted the show permission to use their name and logo — a point of genuine pride for the production, as CERN rarely extends such permissions to entertainment." },

    { ep:16, title:"The Excelsior Acquisition",
      vanity:"Traffic court is democracy's most honest institution. You sit. You wait. You are informed you are guilty. Then you pay and you leave. Everyone pretends this was fair. I find it clarifying.",
      trivia:"Stan Lee's cameo was arranged through series producer Bill Prady, who had a pre-existing relationship with Marvel Comics through earlier industry work.",
      fact:"Stan Lee loved the script and asked to improvise additional lines. Several of his improvisations made it into the final broadcast cut of the episode." },

    { ep:17, title:"The Precious Fragmentation",
      vanity:"Objects accumulate meaning over time. A ring is just a ring until it isn't. Then it becomes everything. And then someone lists it on eBay and it becomes, once again, just a ring. Objects are complicated.",
      trivia:"The One Ring fight sequence spoofed specific Peter Jackson cinematography — the camera operators studied exact shots from the films to faithfully recreate the visual language.",
      fact:"The prop One Ring was a licensed replica. The production initially sourced a non-licensed version until the writing team pushed for authenticity and rewrote the budget request." },

    { ep:18, title:"The Pants Alternative",
      vanity:"Public speaking is feared more than death by most people surveyed. I understand this completely. Death, at least, requires no preparation. You simply don't show up and no one is even slightly surprised.",
      trivia:"Sheldon's drunk award speech was a showpiece Jim Parsons had quietly lobbied for since Season 1 — he spent weeks preparing specific physical comedy beats for the scene.",
      fact:"Jim Parsons won his first Emmy Award the same year this episode aired. His ability to do broad physical comedy while maintaining Sheldon's internal logic was frequently cited by voters." },

    { ep:19, title:"The Wheaton Recurrence",
      vanity:"Bowling is a contemplative sport. You stand at the edge of the lane, you release the ball into the void, and you watch what happens. The pins either fall or they don't. This is essentially everything.",
      trivia:"Wil Wheaton's 'sad dead grandmother' tactical lie was entirely his own idea — he pitched the specific deception and the writers built the entire episode around it.",
      fact:"Wil Wheaton has confirmed the tactic was used on him by a real friend in a friendly competition. He found it so diabolical he felt it deserved to be immortalized on television." },

    { ep:20, title:"The Spaghetti Catalyst",
      vanity:"Romantic breakups between friends require everyone to choose sides. Or pretend they aren't. Or secretly choose a side while pretending neutrality. Pasta, however, is always Switzerland. Always.",
      trivia:"Sheldon secretly dining with both post-breakup Leonard and Penny was a structural exercise — the same basic emotional scene played twice with completely opposite tonal weight.",
      fact:"The spaghetti was prepared fresh for every take by the lot catering team. Jim Parsons ate considerably more than planned and reportedly felt unwell before the day's final scene." },

    { ep:21, title:"The Plimpton Stimulation",
      vanity:"Houseguests, like fish, begin to smell after three days. A brilliant, socially disruptive houseguest who upends your entire social order smells considerably faster. This is not metaphor. This is physics.",
      trivia:"Dr. Plimpton was a deliberate challenge to gender dynamics — a woman scientist who pursued what she wanted without social shame, functioning as a direct mirror of the male characters.",
      fact:"The actress playing Dr. Plimpton held a real advanced degree in a science-adjacent field — a happy coincidence the producers discovered during the casting process." },

    { ep:22, title:"The Staircase Implementation",
      vanity:"Origin stories matter. We understand the present by understanding the past. Or we spend years explaining ourselves to strangers on elevators. The stairs keep everyone honest and physically fit.",
      trivia:"This flashback episode finally revealed why the elevator had been broken for years — one of the most anticipated pieces of backstory in the entire series.",
      fact:"The broken elevator was maintained with such specific wear patterns across all 12 seasons that the prop team treated it as an active character. Visitors were asked not to touch it." },

    { ep:23, title:"The Lunar Excitation",
      vanity:"The moon has inspired poets, lunatics, navigators, and scientists for millennia. It also helped us understand orbital mechanics, tidal forces, and apparently what people will say to strangers on the internet.",
      trivia:"The Season 3 finale introduces Amy Farrah Fowler — a character concept the writers had been developing for over a year before beginning the casting search.",
      fact:"Mayim Bialik was cast after an extensive search. Producers needed someone who could intellectually match Jim Parsons while bringing a dynamic the show had never seen." }
  ]
};

// ── Generic episode titles for seasons 4–12 ──────────────────

var GENERIC_TITLES = {
  4:  ["The Robotic Manipulation","The Cruciferous Vegetable Amplification","The Zazzy Substitution","The Hot Troll Deviation","The Desperation Emanation","The Irish Pub Formulation","The Apology Insufficiency","The 21-Second Excitation","The Boyfriend Complexity","The Alien Parasite Hypothesis","The Justice League Recombination","The Bus Pants Utilization","The Love Car Displacement","The Thespian Catalyst","The Benefactor Factor","The Cohabitation Formulation","The Toast Derivation","The Prestidigitation Approximation","The Zarnecki Incursion","The Herb Garden Germination","The Agreement Dissection","The Wildebeest Implementation","The Engagement Reaction","The Roommate Transmogrification"],
  5:  ["The Skank Reflex Analysis","The Infestation Hypothesis","The Pulled Groin Extrapolation","The Wiggly Finger Catalyst","The Russian Rocket Reaction","The Rhinitis Revelation","The Good Guy Fluctuation","The Isolation Permutation","The Ornithophobia Diffusion","The Flaming Spittoon Acquisition","The Speckerman Recurrence","The Shiny Trinket Maneuver","The Recombination Hypothesis","The Beta Test Initiation","The Friendship Contraction","The Vacation Solution","The Rothman Disintegration","The Werewolf Transformation","The Weekend Vortex","The Transporter Malfunction","The Hawking Excitation","The Stag Convergence","The Launch Acceleration","The Countdown Reflection"],
  6:  ["The Date Night Variable","The Decoupling Fluctuation","The Higgs Boson Observation","The Re-Entry Minimization","The Holographic Excitation","The Extract Obliteration","The Habitation Configuration","The 43 Peculiarity","The Parking Spot Escalation","The Fish Guts Displacement","The Santa Simulation","The Egg Salad Equivalency","The Bakersfield Expedition","The Cooper/Kripke Inversion","The Spoiler Alert Segmentation","The Tangible Affection Proof","The Monster Isolation","The Contractual Obligation Implementation","The Closet Reconfiguration","The Tenure Turbulence","The Closure Alternative","The Proton Resurgence","The Love Spell Potential","The Bon Voyage Reaction"],
  7:  ["The Hofstadter Insufficiency","The Deception Verification","The Scavenger Vortex","The Raiders Minimization","The Workplace Proximity","The Romance Resonance","The Proton Displacement","The Itchy Brain Simulation","The Thanksgiving Decoupling","The Discovery Dissipation","The Cooper Extraction","The Hesitation Ramification","The Occupation Recalibration","The Convention Conundrum","The Locomotive Manipulation","The Table Polarization","The Friendship Turbulence","The Mommy Observation","The Indecision Amalgamation","The Relationship Diremption","The Anything Can Happen Recurrence","The Proton Transmogrification","The Gorilla Dissolution","The Status Quo Combustion"],
  8:  ["The Locomotion Interruption","The Junior Professor Solution","The First Pitch Insufficiency","The Hook-Up Reverberation","The Focus Attenuation","The Expedition Approximation","The Misinterpretation Agitation","The Prom Equivalency","The Septum Deviation","The Champagne Reflection","The Clean Room Infiltration","The Space Probe Disintegration","The Anxiety Optimization","The Troll Manifestation","The Comic Book Store Regeneration","The Intimacy Acceleration","The Colonization Application","The Leftover Thermalization","The Skywalker Incursion","The Fortification Implementation","The Communication Deterioration","The Graduation Transmission","The Maternal Combustion","The Commitment Determination"],
  9:  ["The Matrimonial Momentum","The Separation Oscillation","The Bachelor Party Corrosion","The 2003 Approximation","The Perspiration Implementation","The Helium Insufficiency","The Spock Resonance","The Mystery Date Observation","The Platonic Permutation","The Earworm Reverberation","The Opening Night Excitation","The Sales Call Sublimation","The Empathy Optimization","The Meemaw Materialization","The Valentino Submergence","The Positive Negative Reaction","The Celebration Experimentation","The Application Deterioration","The Solder Excursion Diversion","The Big Bear Precipitation","The Viewing Party Combustion","The Fermentation Bifurcation","The Line Substitution Solution","The Convergence Convergence","The Conjugal Conjecture"],
  10: ["The Conjugal Conjecture","The Military Miniaturization","The Dependence Transcendence","The Cohabitation Experimentation","The Hot Tub Contamination","The Fetal Kick Catalyst","The Veracity Elasticity","The Brain Bowl Incubation","The Geology Elevation","The Property Division Collision","The Birthday Synchronicity","The Holiday Summation","The Romance Recalibration","The Emotion Detection Automation","The Locomotion Reverberation","The Allowance Evaporation","The Comic-Con Conundrum","The Escape Hatch Identification","The Collaboration Fluctuation","The Recollection Dissipation","The Separation Agitation","The Cognition Regeneration","The Gyroscopic Collapse","The Long Distance Dissonance"],
  11: ["The Proposal Proposal","The Retraction Reaction","The Relaxation Integration","The Explosion Implosion","The Collaboration Contamination","The Proton Regeneration","The Geology Methodology","The Tesla Recoil","The Citation Negation","The Confidence Erosion","The Celebration Reverberation","The Matrimonial Metric","The Solo Oscillation","The Neonatal Nomenclature","The Novelization Correlation","The Paintball Scattering","The Athenaeum Allocation","The Gates Excitation","The Tenant Disassociation","The Decision Reverberation","The Comet Polarization","The Monetary Insufficiency","The Sibling Realignment","The Bow Tie Asymmetry"],
  12: ["The Conjugal Configuration","The Wedding Gift Wormhole","The Procreation Calculation","The Tam Turbulence","The Planetarium Collision","The Consummation Deviation","The Grant Allocation Derivation","The Consummation Deficiency","The Citation Negation","The VCR Illumination","The Paintball Scattering","The Propagation Proposition","The Confirmation Polarization","The Meteorite Manifestation","The Donation Oscillation","The D & D Vortex","The Conference Valuation","The Laureate Accumulation","The Inspiration Deprivation","The Decision Reverberation","The Plagiarism Schism","The Maternal Conclusion","The Change Constant","The Stockholm Syndrome"]
};

// ── Fallback content pools for seasons 4–12 ──────────────────

var POOL_VANITY = [
  "I have been told that this vanity card is too long. I disagree. But I also don't control the font size. This is the nature of collaboration — someone else always controls the font size, and yet here we are.",
  "Sometimes the universe sends you a sign. Sometimes it sends you a bill. I have learned to appreciate the signs and vigorously dispute the bills. The universe has not responded to my disputes.",
  "It has come to my attention that some people read these cards seriously. Others photograph them. A few have memorized them. I am both deeply touched by this and somewhat concerned.",
  "My therapist says I use humor to avoid dealing with difficult emotions. I laughed. Then I cried. Then I wrote a vanity card about it. She says we're making progress.",
  "I write these cards for the same reason I write anything — because silence feels too final and words feel like keeping the lights on. Even at this font size. Even for one second.",
  "Thank you for pausing. Most people do not pause. The ones who do — the pausers — they're the interesting ones. I write these for them. I hope they are well.",
  "There is a theorem in human behavior stating the more closely you examine a moment of happiness, the faster it disappears. I believe this deeply. Please stop examining things and just enjoy the show.",
  "What you are reading right now is a kind of miracle. Not a large one. A very small miracle — the kind that happens at the end of television shows. Still. A miracle counts.",
  "The purpose of this card is uncertain. The origin is known. The future is unclear. This applies to most things I have encountered in life. This is, I have decided, fine.",
  "I once tried to write a simple vanity card. Four hours and seventeen drafts later, I had written this. Simplicity is apparently not my native language. I have made peace with that."
];

var POOL_TRIVIA = [
  "Chuck Lorre's vanity cards are displayed for only 1–2 seconds at the end of each episode — barely long enough to read the opening line, which is entirely by design.",
  "The show filmed at Warner Bros. Studios Stage 25 in Burbank, CA — one of the most historically significant soundstages in Hollywood.",
  "Jim Parsons holds a master's degree in Acting from the University of Houston. Sheldon's Texas roots were partly inspired by Parsons's own background.",
  "The Barenaked Ladies recorded the theme song in a single afternoon — largely completed in one take, with minimal overdubs.",
  "TBBT holds the record for most Emmy nominations ever received by a multi-camera sitcom, across multiple consecutive broadcast seasons.",
  "Johnny Galecki and Kaley Cuoco dated in real life from 2007 to 2009, keeping it secret from the full cast for nearly a year.",
  "Science consultant David Saltzberg, a particle physics professor at UCLA, reviewed every single script for scientific accuracy throughout the entire run.",
  "Bernadette's distinctive voice was inspired by Melissa Rauch's memory of a specific relative — it became one of the show's most recognizable audio signatures.",
  "Sheldon's 'Bazinga!' catchphrase was never planned — it emerged from a single episode joke and was developed into a full character trait due to audience response.",
  "The apartment number 4A changed subtly between certain seasons — eagle-eyed fans caught the inconsistency, which was eventually acknowledged by the production team."
];

var POOL_FACTS = [
  "'Soft Kitty' is a real nursery rhyme called 'Warm Kitty' traced to a 1937 songbook. The show licensed it after discovering it was still under copyright — almost too late.",
  "The whiteboard equations in the apartment are always real, peer-reviewed physics. The consulting physicist updates them every season to reflect current research.",
  "LEGO released an official Big Bang Theory set in 2015 — one of the most-voted LEGO Ideas submissions the company had ever received from the public.",
  "Mayim Bialik (Amy Farrah Fowler) holds a real PhD in neuroscience from UCLA — her character's expertise in neurobiology was no coincidence.",
  "The show's laugh track is live studio audience laughter — not canned — recorded in front of 200+ audience members at each weekly taping.",
  "Chuck Lorre has written thousands of vanity cards across all his shows. He maintains a complete online archive and has published a printed collection.",
  "The Cheesecake Factory scenes were often filmed in extended marathon sessions — the cast would do 30+ takes per scene to get ambient crowd noise right.",
  "The original pilot tested so poorly with focus groups that only Sheldon and Leonard survived to the second version. Every other character was recast or eliminated.",
  "Sheldon's spot on the couch was marked with a physical indicator on the set floor. Even off-camera, visitors and day players were asked not to sit in it.",
  "The theme song references real cosmological milestones — the Barenaked Ladies incorporated actual events from the history of the universe at the writers' request."
];

// ── Fan art (public domain / CC-licensed) ────────────────────

var ART = [
  { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_Arch.jpg/1280px-Milky_Way_Arch.jpg",          credit:"Milky Way Arch — ESO / B. Tafreshi (CC BY 4.0)" },
  { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/640px-Hydrogen_Density_Plots.png", credit:"Hydrogen Orbital Plots — Wikimedia Commons (Public Domain)" },
  { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HST-SM4.jpeg/800px-HST-SM4.jpeg",                      credit:"Hubble Space Telescope — NASA / ESA (Public Domain)" },
  { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Double_slit_x-ray_simulation_monochromatic_blue-white.png/640px-Double_slit_x-ray_simulation_monochromatic_blue-white.png", credit:"Double Slit Diffraction — Wikimedia Commons (Public Domain)" },
  { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Feynmann_Diagram_Gluon_Radiation.svg/640px-Feynmann_Diagram_Gluon_Radiation.svg.png", credit:"Feynman Diagram — Wikimedia Commons (Public Domain)" },
  { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/600px-Crab_Nebula.jpg",                credit:"Crab Nebula — NASA / ESA / Hubble (Public Domain)" },
  { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/600px-Hubble_ultra_deep_field.jpg", credit:"Hubble Ultra Deep Field — NASA / ESA (Public Domain)" }
];

var BANNERS = {
  1:  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_Arch.jpg/1280px-Milky_Way_Arch.jpg",
  2:  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/800px-Hydrogen_Density_Plots.png",
  3:  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HST-SM4.jpeg/800px-HST-SM4.jpeg",
  4:  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/600px-Crab_Nebula.jpg",
  5:  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/600px-Hubble_ultra_deep_field.jpg",
  6:  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Double_slit_x-ray_simulation_monochromatic_blue-white.png/640px-Double_slit_x-ray_simulation_monochromatic_blue-white.png",
  7:  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Feynmann_Diagram_Gluon_Radiation.svg/640px-Feynmann_Diagram_Gluon_Radiation.svg.png",
  8:  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_Arch.jpg/1280px-Milky_Way_Arch.jpg",
  9:  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/800px-Hydrogen_Density_Plots.png",
  10: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/600px-Crab_Nebula.jpg",
  11: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/600px-Hubble_ultra_deep_field.jpg",
  12: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HST-SM4.jpeg/800px-HST-SM4.jpeg"
};

// ── Utilities ─────────────────────────────────────────────────

function pick(arr)  { return arr[Math.floor(Math.random() * arr.length)]; }
function pad(n)     { return String(n).padStart(2, '0'); }
function show(id, delay) {
  setTimeout(function() {
    var el = document.getElementById(id);
    if (el) el.classList.add('show');
  }, delay);
}

// ── Event: Season changed ─────────────────────────────────────

document.getElementById('season-select').addEventListener('change', function() {
  var season = parseInt(this.value) || 0;
  var epSel  = document.getElementById('episode-select');
  var content = document.getElementById('content');

  epSel.innerHTML = '<option value="">— Select Episode —</option>';
  epSel.disabled  = !season;

  if (!season) {
    content.innerHTML = '<div class="placeholder"><span class="float-icon">🔭</span><h2>Pick a Season &amp; Episode</h2><p>Vanity cards, trivia &amp; fun facts await</p></div>';
    return;
  }

  content.innerHTML = '<div class="placeholder"><span class="float-icon">🌌</span><h2>Now pick an episode</h2><p>Season ' + season + ' ready</p></div>';

  // Update banner
  var bi = document.getElementById('banner-img');
  if (bi) bi.src = BANNERS[season] || BANNERS[1];
  var bt = document.getElementById('banner-title');
  if (bt) bt.textContent = 'Season ' + season + ' — Big Bang Theory Fan Archive';

  // Populate episodes
  var list = EPISODES[season]
    ? EPISODES[season].map(function(e) { return { ep: e.ep, title: e.title }; })
    : (GENERIC_TITLES[season] || []).map(function(t, i) { return { ep: i + 1, title: t }; });

  list.forEach(function(e) {
    var opt = document.createElement('option');
    opt.value = e.ep;
    opt.textContent = e.ep + '. ' + e.title;
    epSel.appendChild(opt);
  });
});

// ── Event: Episode changed ────────────────────────────────────

document.getElementById('episode-select').addEventListener('change', function() {
  var season = parseInt(document.getElementById('season-select').value) || 0;
  var epNum  = parseInt(this.value) || 0;
  if (!season || !epNum) return;

  // Resolve data
  var d = null;
  if (EPISODES[season]) {
    d = EPISODES[season].find(function(e) { return e.ep === epNum; });
  }

  var title, vanity, trivia, fact;
  if (d) {
    title  = d.title;
    vanity = d.vanity;
    trivia = d.trivia;
    fact   = d.fact;
  } else {
    title  = (GENERIC_TITLES[season] || [])[epNum - 1] || ('Episode ' + epNum);
    vanity = pick(POOL_VANITY);
    trivia = pick(POOL_TRIVIA);
    fact   = pick(POOL_FACTS);
  }

  var art = pick(ART);

  // Render
  document.getElementById('content').innerHTML =
    '<div class="ep-header fade d1" id="eph">' +
      '<div class="ep-title">' + title + '</div>' +
      '<span class="ep-badge">S' + pad(season) + ' &middot; E' + pad(epNum) + '</span>' +
    '</div>' +
    '<div class="cards-grid">' +
      '<div class="card card-vanity fade d2" id="c1">' +
        '<span class="card-icon">&#128220;</span>' +
        '<div class="card-label">Chuck Lorre Vanity Card</div>' +
        '<div class="vanity-text">' + vanity + '</div>' +
      '</div>' +
      '<div class="card card-art fade d3" id="c2">' +
        '<span class="card-icon">&#127912;</span>' +
        '<div class="card-label">Episode Fan Art</div>' +
        '<img class="art-img" src="' + art.url + '" alt="Fan art" onerror="this.style.display=\'none\'">' +
        '<div class="art-credit">' + art.credit + '</div>' +
      '</div>' +
      '<div class="card card-trivia span-2 fade d4" id="c3">' +
        '<span class="card-icon">&#129514;</span>' +
        '<div class="card-label">Episode Trivia</div>' +
        '<div class="card-body">' + trivia + '</div>' +
      '</div>' +
      '<div class="card card-fact span-2 fade d5" id="c4">' +
        '<span class="card-icon">&#9889;</span>' +
        '<div class="card-label">Fun Fact</div>' +
        '<div class="card-body">' + fact + '</div>' +
      '</div>' +
    '</div>';

  // Trigger animations
  requestAnimationFrame(function() {
    show('eph', 0);
    show('c1',  60);
    show('c2',  120);
    show('c3',  180);
    show('c4',  240);
  });
});
