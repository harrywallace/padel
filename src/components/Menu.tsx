import { motion } from 'motion/react';
import { 
  BarChart3, 
  Building2, 
  Search, 
  GraduationCap, 
  Settings, 
  Bell, 
  Share2, 
  LogOut, 
  ChevronRight, 
  CheckCircle2,
  Trophy
} from 'lucide-react';

interface MenuProps {
  onBeginnersClick: () => void;
  onRankingsClick: () => void;
  onClubsClick: () => void;
  onFindGameClick: () => void;
}

export function Menu({ 
  onBeginnersClick, 
  onRankingsClick, 
  onClubsClick, 
  onFindGameClick 
}: MenuProps) {
  const sections = [
    {
      title: 'EXPLORE',
      items: [
        { icon: BarChart3, label: 'Regional Rankings', onClick: onRankingsClick },
        { icon: Building2, label: 'Clubs', onClick: onClubsClick },
        { icon: Search, label: 'Find a game', onClick: onFindGameClick },
      ],
    },
    {
      title: 'LEARN',
      items: [
        { icon: GraduationCap, label: 'For Beginners', onClick: onBeginnersClick },
      ],
    },
    {
      title: 'ACCOUNT',
      items: [
        { icon: Settings, label: 'Settings' },
        { icon: Bell, label: 'Notifications', hasBadge: true },
        { icon: Share2, label: 'Share my profile' },
        { icon: LogOut, label: 'Log out', isDestructive: true },
      ],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 pt-8 pb-32">
      {/* User Profile Header Section */}
      <section className="mb-12 flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-fixed"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4Q4XBmYWBid7Ab4J1UooTpst6KkgXCovh4X1ug3zhi8fnE9c3rBiAMZPk2YPome-855t3LPKtBkAg7XEdwuNTJGNahcFpDGvE6Fbswh1C5_AIZfSnaxkKY0_IFgvM0OgGpWJYusHE8WEcYjEpmERQyoBO-Pv4jLE8jZkQ_LGWt7BZOeXORbnZk_SIICjsCmd1gFMe_E3NbYgV9bAzQ83Y5UE_xwEHOsSDogGJ3L_0A-GmprLwDXLXeSsNQB_VR9IrghThGtcke2j"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              <CheckCircle2 className="w-3 h-3 text-white fill-white/20" />
            </div>
          </div>
          <div>
            <h2 className="font-headline text-xl font-bold text-on-surface tracking-tight">Alejandro Galán</h2>
            <div className="mt-1 inline-flex items-center px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[12px] font-bold font-headline tracking-wide">
              PadelApp Score: 612
            </div>
          </div>
        </div>
        <Settings className="w-5 h-5 text-on-surface-variant cursor-pointer hover:rotate-45 transition-transform" />
      </section>

      {/* Menu Sections */}
      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-[11px] font-bold font-headline text-on-surface-variant tracking-[0.15em] mb-4 pl-2">
              {section.title}
            </h3>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileTap={{ backgroundColor: 'rgba(200, 235, 209, 0.2)' }}
                    onClick={item.onClick || (() => console.log(`Clicked ${item.label}`))}
                    className={`group flex items-center justify-between p-5 transition-colors cursor-pointer active:bg-secondary-container/10 ${
                      idx !== section.items.length - 1 ? 'border-b border-outline-variant/10' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className={`w-5 h-5 ${item.isDestructive ? 'text-error' : 'text-on-surface-variant'}`} />
                      <span className={`font-medium ${item.isDestructive ? 'text-error' : 'text-on-surface'}`}>
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.hasBadge && <div className="w-2 h-2 rounded-full bg-primary" />}
                      <ChevronRight className={`w-4 h-4 ${item.isDestructive ? 'text-error/40' : 'text-on-surface-variant opacity-40'} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Meta Info */}
      <div className="mt-12 text-center">
        <p className="text-[10px] font-bold font-headline text-outline tracking-widest uppercase">VERSION 2.4.0 (BUILD 892)</p>
        <p className="text-[10px] font-medium font-headline text-outline mt-1 italic">Crafted for the court.</p>
      </div>
    </main>
  );
}
