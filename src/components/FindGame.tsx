import { motion } from 'motion/react';
import { ChevronLeft, MapPin, Users, Clock, Filter, Search } from 'lucide-react';

interface FindGameProps {
  onBack: () => void;
}

export function FindGame({ onBack }: FindGameProps) {
  const games = [
    {
      id: 'g1',
      club: 'Stratford Padel Club',
      level: 'Intermediate',
      time: 'Today, 18:00',
      players: 3,
      maxPlayers: 4,
      price: '£12.50',
      image: 'https://images.unsplash.com/photo-1626224580194-860c3d3148b4?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 'g2',
      club: 'Padel Social Club',
      level: 'Advanced',
      time: 'Tomorrow, 10:00',
      players: 2,
      maxPlayers: 4,
      price: '£15.00',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 'g3',
      club: 'The Padel Hub',
      level: 'Beginner',
      time: 'Today, 20:30',
      players: 1,
      maxPlayers: 4,
      price: '£10.00',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=200&auto=format&fit=crop',
    },
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pt-8 pb-32">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-headline font-bold hover:opacity-70 transition-opacity active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Menu
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-container-low rounded-full flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors">
            <Search className="w-5 h-5 text-on-surface-variant" />
          </div>
          <div className="w-10 h-10 bg-surface-container-low rounded-full flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors">
            <Filter className="w-5 h-5 text-on-surface-variant" />
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-headline text-[3rem] leading-none font-bold tracking-tighter mb-4">Find a Game</h2>
        <p className="text-on-surface-variant font-medium opacity-70">Join open matches near you.</p>
      </section>

      <div className="space-y-6">
        {games.map((game) => (
          <motion.article 
            key={game.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <img 
                src={game.image} 
                alt={game.club}
                className="w-24 h-24 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-xl font-bold text-on-surface">{game.club}</h3>
                  <span className="text-primary font-headline font-black text-lg">{game.price}</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant/60 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-bold">{game.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-bold">{game.players}/{game.maxPlayers}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    game.level === 'Advanced' ? 'bg-error/10 text-error' : 
                    game.level === 'Intermediate' ? 'bg-primary/10 text-primary' : 
                    'bg-secondary/10 text-secondary'
                  }`}>
                    {game.level}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Joined game at ${game.club}!`);
                    }}
                    className="bg-primary text-white px-6 py-2 rounded-full font-headline font-bold text-xs shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
                  >
                    Join Game
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
