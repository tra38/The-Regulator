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
          },
          {
            id: 2,
            title: 'Vanguard',
            description: "A left-wing organization dedicated to leading a People's Revolution to overthrow capitalism. To raise funds for its lofty goal, Vanguard sells its 'espionage' and 'security' services to the other corporations. Vanguard has been linked to many high-profile assassinations of corporate executives...all of them paid for by other corporate executives.",
            pro_quote: "Remember that we do not want our sons and daughters to live in this cursed hell. We will fight for their sake.---Dori Iodocus, CEO",
            anti_quote: "It is cliche to point out that the Vanguard leadership lives in skyscrapers and mansions while their employees are dirt-poor, expendable cannon fooder. But at least the Vanguard leadership recognizes the irony and pretends to cry about it.---Argyros Naevius, former journalist",
            favorite_policy: "E-Democracy",
            industries: "Corporate Espionage, Military"
          },
          {
            id: 3,
            title: 'Centaurs Incorporated',
            description: "Humans who have decided to 'upgrade' themselves by merging with their machines, turning into a weird hybrid of 'artifical intelligence' and 'natural intelligence'. They are the workforce that are responsible for manufacturing most of the goods that the other corporations repackage and sell to other people. They are strong advocates for uplifting other people to the 'next stage of human evolution', and will happily kidnap and brainwash those who refuses upliftment.",
            pro_quote: "I am unable to see why if AI becomes effective and productive it would result in anything other than an age of practical abundance.--friendsie, Vice-President of Marketing",
            anti_quote: "In the past, we humans used technology. Now, technology uses us, and is using us for some greater, unfathomable purpose.---Yamato Izz al-Din, former Centaur employee",
            favorite_policy: "Basic Income",
            industries: "Industrial Automation, Research and Development"
          },
          {
            id: 4,
            title: "Baudrillard Associates",
            description: "An alliance of rogue financial traders and bankers who had given up pretending to comply with arbitrary government regulations and appeasing corrupt financial regulators. The white collar crime may be boring, but the pay is more than worth it. Currently the most popular corporation in the city, due to their reluctance to use violence to settle disputes.",
            industries: "Financial Services, Investment Banking, Accounting",
            anti_quote: "There is no evidence that the Baudrillard Associates even *exists*. Either the leadership has hidden themselves very well, or these bankers invented up the organization just to give themselves an excuse to do what they always wanted to do.---Tadeo Waldobert, Police Officer",
            pro_quote: "When the government treats the law as a pliable instrument to be used creatively, it tends to encourage citizens to treat it the same way. ... [The corporations] treated the law as a game to be played, a puzzle to be solved as aggressively as possible, rather than a moral obligation. THE JUSTICE DEPARTMENT DOES TOO.---Matt Levine, Senior Vice President of Public Relations",
            favorite_policy: "Deregulation"
          },
          {
            id: 5,
            title: "PAGAD",
            description: "The 'People Against Gangsterism and Drugs' movement had its roots in the chaotic violence in 1990s South Africa. It has since spread throughout the world as an anti-globalization political force. Members of PAGAD use car bombings, intimidation, and extortion in its eternal crusade against corporate crime, in the hopes of bringing sanity to an often insane world. Despite its supposedly secular nature, PAGAD has attracted its fair share of religious zealots.",
            industries: "Security & Investigations, Law Enforcement",
            favorite_policy: "Vigilante Legalization",
            anti_quote: "They believe they can go against the law if it means ridding the area of a drug dealer or gangster. How are they any better than the criminals when they resort to criminal tactics?---John Davids, South African Civilian",
            pro_quote: "If you do not mobilise yourselves, no one will do it for you. Drugs and gangsterism is destroying our society and everyone is affected.---Haroun Orrie, PAGAD spokesperson"
          },
          {
            id: 6,
            title: "Room 39",
            description: "A criminal organization that was founded in the late 1970s with explicit purpose of securing funding for the North Korean dictatorship, through the use of criminal activities such as drug smuggling and weapons trafficking.  After the fall of the North Korean dictatorship, Room 39 went 'legit' in return for legal immunity for its previous crimes. Room 39 is slowly and gradually adjusting to the capitalist system.",
            pro_quote: "Ideologies are like clothing; when one is worn out, it's time to buy a new one.---Ji-Hun Yeong-Ho, Room 39 agent",
            anti_quote: "It's a mockery of our laws that a criminal gang is able to freely reinvent themselves as a honorable corporation. And they probably haven't given up on the crime yet.---Argyros Naevius, former journalist",
            favorite_policy: "Slush Fund",
            industries: "Pharmaceuticals, Weapon Production"
          }
        ]
  }
  })