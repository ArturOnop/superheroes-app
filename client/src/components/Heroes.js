import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHeroes, getHeroesClear} from "../redux/heroes/heroesActions";
import Pagination from "./Pagination";
import {deleteHero} from "../redux/deleteHero/deleteHeroActions";
import {Link} from "react-router-dom";

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
                                    <div className="hero" key={hero._id}>
                                        <Link to={`/hero/${hero._id}`}>
                                            <img className="heroLink" src={image} alt="hero"/>
                                        </Link>
                                        <div className="nickName">{hero.nickname}</div>
                                        <div className="heroButtons">
                                            <button>
                                                <Link to="/edit-hero" state={{hero: hero}}>
                                                    <img className="editButton"
                                                         src="/images/edit.png"
                                                         alt="edit"/>
                                                </Link>
                                            </button>
                                            <button>
                                                <img className="deleteButton"
                                                     src="/images/delete.png"
                                                     alt="delete"
                                                     onClick={() => {
                                                         dispatch(deleteHero(hero._id));
                                                         dispatch(getHeroes());
                                                     }}/>
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
