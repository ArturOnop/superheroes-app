import Heroes from "./Heroes";
import HeroDetails from "./HeroDetails";
import Nav from "./Nav";
import {useSelector} from "react-redux";
import {CREATE_HERO_PAGE, EDIT_PAGE, HEROES_PAGE} from "../redux/page/pageType";
import CreateHero from "./CreateHero";
import EditHero from "./EditHero";

function App() {
    const pageData = useSelector(state => state.page)

    return (
        <div className="App">
            <Nav/>
            {pageData.page === HEROES_PAGE ?
                <Heroes/> :
                pageData.page === CREATE_HERO_PAGE ?
                    <CreateHero/> :
                    pageData.page === EDIT_PAGE ?
                        <EditHero/> :
                        <HeroDetails id={pageData.id}/>}
        </div>
    );
}

export default App;
