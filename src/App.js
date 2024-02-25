import { HashRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";

function App() {
  
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

