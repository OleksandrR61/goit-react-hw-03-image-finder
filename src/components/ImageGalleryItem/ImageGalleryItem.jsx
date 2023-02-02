import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image, onClick}) => (
    <div className={styles.ImageGalleryItem}>
        <img
            className={styles.ImageGalleryItemImage}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => {onClick(image)}}
        />
    </div>
);

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};