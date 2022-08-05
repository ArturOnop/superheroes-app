import reducer from "../redux/pagination/paginationReducer";
import {getPaginationPage} from "../redux/pagination/paginationActions";
import {GET_PAGINATION_PAGE} from "../redux/pagination/paginationType";

describe("pagination test action", () => {
    test('GET_PAGINATION_PAGE', () => {
        expect(getPaginationPage(2))
            .toStrictEqual({
                type: GET_PAGINATION_PAGE,
                payload: 2
            });
    });
})

describe("pagination test reducer", () => {
    const initialState = 1

    test('GET_PAGINATION_PAGE', () => {
        expect(reducer(initialState, {
            type: GET_PAGINATION_PAGE,
            payload: 2
        })).toBe(2);
    });
})
