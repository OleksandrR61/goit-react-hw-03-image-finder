import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({images}) => (
    <ul className={styles.ImageGallery}>
        {images.map((image, index) => <li key={images.id} image={image}>Hello</li>)}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.number).isRequired,
};