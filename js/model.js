app.service('corporations', function($http) {
  this.information = function(){
    return [
          {
            id: 1,
            title: 'MindClean',
            description: 'This post-modernist ad agency uses the latest in artifical intelligence to develop highly-targeted messages to reach consumers. They are experts at manipulating culture and human emotion to convince people to do horrible things. The only humans MindClean hires are "data scientists"; all of their other employees are algorithms.',
            industries: "Public Relations, Advertising, Entertainment",
            pro_quote: "[The noises from video compression] are more beautiful to me than most things deliberately made by humans.--Loren Schmidt, Human Co-Founder",
            anti_quote: "MindClean's work is...decent. Not as good as a human, of course. But the corporations don't care about quality. They care about cost. And a computer is much cheaper than a human.---Argyros Naevius, former journalist",
            favorite_policy: "Transperancy Mandate",
            alignment: "chaos"
          },
          {
            id: 2,
            title: 'Vanguard',
            description: "A left-wing organization dedicated to overthrowing capitalism and establishing a utopia based on Oligarchical Collectivism. To raise funds for its lofty goal, Vanguard sells its 'espionage' and 'security' services to the other corporations. Vanguard has been linked to many high-profile assassinations of corporate executives...all of them paid for by other corporate executives.",
            pro_quote: "Success doesn't come for free. You have to do whatever it takes to seize your moment.---Ernesto De La Cruz, Founder",
            anti_quote: "It is cliche to point out that the Vanguard leadership lives in skyscrapers and mansions while their employees are dirt-poor, expendable cannon fooder. But at least the Vanguard leadership recognizes the irony and pretends to cry about it.---Argyros Naevius, former journalist",
            favorite_policy: "E-Democracy",
            industries: "Corporate Espionage, Military",
            alignment: "law"
          },
          {
            id: 3,
            title: 'Centaurs Incorporated',
            description: "Humans who have decided to 'upgrade' themselves by merging with their machines, turning into a weird hybrid of 'artifical intelligence' and 'natural intelligence'. They are the workforce that are responsible for manufacturing most of the goods that the other corporations repackage and sell to other people. They are strong advocates for uplifting other people to the 'next stage of human evolution', and will happily kidnap and brainwash those who refuses upliftment.",
            pro_quote: "I am unable to see why if AI becomes effective and productive it would result in anything other than an age of practical abundance.--friendsie, Vice-President of Marketing",
            anti_quote: "In the past, we humans used technology. Now, technology uses us, and is using us for some greater, unfathomable purpose.---Yamato Izz al-Din, former Centaur employee",
            favorite_policy: "Basic Income",
            industries: "Industrial Automation, Research and Development"
            alignment: "chaos"
          },
          {
            id: 4,
            title: "Baudrillard Associates",
            description: "An alliance of rogue financial traders and bankers who had given up pretending to comply with arbitrary government regulations and appeasing corrupt financial regulators. The white collar crime may be boring, but the pay is more than worth it. Currently the most popular corporation in the city, due to their reluctance to use violence to settle disputes.",
            industries: "Financial Services, Investment Banking, Accounting",
            anti_quote: "There is no evidence that the Baudrillard Associates even *exists*. Either the leadership has hidden themselves very well, or these bankers invented up the organization just to give themselves an excuse to do what they always wanted to do.---Tadeo Waldobert, Police Officer",
            pro_quote: "When the government treats the law as a pliable instrument to be used creatively, it tends to encourage citizens to treat it the same way. ... [The corporations] treated the law as a game to be played, a puzzle to be solved as aggressively as possible, rather than a moral obligation. THE JUSTICE DEPARTMENT DOES TOO.---Matt Levine, Senior Vice President of Public Relations",
            favorite_policy: "Deregulation",
            alignment: "chaos"
          },
          {
            id: 5,
            title: "PAGAD",
            description: "The 'People Against Gangsterism and Drugs' movement had its roots in the chaotic violence in 1990s South Africa. It has since spread throughout the world as an anti-globalization political force. Members of PAGAD use car bombings, intimidation, and extortion in its eternal crusade against corporate crime, in the hopes of bringing sanity to an often insane world. Despite its supposedly secular nature, PAGAD has attracted its fair share of religious zealots.",
            industries: "Security & Investigations, Law Enforcement",
            favorite_policy: "Vigilante Legalization",
            anti_quote: "They believe they can go against the law if it means ridding the area of a drug dealer or gangster. How are they any better than the criminals when they resort to criminal tactics?---John Davids, South African Civilian",
            pro_quote: "If you do not mobilise yourselves, no one will do it for you. Drugs and gangsterism is destroying our society and everyone is affected.---Haroun Orrie, PAGAD spokesperson",
            alignment: "law"
          },
          {
            id: 6,
            title: "Room 39",
            description: "A criminal organization that was founded in the late 1970s with explicit purpose of securing funding for the North Korean dictatorship, through the use of criminal activities such as drug smuggling and weapons trafficking.  After the fall of the North Korean dictatorship, Room 39 went 'legit' in return for legal immunity for its previous crimes. Room 39 is slowly and gradually adjusting to the capitalist system.",
            pro_quote: "Ideologies are like clothing; when one is worn out, it's time to buy a new one.---Ji-Hun Yeong-Ho, Room 39 agent",
            anti_quote: "It's a mockery of our laws that a criminal gang is able to freely reinvent themselves as a honorable corporation. And they probably haven't given up on the crime yet.---Argyros Naevius, former journalist",
            favorite_policy: "Slush Fund",
            industries: "Pharmaceuticals, Weapon Production",
            alignment: "chaos"
          },
          {
            id: 7,
            title: "Singularity LLC",
            description: "Radical political activists who (after being repeatedly disappointed at the failure of human politicans and regulators to solve problems) are attempting to build an Artifical General Intelligence that will control human society. They sometimes rent their experiments as 'consultants' to the other corporations to help raise revenue.",
            pro_quote: "AI doesn't have to be good to replace humans, it just has to be slightly less terrible than humans.---Dan Luu, Singularity LLC employee",
            anti_quote: "Humans *don't* agree on how to run our society! Why should we assume that humans can suddenly agree to build a computer system to run our society?---Bassam Petru, lawyer",
            favorite_policy: "Algorithmic Law",
            industries: "Consulting, Life Coaching",
            alignment: "law"
          },
          {
            id: 8,
            title: "VHEMT",
            description: "A radical environmentalist organization founded in the early 1990s by Les U. Knight, VHEMT stands for the 'Voluntary Human Extiniction Movement'. As society has grown more dystopian, many people have began supporting VHEMT as the best way to increase global  welfare, declaring that the death of humanity is the only sensible choice in a insensible world.",
            pro_quote: "Q: Is this another one of those suicide cults? A: Seems as if our entire industralized civilization is one big suicide cult. ... [V]oluntary human extiniction offers a healthy cure to humanity's collective death wish.---VHEMT Q&A",
            anti_quote: "The logic is as absurd as it's unassailable. Yes, indeed, if there are no more children, there will be no more child tragedies. Or child triumphs, for that matter, or much reason to think childless humanity will spend its dying days as serenely as Knight predicts. ---Brian Bethune, journalist",
            industries: "Environmental Services",
            alignment: "oblivion"
          },
          {
            id: 9,
            title: "Liberal Crime Squad"
            description: "A leftist terrorist group that previously wanted to establish an 'Elite Liberal Utopia'. The leadership soon realized that it would be far easier to plug people into a 'simulation' of an Elite Liberal utopia instead. They now adopt a policy of utter hedonism, and only leave the VR sims to raise funds and preach their agenda to the masses.",
            pro_quote: "Only by abandoning 'Conservative Reality' can humanity be awakened to its True Liberal Nature and be able to enjoy happy, productive lives.---Chris Horsa, Liberal Crime Squad Founder",
            anti_quote: "The LCS agents sleep soundly in their virtual pods, and dream of fighting their war against Conservative society. But I notice that they never really dream what happens after they win.---Leobwin Sansone, former LCS employee",
            industries: "Virtual Reality",
            alignment: "oblivion"
          },
          {
            id: 10,
            title: "Daemon Hunters",
            description: "Wackos and conspiracy theorists who believe that they are living in a computer simulation ('MMO') controlled by cruel daemons ('players'). These daemons regularly pay 'subscription fees' for the chance to beat up and cruelly torture 'NPCs' (us). The Demon Hunters seek to purge the daemonic element from human society, but have a hard time distingushing between the NPCs and the daemons.",
            pro_quote: "Friend or foe? Paranoia imperative. Galaxy purely casual, individualism is a statistical anomaly - Nada is an error. Trust Nada? Trust you?---Priest Entity Nada, CTO of Daemon Hunters",
            anti_quote: "If I was a daemon, the first thing I'd do is to create a faction to grief other daemons. Read between the lines.---Argyros Naevius, former journalist",
            alignment: "oblivion",
            industries: "Space Exploration, Food Production"
          },
          {
            id: 11,
            title: "Human Flesh Search Engine",
            description: "Established in the early 21st century as a loose-knit collection of Chinese vigilantes seeking to punish corruption and immorality through public shaming and doxxing, it has since absorbed other crowd-sourced intelligence gathering entities to become a major international force. The HFSE uses harrassment and death threats to push the vague and shifting views of the Internet mob, and tends to target both the strong and the weak fairly equally.",
            pro_quote: "Righteousness is one of the five virtues in the Confucian tradition. With the convenience of the internet, and in the case of non-responsive law, the righteous people took matters into their own hands.---Xujun Eberlein, Chinese-American writer",
            anti_quote: "The human-flesh search has unimaginable power. First it was a lot of phone calls every day. Then people painted red characters on his parents’ front door, which said things like, ‘You caused your wife’s suicide, so you should pay.’---Zhang Yanfeng, lawyer representing Wang Fei, a husband accused of cheating on his wife. Wang Fei went into hiding to evade the HFSE",
            alignment: "law",
            industries: "Social Media, Internet Activism"
          },
          {
            id: 12,
            title: "Death Leopard",
            description: "An organization of thrill-seekers and nihlists who believe in spreading disorder and mayhem through covert manipulation and overt violence. To them, destruction is a beautiful form of conceptual art, and that the world is just a canvas to paint their wildest dreams. They fund their activities by 'shorting' companies that they then gleefully sabotage.",
            pro_quote: "The greatest crime of human civilization is that it lies about its barbarity. It should instead embrace and rejoice in it.---Death Leopard Manifesto",
            anti_quote: "Their activities are closely but clandestinely monitored by investment analysts and securities brokers, who plant operatives in the group for the investment tips. It is unknown whether the group has any *other* members.---Ray Dillinger, investment analyst",
            alignment: "oblivion",
            industries: "Mind Control, Education, Stock Manipulation"
          }
        ]
  }
})

//Alignment:
//Law - dystopian order, Orwellian dictatorship [Normally associated with the left-wing] (Higher social stability)
//Chaos - dystopian disorder, your normal cyberpunk setting [Normally associated with the right-wing] (Higher economic growth)
//Oblivion - they want to transform humanity...but their transformation is probably rather destructive. (Better random events)

//Chaotic (4) - Mindclean, Cenaturs Incorporated, Baudrillard Associates, Room 39
//Lawful (4) - Vanguard, PAGAD, Singularity LLC, Human Flesh Search Engine
//Obilivion (4) - VHEMT, Daemon Hunters, Liberal Crime Squad, Death Leopard

/*
Combinations are a way to calculate the total outcomes of an event where order of the outcomes does not matter. To calculate combinations, we will use the formula nCr = n! / r! * (n - r)!, where n represents the total number of items, and r represents the number of items being chosen at a time.
*/

//http://mathforum.org/library/drmath/view/69151.html
//http://study.com/academy/lesson/how-to-calculate-the-probability-of-combinations.html

//Total Combinations - 364
//Odds of Total Domination - ~5% per alignment (~15%)
//Odds of No Dominations - ~17.58%
//Odds of Slight Domination - ~23% per alignment (~69%)


// Other Corps To Add?

// Uber/On-Demand Startups?
// Conservative Crime Squad?
// Social Media?
// "Weyland Corps" could be an interesting addition, and it would introduce the standard 'evil corp' back into the picture, since most of the corps here seem to make more sense as rebellious scum than as multitrillion-dollar megacorps. (Weyland appears to be a pro-"human supremacy" organization that does care for the environment and believe mankind to be like gods.) The biggest hurdle for Weyland Corps is two-folds
// One...the existence of the Daemon Hunters already mean you have a faction dedicated to interacting with 'extraterrestial entities' (the Demons), although the Daemon Hunters 'officially' wants to purge demons, not use them as weaponry.
// Two...the Weyland Corps' techno-utopianism is already reflected in Cenaturs Incorporated and Singularility LLC, and actually made more explicit. Their environmentalism is radicalized in the form of VHEMT. In the dystopian world of The Regulator, the Weylands are just too...conventional. Too boring.

// Peter Weyland's speech: http://lybio.net/peter-weylands-2023-ted-talk/people/
// Even though Peter believed mankind to be god, in the movie Prometheus, he had to beg to the Creators themselves...gods who are theorized to have made mankind solely as breeding vessels for the greatest biological weapons ever...the Xenomorphs



// Possible 'Enemy Faction' To Include If Tyranny is too High
// If so, provide hints that the HFSE exist in the Lore before launching them
// I like this faction but it appears to be a non-violent version of PAGAD,
// so it can't really be used
// {
//   id: 11,
//   title: "Human Flesh Search Engine",
//   description: "Established in the early 21st century as a loose-knit collection of Chinese vigilantes seeking to punish corruption and immorality through public shaming and doxxing, it has since absorbed other crowd-sourced intelligence gathering entities to become a major international force. The HFSE uses harrassment and death threats to push the vague and shifting views of the Internet mob, and tends to target both the strong and the weak fairly equally.",
//   pro_quote: "Righteousness is one of the five virtues in the Confucian tradition. With the convenience of the internet, and in the case of non-responsive law, the righteous people took matters into their own hands.---Xujun Eberlein, Chinese-American writer",
//   anti_quote: "The human-flesh search has unimaginable power. First it was a lot of phone calls every day. Then people painted red characters on his parents’ front door, which said things like, ‘You caused your wife’s suicide, so you should pay.’---Zhang Yanfeng, lawyer representing Wang Fei, a husband accused of cheating on his wife. Wang Fei went into hiding to evade the HFSE",
//   alignment: "right?"
// }

// The HFSE is a place that you can periodically monitor to check people's opinions about you. If you engage in too much tyranny, the HFSE will turn against you, and you will go against their wrath (which includes threatening attacks as well as stronger Corporations.)
// When you start the game, you log onto the HFSE to get your job.

// Political Eras:
// Social Stability (Rise) - instituions are strong, the political leadership is unquestioned. Everyone knows their place in the system. A Totalitaran, Majoritian dictatorship, but one with strong morals. (Government consolidated control. No opposition force at all. Corps' activites are very curtailed and have to pay a lot of lip service to the government. Random Events - governmental corruption.)
// Awakening - the people are rebelling against the Institution System. The government is advocating for the Institutional Status Quo, but there's a strong countercultural movement advocating for freedom and democracy and weak governments. (The government is strong, but there's a growing opposition force. Corps start having more autonomy. Random Events - opposition rising.)
// Decay - individualism has trimpuhed and governments are weak. The people are rebellious and free to do as they wish. Absolute anarchy and chaos (i.e, the perfect setting for a cyberpunk world). This is the cloeset you're going to get to FREEDOM AND SOCIAL LIBERATION. (The government and the opposition force is mostly equal in strength, and have to negotiate with each other to deal with tense situations. Corps are very autonomous. Random Events - Bloody warfare on the streets.)
// Crisis - The people slowly re-organize themselves, tearing down the old Institutions and replacing them with new Institutions. (The government is collapsing and the opposition is about to take over and become the new Totalists. Corps are resentful of their newfound freedoms being stripped away. Random Events - Reactionary riots against the new regime.)

// This type of "feature" is useful because it means that the Player has to not only worry about policing inter-corporate affairs, but also opposition/government affairs as well. Your goal is to make sure the government still remains popular, and your strategy in an Decay-era would be very different from that of the Rise-era...If the government has no opposition, you don't have to worry about the corporations funding opp groups against you, for example.

// In practice, you may want to have an ending scenario, so you can replay the game again to get a different City (set in a different Political Era).


// The Various Beginnings of The-Regulator

// Prequel to the Syndicate Series -
// EuroCorp has just invented the CHIP, a new system that would enable it to control people. The other corporations slowly begin to use the tech for their own purposes, morphing into the large-scale corporations that we know of at the start of Syndicate 1.

// Prequel to No Man's Sky -
// The Korvax's Homeworld has reached a stage of great technological advancement, but were unable to combine togheter into a unified government. The Corporate Buyout Wars finally conclude with the arrival of the Gek, who destroyed the homeworld in the Great Convergence. The Korvax were enslaved, and eventually, the Centaurs Incorporated faction won. The remenants of the Daemon Hunters went into exile, and eventually died out all except for the Priest Entity Nada.

// Sequel to Liberal Crime Squad, Bad Ending -
// The Reagan monarchy began to implode, and with it chaos begin to arise.

/*
The Different Models of Politics

1) Corporations don't pull the strings, they just bribe whoever is in power. The person in power has unlimited autonomy for his pet project...and if he/she gets overthrown, then a new person takes over and runs his pet project.

Pros - Very much in keeping with traditional cyberpunk
Cons - Surely the corporations must pull *some* strings in politics!

2) Two Alignments, Left and Right

Pros - Easy to understand...in theory. Left support higher social stabilitiy at the cost of lower economic growth, while Right support higher economic growth at the cost of lower social stability.
Cons - Hard to understand, in practice. Very hard to square with the current factions (which generally lean leftist).

3) Two Alignments, Law and Chaos
Pros - Easy to understand, in theory and practice
Cons - Hard to square with some of the stranger factions, like VHEMT.

4) Three Alignments: Law, Chaos, and Oblivion
The Final Stage. Names might need to change though. Also need to stress that the corporations of the same alignment don't cooperate.
Pros - Good variety of different beliefs.
Cons - Super-complex.
*/
