import Heroes from "./Heroes";
import HeroDetails from "./HeroDetails";
import Nav from "./Nav";
import CreateHero from "./CreateHero";
import EditHero from "./EditHero";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Nav/>
            <Routes>
                <Route path="/heroes" element={<Heroes/>}/>
                <Route path="/create-hero" element={<CreateHero/>}/>
                <Route path="/edit-hero" element={<EditHero heroData={location.state}/>}/>
                <Route path="/hero/:id" element={<HeroDetails/>}/>
                <Route path="*" element={<Navigate to="/heroes"/>}/>
            </Routes>
        </div>
    );
}

export default App;
