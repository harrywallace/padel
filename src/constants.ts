import { Match, Tournament, League, Player, Post } from './types';

export const MOCK_PLAYER: Player = {
  id: '1',
  name: 'James Sterling',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDezJcctCVTFmy3zO9jOif1WzfwNPcv1ePiLOBcLVQ6Dj5oE1hOAsRRf5244e4UQQXr5PNHPC4PQLr3EeC-Scpw_MSMnMiBo_E6fOUXdcLOimApUTWbZlCQOgesCPTYWyZuFqWYIBdX_qMVu-3y-XF34FaO2ps162RplMvA_M28Y4ShNXwHCrPCvW6IuwGBZxAccC48nFMsn2kPMoPZsz3j5OLTaBVL9cVeQm90K4pfEaDoV9I-Mx9FEf_ONMAOTFiVD3wyr6R_dE_o',
  score: 612,
  location: 'London, United Kingdom',
  matches: 142,
  winRate: 68,
  monthlyChange: 68,
  consistency: 82,
  opponentStrength: 91,
};

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    team1: ['Alejandro Galán', 'Juan Lebrón'],
    team2: ['Arturo Coello', 'Agustín Tapia'],
    score: '6-3 / 6-4',
    venue: 'Club de Padel Somontes',
    location: 'Madrid, Spain',
    time: '2h ago',
    likes: 124,
    comments: 18,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrzUmg05ch7RSz7aKQTShBF344byzIpiJRv6Oo5HHO3hLmXSuFe4xf7LV_kNEl9vDcwEjsUdGHMy0SSakZzGl8K5ki-IMygGknXcy-GJ9sYUdTmK84zA6OCQcXiDBKSclfNzR9MJVKS5E_Yp10Gb5pKuI16VY0enPzMtiDVRnKSUNJZaZNG4jdbGFx2g2jRmpddism-W7Ss5u-xi27cHrYLLHWoFE1GdWTfdntgt0o5zlx3ZY8qLSZr8i-ieJfTglG3F8QYvudXBL3',
    isConfirmed: true,
  },
  {
    id: 'm2',
    team1: ['Marta Ortega', 'Gemma Triay'],
    team2: ['Ariana Sánchez', 'Paula Josemaría'],
    score: '7-5 / 6-2',
    venue: 'Padel House',
    location: 'Helsinki, Finland',
    time: '5h ago',
    likes: 89,
    comments: 7,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSArEJM05wpF2PvKaWTHVMaBybbQx22vEFU_ricY5v-xuTk3zoXKaESxS3jPapRfEXU6dplqU69FeZYcdqUlvZtf8Wgm9LxJam2S9H9Uk9qQw4T2Rxu65TXi0GIHNeSfCSL2FTo4q9z5OhKhDAB5DmjY3OGqkkyAWbMUTbgdP5sBSuLapsULAuNZnxgR8Ak_lTwMDYsAw3ES50C6uf3cwmNWjU3p45gbW8FcGQ4oBXtN7rJGv8GwxjO65LuFluDFw_r4ABq6zQGpQM',
    isConfirmed: true,
  },
  {
    id: 'm3',
    team1: ['F. Belasteguín', 'Mike Yanguas'],
    team2: ['Sanyo Gutiérrez', 'Momo González'],
    score: '6-2 / 7-6',
    venue: 'Rezidor Club',
    location: 'Dubai, UAE',
    time: 'Yesterday',
    likes: 245,
    comments: 32,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDybcLCyw0ZxZTkih2t24YOknPsxhHHyRFhJ8975KxgxRpuD0yO96q4c3UlzPL825WtMk4OakHgRBWeL3dVHkbyTP_JVxMHww__9IJCOmr3ivuabeAT3r6SOGIkYj7viItpjaib804g0FyUNV_miX_sLynf1JtpxJtO_6r5QMNF6C6R-phFbAu7dREp8M1WahGWzsBIXRqbBXsbZnj0PzIWpO8h5iGQNlYw35ABOuinJ-hC-TXccsrZigYFbo1RXv_1YBw6OFuirkWy',
    isConfirmed: true,
  },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    type: 'video',
    author: {
      name: 'Alejandro Galán',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4Q4XBmYWBid7Ab4J1UooTpst6KkgXCovh4X1ug3zhi8fnE9c3rBiAMZPk2YPome-855t3LPKtBkAg7XEdwuNTJGNahcFpDGvE6Fbswh1C5_AIZfSnaxkKY0_IFgvM0OgGpWJYusHE8WEcYjEpmERQyoBO-Pv4jLE8jZkQ_LGWt7BZOeXORbnZk_SIICjsCmd1gFMe_E3NbYgV9bAzQ83Y5UE_xwEHOsSDogGJ3L_0A-GmprLwDXLXeSsNQB_VR9IrghThGtcke2j',
    },
    time: '30m ago',
    likes: 452,
    comments: 24,
    content: 'https://videos.pexels.com/video-files/5644667/5644667-sd_360_640_25fps.mp4',
    poster: 'https://images.pexels.com/photos/5644667/pexels-photo-5644667.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Unbelievable point from today\'s training session! 🎾🔥 #padel #training',
  },
  {
    id: 'p2',
    type: 'match',
    author: {
      name: 'World Padel Tour',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrzUmg05ch7RSz7aKQTShBF344byzIpiJRv6Oo5HHO3hLmXSuFe4xf7LV_kNEl9vDcwEjsUdGHMy0SSakZzGl8K5ki-IMygGknXcy-GJ9sYUdTmK84zA6OCQcXiDBKSclfNzR9MJVKS5E_Yp10Gb5pKuI16VY0enPzMtiDVRnKSUNJZaZNG4jdbGFx2g2jRmpddism-W7Ss5u-xi27cHrYLLHWoFE1GdWTfdntgt0o5zlx3ZY8qLSZr8i-ieJfTglG3F8QYvudXBL3',
    },
    time: '2h ago',
    likes: 124,
    comments: 18,
    content: MOCK_MATCHES[0].image,
    matchData: MOCK_MATCHES[0],
  },
  {
    id: 'p3',
    type: 'photo',
    author: {
      name: 'Ariana Sánchez',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSArEJM05wpF2PvKaWTHVMaBybbQx22vEFU_ricY5v-xuTk3zoXKaESxS3jPapRfEXU6dplqU69FeZYcdqUlvZtf8Wgm9LxJam2S9H9Uk9qQw4T2Rxu65TXi0GIHNeSfCSL2FTo4q9z5OhKhDAB5DmjY3OGqkkyAWbMUTbgdP5sBSuLapsULAuNZnxgR8Ak_lTwMDYsAw3ES50C6uf3cwmNWjU3p45gbW8FcGQ4oBXtN7rJGv8GwxjO65LuFluDFw_r4ABq6zQGpQM',
    },
    time: '4h ago',
    likes: 312,
    comments: 12,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSArEJM05wpF2PvKaWTHVMaBybbQx22vEFU_ricY5v-xuTk3zoXKaESxS3jPapRfEXU6dplqU69FeZYcdqUlvZtf8Wgm9LxJam2S9H9Uk9qQw4T2Rxu65TXi0GIHNeSfCSL2FTo4q9z5OhKhDAB5DmjY3OGqkkyAWbMUTbgdP5sBSuLapsULAuNZnxgR8Ak_lTwMDYsAw3ES50C6uf3cwmNWjU3p45gbW8FcGQ4oBXtN7rJGv8GwxjO65LuFluDFw_r4ABq6zQGpQM',
    caption: 'Great atmosphere at the club today! 🎾✨',
  },
];

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    title: 'The Masters Cup',
    venue: 'Padel Pro Club',
    location: 'Madrid',
    date: 'Oct 24, 2024',
    capacity: [12, 32],
    entryFee: 45,
    minScore: 600,
  },
  {
    id: 't2',
    title: "Sunset Open '24",
    venue: 'Skyline Courts',
    location: 'Barcelona',
    date: 'Nov 12, 2024',
    capacity: [28, 32],
    entryFee: 30,
    skillLevel: 'Open Skill',
  },
];

export const MOCK_LEAGUES: League[] = [
  {
    id: 'l1',
    title: 'Summer Invitational',
    activePlayers: 16,
    rank: 2,
    week: 4,
    totalWeeks: 10,
    progress: 40,
  },
];

export const RECENT_MATCH_HISTORY = [
  { id: 'h1', opponent: 'Aris & Novak', time: 'Yesterday, 18:45', score: '6-4, 6-2', result: 'W' as const },
  { id: 'h2', opponent: 'Chen & Mike', time: '3 days ago', score: '3-6, 5-7', result: 'L' as const },
  { id: 'h3', opponent: 'Local Club Final', time: 'Oct 12, 14:00', score: '7-6, 6-3', result: 'W' as const },
  { id: 'h4', opponent: 'Sarah & Tom', time: 'Oct 09, 10:30', score: '6-0, 6-1', result: 'W' as const },
  { id: 'h5', opponent: 'Elite Pair X', time: 'Oct 05, 19:15', score: '2-6, 4-6', result: 'L' as const },
];
