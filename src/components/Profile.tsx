import { motion } from 'motion/react';
import { MOCK_PLAYER, RECENT_MATCH_HISTORY } from '../constants';

export function Profile() {
  return (
    <main className="max-w-md mx-auto px-6 pt-8 space-y-10 pb-32">
      {/* Player Identity Section */}
      <section className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-lowest shadow-sm">
            <img
              alt="Player Avatar"
              className="w-full h-full object-cover"
              src={MOCK_PLAYER.avatar}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary-container px-3 py-1 rounded-full shadow-sm">
            <span className="font-headline text-on-secondary-container text-[10px] font-bold tracking-tight">#12 London</span>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">{MOCK_PLAYER.name}</h2>
          <p className="font-sans text-sm text-on-surface-variant">{MOCK_PLAYER.location}</p>
        </div>
      </section>

      {/* Signature Score Element */}
      <section className="flex flex-col items-center py-4">
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* SVG Progress Ring */}
          <svg className="absolute w-full h-full -rotate-90">
            <circle
              className="text-surface-container-high"
              cx="96"
              cy="96"
              fill="transparent"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
            />
            <motion.circle
              initial={{ strokeDashoffset: 552.92 }}
              animate={{ strokeDashoffset: 138.23 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-primary"
              cx="96"
              cy="96"
              fill="transparent"
              r="88"
              stroke="currentColor"
              strokeDasharray="552.92"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </svg>
          <div className="flex flex-col items-center text-center">
            <span className="font-headline text-6xl font-bold tracking-tighter text-primary">{MOCK_PLAYER.score}</span>
            <span className="font-headline text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mt-1">PadelApp Score</span>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-3 gap-3">
        {[
          { label: 'Matches', value: MOCK_PLAYER.matches },
          { label: 'Win Rate', value: `${MOCK_PLAYER.winRate}%` },
          { label: 'Monthly', value: `+${MOCK_PLAYER.monthlyChange}`, highlight: true },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="font-headline text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider">{stat.label}</span>
            <span className={`font-headline text-xl font-bold ${stat.highlight ? 'text-primary' : 'text-on-surface'}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </section>

      {/* Score Breakdown */}
      <section className="bg-surface-container-low p-6 rounded-2xl space-y-6">
        <h3 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">Performance Breakdown</h3>
        <div className="space-y-5">
          {[
            { label: 'Consistency', value: MOCK_PLAYER.consistency },
            { label: 'Win rate', value: MOCK_PLAYER.winRate },
            { label: 'Opponent strength', value: MOCK_PLAYER.opponentStrength },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-sans text-sm font-medium">{stat.label}</span>
                <span className="font-headline text-xs font-bold text-primary">{stat.value}%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Matches */}
      <section className="space-y-6 pb-8">
        <h3 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">Recent Matches</h3>
        <div className="space-y-4">
          {RECENT_MATCH_HISTORY.map((match) => (
            <motion.div
              key={match.id}
              whileHover={{ scale: 0.99 }}
              className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors"
            >
              <div className="flex gap-4 items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  match.result === 'W' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  <span className="font-headline font-bold text-sm">{match.result}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-bold">vs. {match.opponent}</p>
                  <p className="font-sans text-[11px] text-on-surface-variant">{match.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-headline font-bold text-on-surface">{match.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <div className="fixed bottom-24 left-0 w-full px-6 z-40 max-w-md mx-auto right-0">
        <button 
          onClick={() => alert('Searching for games near you...')}
          className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-full font-headline font-bold text-base shadow-lg transition-all active:scale-95 hover:shadow-xl hover:brightness-110"
        >
          Find a game near me
        </button>
      </div>
    </main>
  );
}
