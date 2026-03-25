import { Trophy, Newspaper, UserCircle, Menu as MenuIcon, Bell, Search, Settings, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  title?: string;
  showDate?: boolean;
  showActions?: boolean;
  showSettings?: boolean;
}

export function Header({ title = 'PadelApp', showDate, showActions, showSettings }: HeaderProps) {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Zap className="text-primary w-6 h-6 fill-primary" />
          <h1 className="font-headline text-2xl font-black text-primary tracking-tighter">{title}</h1>
        </div>
        
        {showDate && (
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-sans">Madrid, ES</p>
            <p className="text-xs font-medium text-on-surface-variant">Oct 24, 2023</p>
          </div>
        )}

        {showActions && (
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:opacity-80 transition-opacity">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-on-surface-variant hover:opacity-80 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
          </div>
        )}

        {showSettings && (
          <button className="text-on-surface-variant hover:opacity-80 transition-opacity">
            <Settings className="w-5 h-5" />
          </button>
        )}
      </div>
    </header>
  );
}

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'feed', label: 'Feed', icon: Newspaper },
    { id: 'compete', label: 'Compete', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: UserCircle },
    { id: 'menu', label: 'Menu', icon: MenuIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-safe h-20 bg-white/80 backdrop-blur-xl border-t border-outline-variant/10 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center relative transition-all duration-200 active:scale-95 ${
              isActive ? 'text-primary' : 'text-zinc-400'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -top-1 w-1 h-1 bg-primary rounded-full"
              />
            )}
            <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-primary/20' : ''}`} />
            <span className="font-headline text-[10px] font-bold tracking-tight">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
