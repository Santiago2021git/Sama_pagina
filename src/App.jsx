import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Section3 from "./componentes/canciones";
import Section1 from "./componentes/imagenes";
import Section4 from "./componentes/otros";
import Section2 from "./componentes/videos";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen font-sans">
        {/* Header */}
        <header className="bg-gray-900 text-white text-center py-4 shadow-lg">
          <h2 className="font-poppins text-4xl text-indigo-700 drop-shadow-lg">SAMA</h2>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li><Link to="/" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">Fotos</Link></li>
              <li><Link to="/videos" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">Videos</Link></li>
              <li><Link to="/canciones" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">Canciones</Link></li>
              <li><Link to="/otros" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">Otros</Link></li>
            </ul>
          </nav>
        </header>

        {/* Contenido dinámico */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Section1 />} />
            <Route path="/videos" element={<Section2 />} />
            <Route path="/canciones" element={<Section3 />} />
            <Route path="/otros" element={<Section4 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
