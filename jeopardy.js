const QUESTIONS_JEOPARDY = [
    {
        round: "Jeopardy!",
        category: "Domesticated Animals",
        value: "$200",
        question:
            "Dmitry Belyaev, intrigued by domestication, started an experiment in which this animal was bred over generations based on tameness towards humans?",
        answer: "Silver fox",
    },
    {
        round: "Jeopardy!",
        category: "Domesticated Animals",
        value: "$400",
        question:
            "Two domesticated animals outperform non-human primates in studies of cooperative communication with humans. Name one of the two.",
        answer: "Dog",
    },
    {
        round: "Jeopardy!",
        category: "Domesticated Animals",
        value: "$600",
        question:
            "What is credited with being the first human domesticated animal?",
        answer: "Dog",
    },
    {
        round: "Jeopardy!",
        category: "Domesticated Animals",
        value: "$800",
        question:
            "What animal is credited with domesticating itself in light of the invention of civilization? This domesticated animal, characterized as a whole, does not perform tasks at the instruction of humans, nor are they attached to people as much as they are attached to places, and it is proposed that they may have been attracted to large populations of rodents that thrive in early trash dumps.",
        answer: "Cat",
    },
    {
        round: "Jeopardy!",
        category: "Domesticated Animals",
        value: "$1000",
        question:
            "It has been observed that domestication of species mostly occurs in lush landscapes, where social cooperation has reproductive advantages. What is the modern primate, that scientists have recently proposed as self-domesticated, and that is characterized by their sexual appetites and matriarchal social structure?",
        answer: "bonobos",
    },
    {
        round: "Jeopardy!",
        category: "Today And Long Ago",
        value: "$200",
        question:
            "What climate event approximately 11,000 years before present, may have pushed the Natufians to commit to an agricultural lifestyle fully?",
        answer: "Younger Dryas",
    },
    {
        round: "Jeopardy!",
        category: "Today And Long Ago",
        value: "$400",
        question:
            "There are around 400 recognized dog breeds today, about how long ago did human domestication of dogs start to form different breeds?",
        answer: "4000",
    },
    {
        round: "Jeopardy!",
        category: "Today And Long Ago",
        value: "$600",
        question:
            "Within the past, how many years, did megafauna extinction occur?",
        answer: "100000",
    },
    {
        round: "Jeopardy!",
        category: "Today And Long Ago",
        value: "$800",
        question: "When did the last glacial maximum end?",
        answer: "20000",
    },
    {
        round: "Jeopardy!",
        category: "Today And Long Ago",
        value: "$1000",
        question:
            'Windsor Castle is credited with "Bowling Green" in 1299, but the popularization of having one of these has occurred within the past few hundred years, and it is characterized as a sturdy and soft turf for sports and play. A domesticated wild grass composes these.',
        answer: "lawns",
    },
    {
        round: "Jeopardy!",
        category: "Domestic Plants",
        value: "$200",
        question:
            "What percentage of all freshwater consumed by humans is used for agriculture?",
        answer: "70",
    },
    {
        round: "Jeopardy!",
        category: "Domestic Plants",
        value: "$400",
        question:
            "____ and barley were first domesticated in the Fertile Crescent.",
        answer: "Wheat",
    },
    {
        round: "Jeopardy!",
        category: "Domestic Plants",
        value: "$600",
        question: "____ and soybeans were first domesticated in Asia.",
        answer: "Rice",
    },
    {
        round: "Jeopardy!",
        category: "Domestic Plants",
        value: "$800",
        question: "Maize and ____ were first domesticated in the Americas.",
        answer: "Potatoes",
    },
    {
        round: "Jeopardy!",
        category: "Domestic Plants",
        value: "$1000",
        question:
            "The Japanese philosophy that natural beauty becomes true beauty explains the occurrence of these tiny trees.",
        answer: "Bonsai",
    },
    {
        round: "Jeopardy!",
        category: "Turning Points In History",
        value: "$200",
        question:
            "What tool of agriculture has become the symbol of the Neolithic Revolution?",
        answer: "Plow",
    },
    {
        round: "Jeopardy!",
        category: "Turning Points In History",
        value: "$400",
        question:
            "In the Fertile Crescent, hunter-gathers first settled to develop agriculture and build urban villages. These innovations are known as what revolution?",
        answer: "Neolithic Revolution",
    },
    {
        round: "Jeopardy!",
        category: "Turning Points In History",
        value: "$600",
        question:
            "What revolution took place between 40,000 and 90,000 years before the present, when art; tools; and weapons became more commonplace and advanced?",
        answer: "Cognitive revolution",
    },
    {
        round: "Jeopardy!",
        category: "Turning Points In History",
        value: "$800",
        question:
            "How long ago did anatomically modern humans split from the common ancestor of other recently extinct hominid species?",
        answer: "600000",
    },
    {
        round: "Jeopardy!",
        category: "Turning Points In History",
        value: "$1000",
        question:
            "Before this revolution, cereals were ground with stone milling tools and contained the entire contents of the cereal grain.",
        answer: "industrial revolution",
    },
    {
        round: "Jeopardy!",
        category: "Words That Start With A",
        value: "$200",
        question:
            "What type of selection is weakly characterized by selectively hunting certain members of a herd, or strongly characterized by humans choosing mates for animals under their control?",
        answer: "Artificial",
    },
    {
        round: "Jeopardy!",
        category: "Words That Start With A",
        value: "$400",
        question:
            "Humans have adapted to rely on plants for getting some of these essential building blocks of proteins.",
        answer: "Amino acids",
    },
    {
        round: "Jeopardy!",
        category: "Words That Start With A",
        value: "$600",
        question:
            "Modern crops are missing large ____ which assist in cross-pollination.",
        answer: "Anthers",
    },
    {
        round: "Jeopardy!",
        category: "Words That Start With A",
        value: "$800",
        question: "Modern crops are missing long____ which aid seed dispersal.",
        answer: "Awns",
    },
    {
        round: "Jeopardy!",
        category: "Words That Start With A",
        value: "$1000",
        question:
            'What A-word is concerned with beauty and is the name of this "niche" that explains the domestication of plants for beauty?',
        answer: "Aesthetic",
    },
];
const QUESTIONS_DOUBLE_JEOPARDY = [
    {
        round: "Double Jeopardy!",
        category: "Settlement And Results",
        value: "$400",
        question:
            'Who coined the term "Fertile Crescent" to describe the region that characterizes the land that extends from the Levant along the Mediterranean and up to and including Mesopotamia?',
        answer: "James Henry Breasted",
    },
    {
        round: "Double Jeopardy!",
        category: "Settlement And Results",
        value: "$800",
        question:
            "What type of economy is characterized by the founding of urban settlements?",
        answer: "agricultural",
    },
    {
        round: "Double Jeopardy!",
        category: "Settlement And Results",
        value: "$1200",
        question:
            "These cells help form cartilage and bone of the face and jaw, melanin-producing cells, and adrenal glands during our development within the womb.",
        answer: "Neural crest",
    },
    {
        round: "Double Jeopardy!",
        category: "Settlement And Results",
        value: "$1600",
        question:
            "The value of land for crops and the need for a cooperative group of individuals to work together in an agricultural economy seems like a utopia, but this cohesion has a dark side and has been cited as the birth of this social phenomenon, in which differing clans battle for resources.",
        answer: "Warfare",
    },
    {
        round: "Double Jeopardy!",
        category: "Settlement And Results",
        value: "$2000",
        question:
            "Whose law states that bone develops where it is needed and recedes where it is not needed?",
        answer: "Wolff's law",
    },
    {
        round: "Double Jeopardy!",
        category: "Syndromes",
        value: "$400",
        question:
            "What syndrome is a species said to have if they exhibit many of the following features, dwarfism; gigantism; wavy or curly hair; short or rolled tails; floppy ears; reduced jaw sizes; white spots in otherwise colored fur; and friendliness (or tameness) towards humans?",
        answer: "Domestication syndrome",
    },
    {
        round: "Double Jeopardy!",
        category: "Syndromes",
        value: "$800",
        question:
            "Domestication syndrome is characterized by genotypic traits or phenotypic traits?",
        answer: "Phenotypic traits",
    },
    {
        round: "Double Jeopardy!",
        category: "Syndromes",
        value: "$1200",
        question:
            "Domestication could impact the migration of neural crest cells within embryos, resulting in domestication syndrome from selection pressure imposed on this gene.",
        answer: "BAZ1B",
    },
    {
        round: "Double Jeopardy!",
        category: "Syndromes",
        value: "$1600",
        question:
            "Humans that only have one copy of the gene BAZ1B gene are characterized by smaller skulls, friendliness, and childlike features and are said to have this syndrome.",
        answer: "Williams-Beuren",
    },
    {
        round: "Double Jeopardy!",
        category: "Syndromes",
        value: "$2000",
        question:
            "This G-word describes very large sizes in crops such as tomatoes, sunflowers, and squash due to domestication.",
        answer: "Gigantism",
    },
    {
        round: "Double Jeopardy!",
        category: "Resulting From Agricultural Technology",
        value: "$400",
        question:
            "What was the approximate population of anatomically modern humans just prior to the start of domestication?",
        answer: "10000000",
    },
    {
        round: "Double Jeopardy!",
        category: "Resulting From Agricultural Technology",
        value: "$800",
        question:
            "Due to harvest periods and easier crop management, farmers artificially removed ____ dispersal mechanisms from domesticated crops.",
        answer: "Seed",
    },
    {
        round: "Double Jeopardy!",
        category: "Resulting From Agricultural Technology",
        value: "$1200",
        question:
            "What disease is the leading cause of death in Americans, and is attributed to a processed food diet?",
        answer: "Cardiovascular disease",
    },
    {
        round: "Double Jeopardy!",
        category: "Resulting From Agricultural Technology",
        value: "$1600",
        question:
            "In the past 10,000 years, human ____ size has reduced as a result of eating softer foods.",
        answer: "Jaw",
    },
    {
        round: "Double Jeopardy!",
        category: "Resulting From Agricultural Technology",
        value: "$2000",
        question:
            "Insect diversity loss has been estimated at about what percent due to agriculture?",
        answer: "50",
    },
    {
        round: "Double Jeopardy!",
        category: "Humans",
        value: "$400",
        question:
            "What is the name for the people that inhabited the Fertile Crescent?",
        answer: "Natufians",
    },
    {
        round: "Double Jeopardy!",
        category: "Humans",
        value: "$800",
        question:
            "Due to anatomical comparisons of modern humans with recent extinct hominid species, it has been proposed that humans domesticated themselves from this extinct hominid species.",
        answer: "Neanderthals",
    },
    {
        round: "Double Jeopardy!",
        category: "Humans",
        value: "$1200",
        question:
            "With the advent of urban culture, where the density of the human population is much higher than ever before, there may have been a reproductive advantage for friendly and cooperative people. The survival and reproduction of friendliness in people have been cited as the cause of what process in humans?",
        answer: "Self-domestication",
    },
    {
        round: "Double Jeopardy!",
        category: "Humans",
        value: "$1600",
        question:
            "The earliest chemical evidence of dairy consumption is only 6,000 years old, suggesting that ____ intolerance is due to too little time for evolutionary adaptation to milk.",
        answer: "Lactose",
    },
    {
        round: "Double Jeopardy!",
        category: "Humans",
        value: "$2000",
        question:
            "As the human population increases, so does this other P-word that is characterized by the introduction of harmful chemicals into the environment.",
        answer: "Pollution",
    },
    {
        round: "Double Jeopardy!",
        category: "More Plants and Animals",
        value: "$400",
        question:
            "Modern house cats have been genetically identified as a derived ancestor from Felis silvestrus lybica, one of five wildcat species, and the only wildcat species to call this region home.",
        answer: "Near East",
    },
    {
        round: "Double Jeopardy!",
        category: "More Plants and Animals",
        value: "$800",
        question:
            "What is the general term given to large land mammals that hominins and plants relied on for their survival for millions of years?",
        answer: "Megafauna",
    },
    {
        round: "Double Jeopardy!",
        category: "More Plants and Animals",
        value: "$1200",
        question:
            "_____ have been used in medicines, religions, and art; suggesting a close evolutionary kinship with humans.",
        answer: "Plants",
    },
    {
        round: "Double Jeopardy!",
        category: "More Plants and Animals",
        value: "$1600",
        question:
            "What flower, caused this economic phenomenon in the Dutch Golden age, where prices for its bulbs skyrocketed and subsequently crashed causing an economic crisis?",
        answer: "Tulip",
    },
    {
        round: "Double Jeopardy!",
        category: "More Plants and Animals",
        value: "$2000",
        question: "These account for 30% of the global flower market.",
        answer: "Roses",
    },
];
