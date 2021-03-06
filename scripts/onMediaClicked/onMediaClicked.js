import Likes from '../likes/likes.js';
import modalPictures from '../modalPictures/modalPictures.js';

export default function onMediaClicked(medias, media, photographerName, e) {
    let selectedImg = e.target.classList.contains('card-photography__img');
    let selectedVideo = e.target.classList.contains('card-photography__video');
    let keyboardClickedOnEnter;

    // if click or use keyboard
    if (e.target.firstElementChild) {
        keyboardClickedOnEnter = e.target.firstElementChild.localName;
    }
    
    if (selectedImg || keyboardClickedOnEnter === 'img') {
        new modalPictures().init(medias, media, photographerName, 'img');
    } else if (selectedVideo || keyboardClickedOnEnter === 'video') {
        new modalPictures().init(medias, media, photographerName);
    } else {
        Likes(e);
    }
    e.preventDefault();
}