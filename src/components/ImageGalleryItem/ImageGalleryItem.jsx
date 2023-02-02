import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image}) => (
    <div className={styles.ImageGalleryItem}>
        <img className={styles.ImageGalleryItemImage} src={image.webformatURL} alt={image.tags} largeImageURL={image.largeImageURL}/>
    </div>
)