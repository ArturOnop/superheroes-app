import {GET_PAGINATION_PAGE} from "./paginationType";

export const getPaginationPage = paginationPage => {
    return {
        type: GET_PAGINATION_PAGE,
        payload: paginationPage
    }
}