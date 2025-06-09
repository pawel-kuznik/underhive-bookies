import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@pawel-kuznik/react-faceplate/lib/themes/nostalgia-neon/index.css";
import './App.css';
import { AppFrame } from './components/AppFrame';
import {
    Campaign,
    CreateGang,
    CreateHouse,
    CreateWeaponPage,
    Equipment,
    FighterArchetypePage,
    FighterArchetypes,
    GangDetails,
    Gangs,
    Houses,
    PrepareRoster,
    Rules,
    TradingPost,
    Weapons
} from './pages';

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
            <Route path="/hideout/gang/:id/prepare-roster" element={<PrepareRoster />} />
            <Route path="/hideout/gang/:id/prepare-roster/:rosterId" element={<PrepareRoster />} />
            <Route path="/underhive/campaign" element={<Campaign />} />
            <Route path="/codex/rules" element={<Rules />} />
            <Route path="/codex/weapons" element={<Weapons />} />
            <Route path="/codex/weapons/new" element={<CreateWeaponPage />} />
            <Route path="/codex/weapons/:id" element={<CreateWeaponPage />} />
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
