export const getNewPage = (page, id = "", hero = {}) => {
    return {
        type: page,
        payload: id,
        payloadHero: hero
    }
}


