import reducer from "../redux/editHero/editHeroReducer";
import {PATCH_CLEAR_MESSAGE, PATCH_HERO_FAILURE} from "../redux/editHero/editHeroType";
import {patchClearMessage, patchHeroFailure} from "../redux/editHero/editHeroActions";

describe("edit hero test action", () => {
    test('failure', () => {
        expect(patchHeroFailure("some error")).toStrictEqual({
            type: PATCH_HERO_FAILURE,
            payload: "some error"
        })
    });

    test('clear message', () => {
        expect(patchClearMessage()).toStrictEqual({
            type: PATCH_CLEAR_MESSAGE
        })
    });
})

describe("edit hero test reducer", () => {
    const initialState = {
        error: ""
    }

    test('PATCH_HERO_FAILURE', () => {
        expect(reducer(initialState, {
            type: PATCH_HERO_FAILURE,
            payload: "some error"
        })).toStrictEqual({
            error: "some error"
        })
    });

    test('PATCH_CLEAR_MESSAGE', () => {
        expect(reducer(initialState, {
            type: PATCH_CLEAR_MESSAGE
        })).toStrictEqual(initialState)
    });
})
