import {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export default class Modal extends Component {
    render() {
        const {image, onClick} = this.props;
        
        return (
            <div className={styles.Overlay} onClick={onClick}>
                <div className={styles.Modal}>
                    <img src={image.largeImageURL} alt={image.tags}/>
                </div>
            </div>
        );
    };
};

Modal.propTypes = {
    image: PropTypes.shape({
        tags: PropTypes.string,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};