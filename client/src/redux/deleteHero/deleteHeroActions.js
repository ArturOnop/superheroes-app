import axios from "axios";

export const deleteHero = id => {
    return (dispatch) => {
        axios.delete(`http://localhost:7777/hero/${id}`, {
            headers: {"Content-Type": "application/json"}
        }).then(res => {
            // dispatch(postHeroSuccess(res));
        });
    }
}
