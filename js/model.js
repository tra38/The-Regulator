app.service('corporations', function($http) {
  this.information = function(){
    return [
          {
            id: 1,
            title: 'CreativeAI',
            description: 'This post-modernist ad agency uses the latest in artifical intelligence to develop highly-targeted messages to reach consumers. They are experts at manipulating culture and human emotion to convince people to do horrible things. The only humans CreativeAI hires are "data scientists"; all of their other employees are algorithms.',
            industries: "Public Relations, Advertising, Entertainment",
            pro_quote: "[The noises from video compression] are more beautiful to me than most things deliberately made by humans.--Loren Schmidt, Human Co-Founder",
            anti_quote: "CreativeAI's work is...decent. Not as good as a human, of course. But the corporations don't care about quality. They care about cost. And a computer is much cheaper than a human.---Argyros Naevius, former journalist",
            favorite_policy: "Transperancy Mandate",
            alignment: "left"
          },
          {
            id: 2,
            title: 'Vanguard',
            description: "A left-wing organization dedicated to leading a People's Revolution to overthrow capitalism. To raise funds for its lofty goal, Vanguard sells its 'espionage' and 'security' services to the other corporations. Vanguard has been linked to many high-profile assassinations of corporate executives...all of them paid for by other corporate executives.",
            pro_quote: "Remember that we do not want our sons and daughters to live in this cursed hell. We will fight for their sake.---Dori Iodocus, CEO",
            anti_quote: "It is cliche to point out that the Vanguard leadership lives in skyscrapers and mansions while their employees are dirt-poor, expendable cannon fooder. But at least the Vanguard leadership recognizes the irony and pretends to cry about it.---Argyros Naevius, former journalist",
            favorite_policy: "E-Democracy",
            industries: "Corporate Espionage, Military",
            alignment: "left"
          },
          {
            id: 3,
            title: 'Centaurs Incorporated',
            description: "Humans who have decided to 'upgrade' themselves by merging with their machines, turning into a weird hybrid of 'artifical intelligence' and 'natural intelligence'. They are the workforce that are responsible for manufacturing most of the goods that the other corporations repackage and sell to other people. They are strong advocates for uplifting other people to the 'next stage of human evolution', and will happily kidnap and brainwash those who refuses upliftment.",
            pro_quote: "I am unable to see why if AI becomes effective and productive it would result in anything other than an age of practical abundance.--friendsie, Vice-President of Marketing",
            anti_quote: "In the past, we humans used technology. Now, technology uses us, and is using us for some greater, unfathomable purpose.---Yamato Izz al-Din, former Centaur employee",
            favorite_policy: "Basic Income",
            industries: "Industrial Automation, Research and Development"
            alignment: "libertarian"
          },
          {
            id: 4,
            title: "Baudrillard Associates",
            description: "An alliance of rogue financial traders and bankers who had given up pretending to comply with arbitrary government regulations and appeasing corrupt financial regulators. The white collar crime may be boring, but the pay is more than worth it. Currently the most popular corporation in the city, due to their reluctance to use violence to settle disputes.",
            industries: "Financial Services, Investment Banking, Accounting",
            anti_quote: "There is no evidence that the Baudrillard Associates even *exists*. Either the leadership has hidden themselves very well, or these bankers invented up the organization just to give themselves an excuse to do what they always wanted to do.---Tadeo Waldobert, Police Officer",
            pro_quote: "When the government treats the law as a pliable instrument to be used creatively, it tends to encourage citizens to treat it the same way. ... [The corporations] treated the law as a game to be played, a puzzle to be solved as aggressively as possible, rather than a moral obligation. THE JUSTICE DEPARTMENT DOES TOO.---Matt Levine, Senior Vice President of Public Relations",
            favorite_policy: "Deregulation",
            alignment: "libertarian"
          },
          {
            id: 5,
            title: "PAGAD",
            description: "The 'People Against Gangsterism and Drugs' movement had its roots in the chaotic violence in 1990s South Africa. It has since spread throughout the world as an anti-globalization political force. Members of PAGAD use car bombings, intimidation, and extortion in its eternal crusade against corporate crime, in the hopes of bringing sanity to an often insane world. Despite its supposedly secular nature, PAGAD has attracted its fair share of religious zealots.",
            industries: "Security & Investigations, Law Enforcement",
            favorite_policy: "Vigilante Legalization",
            anti_quote: "They believe they can go against the law if it means ridding the area of a drug dealer or gangster. How are they any better than the criminals when they resort to criminal tactics?---John Davids, South African Civilian",
            pro_quote: "If you do not mobilise yourselves, no one will do it for you. Drugs and gangsterism is destroying our society and everyone is affected.---Haroun Orrie, PAGAD spokesperson",
            alignment: "rightist"
          },
          {
            id: 6,
            title: "Room 39",
            description: "A criminal organization that was founded in the late 1970s with explicit purpose of securing funding for the North Korean dictatorship, through the use of criminal activities such as drug smuggling and weapons trafficking.  After the fall of the North Korean dictatorship, Room 39 went 'legit' in return for legal immunity for its previous crimes. Room 39 is slowly and gradually adjusting to the capitalist system.",
            pro_quote: "Ideologies are like clothing; when one is worn out, it's time to buy a new one.---Ji-Hun Yeong-Ho, Room 39 agent",
            anti_quote: "It's a mockery of our laws that a criminal gang is able to freely reinvent themselves as a honorable corporation. And they probably haven't given up on the crime yet.---Argyros Naevius, former journalist",
            favorite_policy: "Slush Fund",
            industries: "Pharmaceuticals, Weapon Production",
            alignment: "rightist"
          },
          {
            id: 7,
            title: "Singularity LLC",
            description: "Radical political activists who (after being repeatedly disappointed at the failure of human politicans and regulators to solve problems) are attempting to build an Artifical General Intelligence that will control human society. They sometimes rent their experiments as 'consultants' to the other corporations to help raise revenue.",
            pro_quote: "People are superstitios [sic] about self-modifying code because once you employ this for solving usual engineering problems, you will often find it to be difficult to trace down the reasons for your program's behavior and that the ability of a program to modify itself can be exploited to gain access / information by people / other programs they not allowed to have. However, if these aren't problematic, then any Lisp or Prolog is a safe bet. Something that speaks to broader audience: Python, JavaScript, Lua.---wvxvw, Singularity LLC employee",
            anti_quote: "Humans *don't* agree on how to run our society! Why should we trust a computer to know any better?---Bassam Petru, lawyer",
            favorite_policy: "Algorithmic Law",
            industries: "Consulting, Life Coaching",
            alignment: "libertarian"
          },
          {
            id: 8,
            title: "VHEMT",
            description: "A radical environmentalist organization founded in the early 1990s by Les U. Knight, VHEMT stands for the 'Voluntary Human Extiniction Movement'. As society has grown more dystopian, many people have began supporting VHEMT as the best way to increase global  welfare, declaring that the death of humanity is the only sensible choice in a insensible world.",
            pro_quote: "Q: Is this another one of those suicide cults? A: Seems as if our entire industralized civilization is one big suicide cult. ... [V]oluntary human extiniction offers a healthy cure to humanity's collective death wish.---VHEMT Q&A"
            anti_quote: "The logic is as absurd as it's unassailable. Yes, indeed, if there are no more children, there will be no more child tragedies. Or child triumphs, for that matter, or much reason to think childless humanity will spend its dying days as serenely as Knight predicts. ---Brian Bethune, journalist"
            industries: "Environmental Services",
            alignment: "left"
          },
          {
            id: 9,
            title: "Liberal Crime Squad"
            description: "A leftist terrorist group that previously wanted to establish an 'Elite Liberal Utopia'. The leadership soon realized that it would be far easier to plug people into a 'simulation' of an Elite Liberal utopia instead. They now adopt a policy of utter hedonism, and only leave the VR sims to raise funds and preach their agenda to the masses.",
            pro_quote: "Only by abandoning 'Conservative Reality' can humanity be awakened to its True Liberal Nature and be able to enjoy happy, productive lives.---Chris Horsa, Liberal Crime Squad Founder",
            anti_quote: "The LCS agents sleep soundly in their virtual pods, and dream of fighting their war against Conservative society. But I notice that they never really dream what happens after they win.---Leobwin Sansone, former LCS employee",
            industries: "Virtual Reality",
            alignment: "left"
          },
          {
            id: 10,
            title: "Daemon Hunters",
            description: "Wackos and conspiracy theorists who believe that they are living in a computer simulation ('MMO') controlled by cruel daemons ('players'). These daemons regularly pay 'subscription fees' for the chance to beat up and cruelly torture 'NPCs' (us). The Demon Hunters seek to purge the daemonic element from human society, but have a hard time distingushing between the NPCs and the daemons.",
            pro_quote: "Friend or foe? Paranoia imperative. Galaxy purely casual, individualism is a statistical anomaly - Nada is an error. Trust Nada? Trust you?---Priest Entity Nada, CTO of Daemon Hunters",
            anti_quote: "If I was a daemon, the first thing I'd do is to create a faction to grief other daemons. Read between the lines.---Argyros Naevius, former journalist",
            alignment: "right"
          }
        ]
  }
  })
// Other Corps To Add?

// Uber/On-Demand Startups?
// Conservative Crime Squad?
// Social Media?

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