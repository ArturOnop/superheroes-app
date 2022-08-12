import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <NavLink className="navLogo" to="/heroes">
                SUPER HEROES
            </NavLink>
            <div className="navOptions">
                <NavLink to="/heroes">
                    <button>
                        Super heroes list
                    </button>
                </NavLink>
                <NavLink to="/create-hero">
                    <button>
                        Create a hero
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Nav;
