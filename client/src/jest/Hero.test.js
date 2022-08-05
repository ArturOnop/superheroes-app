import reducer from "../redux/hero/heroReducer";
import {clearHero, getHeroFailure, getHeroSuccess} from "../redux/hero/heroActions";
import {CLEAR_HERO, GET_HERO_FAILURE, GET_HERO_SUCCESS} from "../redux/hero/heroType";

describe("hero test action", () => {
    test('success', () => {
        expect(getHeroSuccess({
            nickname: "nickname",
            real_name: "real_name",
            origin_description: "origin_description",
            superpowers: "superpowers",
            catch_phrase: "catch_phrase",
            images: ["image1", "image2"]
        })).toStrictEqual({
            type: GET_HERO_SUCCESS,
            payload: {
                nickname: "nickname",
                real_name: "real_name",
                origin_description: "origin_description",
                superpowers: "superpowers",
                catch_phrase: "catch_phrase",
                images: ["image1", "image2"]
            }
        })
    });

    test('failure', () => {
        expect(getHeroFailure("some error")).toStrictEqual({
            type: GET_HERO_FAILURE,
            payload: "some error"
        })
    });

    test('clear', () => {
        expect(clearHero()).toStrictEqual({
            type: CLEAR_HERO
        })
    });
})

describe("hero test reducer", () => {
    const initialState = {
        loading: true,
        hero: {
            nickname: "",
            real_name: "",
            origin_description: "",
            superpowers: "",
            catch_phrase: "",
            images: []
        },
        error: ""
    }

    test('GET_HERO_SUCCESS', () => {
        expect(reducer(initialState, {
            type: GET_HERO_SUCCESS,
            payload: {
                nickname: "nickname",
                real_name: "real_name",
                origin_description: "origin_description",
                superpowers: "superpowers",
                catch_phrase: "catch_phrase",
                images: ["image1", "image2"]
            }
        })).toStrictEqual({
            loading: false,
            hero: {
                nickname: "nickname",
                real_name: "real_name",
                origin_description: "origin_description",
                superpowers: "superpowers",
                catch_phrase: "catch_phrase",
                images: ["image1", "image2"]
            },
            error: ""
        })
    });

    test('GET_HERO_FAILURE', () => {
        expect(reducer(initialState, {
            type: GET_HERO_FAILURE,
            payload: "some error"
        })).toStrictEqual({
            loading: false,
            hero: [],
            error: "some error"
        })
    });

    test('CLEAR_HERO', () => {
        expect(reducer(initialState, {
            type: CLEAR_HERO
        })).toStrictEqual(initialState)
    });
})
