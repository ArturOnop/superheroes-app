import {clearMessage, postHeroFailure} from "../redux/createHero/createHeroActions";
import {CLEAR_MESSAGE, POST_HERO_FAILURE} from "../redux/createHero/createHeroType";
import reducer from "../redux/createHero/createHeroReducer";

describe("create hero test action", () => {
    test('failure', () => {
        expect(postHeroFailure("some error")).toStrictEqual({
            type: POST_HERO_FAILURE,
            payload: "some error"
        })
    });

    test('clear message', () => {
        expect(clearMessage()).toStrictEqual({
            type: CLEAR_MESSAGE
        })
    });
})

describe("create hero test reducer", () => {
    const initialState = {
        error: ""
    }

    test('POST_HERO_FAILURE', () => {
        expect(reducer(initialState, {
            type: POST_HERO_FAILURE,
            payload: "some error"
        })).toStrictEqual({
            error: "some error"
        })
    });

    test('CLEAR_MESSAGE', () => {
        expect(reducer(initialState, {
            type: CLEAR_MESSAGE
        })).toStrictEqual(initialState)
    });
})
