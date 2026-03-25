import { motion } from 'motion/react';
import { ChevronLeft, MapPin, Star, Calendar, Phone, Globe } from 'lucide-react';

interface ClubsProps {
  onBack: () => void;
}

export function Clubs({ onBack }: ClubsProps) {
  const clubs = [
    {
      id: 'c1',
      name: 'Stratford Padel Club',
      location: '221 High St, London E15 2AE',
      rating: 4.8,
      reviews: 342,
      courts: 5,
      image: 'https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?q=80&w=800&auto=format&fit=crop',
      price: '£40/hr',
    },
    {
      id: 'c2',
      name: 'Padel Social Club',
      location: 'Earls Court, London SW5 9AS',
      rating: 4.9,
      reviews: 156,
      courts: 3,
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=800&auto=format&fit=crop',
      price: '£55/hr',
    },
    {
      id: 'c3',
      name: 'The Padel Hub',
      location: 'Units 1&2, Slough SL1 4BG',
      rating: 4.7,
      reviews: 210,
      courts: 8,
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop',
      price: '£35/hr',
    },
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
        <h2 className="font-headline text-[3rem] leading-none font-bold tracking-tighter mb-4">Padel Clubs</h2>
        <p className="text-on-surface-variant font-medium opacity-70">Top rated clubs near you.</p>
      </section>

      <div className="space-y-10">
        {clubs.map((club) => (
          <motion.article 
            key={club.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group cursor-pointer bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={club.image} 
                alt={club.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-lg">
                {club.price}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-1">{club.name}</h3>
                  <div className="flex items-center gap-1 text-on-surface-variant/60 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{club.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold">{club.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-on-surface-variant/60">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{club.courts} Courts</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant/60">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Call</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant/60">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Website</span>
                </div>
              </div>
              <button 
                onClick={() => alert(`Opening booking for ${club.name}...`)}
                className="w-full bg-primary text-white py-4 rounded-2xl font-headline font-bold text-base shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
              >
                Book a Court
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
