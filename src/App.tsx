import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Campaign from './pages/Campaign';
import Rules from './pages/Rules';
import Weapons from './pages/Weapons';
import Equipment from './pages/Equipment';
import Gangs from './pages/Gangs';
import GangDetails from './pages/GangDetails';
import FighterArchetypes from './pages/FighterArchetypes';
import FighterArchetypePage from './pages/FighterArchetypePage';
import Houses from './pages/Houses';
import CreateHouse from './pages/CreateHouse';
import TradingPost from './pages/TradingPost';
import PrepareRoster from './pages/PrepareRoster';
import GangRosters from './pages/GangRosters';
import CreateGang from './pages/CreateGang';
import { AppFrame } from './components/AppFrame';
import "@pawel-kuznik/react-faceplate/lib/themes/nostalgia-neon/index.css";

function App() {
  return (
    <Router>
      <AppFrame>
          <Routes>
            <Route path="/" element={<div>Welcome to Underhive Bookies</div>} />
            <Route path="/hideout/gangs" element={<Gangs />} />
            <Route path="/hideout/gangs/create" element={<CreateGang />} />
            <Route path="/hideout/gang/:id" element={<GangDetails />} />
            <Route path="/hideout/gang/:id/trading-post" element={<TradingPost />} />
            <Route path="/hideout/gang/:id/rosters" element={<GangRosters />} />
            <Route path="/hideout/gang/:id/prepare-roster" element={<PrepareRoster />} />
            <Route path="/hideout/gang/:id/prepare-roster/:rosterId" element={<PrepareRoster />} />
            <Route path="/underhive/campaign" element={<Campaign />} />
            <Route path="/codex/rules" element={<Rules />} />
            <Route path="/codex/weapons" element={<Weapons />} />
            <Route path="/codex/equipment" element={<Equipment />} />
            <Route path="/codex/fighter-archetypes" element={<FighterArchetypes />} />
            <Route path="/codex/fighter-archetype/new" element={<FighterArchetypePage />} />
            <Route path="/codex/fighter-archetype/:id" element={<FighterArchetypePage />} />
            <Route path="/codex/houses" element={<Houses />} />
            <Route path="/codex/houses/new" element={<CreateHouse />} />
            <Route path="/codex/houses/:id" element={<CreateHouse />} />
          </Routes>
        </AppFrame>
    </Router>
  );
}

export default App;
