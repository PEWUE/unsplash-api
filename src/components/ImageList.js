import React, {useState} from 'react';
import './ImageList.css';
import ModalWindow from "./ModalWindow";

const ImageList = ({images}) => {

    const [modalShow, setModalShow] = useState(false);
    const [authorInfo, setAuthorInfo] = useState("");
    const [authorInsta, setAuthorInsta] = useState("");
    const [location, setLocation] = useState("");
    const [modalImage, setModalImage] = useState("");
    const [imageAlt, setImageAlt] = useState("");

    const handleClick = event => {
        setModalShow(true);
        images.forEach(image => {
            if (image.id === event.target.dataset.id) {
                setAuthorInfo(image.user.first_name + " " + image.user.last_name);
                setAuthorInsta(image.user.instagram_username);
                setLocation(image.user.location);
                setModalImage(image.urls.raw);
                setImageAlt(image.alt_description);

            }
        })
    }


    return (
        <div className="image-list">
            {images.map(img => <img className="image" onClick={handleClick} key={img.id} data-id={img.id}
                                    src={img.urls.thumb} alt={img.alt_description}/>)}
            <ModalWindow
                show={modalShow}
                onHide={() => setModalShow(false)}
                authorInfo={authorInfo}
                authorInsta={authorInsta}
                location={location}
                image={modalImage}
                alt={imageAlt}
            />
        </div>
    );
};

export default ImageList;
