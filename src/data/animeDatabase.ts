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
  animepaheSlug: string; // URL slug for animepahe.ru
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
    animepaheSlug: 'shingeki-no-kyojin'
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
    animepaheSlug: 'kimetsu-no-yaiba'
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
    animepaheSlug: 'one-piece'
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
    animepaheSlug: 'naruto'
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
    animepaheSlug: 'dragon-ball-z'
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
    animepaheSlug: 'boku-no-hero-academia'
  },

  // Popular Seinen
  {
    id: 7,
    title: "Death Note",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 2006,
    genre: "Psychological, Supernatural, Thriller",
    description: "A high school student finds a supernatural notebook that kills anyone whose name is written in it.",
    episodes: 37,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'death-note'
  },
  {
    id: 8,
    title: "Tokyo Ghoul",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2014,
    genre: "Action, Horror, Supernatural",
    description: "A college student becomes a half-ghoul after a deadly encounter.",
    episodes: 48,
    status: 'Completed',
    studio: 'Pierrot',
    animepaheSlug: 'tokyo-ghoul'
  },
  {
    id: 9,
    title: "Berserk",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 1997,
    genre: "Action, Adventure, Drama, Fantasy, Horror",
    description: "A lone mercenary fights demons in a dark medieval world.",
    episodes: 25,
    status: 'Completed',
    studio: 'OLM',
    animepaheSlug: 'berserk'
  },
  {
    id: 10,
    title: "Monster",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.1,
    year: 2004,
    genre: "Drama, Horror, Mystery, Psychological, Thriller",
    description: "A doctor's life changes after saving a young boy who grows up to be a serial killer.",
    episodes: 74,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'monster'
  },

  // Romance & Drama
  {
    id: 11,
    title: "Your Name",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2016,
    genre: "Romance, Drama, Supernatural",
    description: "Two teenagers share a profound, magical connection through their dreams.",
    episodes: 1,
    status: 'Completed',
    studio: 'CoMix Wave Films',
    animepaheSlug: 'kimi-no-na-wa'
  },
  {
    id: 12,
    title: "A Silent Voice",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2016,
    genre: "Drama, Romance, School",
    description: "A former bully seeks redemption by helping the deaf girl he once tormented.",
    episodes: 1,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: 'koe-no-katachi'
  },
  {
    id: 13,
    title: "Weathering with You",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2019,
    genre: "Romance, Drama, Supernatural",
    description: "A boy meets a girl who can control the weather in modern Tokyo.",
    episodes: 1,
    status: 'Completed',
    studio: 'CoMix Wave Films',
    animepaheSlug: 'tenki-no-ko'
  },
  {
    id: 14,
    title: "Violet Evergarden",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.6,
    year: 2018,
    genre: "Drama, Fantasy, Slice of Life",
    description: "A former soldier learns to understand emotions while working as an Auto Memory Doll.",
    episodes: 13,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: 'violet-evergarden'
  },

  // Studio Ghibli
  {
    id: 15,
    title: "Spirited Away",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.3,
    year: 2001,
    genre: "Adventure, Family, Fantasy",
    description: "A girl enters a world ruled by gods and witches while trying to save her parents.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: 'sen-to-chihiro-no-kamikakushi'
  },
  {
    id: 16,
    title: "Princess Mononoke",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 1997,
    genre: "Adventure, Drama, Fantasy",
    description: "A young warrior gets involved in a struggle between forest gods and humans.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: 'mononoke-hime'
  },
  {
    id: 17,
    title: "Howl's Moving Castle",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2004,
    genre: "Adventure, Drama, Fantasy, Romance",
    description: "A young woman is cursed with old age and seeks help from a wizard.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: 'howl-no-ugoku-shiro'
  },
  {
    id: 18,
    title: "My Neighbor Totoro",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 1988,
    genre: "Adventure, Family, Fantasy",
    description: "Two sisters discover magical creatures in the countryside.",
    episodes: 1,
    status: 'Completed',
    studio: 'Studio Ghibli',
    animepaheSlug: 'tonari-no-totoro'
  },

  // Slice of Life
  {
    id: 19,
    title: "K-On!",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2009,
    genre: "Comedy, Music, School, Slice of Life",
    description: "High school girls form a light music club and learn to play instruments.",
    episodes: 39,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: 'k-on'
  },
  {
    id: 20,
    title: "Clannad",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.9,
    year: 2007,
    genre: "Drama, Romance, School, Slice of Life",
    description: "A delinquent student's life changes when he meets a girl trying to revive the drama club.",
    episodes: 47,
    status: 'Completed',
    studio: 'Kyoto Animation',
    animepaheSlug: 'clannad'
  },

  // Thriller & Mystery
  {
    id: 21,
    title: "Steins;Gate",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 2011,
    genre: "Drama, Sci-Fi, Thriller",
    description: "A group of friends accidentally discover time travel through a microwave.",
    episodes: 24,
    status: 'Completed',
    studio: 'White Fox',
    animepaheSlug: 'steins-gate'
  },
  {
    id: 22,
    title: "Psycho-Pass",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2012,
    genre: "Action, Psychological, Sci-Fi, Thriller",
    description: "In a dystopian future, a system judges people's criminal potential.",
    episodes: 41,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: 'psycho-pass'
  },
  {
    id: 23,
    title: "Erased",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.5,
    year: 2016,
    genre: "Drama, Mystery, Psychological, Thriller",
    description: "A man with the ability to go back in time tries to prevent a series of murders.",
    episodes: 12,
    status: 'Completed',
    studio: 'A-1 Pictures',
    animepaheSlug: 'boku-dake-ga-inai-machi'
  },

  // Sports
  {
    id: 24,
    title: "Haikyuu!!",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 2014,
    genre: "Comedy, Drama, School, Sports",
    description: "A short boy joins his high school volleyball team and aims for nationals.",
    episodes: 85,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: 'haikyuu'
  },
  {
    id: 25,
    title: "Kuroko's Basketball",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2012,
    genre: "Comedy, School, Sports",
    description: "A phantom sixth man helps his new team compete against the Generation of Miracles.",
    episodes: 75,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: '1335800c-a317-381d-6dde-49594db6acd9'
  },

  // Isekai
  {
    id: 26,
    title: "Re:Zero",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2016,
    genre: "Drama, Fantasy, Psychological, Thriller",
    description: "A boy is transported to a fantasy world where he can return from death.",
    episodes: 50,
    status: 'Ongoing',
    studio: 'White Fox',
    animepaheSlug: 're-zero-kara-hajimeru-isekai-seikatsu'
  },
  {
    id: 27,
    title: "That Time I Got Reincarnated as a Slime",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2018,
    genre: "Adventure, Comedy, Fantasy",
    description: "A man reincarnated as a slime builds a nation of monsters.",
    episodes: 48,
    status: 'Ongoing',
    studio: '8bit',
    animepaheSlug: 'tensei-shitara-slime-datta-ken'
  },
  {
    id: 28,
    title: "Overlord",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.9,
    year: 2015,
    genre: "Action, Adventure, Fantasy",
    description: "A player becomes trapped in a virtual reality game as his character, an undead overlord.",
    episodes: 52,
    status: 'Ongoing',
    studio: 'Madhouse',
    animepaheSlug: 'overlord'
  },

  // Mecha
  {
    id: 29,
    title: "Neon Genesis Evangelion",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.5,
    year: 1995,
    genre: "Action, Drama, Mecha, Psychological",
    description: "Teenagers pilot giant mechs to fight mysterious beings called Angels.",
    episodes: 26,
    status: 'Completed',
    studio: 'Gainax',
    animepaheSlug: 'neon-genesis-evangelion'
  },
  {
    id: 30,
    title: "Code Geass",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.9,
    year: 2006,
    genre: "Drama, Mecha, Military, School",
    description: "A prince gains the power of absolute obedience and leads a rebellion.",
    episodes: 50,
    status: 'Completed',
    studio: 'Sunrise',
    animepaheSlug: 'code-geass-hangyaku-no-lelouch'
  },

  // Horror
  {
    id: 31,
    title: "Another",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.8,
    year: 2012,
    genre: "Horror, Mystery, School, Thriller",
    description: "A transfer student uncovers a deadly curse affecting his new class.",
    episodes: 12,
    status: 'Completed',
    studio: 'P.A. Works',
    animepaheSlug: 'another'
  },
  {
    id: 32,
    title: "Parasyte",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.3,
    year: 2014,
    genre: "Action, Drama, Horror, Psychological, Sci-Fi",
    description: "A teenager's hand is infected by an alien parasite that develops its own consciousness.",
    episodes: 24,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'kiseijuu-sei-no-kakuritsu'
  },

  // Comedy
  {
    id: 33,
    title: "One Punch Man",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.8,
    year: 2015,
    genre: "Action, Comedy, Superhero",
    description: "A hero who can defeat any enemy with a single punch struggles with boredom.",
    episodes: 24,
    status: 'Ongoing',
    studio: 'Madhouse',
    animepaheSlug: 'one-punch-man'
  },
  {
    id: 34,
    title: "Mob Psycho 100",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.6,
    year: 2016,
    genre: "Action, Comedy, Supernatural",
    description: "A psychic middle schooler tries to live a normal life while controlling his powers.",
    episodes: 37,
    status: 'Completed',
    studio: 'Bones',
    animepaheSlug: 'mob-psycho-100'
  },
  {
    id: 35,
    title: "Konosuba",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.1,
    year: 2016,
    genre: "Adventure, Comedy, Fantasy",
    description: "A shut-in is reincarnated in a fantasy world with a useless goddess.",
    episodes: 20,
    status: 'Ongoing',
    studio: 'Studio Deen',
    animepaheSlug: 'kono-subarashii-sekai-ni-shukufuku-wo'
  },

  // Recent Popular
  {
    id: 36,
    title: "Jujutsu Kaisen",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.6,
    year: 2020,
    genre: "Action, School, Supernatural",
    description: "Students fight cursed spirits in a world where negative emotions manifest as monsters.",
    episodes: 24,
    status: 'Ongoing',
    studio: 'Mappa',
    animepaheSlug: 'jujutsu-kaisen'
  },
  {
    id: 37,
    title: "Chainsaw Man",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2022,
    genre: "Action, Horror, Supernatural",
    description: "A young man merges with his pet devil to become Chainsaw Man.",
    episodes: 12,
    status: 'Ongoing',
    studio: 'Mappa',
    animepaheSlug: 'chainsaw-man'
  },
  {
    id: 38,
    title: "Spy x Family",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.3,
    year: 2022,
    genre: "Action, Comedy, Family",
    description: "A spy creates a fake family for a mission, unaware his wife is an assassin and daughter is telepathic.",
    episodes: 25,
    status: 'Ongoing',
    studio: 'Wit Studio',
    animepaheSlug: 'spy-x-family'
  },
  {
    id: 39,
    title: "Tokyo Revengers",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 2021,
    genre: "Action, Drama, School, Supernatural",
    description: "A man travels back in time to save his girlfriend from a gang.",
    episodes: 37,
    status: 'Ongoing',
    studio: 'Liden Films',
    animepaheSlug: 'tokyo-revengers'
  },
  {
    id: 40,
    title: "Hell's Paradise",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2023,
    genre: "Action, Historical, Supernatural",
    description: "A ninja seeks immortality on a mysterious island to reunite with his wife.",
    episodes: 13,
    status: 'Ongoing',
    studio: 'Mappa',
    animepaheSlug: 'jigokuraku'
  },

  // Classic Anime
  {
    id: 41,
    title: "Cowboy Bebop",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.8,
    year: 1998,
    genre: "Action, Adventure, Drama, Sci-Fi, Space",
    description: "Bounty hunters travel through space in the year 2071.",
    episodes: 26,
    status: 'Completed',
    studio: 'Sunrise',
    animepaheSlug: 'cowboy-bebop'
  },
  {
    id: 42,
    title: "Fullmetal Alchemist: Brotherhood",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.5,
    year: 2009,
    genre: "Action, Adventure, Drama, Fantasy, Military",
    description: "Two brothers use alchemy to search for the Philosopher's Stone.",
    episodes: 64,
    status: 'Completed',
    studio: 'Bones',
    animepaheSlug: 'fullmetal-alchemist-brotherhood'
  },
  {
    id: 43,
    title: "Hunter x Hunter",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 9.0,
    year: 2011,
    genre: "Action, Adventure, Fantasy",
    description: "A young boy searches for his father while becoming a Hunter.",
    episodes: 148,
    status: 'Completed',
    studio: 'Madhouse',
    animepaheSlug: 'hunter-x-hunter-2011'
  },
  {
    id: 44,
    title: "Akira",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 1988,
    genre: "Action, Drama, Sci-Fi, Thriller",
    description: "A biker gang member gains psychic powers in post-apocalyptic Neo-Tokyo.",
    episodes: 1,
    status: 'Completed',
    studio: 'Akira Committee',
    animepaheSlug: 'akira'
  },
  {
    id: 45,
    title: "Ghost in the Shell",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.0,
    year: 1995,
    genre: "Action, Drama, Sci-Fi, Thriller",
    description: "A cyborg policewoman hunts a mysterious hacker in a cyberpunk future.",
    episodes: 1,
    status: 'Completed',
    studio: 'Production I.G',
    animepaheSlug: 'ghost-in-the-shell'
  },

  // More Recent Hits
  {
    id: 46,
    title: "The Promised Neverland",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.4,
    year: 2019,
    genre: "Drama, Horror, Mystery, Psychological, Thriller",
    description: "Children discover their orphanage is actually a farm where they're raised as food for demons.",
    episodes: 23,
    status: 'Completed',
    studio: 'CloverWorks',
    animepaheSlug: 'yakusoku-no-neverland'
  },
  {
    id: 47,
    title: "Dr. Stone",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.2,
    year: 2019,
    genre: "Adventure, Comedy, Sci-Fi",
    description: "A genius student uses science to rebuild civilization after humanity is petrified.",
    episodes: 58,
    status: 'Ongoing',
    studio: 'TMS Entertainment',
    animepaheSlug: 'dr-stone'
  },
  {
    id: 48,
    title: "Fire Force",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 7.7,
    year: 2019,
    genre: "Action, Supernatural",
    description: "Firefighters with pyrokinetic abilities fight spontaneous human combustion.",
    episodes: 48,
    status: 'Completed',
    studio: 'David Production',
    animepaheSlug: 'enen-no-shouboutai'
  },
  {
    id: 49,
    title: "Vinland Saga",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.8,
    year: 2019,
    genre: "Action, Adventure, Drama, Historical",
    description: "A young Viking seeks revenge against the man who killed his father.",
    episodes: 48,
    status: 'Ongoing',
    studio: 'Wit Studio',
    animepaheSlug: 'vinland-saga'
  },
  {
    id: 50,
    title: "Made in Abyss",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 8.7,
    year: 2017,
    genre: "Adventure, Drama, Fantasy, Mystery",
    description: "A girl and a robot boy explore the dangerous depths of a mysterious abyss.",
    episodes: 25,
    status: 'Ongoing',
    studio: 'Kinema Citrus',
    animepaheSlug: 'made-in-abyss'
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