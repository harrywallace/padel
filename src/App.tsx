import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header, BottomNav } from './components/Layout';
import { Feed } from './components/Feed';
import { Compete } from './components/Compete';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { Beginners } from './components/Beginners';
import { Rankings } from './components/Rankings';
import { Clubs } from './components/Clubs';
import { FindGame } from './components/FindGame';

type SubView = 'beginners' | 'rankings' | 'clubs' | 'findGame' | null;

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [activeSubView, setActiveSubView] = useState<SubView>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setActiveSubView(null);
  };

  const renderContent = () => {
    if (activeSubView) {
      switch (activeSubView) {
        case 'beginners':
          return <Beginners onBack={() => setActiveSubView(null)} />;
        case 'rankings':
          return <Rankings onBack={() => setActiveSubView(null)} />;
        case 'clubs':
          return <Clubs onBack={() => setActiveSubView(null)} />;
        case 'findGame':
          return <FindGame onBack={() => setActiveSubView(null)} />;
        default:
          return <Feed />;
      }
    }

    switch (activeTab) {
      case 'feed':
        return <Feed />;
      case 'compete':
        return <Compete />;
      case 'profile':
        return <Profile />;
      case 'menu':
        return (
          <Menu 
            onBeginnersClick={() => setActiveSubView('beginners')} 
            onRankingsClick={() => setActiveSubView('rankings')}
            onClubsClick={() => setActiveSubView('clubs')}
            onFindGameClick={() => setActiveSubView('findGame')}
          />
        );
      default:
        return <Feed />;
    }
  };

  const getHeaderProps = () => {
    if (activeSubView) {
      return { title: '', showActions: false, hidden: true };
    }

    switch (activeTab) {
      case 'feed':
        return { showDate: true };
      case 'compete':
        return { showActions: true };
      case 'profile':
        return { showSettings: true };
      case 'menu':
        return { showActions: true };
      default:
        return {};
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {!activeSubView && <Header {...getHeaderProps()} />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubView || activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {!activeSubView && <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />}
    </div>
  );
}
