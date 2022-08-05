import reducer from "../redux/heroes/heroesReducer";
import {clearHero, getHeroFailure, getHeroSuccess} from "../redux/hero/heroActions";
import {CLEAR_HERO, GET_HERO_FAILURE, GET_HERO_SUCCESS} from "../redux/hero/heroType";
import {GET_HEROES_CLEAR, GET_HEROES_FAILURE, GET_HEROES_SUCCESS} from "../redux/heroes/heroesType";
import {getHeroesClear, getHeroesFailure, getHeroesSuccess} from "../redux/heroes/heroesActions";

describe("heroes test action", () => {
    test('success', () => {
        expect(getHeroesSuccess([
            {
                nickname: "nickname1",
                real_name: "real_name1",
                origin_description: "origin_description1",
                superpowers: "superpowers1",
                catch_phrase: "catch_phrase1",
                images: ["image1", "image2"]
            },
            {
                nickname: "nickname2",
                real_name: "real_name2",
                origin_description: "origin_description2",
                superpowers: "superpowers2",
                catch_phrase: "catch_phrase2",
                images: ["image3", "image4"]
            }
        ])).toStrictEqual({
            type: GET_HEROES_SUCCESS,
            payload: [
                {
                    nickname: "nickname1",
                    real_name: "real_name1",
                    origin_description: "origin_description1",
                    superpowers: "superpowers1",
                    catch_phrase: "catch_phrase1",
                    images: ["image1", "image2"]
                },
                {
                    nickname: "nickname2",
                    real_name: "real_name2",
                    origin_description: "origin_description2",
                    superpowers: "superpowers2",
                    catch_phrase: "catch_phrase2",
                    images: ["image3", "image4"]
                }
            ]
        })
    });

    test('failure', () => {
        expect(getHeroesFailure("some error")).toStrictEqual({
            type: GET_HEROES_FAILURE,
            payload: "some error"
        })
    });

    test('clear', () => {
        expect(getHeroesClear()).toStrictEqual({
            type: GET_HEROES_CLEAR
        })
    });
})

describe("hero test reducer", () => {
    const initialState = {
        loading: true,
        heroes: [],
        error: ""
    }

    test('GET_HEROES_SUCCESS', () => {
        expect(reducer(initialState, {
            type: GET_HEROES_SUCCESS,
            payload: [
                {
                    nickname: "nickname1",
                    real_name: "real_name1",
                    origin_description: "origin_description1",
                    superpowers: "superpowers1",
                    catch_phrase: "catch_phrase1",
                    images: ["image1", "image2"]
                },
                {
                    nickname: "nickname2",
                    real_name: "real_name2",
                    origin_description: "origin_description2",
                    superpowers: "superpowers2",
                    catch_phrase: "catch_phrase2",
                    images: ["image3", "image4"]
                }
            ]
        })).toStrictEqual({
            loading: false,
            heroes: [
                {
                    nickname: "nickname1",
                    real_name: "real_name1",
                    origin_description: "origin_description1",
                    superpowers: "superpowers1",
                    catch_phrase: "catch_phrase1",
                    images: ["image1", "image2"]
                },
                {
                    nickname: "nickname2",
                    real_name: "real_name2",
                    origin_description: "origin_description2",
                    superpowers: "superpowers2",
                    catch_phrase: "catch_phrase2",
                    images: ["image3", "image4"]
                }
            ],
            error: ""
        })
    });

    test('GET_HEROES_FAILURE', () => {
        expect(reducer(initialState, {
            type: GET_HEROES_FAILURE,
            payload: "some error"
        })).toStrictEqual({
            loading: false,
            heroes: [],
            error: "some error"
        })
    });

    test('GET_HEROES_CLEAR', () => {
        expect(reducer(initialState, {
            type: GET_HEROES_CLEAR
        })).toStrictEqual(initialState)
    });
})
