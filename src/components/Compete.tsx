import { motion } from 'motion/react';
import { Calendar, MapPin, Trophy, Users, DollarSign } from 'lucide-react';
import { MOCK_TOURNAMENTS, MOCK_LEAGUES } from '../constants';

export function Compete() {
  return (
    <main className="max-w-7xl mx-auto pb-32">
      {/* Editorial Header Section */}
      <section className="px-6 pt-8 pb-12">
        <h2 className="font-headline text-[3.5rem] leading-none font-bold tracking-tighter mb-2">Compete</h2>
        <p className="text-on-surface-variant font-medium opacity-70">Prove your skill on the court.</p>
      </section>

      {/* Internal Tabs */}
      <nav className="px-6 mb-8 flex items-center gap-8 overflow-x-auto no-scrollbar">
        <button className="flex flex-col items-center gap-1 group transition-all active:scale-95">
          <span className="font-headline font-bold text-primary tracking-tight">Tournaments</span>
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </button>
        <button className="flex flex-col items-center gap-1 group opacity-40 transition-all active:scale-95 hover:opacity-100">
          <span className="font-headline font-bold text-on-surface tracking-tight group-hover:opacity-100">Leagues</span>
          <div className="w-1.5 h-1.5 bg-transparent rounded-full"></div>
        </button>
        <button className="flex flex-col items-center gap-1 group opacity-40 transition-all active:scale-95 hover:opacity-100">
          <span className="font-headline font-bold text-on-surface tracking-tight group-hover:opacity-100">Create</span>
          <div className="w-1.5 h-1.5 bg-transparent rounded-full"></div>
        </button>
      </nav>

      {/* Sub-tab A: Tournaments View */}
      <div className="px-6 grid gap-12">
        {MOCK_TOURNAMENTS.map((tournament) => (
          <motion.article
            key={tournament.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-surface-container-lowest p-8 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-headline text-[10px] font-bold uppercase tracking-widest">
                    {tournament.minScore ? `${tournament.minScore}+ score` : tournament.skillLevel}
                  </span>
                  <span className="text-on-surface-variant text-xs font-bold tracking-tighter flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {tournament.date}
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold tracking-tighter mb-2 text-on-surface">{tournament.title}</h3>
                <p className="text-on-surface-variant font-medium mb-6 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {tournament.venue}, {tournament.location}
                </p>
                <div className="space-y-4 max-w-sm">
                  <div className="flex justify-between items-end">
                    <span className="font-headline text-xs font-bold text-on-surface-variant">Player Capacity</span>
                    <span className="font-headline text-lg font-bold text-on-surface">{tournament.capacity[0]} / {tournament.capacity[1]}</span>
                  </div>
                  <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(tournament.capacity[0] / tournament.capacity[1]) * 100}%` }}
                      transition={{ duration: 1 }}
                      className="bg-primary h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end gap-6">
                <div className="text-right">
                  <p className="font-headline text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Entry Fee</p>
                  <p className="font-headline text-4xl font-black text-primary tracking-tighter">${tournament.entryFee}</p>
                </div>
                <button 
                  onClick={() => alert(`Joined ${tournament.title}!`)}
                  className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-full font-headline font-bold text-sm tracking-tight shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                >
                  Join Tournament
                </button>
              </div>
            </div>
            {/* Asymmetric Decorative Element */}
            <div className="absolute -bottom-4 -right-4 opacity-[0.03] pointer-events-none">
              <Trophy className="w-40 h-40" />
            </div>
          </motion.article>
        ))}
      </div>

      {/* Active Leagues Section */}
      <div className="mt-20 px-6">
        <h4 className="font-headline text-sm font-bold tracking-widest uppercase text-on-surface-variant/40 mb-8">Active Leagues</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_LEAGUES.map((league) => (
            <div 
              key={league.id} 
              onClick={() => alert(`Viewing ${league.title} details`)}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/5 cursor-pointer hover:bg-surface-container-low transition-colors active:scale-[0.99]"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h5 className="font-headline text-xl font-bold tracking-tight">{league.title}</h5>
                  <p className="text-on-surface-variant text-sm font-medium">{league.activePlayers} Players Active</p>
                </div>
                <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-headline text-[10px] font-bold">You're {league.rank}nd</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-on-surface-variant">
                  <span>Week {league.week} of {league.totalWeeks}</span>
                  <span>{league.progress}% Season Progress</span>
                </div>
                <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${league.progress}%` }}
                    transition={{ duration: 1 }}
                    className="bg-primary-container h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Host Competition Form Section */}
      <div className="mt-20 px-6 max-w-2xl">
        <h4 className="font-headline text-sm font-bold tracking-widest uppercase text-on-surface-variant/40 mb-8">Host Competition</h4>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            alert('Competition created successfully!');
          }}>
            <div className="space-y-2">
              <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Event Name</label>
              <input
                required
                className="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-sans focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Enter competition name"
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Competition Type</label>
                <div className="flex bg-surface-container-lowest p-1 rounded-lg">
                  <button className="flex-1 py-3 text-xs font-bold bg-primary text-white rounded-md transition-all" type="button">Tournament</button>
                  <button className="flex-1 py-3 text-xs font-bold text-on-surface-variant hover:bg-surface-variant/20 rounded-md transition-all" type="button">League</button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Privacy</label>
                <div className="flex bg-surface-container-lowest p-1 rounded-lg">
                  <button className="flex-1 py-3 text-xs font-bold text-on-surface-variant hover:bg-surface-variant/20 rounded-md transition-all" type="button">Private</button>
                  <button className="flex-1 py-3 text-xs font-bold bg-primary text-white rounded-md shadow-sm transition-all" type="button">Public</button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Location & Date</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-sans focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Club Name"
                  type="text"
                />
                <input
                  required
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-sans focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  type="date"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Max Players</label>
                <input
                  required
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-sans focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="32"
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Entry Fee ($)</label>
                <input
                  required
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-sans focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="0.00"
                  type="number"
                />
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-5 rounded-full font-headline font-bold text-lg tracking-tight shadow-xl shadow-primary/10 mt-4 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Create Competition
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
