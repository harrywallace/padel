import { motion } from 'motion/react';
import { ChevronLeft, Play, Info, Lightbulb, BookOpen } from 'lucide-react';

interface BeginnersProps {
  onBack: () => void;
}

export function Beginners({ onBack }: BeginnersProps) {
  const videos = [
    {
      id: 'v1',
      title: 'Padel Rules for Beginners',
      duration: '5:24',
      thumbnail: 'https://images.unsplash.com/photo-1626224580194-860c3d3148b4?q=80&w=800&auto=format&fit=crop',
      category: 'Rules',
      icon: BookOpen,
    },
    {
      id: 'v2',
      title: 'Top 5 Tips for Your First Match',
      duration: '8:12',
      thumbnail: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop',
      category: 'Tips',
      icon: Lightbulb,
    },
    {
      id: 'v3',
      title: 'Mastering the Glass Bounce',
      duration: '12:45',
      thumbnail: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=800&auto=format&fit=crop',
      category: 'Technique',
      icon: Info,
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
        <h2 className="font-headline text-[3rem] leading-none font-bold tracking-tighter mb-4">For Beginners</h2>
        <p className="text-on-surface-variant font-medium opacity-70">Everything you need to start your Padel journey.</p>
      </section>

      <div className="space-y-10">
        {videos.map((video) => {
          const Icon = video.icon;
          return (
            <motion.article 
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-4">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded text-[10px] font-bold">
                  {video.duration}
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Icon className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{video.category}</span>
                </div>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </motion.article>
          );
        })}
      </div>
    </main>
  );
}
