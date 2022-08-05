import {useDispatch} from "react-redux";
import {getNewPage} from "../redux/page/pageActions";
import {CREATE_HERO_PAGE, HEROES_PAGE} from "../redux/page/pageType";

const Nav = () => {
    const dispatch = useDispatch();

    return (
        <div className="nav">
            <div className="navLogo" onClick={() => dispatch(getNewPage(HEROES_PAGE))}>
                SUPER HEROES
            </div>
            <div className="navOptions">
                <button onClick={() => dispatch(getNewPage(HEROES_PAGE))}>
                    Super heroes list
                </button>
                <button onClick={() => dispatch(getNewPage(CREATE_HERO_PAGE))}>
                    Create a hero
                </button>
            </div>
        </div>
    )
}

export default Nav;
