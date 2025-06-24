export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  description: string;
  episodes: number;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  studio: string;
  animepaheSlug: string; // UUID for animepahe.ru
}

export const animeDatabase: Anime[] = [
  // Popular Shonen
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 2013,
    genre: "Action, Drama, Fantasy",
    description: "Humanity fights for survival against giant humanoid Titans in a world where they live behind massive walls.",
    episodes: 87,
    status: 'Completed',
    studio: 'Mappa',
    animepaheSlug: '0df8248a-2a8e-7d4b-7c5e-9c5a9b5c5e5f'
  },
  {
    id: 2,
    title: "Demon Slayer",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 2019,
    genre: "Action, Supernatural, Historical",
    description: "A young boy becomes a demon slayer to save his sister and avenge his family.",
    episodes: 44,
    status: 'Ongoing',
    studio: 'Ufotable',
    animepaheSlug: 'b25b1e8f-4c8d-9a2e-8f7c-1d2e3f4a5b6c'
  },
  {
    id: 3,
    title: "One Piece",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.1,
    year: 1999,
    genre: "Adventure, Comedy, Shounen",
    description: "Pirates search for the ultimate treasure in the Grand Line.",
    episodes: 1000,
    status: 'Ongoing',
    studio: 'Toei Animation',
    animepaheSlug: 'd58fc9f8-582e-fdf0-3618-112cd54ed5ab'
  },
  {
    id: 4,
    title: "Naruto",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.8,
    year: 2002,
    genre: "Action, Adventure, Martial Arts",
    description: "A young ninja seeks recognition and dreams of becoming Hokage.",
    episodes: 720,
    status: 'Completed',
    studio: 'Pierrot',
    animepaheSlug: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
  },
  {
    id: 5,
    title: "Dragon Ball Z",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.9,
    year: 1989,
    genre: "Action, Adventure, Martial Arts",
    description: "Goku and friends defend Earth from powerful enemies.",
    episodes: 291,
    status: 'Completed',
    studio: 'Toei Animation',
    animepaheSlug: 'f9e8d7c6-b5a4-9382-7160-5f4e3d2c1b0a'
  },
  {
    id: 6,
    title: "My Hero Academia",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.5,
    year: 2016,
    genre: "Action, School, Superhero",
    description: "In a world where superpowers are common, a boy without powers dreams of becoming a hero.",
    episodes: 138,
    status: 'Ongoing',
    studio: 'Bones',
    animepaheSlug: '2c3d4e5f-6789-0abc-def1-234567890abc'
  },
  {
    id: 7,
    title: "Bleach",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2004,
    genre: "Action, Supernatural, Shounen",
    description: "A teenager gains Soul Reaper powers and protects the living world from evil spirits.",
    episodes: 366,
    status: 'Ongoing',
    studio: 'Pierrot',
    animepaheSlug: '8d7c6b5a-4938-2716-0594-3e2d1c0b9a8f'
  },
  {
    id: 8,
    title: "Jojo's Bizarre Adventure",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 2012,
    genre: "Action, Adventure, Supernatural",
    description: "The multi-generational tale of the heroic Joestar family and their supernatural adventures.",
    episodes: 190,
    status: 'Ongoing',
    studio: 'David Production',
    animepaheSlug: '5f4e3d2c-1b0a-9876-5432-10fedcba9876'
  },
  {
    id: 9,
    title: "One Punch Man",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.8,
    year: 2015,
    genre: "Action, Comedy, Superhero",
    description: "A hero who can defeat any enemy with a single punch struggles with boredom.",
    episodes: 24,
    status: 'Ongoing',
    studio: 'Madhouse',
    animepaheSlug: '9a8b7c6d-5e4f-3210-9876-543210fedcba'
  },
  {
    id: 10,
    title: "Hunter x Hunter",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 2011,
    genre: "Action, Adventure, Fantasy",
    description: "A young boy searches for his father while becoming a Hunter.",
    episodes: 148,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: '1a2b3c4d-5e6f-7890-abcd-ef1234567890'
  },

  // Popular Seinen
  {
    id: 11,
    title: "Death Note",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 2006,
    genre: "Psychological, Supernatural, Thriller",
    description: "A high school student finds a supernatural notebook that kills anyone whose name is written in it.",
    episodes: 37,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'b3c4d5e6-f789-0abc-def1-234567890abc'
  },
  {
    id: 12,
    title: "Tokyo Ghoul",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2014,
    genre: "Action, Horror, Supernatural",
    description: "A college student becomes a half-ghoul after a deadly encounter.",
    episodes: 48,
    status: 'Completed',
    studio: 'Pierrot',
    animepaheSlug: 'c4d5e6f7-8901-2345-6789-0abcdef12345'
  },
  {
    id: 13,
    title: "Berserk",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 1997,
    genre: "Action, Adventure, Drama, Fantasy, Horror",
    description: "A lone mercenary fights demons in a dark medieval world.",
    episodes: 25,
    status: 'Completed',
    studio: 'OLM',
    animepaheSlug: 'd5e6f789-0123-4567-890a-bcdef1234567'
  },
  {
    id: 14,
    title: "Monster",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.1,
    year: 2004,
    genre: "Drama, Horror, Mystery, Psychological, Thriller",
    description: "A doctor's life changes after saving a young boy who grows up to be a serial killer.",
    episodes: 74,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'e6f78901-2345-6789-0abc-def123456789'
  },
  {
    id: 15,
    title: "Parasyte",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.3,
    year: 2014,
    genre: "Action, Drama, Horror, Psychological, Sci-Fi",
    description: "A teenager's hand is infected by an alien parasite that develops its own consciousness.",
    episodes: 24,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'f7890123-4567-890a-bcde-f12345678901'
  },

  // Studio Ghibli
  {
    id: 16,
    title: "Spirited Away",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.3,
    year: 2001,
    genre: "Adventure, Family, Fantasy",
    description: "A girl enters a world ruled by gods and witches while trying to save her parents.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: '78901234-5678-90ab-cdef-123456789012'
  },
  {
    id: 17,
    title: "Princess Mononoke",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 1997,
    genre: "Adventure, Drama, Fantasy",
    description: "A young warrior gets involved in a struggle between forest gods and humans.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: '89012345-6789-0abc-def1-234567890123'
  },
  {
    id: 18,
    title: "Howl's Moving Castle",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2004,
    genre: "Adventure, Drama, Fantasy, Romance",
    description: "A young woman is cursed with old age and seeks help from a wizard.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: '90123456-789a-bcde-f123-456789012345'
  },
  {
    id: 19,
    title: "My Neighbor Totoro",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 1988,
    genre: "Adventure, Family, Fantasy",
    description: "Two sisters discover magical creatures in the countryside.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: 'a0123456-789a-bcde-f123-456789012345'
  },
  {
    id: 20,
    title: "Castle in the Sky",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 1986,
    genre: "Adventure, Family, Fantasy, Romance",
    description: "A young girl and boy search for a legendary floating castle.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: 'b1234567-89ab-cdef-1234-56789012345a'
  },

  // Romance & Drama
  {
    id: 21,
    title: "Your Name",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2016,
    genre: "Romance, Drama, Supernatural",
    description: "Two teenagers share a profound, magical connection through their dreams.",
    episodes: 1,
    status: 'Completed',
    studio: 'CoMix Wave Films',
    animepaheSlug: 'c2345678-9abc-def1-2345-6789012345ab'
  },
  {
    id: 22,
    title: "A Silent Voice",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2016,
    genre: "Drama, Romance, School",
    description: "A former bully seeks redemption by helping the deaf girl he once tormented.",
    episodes: 1,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: 'd3456789-abcd-ef12-3456-789012345abc'
  },
  {
    id: 23,
    title: "Weathering with You",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2019,
    genre: "Romance, Drama, Supernatural",
    description: "A boy meets a girl who can control the weather in modern Tokyo.",
    episodes: 1,
    status: 'Completed',
    studio: 'CoMix Wave Films',
    animepaheSlug: 'e456789a-bcde-f123-4567-89012345abcd'
  },
  {
    id: 24,
    title: "Violet Evergarden",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.6,
    year: 2018,
    genre: "Drama, Fantasy, Slice of Life",
    description: "A former soldier learns to understand emotions while working as an Auto Memory Doll.",
    episodes: 13,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: 'f56789ab-cdef-1234-5678-9012345abcde'
  },
  {
    id: 25,
    title: "Clannad",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.9,
    year: 2007,
    genre: "Drama, Romance, School, Slice of Life",
    description: "A delinquent student's life changes when he meets a girl trying to revive the drama club.",
    episodes: 47,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: '6789abcd-ef12-3456-7890-12345abcdef6'
  },

  // Slice of Life
  {
    id: 26,
    title: "K-On!",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2009,
    genre: "Comedy, Music, School, Slice of Life",
    description: "High school girls form a light music club and learn to play instruments.",
    episodes: 39,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: '789abcde-f123-4567-8901-2345abcdef67'
  },
  {
    id: 27,
    title: "March Comes in Like a Lion",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.9,
    year: 2016,
    genre: "Drama, Game, Slice of Life",
    description: "A young professional shogi player deals with depression and finds a new family.",
    episodes: 44,
    status: 'Completed',
    studio: 'Shaft',
    animepaheSlug: '89abcdef-1234-5678-9012-345abcdef678'
  },
  {
    id: 28,
    title: "Barakamon",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.3,
    year: 2014,
    genre: "Comedy, Slice of Life",
    description: "A calligrapher moves to a rural island and learns about life from the locals.",
    episodes: 12,
    status: 'Completed',
    studio: 'Kinema Citrus',
    animepaheSlug: '9abcdef1-2345-6789-0123-45abcdef6789'
  },

  // Thriller & Mystery
  {
    id: 29,
    title: "Steins;Gate",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 2011,
    genre: "Drama, Sci-Fi, Thriller",
    description: "A group of friends accidentally discover time travel through a microwave.",
    episodes: 24,
    status: 'Completed',
    studio: 'White Fox',
    animepaheSlug: 'abcdef12-3456-7890-1234-5abcdef6789a'
  },
  {
    id: 30,
    title: "Psycho-Pass",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2012,
    genre: "Action, Psychological, Sci-Fi, Thriller",
    description: "In a dystopian future, a system judges people's criminal potential.",
    episodes: 41,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: 'bcdef123-4567-8901-2345-abcdef6789ab'
  },
  {
    id: 31,
    title: "Erased",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.5,
    year: 2016,
    genre: "Drama, Mystery, Psychological, Thriller",
    description: "A man with the ability to go back in time tries to prevent a series of murders.",
    episodes: 12,
    status: 'Completed',
    studio: 'A-1 Pictures',
    animepaheSlug: 'cdef1234-5678-9012-3456-bcdef6789abc'
  },
  {
    id: 32,
    title: "Another",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.8,
    year: 2012,
    genre: "Horror, Mystery, School, Thriller",
    description: "A transfer student uncovers a deadly curse affecting his new class.",
    episodes: 12,
    status: 'Completed',
    studio: 'P.A. Works',
    animepaheSlug: 'def12345-6789-0123-4567-cdef6789abcd'
  },

  // Sports
  {
    id: 33,
    title: "Haikyuu!!",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 2014,
    genre: "Comedy, Drama, School, Sports",
    description: "A short boy joins his high school volleyball team and aims for nationals.",
    episodes: 85,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: 'ef123456-789a-bcde-f123-def6789abcde'
  },
  {
    id: 34,
    title: "Kuroko's Basketball",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2012,
    genre: "Comedy, School, Sports",
    description: "A phantom sixth man helps his new team compete against the Generation of Miracles.",
    episodes: 75,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: 'f1234567-89ab-cdef-1234-ef6789abcdef'
  },
  {
    id: 35,
    title: "Slam Dunk",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 1993,
    genre: "Comedy, Drama, School, Sports",
    description: "A delinquent joins the basketball team to impress a girl and discovers his passion for the sport.",
    episodes: 101,
    status: 'Completed',
    studio: 'Toei Animation',
    animepaheSlug: '12345678-9abc-def1-2345-f6789abcdef1'
  },
  {
    id: 36,
    title: "Ping Pong the Animation",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.6,
    year: 2014,
    genre: "Drama, Psychological, Sports",
    description: "Two friends with different personalities compete in table tennis.",
    episodes: 11,
    status: 'Completed',
    studio: 'Tatsunoko Production',
    animepaheSlug: '23456789-abcd-ef12-3456-6789abcdef12'
  },

  // Isekai
  {
    id: 37,
    title: "Re:Zero",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2016,
    genre: "Drama, Fantasy, Psychological, Thriller",
    description: "A boy is transported to a fantasy world where he can return from death.",
    episodes: 50,
    status: 'Ongoing',
    studio: 'White Fox',
    animepaheSlug: '3456789a-bcde-f123-4567-789abcdef123'
  },
  {
    id: 38,
    title: "That Time I Got Reincarnated as a Slime",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2018,
    genre: "Adventure, Comedy, Fantasy",
    description: "A man reincarnated as a slime builds a nation of monsters.",
    episodes: 48,
    status: 'Ongoing',
    studio: '8bit',
    animepaheSlug: '456789ab-cdef-1234-5678-89abcdef1234'
  },
  {
    id: 39,
    title: "Overlord",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 2015,
    genre: "Action, Adventure, Fantasy",
    description: "A player becomes trapped in a virtual reality game as his character, an undead overlord.",
    episodes: 52,
    status: 'Ongoing',
    studio: 'Madhouse',
    animepaheSlug: '56789abc-def1-2345-6789-9abcdef12345'
  },
  {
    id: 40,
    title: "No Game No Life",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2014,
    genre: "Adventure, Comedy, Ecchi, Fantasy, Game",
    description: "Two shut-in siblings are transported to a world where everything is decided by games.",
    episodes: 12,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: '6789abcd-ef12-3456-7890-abcdef123456'
  },

  // Mecha
  {
    id: 41,
    title: "Neon Genesis Evangelion",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.5,
    year: 1995,
    genre: "Action, Drama, Mecha, Psychological",
    description: "Teenagers pilot giant mechs to fight mysterious beings called Angels.",
    episodes: 26,
    status: 'Completed',
    studio: 'Gainax',
    animepaheSlug: '789abcde-f123-4567-8901-bcdef1234567'
  },
  {
    id: 42,
    title: "Code Geass",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.9,
    year: 2006,
    genre: "Drama, Mecha, Military, School",
    description: "A prince gains the power of absolute obedience and leads a rebellion.",
    episodes: 50,
    status: 'Completed',
    studio: 'Sunrise',
    animepaheSlug: '89abcdef-1234-5678-9012-cdef12345678'
  },
  {
    id: 43,
    title: "Gundam Wing",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.8,
    year: 1995,
    genre: "Action, Drama, Mecha, Military, Space",
    description: "Five young pilots and their advanced Gundam mobile suits fight for peace.",
    episodes: 49,
    status: 'Completed',
    studio: 'Sunrise',
    animepaheSlug: '9abcdef1-2345-6789-0123-def123456789'
  },

  // Recent Popular
  {
    id: 44,
    title: "Jujutsu Kaisen",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.6,
    year: 2020,
    genre: "Action, School, Supernatural",
    description: "Students fight cursed spirits in a world where negative emotions manifest as monsters.",
    episodes: 24,
    status: 'Ongoing',
    studio: 'Mappa',
    animepaheSlug: 'abcdef12-3456-7890-1234-ef123456789a'
  },
  {
    id: 45,
    title: "Chainsaw Man",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2022,
    genre: "Action, Horror, Supernatural",
    description: "A young man merges with his pet devil to become Chainsaw Man.",
    episodes: 12,
    status: 'Ongoing',
    studio: 'Mappa',
    animepaheSlug: 'bcdef123-4567-8901-2345-f123456789ab'
  },
  {
    id: 46,
    title: "Spy x Family",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.3,
    year: 2022,
    genre: "Action, Comedy, Family",
    description: "A spy creates a fake family for a mission, unaware his wife is an assassin and daughter is telepathic.",
    episodes: 25,
    status: 'Ongoing',
    studio: 'Wit Studio',
    animepaheSlug: 'cdef1234-5678-9012-3456-123456789abc'
  },
  {
    id: 47,
    title: "Tokyo Revengers",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2021,
    genre: "Action, Drama, School, Supernatural",
    description: "A man travels back in time to save his girlfriend from a gang.",
    episodes: 37,
    status: 'Ongoing',
    studio: 'Liden Films',
    animepaheSlug: 'def12345-6789-0123-4567-23456789abcd'
  },
  {
    id: 48,
    title: "Hell's Paradise",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2023,
    genre: "Action, Historical, Supernatural",
    description: "A ninja seeks immortality on a mysterious island to reunite with his wife.",
    episodes: 13,
    status: 'Ongoing',
    studio: 'Mappa',
    animepaheSlug: 'ef123456-789a-bcde-f123-3456789abcde'
  },

  // Classic Anime
  {
    id: 49,
    title: "Cowboy Bebop",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.8,
    year: 1998,
    genre: "Action, Adventure, Drama, Sci-Fi, Space",
    description: "Bounty hunters travel through space in the year 2071.",
    episodes: 26,
    status: 'Completed',
    studio: 'Sunrise',
    animepaheSlug: 'f1234567-89ab-cdef-1234-456789abcdef'
  },
  {
    id: 50,
    title: "Fullmetal Alchemist: Brotherhood",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.5,
    year: 2009,
    genre: "Action, Adventure, Drama, Fantasy, Military",
    description: "Two brothers use alchemy to search for the Philosopher's Stone.",
    episodes: 64,
    status: 'Completed',
    studio: 'Bones',
    animepaheSlug: '12345678-9abc-def1-2345-56789abcdef1'
  },
  {
    id: 51,
    title: "Akira",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 1988,
    genre: "Action, Drama, Sci-Fi, Thriller",
    description: "A biker gang member gains psychic powers in post-apocalyptic Neo-Tokyo.",
    episodes: 1,
    status: 'Completed',
    studio: 'Akira Committee',
    animepaheSlug: '23456789-abcd-ef12-3456-6789abcdef12'
  },
  {
    id: 52,
    title: "Ghost in the Shell",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 1995,
    genre: "Action, Drama, Sci-Fi, Thriller",
    description: "A cyborg policewoman hunts a mysterious hacker in a cyberpunk future.",
    episodes: 1,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: '3456789a-bcde-f123-4567-789abcdef123'
  },

  // More Popular Anime
  {
    id: 53,
    title: "The Promised Neverland",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2019,
    genre: "Drama, Horror, Mystery, Psychological, Thriller",
    description: "Children discover their orphanage is actually a farm where they're raised as food for demons.",
    episodes: 23,
    status: 'Completed',
    studio: 'CloverWorks',
    animepaheSlug: '456789ab-cdef-1234-5678-89abcdef1234'
  },
  {
    id: 54,
    title: "Dr. Stone",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2019,
    genre: "Adventure, Comedy, Sci-Fi",
    description: "A genius student uses science to rebuild civilization after humanity is petrified.",
    episodes: 58,
    status: 'Ongoing',
    studio: 'TMS Entertainment',
    animepaheSlug: '56789abc-def1-2345-6789-9abcdef12345'
  },
  {
    id: 55,
    title: "Fire Force",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.7,
    year: 2019,
    genre: "Action, Supernatural",
    description: "Firefighters with pyrokinetic abilities fight spontaneous human combustion.",
    episodes: 48,
    status: 'Completed',
    studio: 'David Production',
    animepaheSlug: '6789abcd-ef12-3456-7890-abcdef123456'
  },
  {
    id: 56,
    title: "Vinland Saga",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.8,
    year: 2019,
    genre: "Action, Adventure, Drama, Historical",
    description: "A young Viking seeks revenge against the man who killed his father.",
    episodes: 48,
    status: 'Ongoing',
    studio: 'Wit Studio',
    animepaheSlug: '789abcde-f123-4567-8901-bcdef1234567'
  },
  {
    id: 57,
    title: "Made in Abyss",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 2017,
    genre: "Adventure, Drama, Fantasy, Mystery",
    description: "A girl and a robot boy explore the dangerous depths of a mysterious abyss.",
    episodes: 25,
    status: 'Ongoing',
    studio: 'Kinema Citrus',
    animepaheSlug: '89abcdef-1234-5678-9012-cdef12345678'
  },
  {
    id: 58,
    title: "Mob Psycho 100",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.6,
    year: 2016,
    genre: "Action, Comedy, Supernatural",
    description: "A psychic middle schooler tries to live a normal life while controlling his powers.",
    episodes: 37,
    status: 'Completed',
    studio: 'Bones',
    animepaheSlug: '9abcdef1-2345-6789-0123-def123456789'
  },
  {
    id: 59,
    title: "Konosuba",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2016,
    genre: "Adventure, Comedy, Fantasy",
    description: "A shut-in is reincarnated in a fantasy world with a useless goddess.",
    episodes: 20,
    status: 'Ongoing',
    studio: 'Studio Deen',
    animepaheSlug: 'abcdef12-3456-7890-1234-ef123456789a'
  },

  // More Classic & Popular Anime
  {
    id: 60,
    title: "Yu Yu Hakusho",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.5,
    year: 1992,
    genre: "Action, Adventure, Martial Arts, Supernatural",
    description: "A delinquent becomes a spirit detective after dying and being revived.",
    episodes: 112,
    status: 'Completed',
    studio: 'Pierrot',
    animepaheSlug: 'bcdef123-4567-8901-2345-f123456789ab'
  },
  {
    id: 61,
    title: "Rurouni Kenshin",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.5,
    year: 1996,
    genre: "Action, Adventure, Drama, Historical, Romance",
    description: "A former assassin wanders Japan with a reverse-blade sword, seeking redemption.",
    episodes: 95,
    status: 'Completed',
    studio: 'Gallop',
    animepaheSlug: 'cdef1234-5678-9012-3456-123456789abc'
  },
  {
    id: 62,
    title: "Trigun",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 1998,
    genre: "Action, Adventure, Comedy, Drama, Sci-Fi",
    description: "A gunman with a bounty on his head tries to live peacefully on a desert planet.",
    episodes: 26,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'def12345-6789-0123-4567-23456789abcd'
  },
  {
    id: 63,
    title: "Great Teacher Onizuka",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 1999,
    genre: "Comedy, Drama, School, Slice of Life",
    description: "A former gang member becomes a teacher to win over the most difficult class.",
    episodes: 43,
    status: 'Completed',
    studio: 'Pierrot',
    animepaheSlug: 'ef123456-789a-bcde-f123-3456789abcde'
  },
  {
    id: 64,
    title: "Inuyasha",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 2000,
    genre: "Action, Adventure, Comedy, Historical, Romance, Supernatural",
    description: "A modern girl is transported to feudal Japan where she meets a half-demon.",
    episodes: 193,
    status: 'Completed',
    studio: 'Sunrise',
    animepaheSlug: 'f1234567-89ab-cdef-1234-456789abcdef'
  },
  {
    id: 65,
    title: "Sailor Moon",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.8,
    year: 1992,
    genre: "Action, Magic, Romance, Shoujo",
    description: "A schoolgirl transforms into a magical warrior to fight evil forces.",
    episodes: 200,
    status: 'Completed',
    studio: 'Toei Animation',
    animepaheSlug: '12345678-9abc-def1-2345-56789abcdef1'
  },
  {
    id: 66,
    title: "Dragon Ball",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 1986,
    genre: "Action, Adventure, Comedy, Martial Arts",
    description: "A young boy with a monkey tail searches for the Dragon Balls.",
    episodes: 153,
    status: 'Completed',
    studio: 'Toei Animation',
    animepaheSlug: '23456789-abcd-ef12-3456-6789abcdef12'
  },
  {
    id: 67,
    title: "Saint Seiya",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.3,
    year: 1986,
    genre: "Action, Adventure, Fantasy, Mythology",
    description: "Young warriors fight to protect the reincarnation of the goddess Athena.",
    episodes: 114,
    status: 'Completed',
    studio: 'Toei Animation',
    animepaheSlug: '3456789a-bcde-f123-4567-789abcdef123'
  },
  {
    id: 68,
    title: "Captain Tsubasa",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 1983,
    genre: "Drama, School, Sports",
    description: "A young boy dreams of becoming the best soccer player in the world.",
    episodes: 128,
    status: 'Completed',
    studio: 'Tsuchida Production',
    animepaheSlug: '456789ab-cdef-1234-5678-89abcdef1234'
  },
  {
    id: 69,
    title: "Fist of the North Star",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 1984,
    genre: "Action, Drama, Martial Arts, Sci-Fi",
    description: "A martial artist fights in a post-apocalyptic world using a deadly fighting style.",
    episodes: 109,
    status: 'Completed',
    studio: 'Toei Animation',
    animepaheSlug: '56789abc-def1-2345-6789-9abcdef12345'
  },
  {
    id: 70,
    title: "Ranma ½",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 1989,
    genre: "Action, Comedy, Martial Arts, Romance",
    description: "A martial artist cursed to change gender when splashed with water.",
    episodes: 161,
    status: 'Completed',
    studio: 'Studio Deen',
    animepaheSlug: '6789abcd-ef12-3456-7890-abcdef123456'
  },

  // More Modern Hits
  {
    id: 71,
    title: "Black Clover",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2017,
    genre: "Action, Comedy, Fantasy, Magic",
    description: "A boy born without magic aims to become the Wizard King in a world where magic is everything.",
    episodes: 170,
    status: 'Completed',
    studio: 'Pierrot',
    animepaheSlug: '789abcde-f123-4567-8901-bcdef1234567'
  },
  {
    id: 72,
    title: "Seven Deadly Sins",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.8,
    year: 2014,
    genre: "Action, Adventure, Ecchi, Fantasy, Magic",
    description: "A princess seeks the help of disbanded knights to reclaim her kingdom.",
    episodes: 96,
    status: 'Completed',
    studio: 'A-1 Pictures',
    animepaheSlug: '89abcdef-1234-5678-9012-cdef12345678'
  },
  {
    id: 73,
    title: "Fairy Tail",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 2009,
    genre: "Action, Adventure, Comedy, Fantasy, Magic",
    description: "A dragon slayer joins a magical guild and goes on adventures with his friends.",
    episodes: 328,
    status: 'Completed',
    studio: 'A-1 Pictures',
    animepaheSlug: '9abcdef1-2345-6789-0123-def123456789'
  },
  {
    id: 74,
    title: "Food Wars!",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.3,
    year: 2015,
    genre: "Comedy, Ecchi, School, Shounen",
    description: "A young chef attends an elite culinary school where cooking battles determine everything.",
    episodes: 86,
    status: 'Completed',
    studio: 'J.C.Staff',
    animepaheSlug: 'abcdef12-3456-7890-1234-ef123456789a'
  },
  {
    id: 75,
    title: "Assassination Classroom",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2015,
    genre: "Action, Comedy, School, Shounen",
    description: "Students must assassinate their alien teacher who threatens to destroy Earth.",
    episodes: 47,
    status: 'Completed',
    studio: 'Lerche',
    animepaheSlug: 'bcdef123-4567-8901-2345-f123456789ab'
  },

  // More Anime from Different Genres
  {
    id: 76,
    title: "Toradora!",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2008,
    genre: "Comedy, Drama, Romance, School, Slice of Life",
    description: "Two students with crushes on each other's best friends decide to help each other.",
    episodes: 25,
    status: 'Completed',
    studio: 'J.C.Staff',
    animepaheSlug: 'cdef1234-5678-9012-3456-123456789abc'
  },
  {
    id: 77,
    title: "Love Live! School Idol Project",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.4,
    year: 2013,
    genre: "Comedy, Music, School, Slice of Life",
    description: "High school girls form an idol group to save their school from closing.",
    episodes: 26,
    status: 'Completed',
    studio: 'Sunrise',
    animepaheSlug: 'def12345-6789-0123-4567-23456789abcd'
  },
  {
    id: 78,
    title: "Lucky Star",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.7,
    year: 2007,
    genre: "Comedy, School, Slice of Life",
    description: "Four high school girls discuss everyday life and otaku culture.",
    episodes: 24,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: 'ef123456-789a-bcde-f123-3456789abcde'
  },
  {
    id: 79,
    title: "Azumanga Daioh",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2002,
    genre: "Comedy, School, Slice of Life",
    description: "The daily lives of six high school girls and their teachers.",
    episodes: 26,
    status: 'Completed',
    studio: 'J.C.Staff',
    animepaheSlug: 'f1234567-89ab-cdef-1234-456789abcdef'
  },
  {
    id: 80,
    title: "Nichijou",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2011,
    genre: "Comedy, School, Slice of Life",
    description: "The absurd daily lives of a group of friends in a surreal world.",
    episodes: 26,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: '12345678-9abc-def1-2345-56789abcdef1'
  },

  // Horror & Thriller
  {
    id: 81,
    title: "Higurashi: When They Cry",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 2006,
    genre: "Horror, Mystery, Psychological, Thriller",
    description: "A series of mysterious deaths plague a small village during an annual festival.",
    episodes: 50,
    status: 'Completed',
    studio: 'Studio Deen',
    animepaheSlug: '23456789-abcd-ef12-3456-6789abcdef12'
  },
  {
    id: 82,
    title: "Hell Girl",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.6,
    year: 2005,
    genre: "Horror, Mystery, Psychological, Supernatural",
    description: "A mysterious girl ferries people to hell when they access a supernatural website.",
    episodes: 90,
    status: 'Completed',
    studio: 'Studio Deen',
    animepaheSlug: '3456789a-bcde-f123-4567-789abcdef123'
  },
  {
    id: 83,
    title: "Elfen Lied",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.5,
    year: 2004,
    genre: "Action, Drama, Horror, Psychological, Romance, Supernatural",
    description: "A mutant girl with deadly powers escapes from a research facility.",
    episodes: 13,
    status: 'Completed',
    studio: 'Arms',
    animepaheSlug: '456789ab-cdef-1234-5678-89abcdef1234'
  },

  // More Sports Anime
  {
    id: 84,
    title: "Prince of Tennis",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2001,
    genre: "Comedy, School, Sports",
    description: "A tennis prodigy joins his middle school tennis team and faces various opponents.",
    episodes: 178,
    status: 'Completed',
    studio: 'Trans Arts',
    animepaheSlug: '56789abc-def1-2345-6789-9abcdef12345'
  },
  {
    id: 85,
    title: "Eyeshield 21",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2005,
    genre: "Comedy, School, Sports",
    description: "A timid boy becomes the secret weapon of his school's American football team.",
    episodes: 145,
    status: 'Completed',
    studio: 'Gallop',
    animepaheSlug: '6789abcd-ef12-3456-7890-abcdef123456'
  },

  // More Recent Hits
  {
    id: 86,
    title: "Horimiya",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2021,
    genre: "Comedy, Romance, School, Shounen",
    description: "Two students discover each other's hidden sides and fall in love.",
    episodes: 13,
    status: 'Completed',
    studio: 'CloverWorks',
    animepaheSlug: '789abcde-f123-4567-8901-bcdef1234567'
  },
  {
    id: 87,
    title: "Wonder Egg Priority",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.8,
    year: 2021,
    genre: "Drama, Fantasy, Psychological",
    description: "A girl enters dream worlds to save other girls from suicide.",
    episodes: 12,
    status: 'Completed',
    studio: 'CloverWorks',
    animepaheSlug: '89abcdef-1234-5678-9012-cdef12345678'
  },
  {
    id: 88,
    title: "Odd Taxi",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 2021,
    genre: "Drama, Mystery, Psychological",
    description: "A walrus taxi driver gets involved in a mystery surrounding a missing girl.",
    episodes: 13,
    status: 'Completed',
    studio: 'OLM',
    animepaheSlug: '9abcdef1-2345-6789-0123-def123456789'
  },
  {
    id: 89,
    title: "86",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2021,
    genre: "Action, Drama, Mecha, Military, Sci-Fi",
    description: "Soldiers fight autonomous drones while being commanded remotely by handlers.",
    episodes: 23,
    status: 'Completed',
    studio: 'A-1 Pictures',
    animepaheSlug: 'abcdef12-3456-7890-1234-ef123456789a'
  },
  {
    id: 90,
    title: "Ranking of Kings",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2021,
    genre: "Adventure, Drama, Fantasy",
    description: "A deaf prince proves his worth despite being underestimated by everyone.",
    episodes: 23,
    status: 'Completed',
    studio: 'Wit Studio',
    animepaheSlug: 'bcdef123-4567-8901-2345-f123456789ab'
  },

  // More Classic & Influential Anime
  {
    id: 91,
    title: "Serial Experiments Lain",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 1998,
    genre: "Drama, Mystery, Psychological, Sci-Fi, Supernatural",
    description: "A girl becomes obsessed with computers and the internet, blurring reality and virtual worlds.",
    episodes: 13,
    status: 'Completed',
    studio: 'Triangle Staff',
    animepaheSlug: 'cdef1234-5678-9012-3456-123456789abc'
  },
  {
    id: 92,
    title: "Perfect Blue",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 1997,
    genre: "Drama, Horror, Psychological, Thriller",
    description: "A pop idol's transition to acting triggers a psychological breakdown.",
    episodes: 1,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'def12345-6789-0123-4567-23456789abcd'
  },
  {
    id: 93,
    title: "Paprika",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.7,
    year: 2006,
    genre: "Fantasy, Horror, Mystery, Psychological, Sci-Fi, Thriller",
    description: "A device that allows therapists to enter patients' dreams is stolen.",
    episodes: 1,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'ef123456-789a-bcde-f123-3456789abcde'
  },
  {
    id: 94,
    title: "Jin-Roh: The Wolf Brigade",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.4,
    year: 1999,
    genre: "Action, Drama, Military, Police, Political, Psychological",
    description: "A member of an elite police unit questions his loyalty after a tragic encounter.",
    episodes: 1,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: 'f1234567-89ab-cdef-1234-456789abcdef'
  },
  {
    id: 95,
    title: "Millennium Actress",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 2001,
    genre: "Adventure, Drama, Fantasy, Historical, Romance",
    description: "A documentary filmmaker interviews a reclusive actress about her career.",
    episodes: 1,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: '12345678-9abc-def1-2345-56789abcdef1'
  },

  // More Modern Popular Anime
  {
    id: 96,
    title: "Kaguya-sama: Love is War",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2019,
    genre: "Comedy, Psychological, Romance, School, Seinen",
    description: "Two student council members engage in psychological warfare to make the other confess their love.",
    episodes: 37,
    status: 'Completed',
    studio: 'A-1 Pictures',
    animepaheSlug: '23456789-abcd-ef12-3456-6789abcdef12'
  },
  {
    id: 97,
    title: "Rent-a-Girlfriend",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 6.9,
    year: 2020,
    genre: "Comedy, Drama, Romance, School, Shounen",
    description: "A college student rents a girlfriend after being dumped by his real girlfriend.",
    episodes: 36,
    status: 'Ongoing',
    studio: 'TMS Entertainment',
    animepaheSlug: '3456789a-bcde-f123-4567-789abcdef123'
  },
  {
    id: 98,
    title: "Uzaki-chan Wants to Hang Out!",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.1,
    year: 2020,
    genre: "Comedy, Romance, School, Slice of Life",
    description: "An energetic underclassman constantly bothers her introverted senior.",
    episodes: 25,
    status: 'Completed',
    studio: 'ENGI',
    animepaheSlug: '456789ab-cdef-1234-5678-89abcdef1234'
  },
  {
    id: 99,
    title: "The Quintessential Quintuplets",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.6,
    year: 2019,
    genre: "Comedy, Drama, Romance, School, Shounen",
    description: "A poor student tutors five identical quintuplet sisters who hate studying.",
    episodes: 24,
    status: 'Completed',
    studio: 'Tezuka Productions',
    animepaheSlug: '56789abc-def1-2345-6789-9abcdef12345'
  },
  {
    id: 100,
    title: "Darling in the FranXX",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.2,
    year: 2018,
    genre: "Action, Drama, Mecha, Romance, Sci-Fi",
    description: "Children pilot giant mechs in pairs to fight mysterious creatures.",
    episodes: 24,
    status: 'Completed',
    studio: 'Trigger',
    animepaheSlug: '6789abcd-ef12-3456-7890-abcdef123456'
  }
];

// Helper function to get anime by genre
export const getAnimeByGenre = (genre: string): Anime[] => {
  return animeDatabase.filter(anime => 
    anime.genre.toLowerCase().includes(genre.toLowerCase())
  );
};

// Helper function to search anime
export const searchAnime = (query: string): Anime[] => {
  const lowercaseQuery = query.toLowerCase();
  return animeDatabase.filter(anime =>
    anime.title.toLowerCase().includes(lowercaseQuery) ||
    anime.genre.toLowerCase().includes(lowercaseQuery) ||
    anime.description.toLowerCase().includes(lowercaseQuery) ||
    anime.studio.toLowerCase().includes(lowercaseQuery)
  );
};

// Get all unique genres
export const getAllGenres = (): string[] => {
  const genreSet = new Set<string>();
  animeDatabase.forEach(anime => {
    anime.genre.split(', ').forEach(genre => genreSet.add(genre.trim()));
  });
  return Array.from(genreSet).sort();
};