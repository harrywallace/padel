import { motion } from 'motion/react';
import { ChevronLeft, Trophy, Medal, TrendingUp, TrendingDown } from 'lucide-react';

interface RankingsProps {
  onBack: () => void;
}

export function Rankings({ onBack }: RankingsProps) {
  const players = [
    { rank: 1, name: 'Arturo Coello', points: 12450, trend: 'up', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
    { rank: 2, name: 'Agustín Tapia', points: 12100, trend: 'up', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop' },
    { rank: 3, name: 'Alejandro Galán', points: 11800, trend: 'down', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4Q4XBmYWBid7Ab4J1UooTpst6KkgXCovh4X1ug3zhi8fnE9c3rBiAMZPk2YPome-855t3LPKtBkAg7XEdwuNTJGNahcFpDGvE6Fbswh1C5_AIZfSnaxkKY0_IFgvM0OgGpWJYusHE8WEcYjEpmERQyoBO-Pv4jLE8jZkQ_LGWt7BZOeXORbnZk_SIICjsCmd1gFMe_E3NbYgV9bAzQ83Y5UE_xwEHOsSDogGJ3L_0A-GmprLwDXLXeSsNQB_VR9IrghThGtcke2j' },
    { rank: 4, name: 'Juan Lebrón', points: 11200, trend: 'down', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { rank: 5, name: 'Franco Stupaczuk', points: 10500, trend: 'up', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop' },
    { rank: 6, name: 'Martín Di Nenno', points: 10450, trend: 'up', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
    { rank: 7, name: 'Paquito Navarro', points: 9800, trend: 'down', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop' },
    { rank: 8, name: 'Fede Chingotto', points: 9600, trend: 'up', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pt-8 pb-32">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-headline font-bold mb-8 hover:opacity-70 transition-opacity active:scale-95"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Menu
      </button>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-primary" />
          <h2 className="font-headline text-[3rem] leading-none font-bold tracking-tighter">Regional Rankings</h2>
        </div>
        <p className="text-on-surface-variant font-medium opacity-70">Top players in the London Metropolitan Area.</p>
      </section>

      <div className="space-y-4">
        {players.map((player, idx) => (
          <motion.div
            key={player.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`flex items-center justify-between p-4 rounded-2xl border transition-all hover:shadow-md ${
              player.name.includes('Alejandro') 
                ? 'bg-primary-container/10 border-primary/20 shadow-sm' 
                : 'bg-surface-container-lowest border-outline-variant/10'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 font-headline font-black text-xl text-on-surface-variant/40">
                {player.rank === 1 ? <Medal className="w-6 h-6 text-yellow-500" /> : player.rank}
              </div>
              <img 
                src={player.avatar} 
                alt={player.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-headline font-bold text-on-surface">{player.name}</h3>
                <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">{player.points} PTS</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {player.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-primary" />
              ) : (
                <TrendingDown className="w-4 h-4 text-error" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
