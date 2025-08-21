
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';

import Hardware from './pages/Hardware';



function App() {


    return (

    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Project Routes */}
          <Route path="/hardware" element={<Hardware />} />


          
          {/* Handbook Route */}
          
          {/* Toolbox Routes */}
          
          {/* Engagement Routes 
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/engagement/community" element={<EngagementCommunity />} />
          <Route path="/engagement/events" element={<EngagementEvents />} />
          <Route path="/engagement/impact" element={<EngagementImpact />} />
          
          
          <Route path="/duckweed-mafia" element={<DuckweedMafia />} />
          <Route path="/duckweed-mafia/team" element={<DuckweedMafiaTeam />} />
          <Route path="/duckweed-mafia/mission" element={<DuckweedMafiaMission />} />
          <Route path="/duckweed-mafia/culture" element={<DuckweedMafiaCulture />} />
          */}   {/* Duckweed Mafia Routes */}

          {/*<Route path="/handbook" element={<Handbook />} />*/}
        </Routes>
      </div>
    </Router>




  );
}

export default App;