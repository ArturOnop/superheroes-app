import {useDispatch, useSelector} from "react-redux";
import {getPaginationPage} from "../redux/pagination/paginationActions";
import {useEffect} from "react";

const Pagination = ({postsNumber}) => {
    const paginationPageData = useSelector(state => state.paginationPage)
    const dispatch = useDispatch();

    useEffect(() => {
        document.querySelectorAll(".pagination button")[paginationPageData - 1].classList.add("active");
    }, [])

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(postsNumber / 5); i++) {
        pageNumbers.push(i);
    }

    const setNewPaginationPage = (event, number) => {
        document.querySelector(".pagination button.active").classList.remove("active");
        event.target.classList.add("active");
        dispatch(getPaginationPage(number));
    }

    return (
        <div className="pagination">
            {pageNumbers.map((number) => {
                return (
                    <button key={number}
                            onClick={(event) => setNewPaginationPage(event, number)}>
                        {number}
                    </button>)
            })}
        </div>
    )
}

export default Pagination;
