import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHeroes, getHeroesClear} from "../redux/heroes/heroesActions";
import {getNewPage} from "../redux/page/pageActions";
import {EDIT_PAGE, HERO_DETAILED_PAGE} from "../redux/page/pageType";
import Pagination from "./Pagination";
import {deleteHero} from "../redux/deleteHero/deleteHeroActions";

const Heroes = () => {

    const heroesData = useSelector(state => state.heroes)
    const paginationPageData = useSelector(state => state.paginationPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHeroes());
        return () => {
            dispatch(getHeroesClear());
        }
    }, [])

    const indexOfLastHero = paginationPageData * 5;
    const indexOfFirstHero = indexOfLastHero - 5;
    const currentHeroes = heroesData.heroes.slice(indexOfFirstHero, indexOfLastHero);

    return (
        <div className="heroesPage">
            {heroesData.loading ?
                (<div className="loader">Loading...</div>) :
                heroesData.error ?
                    (<div>Error occurred</div>) :
                    <>
                        <div className="heroes">
                            {currentHeroes.map((hero) => {
                                let image = hero.images[0];
                                return (
                                    <div className="hero" key={hero._id}
                                         onClick={(event) => {
                                             if (event.target.classList[0] === "heroLink") {
                                                 dispatch(getNewPage(HERO_DETAILED_PAGE, hero._id));
                                             } else if (event.target.classList[0] === "editButton") {
                                                 dispatch(getNewPage(EDIT_PAGE, hero._id, hero));
                                             } else if (event.target.classList[0] === "deleteButton") {
                                                 dispatch(deleteHero(hero._id));
                                                 dispatch(getHeroes());
                                             }
                                         }}>
                                        <img className="heroLink" src={image} alt="hero"/>
                                        <div className="nickName">{hero.nickname}</div>
                                        <div className="heroButtons">
                                            <button>
                                                <img className="editButton"
                                                     src="/images/edit.png"
                                                     alt="edit"/>
                                            </button>
                                            <button>
                                                <img className="deleteButton"
                                                     src="/images/delete.png"
                                                     alt="delete"/>
                                            </button>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                        <Pagination postsNumber={heroesData.heroes.length}/>
                    </>
            }
        </div>
    );
}

export default Heroes;
