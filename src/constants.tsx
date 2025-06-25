export const CATEGORY_COLORS = {
  'Poems': '#703738',
  'Essays': '#486F36',
  'Short_stories': '#36556F'
} as const;
  
export const READINGS = [
  {
    id: '1',
    title: 'The Egg',
    author: 'Andy Weir',
    category: 'Short_stories',
    sourceUrl: 'https://www.goodreads.com/book/show/17563539-the-egg',
    summary: `Weir is an American novelist and former computer programmer, perhaps best known for his book, 'The Martian.' Weir was inspired to write 'The Egg' after an argument with his aunt, in his words, "I thought her point of view was ridiculous. Then, later I figured if I had lived her life, her opinion would make perfect sense to me. That got me thinking about a system where people live each other's lives." 'The Egg' has been translated into thirty different languages.`,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1431492647i/17563539.jpg',
    wordCount: 1000
  },
  {
    id: '2',
    title: 'The Story of an Hour',
    author: 'Kate Chopin',
    category: 'Short_stories',
    summary: `The title of the short story refers to the time elapsed between the moments at which the protagonist, Louise Mallard, hears that her husband, Brently Mallard, is dead, and then discovers that he is alive after all. Featuring a female protagonist who feels liberation and ponders her identity at the news of her husband's death, "The Story of an Hour" was controversial by American standards in the 1890s`,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348249668i/2267195.jpg',
    wordCount: 1000
  },
  {
    id: '3',
    title: 'How It Feels to Be Colored Me',
    author: 'Zora Neale Hurston',
    category: 'Short_stories',
    summary: `"How It Feels to Be Colored Me" by Zora Neale Hurston is an essay written in the early 20th century that explores themes of race, identity, and personal experience. The author shares her reflections on growing up in the all-Black town of Eatonville, Florida, and how her perception of herself changed when she moved to a predominantly white environment. Hurston's work offers a unique perspective on the complexities of being a person of color in America, emphasizing her strength and individuality rather than victimhood. In this personal narrative, Hurston recounts her childhood in Eatonville and the sense of belonging she felt there, only to confront the reality of racial identity when entering a white-dominated society. As she reflects on moments that make her feel "colored," she contrasts her experiences with those of her white peers, illustrating the challenges and joys of her cultural heritage. Rather than seeing herself as a victim of racism, she embraces her identity with pride and a sense of adventure, suggesting that cultural differences create richness rather than divide. Ultimately, Hurston conveys a message of resilience, self-acceptance, and the belief that one's identity transcends the color of their skin.`,
    imageUrl: 'https://www.gutenberg.org/cache/epub/73549/pg73549.cover.medium.jpg',
    wordCount: 1500
  },
  {
    id: '4',
    title: 'An Occurrence at Owl Creek Bridge',
    author: 'Ambrose Bierce',
    category: 'Short_stories',
    summary: `"An Occurrence at Owl Creek Bridge" is a short story written by Ambrose Bierce that explores the themes of war, death, and the human experience. The story follows Peyton Farquhar, a Confederate soldier who is about to be hanged for attempting to sabotage a Union bridge. As he hangs from the bridge, he experiences a vivid hallucination in which he escapes his execution and returns home to his family. The story is a powerful exploration of the human mind and the power of imagination in the face of death.`,
    imageUrl: 'https://www.gutenberg.org/cache/epub/375/pg375.cover.medium.jpg',
    wordCount: 3500
  },
  {
    id: '5',
    title: 'The Yellow Wallpaper ',
    author: 'Charlotte Perkins Gilman',
    category: 'Short_stories',
    summary: `"The Yellow Wallpaper" by Charlotte Perkins Gilman is a short story written in the late 19th century, often associated with the feminist literature genre. The narrative explores the themes of mental illness, gender roles, and the constraints faced by women in a patriarchal society. It follows the mental deterioration of a woman who is confined to a room by her husband, who is also her physician, under the pretense of helping her recover from what he diagnoses as temporary nervous depression. The story is presented as a series of journal entries written by an unnamed woman who is taken to a secluded mansion for rest cure. As she spends time in the nursery, she becomes increasingly obsessed with the room's yellow wallpaper, which she finds repulsive yet fascinating. Over time, she perceives a figure of a woman trapped within the wallpaper, reflecting her own feelings of oppression and entrapment. As the protagonist's isolation and desperation grow, she begins to identify with the figure, leading to a dramatic climax where she asserts her will by tearing down the wallpaper, ultimately rejecting the control her husband has over her life. The story is a powerful commentary on the struggles against patriarchal domination and the importance of self-identity and freedom. `,
    imageUrl: 'https://www.gutenberg.org/cache/epub/1952/pg1952.cover.medium.jpg',
    wordCount: 5500
  },
  {
    id: '6',
    title: 'Sonnet 18',
    author: 'William Shakespeare',
    category: 'Poems',
    summary: `This renowned work explores themes of love, beauty, time, and mortality, expressed through a series of lyrical reflections often directed toward a young man and a "dark lady." The sonnets' intricate exploration of human emotion and the complexities of love makes this collection a profound contribution to the world of poetry. The opening of "Shakespeare's Sonnets" presents a series of meditations on the nature and consequences of beauty and procreation. In the initial sonnets, the speaker urges a young man to reproduce to preserve his beauty and legacy against the relentless passage of time. Shakespeare employs vivid imagery to illustrate the fleeting nature of youth and the importance of nurturing future generations as a means of defying death. Within these early poems, the interplay between self-love and the obligation to share one's beauty with the world serves to set the tone for the subsequent exploration of love, desire, and the inherent struggles with time and mortality.`,
    imageUrl: 'https://www.gutenberg.org/cache/epub/1041/pg1041.cover.medium.jpg',
    wordCount: 100
  },
  {
    id: '7',
    title: 'If—',
    author: 'Rudyard Kipling',
    category: 'Poems',
    summary: `"If—" is a poem by English poet Rudyard Kipling (1865–1936), written circa 1895 as a tribute to Leander Starr Jameson. It is a literary example of Victorian-era values. The poem, first published in Rewards and Fairies (1910) following the story "Brother Square-Toes", is written in the form of paternal advice to the poet's son, John.`,
    imageUrl: 'https://www.gutenberg.org/cache/epub/23967/pg23967.cover.medium.jpg',
    wordCount: 150
  },
  {
    id: '8',
    title: 'A Modest Proposal',
    author: 'Jonathan Swift',
    category: 'Essays',
    summary: `"A Modest Proposal" by Jonathan Swift is a satirical essay written in the early 18th century. This work is a classic example of political satire and addresses the dire circumstances faced by the poor in Ireland during that period. The essay presents a shocking and extreme solution to poverty and overpopulation, proposing that impoverished Irish families sell their children as food to the wealthy. In this ironic treatise, Swift employs a calm and logical tone to suggest that the solution to the plight of poor Irish mothers and their numerous children lies in the consumption of infants. He meticulously calculates the benefits of his proposal, including the economic advantages for families and the reduction of poverty. The essay critiques the British government's neglect of the Irish population and the dehumanizing effects of colonialism, illustrating the absurdity of the social and economic conditions that lead to such a monstrous idea. Through this startling argument, Swift encourages readers to reflect on the inhumane treatment of the lower classes and the moral responsibilities of society. `,
    imageUrl: 'https://www.gutenberg.org/cache/epub/1080/pg1080.cover.medium.jpg',
    wordCount: 3000
  },
];