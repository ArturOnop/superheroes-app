import {FilePond, registerPlugin} from 'react-filepond'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import {useEffect, useState} from "react";

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css'
import {useDispatch, useSelector} from "react-redux";
import {patchClearMessage, patchHero} from "../redux/editHero/editHeroActions";

registerPlugin(
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType);

const EditHero = ({heroData}) => {
    const editHeroData = useSelector(state => state.editHero)
    const dispatch = useDispatch();

    const [state, setState] = useState({
        nicknameInput: heroData.hero.nickname,
        realNameInput: heroData.hero.real_name,
        descriptionInput: heroData.hero.origin_description,
        superpowersInput: heroData.hero.superpowers,
        catchPhraseInput: heroData.hero.catch_phrase,
        files: heroData.hero.images
    })

    useEffect(() => {
        return () => {
            dispatch(patchClearMessage());
        }
    }, [])

    const submitForm = () => {
        dispatch(patchHero(heroData.hero._id, {
            ...state,
            files: state.files.map((file) => file.getFileEncodeDataURL())
        }));
        setState({
            nicknameInput: "",
            realNameInput: "",
            descriptionInput: "",
            superpowersInput: "",
            catchPhraseInput: "",
            files: []
        });
    }

    return (
        <div className="createHero">
            {editHeroData.error ? <div className="error">Error occurred: {editHeroData.error}</div> : null}
            <form onSubmit={(e) => {
                submitForm();
                e.preventDefault()
            }}>
                <label className="nicknameInput">
                    Nickname:
                    <input type="text"
                           value={state.nicknameInput}
                           required
                           onChange={(event => setState(prevState => {
                               return {...prevState, nicknameInput: event.target.value}
                           }))}/>
                </label>
                <label className="realNameInput">
                    Real name:
                    <input type="text"
                           value={state.realNameInput}
                           required
                           onChange={(event => setState(prevState => {
                               return {...prevState, realNameInput: event.target.value}
                           }))}/>
                </label>
                <label className="descriptionInput">
                    Origin description:
                    <textarea
                        value={state.descriptionInput}
                        required
                        onChange={(event => setState(prevState => {
                            return {...prevState, descriptionInput: event.target.value}
                        }))}/>
                </label>
                <label className="superpowersInput">
                    Superpowers:
                    <input type="text"
                           value={state.superpowersInput}
                           required
                           onChange={(event => setState(prevState => {
                               return {...prevState, superpowersInput: event.target.value}
                           }))}/>
                </label>
                <label className="catchPhraseInput">
                    Catch phrase:
                    <input type="text"
                           value={state.catchPhraseInput}
                           required
                           onChange={(event => setState(prevState => {
                               return {...prevState, catchPhraseInput: event.target.value}
                           }))}/>
                </label>
                <FilePond files={state.files}
                          onupdatefiles={files => setState(prevState => {
                              return {...prevState, files: files}
                          })}
                          allowMultiple={true}
                          imagePreviewHeight={400}
                          minFileSize={"10kb"}
                          maxFileSize={"2mb"}
                          maxTotalFileSize={"15mb"}
                          acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg']}
                          required={true}/>
                <button type="submit">Edit hero</button>
            </form>
        </div>
    )
}

export default EditHero;
