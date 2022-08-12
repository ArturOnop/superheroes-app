import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {clearHero, getHero} from "../redux/hero/heroActions";
import {useParams} from "react-router-dom";

const HeroDetails = () => {
    const {id} = useParams();
    const heroData = useSelector(state => state.hero)
    const dispatch = useDispatch();

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        dispatch(getHero(id));
        return () => {
            dispatch(clearHero());
        }
    }, [])

    return (
        <div className="heroPage">
            {heroData.loading ?
                (<div className="loader">Loading...</div>) :
                heroData.error ?
                    (<div>Error occurred</div>) :
                    heroData.hero.nickname ?
                        (
                            <>
                                <div className="heroImageSelector">
                                    {heroData.hero.images.map((image) => {
                                        return <img key={image}
                                                    src={image}
                                                    alt="hero"
                                                    onClick={() => setSelectedImage(image)}/>
                                    })}
                                </div>
                                <div className="heroImage">
                                    <img src={!selectedImage ? heroData.hero.images[0] :
                                        selectedImage} alt="hero"/>
                                </div>
                                <div className="heroInfo">
                                    <div className="heroNickname">{heroData.hero.nickname}</div>
                                    <div className="heroRealName">{heroData.hero.real_name}</div>
                                    <div className="heroDescription">
                                        <img src="/images/note.png" alt="note"/>
                                        <div>{heroData.hero.origin_description}</div>
                                    </div>
                                    <div className="heroSuperpowers">
                                        <img src="/images/power.png" alt="power"/>
                                        <div>{heroData.hero.superpowers}</div>
                                    </div>
                                    <div className="heroCatchPhrase">
                                        <img src="/images/message.png" alt="phrase"/>
                                        <div>{heroData.hero.catch_phrase}</div>
                                    </div>
                                </div>
                            </>
                        ) : null}
        </div>
    );
}

export default HeroDetails;
