import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image}) => (
    <div className={styles.ImageGalleryItem}>
        <img className={styles.ImageGalleryItemImage} src={image.webformatURL} alt={image.tags}/>
    </div>
)

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
}