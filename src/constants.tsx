export const CATEGORY_COLORS = {
  Poetry: "#703738",
  Essays: "#486F36",
  Fiction: "#36556F",
} as const;

// Generate URL-friendly slug from title
export const getSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

export const READING_DAYS = [
  {
    title: "Zero Hour",
    author: "Ray Bradbury"
  },
  {
    title: "The Fall of the House of Usher",
    author: "Edgar Allan Poe"
  },
  {
    title: "Ode to a Nightingale",
    author: "John Keats"
  },
  {
    title: "The Lady with the Dog",
    author: "Anton Chekhov"
  },
];

export const VAULT_READINGS = [
  {
    title: "The Monkey's Paw",
    author: "W.W. Jacobs"
  },
  {
    title: "Modern Fiction",
    author: "Virginia Woolf"
  },
  {
    title: "The Open Boat",
    author: "Stephen Crane"
  },
  {
    title: "How Much Land Does a Man Need?",
    author: "Leo Tolstoy"
  },
  {
    title: "Life Without Principle",
    author: "Henry David Thoreau"
  },
  {
    title: "The Road Not Taken",
    author: "Robert Frost"
  },
  {
    title: "Sonnet 116",
    author: "William Shakespeare"
  },
  {
    title: "Goblin Market",
    author: "Christina Rossetti"
  },
  {
    title: "Hope is the Thing with Feathers",
    author: "Emily Dickinson"
  },
  {
    title: "She Walks in Beauty",
    author: "Lord Byron"
  },
]

export const READINGS = [
  {
    title: "An Occurrence at Owl Creek Bridge",
    author: "Ambrose Bierce",
    category: "Fiction",
    label: "AMERICAN_REGIONAL",
    wordcount: 3731,
    summary:
      "A Confederate sympathizer named Peyton Farquhar faces execution by hanging from a railroad bridge during the Civil War. As he stands bound on the bridge, his mind races through memories of his family and his motivations for attempting to sabotage Union infrastructure. The story follows his desperate escape attempt after the rope breaks, plunging him into the creek below. Through vivid sensory details, we experience his struggle to free himself, evade gunfire, and make his way through the wilderness toward home. The narrative builds tension as Farquhar navigates the natural world with heightened awareness, driven by thoughts of his wife and children. The story's structure and perspective create a compelling psychological portrait of a man's final moments and the lengths he will go to survive.",
  },
  {
    title: "Modern Fiction",
    author: "Virginia Woolf",
    category: "Essays",
    label: "MODERN_FICTION",
    wordcount: 3213,
    summary:
      "Woolf critiques the traditional novel form and advocates for a new approach to fiction that captures the complexity of human consciousness. She argues that modern fiction should focus on the inner life of characters rather than external events, using techniques like stream of consciousness to represent the fluid, ever-changing nature of human thought. The essay establishes key principles of modernist literature and calls for writers to break free from conventional narrative structures.",
  },
  {
    title: "A Society",
    author: "Virginia Woolf",
    category: "Fiction",
    label: "MODERN_FICTION",
    wordcount: 5348,
    summary:
      "A satirical story about a group of women who form a society to investigate whether men are fit to govern. They discover that men's achievements are often flawed and their institutions corrupt. The women decide to withhold marriage and reproduction until men prove themselves worthy. Woolf uses humor and irony to critique patriarchal society and question traditional gender roles and power structures.",
  },
  {
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    category: "Fiction",
    label: "VICTORIAN_GOTHIC",
    wordcount: 6078,
    summary:
      "This groundbreaking story follows a woman who is confined to a room by her physician husband as a treatment for her 'nervous condition.' As she becomes increasingly obsessed with the room's yellow wallpaper, her mental state deteriorates, revealing the damaging effects of the 'rest cure' and patriarchal medical practices. The story explores themes of female oppression, mental illness, and the way that women's experiences were often dismissed or misunderstood by the medical establishment. Gilman's use of unreliable narration and Gothic elements creates a powerful critique of the treatment of women's mental health in the late 19th century, making this a foundational text of feminist literature.",
  },
  {
    title: "The Open Boat",
    author: "Stephen Crane",
    category: "Fiction",
    label: "EARLY_MODERN",
    wordcount: 9324,
    summary:
      "A powerful story that explores themes of survival, nature, and the relationship between humans and the natural world. Crane's story follows four men stranded in a small boat after their ship sinks, creating a meditation on the human struggle against nature and the ways in which people respond to extreme circumstances. The story's emphasis on the relationship between human will and natural forces reflects Crane's characteristic interest in the ways in which people confront the indifferent power of nature. His treatment of the men's struggle creates a commentary on the nature of human resilience and the limits of human control over the natural world.",
  },
  {
    title: "How Much Land Does a Man Need",
    author: "Leo Tolstoy",
    category: "Fiction",
    label: "AMERICAN_LITERARY",
    wordcount: 6129,
    summary:
      "This parable follows Pahom, a peasant who becomes obsessed with acquiring more land, leading to his ultimate downfall. Tolstoy explores themes of greed, ambition, and the destructive nature of materialism. Through Pahom's increasingly desperate quest for land, the story examines how the desire for wealth and property can consume a person's life and lead to spiritual and physical destruction. The narrative serves as a powerful critique of capitalism and a reminder that true happiness cannot be found in material possessions alone.",
  },
  {
    title: "The Fall of the House of Usher",
    author: "Edgar Allan Poe",
    category: "Fiction",
    label: "DARK_TALES",
    wordcount: 7040,
    summary: "A narrator receives a desperate letter from his childhood friend Roderick Usher, summoning him to the ancient family mansion. Upon arrival, he finds the House of Usher shrouded in an atmosphere of oppressive gloom, with its decaying facade reflected eerily in a dark tarn. Inside, Roderick appears physically and mentally transformed, suffering from acute nervous sensitivity and consumed by mysterious fears about his ancestral home. The narrator learns that Roderick's twin sister Madeline suffers from a strange cataleptical illness. As the story unfolds through nights of reading Gothic tales and listening to Roderick's wild musical improvisations, the narrator becomes increasingly unsettled by the house's supernatural influence and Roderick's deteriorating mental state. This atmospheric masterpiece explores themes of psychological decay, family curses, and the thin boundary between reality and madness, building to a climactic revelation that forever alters both the House of Usher and its inhabitants.",
  },
  {
    title: "The Gift of the Magi",
    author: "O. Henry",
    category: "Fiction",
    label: "AMERICAN_REGIONAL",
    wordcount: 2057,
    summary:
      "O. Henry's most beloved story explores themes of love, sacrifice, and the true meaning of gift-giving through the tale of a young couple who each sell their most prized possession to buy a gift for the other. The story's famous twist ending—where each discovers their gift is now useless—creates a powerful meditation on the nature of true love and the value of selfless giving. O. Henry's characteristic use of irony and his emphasis on the nobility of ordinary people reflect his belief in the essential goodness of human nature and the power of love to transcend material circumstances.",
  },
  {
    title: "The Lady with the Dog",
    author: "Anton Chekhov",
    category: "Fiction",
    label: "VICTORIAN_SOCIAL",
    wordcount: 6611,
    summary:
      "A jaded Moscow banker vacationing in Yalta encounters a mysterious woman walking alone with her white Pomeranian dog. Dmitri Gurov, a serial adulterer who views women with cynical detachment, finds himself unexpectedly drawn to Anna Sergeyevna, a young married woman seeking escape from her provincial life. What begins as another casual seaside affair transforms into something deeper as Gurov discovers feelings he never knew he possessed. Chekhov masterfully explores themes of love, authenticity, and the human capacity for change through this intimate portrait of two people caught between societal expectations and their own desires. The story examines how genuine connection can emerge from the most unlikely circumstances, challenging assumptions about morality, happiness, and the nature of true love.",
  },
  {
    title: "The Lady, or the Tiger?",
    author: "Frank Stockton",
    category: "Fiction",
    label: "AMERICAN_LITERARY",
    wordcount: 2699,
    summary:
      "A famous short story that presents a moral dilemma: a man must choose between two doors, one hiding a beautiful lady and the other a ferocious tiger. The story ends with an unresolved question, forcing readers to contemplate human nature, jealousy, and the consequences of choice, making it a classic example of open-ended storytelling.",
  },
  {
    title: "Young Goodman Brown",
    author: "Nathaniel Hawthorne",
    category: "Fiction",
    label: "AMERICAN_TRANSCENDENTAL",
    wordcount: 5229,
    summary:
      "At sunset in the town of Salem, Massachusetts, a man named Goodman Brown has just stepped over the threshold of the front door of his house. On his way out, he leans his head back inside to kiss his wife goodbye as she, “aptly” named Faith, leans out toward the street to embrace him. Faith is wearing a cap adorned with pink ribbons that flutter in the wind.",
  },
  {
    title: "The Furnished Room",
    author: "O. Henry",
    category: "Fiction",
    label: "AMERICAN_REGIONAL",
    wordcount: 2451,
    summary:
      "In the Lower West Side of New York City, the homeless population wanders like ghosts between crumbling buildings. The owners of these buildings rent out furnished rooms to provide temporary housing. One evening, a young man rents a furnished room from a housekeeper. He asks the housekeeper if she has seen a young woman named Eloise Vashner, who left home several months ago to pursue a career in show business. The young man is in love with Eloise and has come to New York to find her. He has been searching for five months without success. To his disappointment, the housekeeper tells him she has not seen Eloise. She then brings him to his room, which is decrepit, musty, and full of moldy furniture. Various stains and marks around the room reveal hints about previous tenants who have stayed there. The young man wonders if the lack of stable housing stirs some resentment in people that causes them to take poor care of their living space.",
  },
  {
    title: "To Build a Fire",
    author: "Jack London",
    category: "Fiction",
    label: "EARLY_MODERN",
    wordcount: 7081,
    summary:
      "A powerful story that explores themes of survival, nature, and the relationship between human knowledge and natural forces. London's story follows a man who attempts to survive in the extreme cold of the Yukon, creating a meditation on the relationship between human will and the indifferent power of nature. The story's emphasis on the relationship between human knowledge and natural forces reflects London's characteristic interest in the ways in which people confront the natural world and the limits of human control over natural circumstances. His treatment of the man's struggle creates a commentary on the nature of human resilience and the power of the natural world.",
  },
  {
    title: "The Wild Swans at Coole",
    author: "W.B. Yeats",
    category: "Poetry",
    label: "NATURE_PASTORAL",
    wordcount: 176,
    summary:
      "A poignant meditation on aging and the passage of time, set against the eternal beauty of nature. The speaker returns to Coole Park after nineteen years, finding the same fifty-nine swans still graceful and passionate. While the swans remain unchanged—their hearts never growing old—the speaker feels the weight of years and change. The poem captures the bittersweet realization that beauty and vitality persist in nature even as human life moves inexorably toward decline. Yeats masterfully contrasts the speaker's growing weariness with the swans' undiminished energy and mystery.",
  },
  {
    title: "Sonnet 116",
    author: "William Shakespeare",
    category: "Poetry",
    label: "VICTORIAN_POETRY",
    wordcount: 109,
    summary:
      "William Shakespeare's 'Sonnet 116' is a profound meditation on the nature of true love. The poem asserts that genuine love is unwavering and constant, unaffected by time, circumstance, or external changes. Shakespeare uses metaphors such as the 'ever-fixed mark' and the 'star to every wandering bark' to illustrate love's steadfastness and guidance. The sonnet also challenges the idea that love can be altered or diminished by obstacles, emphasizing its enduring quality. Shakespeare's eloquent language and masterful use of the sonnet form reinforce the poem's central message: that true love is eternal and unchanging, surviving even in the face of adversity. This work remains one of the most celebrated and quoted sonnets in the English language, reflecting Shakespeare's deep understanding of human emotion and the complexities of romantic relationships.",
  },
  {
    title: "The Road Not Taken",
    author: "Robert Frost",
    category: "Poetry",
    label: "EARLY_MODERN",
    wordcount: 144,
    summary:
      'The book provides an exploration of the Gullah culture and dialect, showcasing the lives, traditions, and storytelling traditions of African Americans along the Carolina coast. Through the characters and anecdotes presented, it offers a rich insight into the unique social fabric and historical context of this community. The opening of the book sets the stage with a foreword that delves into the history of the Gullah people, detailing their origins and the development of their distinctive dialect. The first story, ""Noblesse Oblige,"" introduces Joe Fields, a humorous and proud character who boasts about his former master\'s lineage while navigating the realities of his present life. The narrative intertwines themes of pride, identity, and the lingering effects of slavery, as Joe\'s tales reveal both his admiration and the absurdity of his circumstances. This introductory section draws readers into the world of the Gullah, blending rich cultural history and vibrant storytelling.',
  },
  {
    title: "Because I could not stop for Death",
    author: "Emily Dickinson",
    category: "Poetry",
    label: "DARK_TALES",
    wordcount: 107,
    summary:
      "Emily Dickinson's 'Because I could not stop for Death' is a masterful meditation on mortality that personifies death as a gentleman caller taking the speaker on a carriage ride through life and into eternity. Dickinson's use of personification and extended metaphor creates a gentle, almost romantic portrayal of death, challenging traditional fears and anxieties about dying. The poem's structure mirrors the journey it describes, with the speaker passing through different stages of life before reaching the final destination. Dickinson's characteristic use of dashes and unconventional punctuation creates a sense of breathlessness and immediacy, while her imagery of the carriage ride and the final resting place suggests a peaceful acceptance of death. This work exemplifies Dickinson's unique perspective on life's most profound questions and her ability to find beauty in the inevitable.",
  },
  {
    title: "Ode to a Nightingale",
    author: "John Keats",
    summary: "John Keats's 'Ode to a Nightingale' is a profound meditation on the relationship between art, nature, and human mortality. The speaker, hearing a nightingale's song, is transported into a state of ecstatic contemplation about the bird's apparent immortality and freedom from human suffering. Keats's use of vivid imagery and his exploration of the contrast between the bird's eternal song and human mortality create a powerful meditation on the nature of artistic creation and the human desire for transcendence. The poem's structure and its use of the ode form emphasize the speaker's deep appreciation for the nightingale's beauty, while its philosophical depth invites readers to consider the relationship between art and human experience. Through this work, Keats examines the universal human desire for escape from suffering and the way that art can provide moments of transcendence.",
    wordcount: 592,
    category: "Poetry",
    label: "ROMANTIC_POETRY"
  },
  {
    title: "She Walks in Beauty",
    author: "Lord Byron",
    category: "Poetry",
    label: "ROMANTIC_POETRY",
    wordcount: 123,
    summary:
      "The speaker compares a beautiful woman—who is walking—to a clear night sky full of bright stars. The finest light and darkness come together in harmony in this woman's appearance, particularly within her eyes. This gentle and delicate play of light is heavenly—indeed, heaven usually refuses to grant this supernatural light to the showy daytime. A touch more shade or even one ray of light would have greatly diminished the woman's beauty. This beauty, which is hard to put into words, shows itself in every strand of the woman's hair, and gently falls on her face. Her sweet, angelic emotions play out on her face, revealing how pure and precious this woman is. On the woman's cheek and forehead—softly and calmly, but noticeably—appear winning smiles and a glowing skin tone. These features reveal that the woman spends her days virtuously, that she possesses a peaceful mind, and that she has an innocent, loving heart.",
  },
  {
    title: "The Tyger",
    author: "William Blake",
    category: "Poetry",
    label: "METAPHYSICAL_RELIGIOUS",
    wordcount: 143,
    summary:
      "The speaker directly addresses a tiger, imagining its bright flashes of color in the dark night-time forest. The speaker asks which immortal being could possibly have created the tiger's fearsome beauty. The speaker wonders in which far-off depths or skies the tiger's fiery eyes were made. Did the tiger's creator have wings, and whose hand would be daring enough to create the tiger? The speaker imagines the kind of effort and skill that must have gone into creating the tiger, wondering who would be strong enough to build the tiger's muscular body. Whose hands and feet were the ones that made the tiger's heart start beating? The speaker wonders about the tools the tiger's creator must have used, imagining that the tiger's brain was created in a forge. What terrifying being would be so daring as to create the tiger? The speaker mentions a time when the stars gave up their weapons and rained their tears on heaven. At this time, wonders the speaker, did the creator look at the tiger and smile at his accomplishment? And was the tiger made by the same creator who made the lamb? The speaker addresses the tiger again, this time wondering not just who could create this fearsome beast—but who would dare.",
  },
  {
    title: "Crossing the Bar",
    author: "Alfred, Lord Tennyson",
    category: "Poetry",
    label: "VICTORIAN_POETRY",
    wordcount: 102,
    summary:
      "Alfred, Lord Tennyson's 'Crossing the Bar' is a meditation on death and the afterlife that uses maritime imagery to explore the transition from life to death. The poem describes the speaker's acceptance of his own mortality, using the metaphor of crossing a sandbar to represent the journey from life to death and the hope of meeting his 'Pilot' in the afterlife. Tennyson's use of vivid imagery and his exploration of the relationship between life and death create a powerful meditation on the nature of mortality and the human desire for meaning beyond death. The poem's structure and its use of maritime metaphor emphasize the speaker's peaceful acceptance of death, while its philosophical depth invites readers to consider the relationship between faith and mortality. Through this work, Tennyson examines the universal human experience of facing death and the way that faith can provide comfort and meaning in the face of mortality.",
  },
  {
    title: "Goblin Market",
    author: "Christina Rossetti",
    category: "Poetry",
    label: "VICTORIAN_POETRY",
    wordcount: 3039,
    summary:
      "In the first lines of ‘Goblin Market,’ the poet describes the calls and cries of the goblin men as they try to attract customers to buy their fruits. These fruits are inherently magical, something that Lizzie, the wiser sister, knows they should stay away from. But Laura ignores this warning and pays for the deceptive fruits with a lock of her hair. Once she eats it, Laura becomes immediately addicted to the taste. ",
  },
  {
    title: "Life Without Principle",
    author: "Henry David Thoreau",
    category: "Essays",
    label: "AMERICAN_TRANSCENDENTAL",
    wordcount: 7956,
    summary:
      "In this essay, Thoreau critiques the pursuit of wealth and conventional success, arguing that individuals should live according to their own principles rather than societal expectations. He explores themes of integrity, meaningful work, and the dangers of materialism. Thoreau encourages readers to seek purpose and fulfillment in life, rather than being driven by profit or public opinion. The essay is a call to authenticity and a meditation on the importance of living a life guided by conscience and higher values.",
  },
  {
    title: "On Going a Journey",
    author: "William Hazlitt",
    category: "Essays",
    label: "ROMANTIC_PROSE",
    wordcount: 4231,
    summary:
      "Hazlitt's essay celebrates the pleasures and benefits of solitary travel, arguing that true enjoyment of a journey requires independence and freedom from social obligations. He explores how travel can provide opportunities for reflection, self-discovery, and appreciation of the natural world. The work demonstrates Hazlitt's appreciation for solitude and his belief in the importance of personal freedom for intellectual and spiritual growth.",
  },
  {
    title: "Self-Reliance",
    author: "Ralph Waldo Emerson",
    category: "Essays",
    label: "AMERICAN_TRANSCENDENTAL",
    wordcount: 10045,
    summary:
      "This essay argues for the importance of individual intuition and self-trust over conformity to social expectations and traditional authority. Emerson explores themes of authenticity, nonconformity, and the power of individual genius. Through his examination of how society pressures individuals to conform, Emerson examines how true greatness comes from following one's own inner voice rather than external dictates. The essay serves as a powerful defense of individualism and a call to trust one's own judgment and creative impulses, even when they conflict with conventional wisdom or social norms.",
  },
  {
    title: "Characteristics",
    author: "Thomas Carlyle",
    category: "Essays",
    label: "VICTORIAN_SOCIAL",
    wordcount: 1923,
    summary:
      "Characteristics by Thomas Carlyle is a critical preface to his work on clothing and philosophy, written in his characteristic dense, philosophical style. The piece introduces Professor Teufelsdröckh, a fictional German philosopher whose work on clothes serves as a metaphor for deeper metaphysical truths. Carlyle presents Teufelsdröckh as a brilliant but flawed thinker—possessing profound insights and poetic vigor alongside frustrating prolixity and disorganization. The professor's transcendental philosophy views all material things as spirit, leading to both illuminating perspectives and bewildering complexity. While acknowledging the work's structural weaknesses and uneven quality, Carlyle defends its intellectual merit, suggesting that despite its flaws, it opens \"new mine-shafts\" for philosophical exploration. The piece ultimately serves as both a self-aware critique and a defense of philosophical works that, despite their imperfections, challenge readers to deeper self-reflection and intellectual engagement.",
  },
  {
    title: "Of Truth",
    author: "Francis Bacon",
    category: "Essays",
    label: "VICTORIAN_GOTHIC",
    wordcount: 839,
    summary:
      "Bacon's essay examines the nature of truth and the human tendency to prefer lies and illusions. He argues that truth is the highest good and that the pursuit of truth is essential for human dignity and progress. The work demonstrates Bacon's commitment to empirical investigation and his belief in the importance of truth-seeking for human advancement.",
  },
  {
    title: "Style",
    author: "Thomas De Quincey",
    category: "Essays",
    label: "ROMANTIC_PROSE",
    wordcount: 0,
    summary: "No summary available",
  },
  {
    title: "On Familiar Style",
    author: "William Hazlitt",
    category: "Essays",
    label: "AMERICAN_REGIONAL",
    wordcount: 2703,
    summary:
      "In this essay, Hazlitt advocates for a natural, conversational style of writing that reflects the way people actually think and speak. He argues against artificial, pompous language and in favor of clarity, directness, and authenticity. The work demonstrates Hazlitt's commitment to accessible, engaging prose and his belief that good writing should connect with readers on a personal level.",
  },
  {
    title: "Zero Hour",
    author: "Ray Bradbury",
    category: "Fiction",
    label: "MODERN_FICTION",
    wordcount: 3064,
    summary:
      'A seemingly innocent children\'s game of "Invasion" unfolds on a peaceful suburban street where seven-year-old Mink leads her friends in elaborate preparations. While adults dismiss it as typical childhood imagination, the children work with mysterious equipment and speak of someone named "Drill" who promises them freedom from baths and bedtime rules. As the afternoon progresses toward "zero hour," the game takes on an increasingly unsettling quality, with strange yo-yos that vanish and reappear, and children who seem to be communicating with invisible forces. The story builds tension through the contrast between the adults\' obliviousness and the children\'s deadly serious preparations, creating an atmosphere of creeping dread that culminates in an explosive revelation about the true nature of their play.',
  },
  {
    title: "Of Friendship",
    author: "Francis Bacon",
    category: "Essays",
    label: "AMERICAN_LITERARY",
    wordcount: 0,
    summary: "No summary available",
  },
  {
    title: "The Story of an Hour",
    author: "Kate Chopin",
    category: "Fiction",
    label: "AMERICAN_REGIONAL",
    wordcount: 1017,
    summary:
      "A woman receives news of her husband's death in a train accident. Initially overwhelmed by grief, she retreats to her room where she experiences an unexpected emotional transformation. As she gazes out her window at the spring day, she begins to feel a sense of liberation and freedom that she had never known in her marriage. The story explores the complex emotions of a woman who discovers her own identity and independence in the wake of what she believes is her husband's death. Through vivid imagery and psychological insight, the narrative examines themes of personal freedom, societal expectations, and the hidden desires that can emerge in moments of profound change. The story's power lies in its exploration of the inner life of a woman who finds herself unexpectedly free to live for herself.",
  },
  {
    title: "Hope is the thing with feathers",
    author: "Emily Dickinson",
    category: "Poetry",
    label: "NATURE_PASTORAL",
    wordcount: 69,
    summary:
      "Emily Dickinson's 'Hope is the thing with feathers' is a powerful metaphor poem that personifies hope as a bird that resides in the human soul. Dickinson's use of extended metaphor creates a vivid image of hope as a resilient, singing bird that never asks for anything in return, even in the harshest conditions. The poem's structure and rhythm create a sense of lightness and buoyancy, mirroring the nature of hope itself. Dickinson's characteristic use of dashes and unconventional capitalization emphasizes the poem's emotional intensity and the speaker's deep connection to this abstract concept. Through this simple yet profound metaphor, Dickinson explores the nature of hope as an essential, self-sustaining force that provides comfort and strength in times of difficulty. This work exemplifies Dickinson's ability to give concrete form to abstract emotions and ideas.",
  },
  {
    title: "On Political Secrecy",
    author: "G.K. Chesterton",
    category: "Essays",
    label: "EARLY_MODERN",
    wordcount: 1837,
    summary:
      "This essay examines the nature of political secrecy by first establishing three legitimate categories of human privacy: secrets meant to be revealed (like mystery stories), secrets everyone knows but doesn't discuss (like intimate matters), and secrets too personal and fleeting to explain (like whimsical preferences). The author then applies this framework to political finance secrecy, particularly the concealment of party funds and peerage purchases. Through systematic analysis, he demonstrates that political secrecy fits none of these legitimate categories—it is not kept to be revealed, not a common human secret, and not a trivial personal matter. Instead, it represents an illegitimate form of occult government where power operates through hidden financial transactions that violate democratic transparency. The essay concludes that England has created a system of priestcraft without priests, where political power is concentrated in the hands of those who can afford to buy influence through secret channels.",
  },
  {
    title: "The Monkey's Paw",
    author: "W.W. Jacobs",
    category: "Fiction",
    label: "DARK_TALES",
    wordcount: 3937,
    summary:
      "A family receives a magical monkey's paw that grants three wishes, but each wish comes with terrible consequences. When they wish for money, their son dies in an accident and they receive compensation. Their second wish to bring him back results in a horrifying resurrection. The story explores themes of fate, the consequences of tampering with natural order, and the human tendency to desire more than we should have.",
  },
];
