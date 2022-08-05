import reducer from "../redux/page/pageReducer";
import {getNewPage} from "../redux/page/pageActions";
import {CREATE_HERO_PAGE, EDIT_PAGE, HERO_DETAILED_PAGE, HEROES_PAGE} from "../redux/page/pageType";

describe("page test action", () => {
    test('HEROES_PAGE', () => {
        expect(getNewPage(HEROES_PAGE)).toStrictEqual({
            type: HEROES_PAGE,
            payload: "",
            payloadHero: {}
        });
    });

    test('HERO_DETAILED_PAGE', () => {
        expect(getNewPage(HERO_DETAILED_PAGE, "id")).toStrictEqual({
            type: HERO_DETAILED_PAGE,
            payload: "id",
            payloadHero: {}
        });
    });

    test('CREATE_HERO_PAGE', () => {
        expect(getNewPage(CREATE_HERO_PAGE)).toStrictEqual({
            type: CREATE_HERO_PAGE,
            payload: "",
            payloadHero: {}
        });
    });

    test('EDIT_PAGE', () => {
        expect(getNewPage(EDIT_PAGE, "", {
            nickname: "nickname",
            real_name: "real_name",
            origin_description: "origin_description",
            superpowers: "superpowers",
            catch_phrase: "catch_phrase",
            images: ["image1", "image2"]
        })).toStrictEqual({
            type: EDIT_PAGE,
            payload: "",
            payloadHero: {
                nickname: "nickname",
                real_name: "real_name",
                origin_description: "origin_description",
                superpowers: "superpowers",
                catch_phrase: "catch_phrase",
                images: ["image1", "image2"]
            }
        });
    });
})

describe("page test reducer", () => {
    const initialState = {
        page: HEROES_PAGE,
        id: "",
        hero: ""
    }

    test('HEROES_PAGE', () => {
        expect(reducer(initialState, {
            type: HEROES_PAGE
        })).toStrictEqual({
            page: HEROES_PAGE
        })
    });

    test('HERO_DETAILED_PAGE', () => {
        expect(reducer(initialState, {
            type: HERO_DETAILED_PAGE,
            payload: "id"
        })).toStrictEqual({
            page: HERO_DETAILED_PAGE,
            id: "id"
        })
    });

    test('CREATE_HERO_PAGE', () => {
        expect(reducer(initialState, {
            type: CREATE_HERO_PAGE
        })).toStrictEqual({
            page: CREATE_HERO_PAGE
        })
    });

    test('EDIT_PAGE', () => {
        expect(reducer(initialState, {
            type: EDIT_PAGE,
            payloadHero: {
                nickname: "nickname",
                real_name: "real_name",
                origin_description: "origin_description",
                superpowers: "superpowers",
                catch_phrase: "catch_phrase",
                images: ["image1", "image2"]
            }
        })).toStrictEqual({
            page: EDIT_PAGE,
            hero: {
                nickname: "nickname",
                real_name: "real_name",
                origin_description: "origin_description",
                superpowers: "superpowers",
                catch_phrase: "catch_phrase",
                images: ["image1", "image2"]
            }
        })
    });
})
