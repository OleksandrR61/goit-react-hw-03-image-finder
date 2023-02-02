import { Component } from 'react';

import { Searchbar, ImageGallery } from 'components';
import {getImages} from '../../services/fetch';

import styles from './ImageFinder.module.css';

export default class ImageFinder extends Component {
    state = {
        images: [1, 2, 3, 4],
        search: "",
        page: 1,
    };

    handleSearch = (event) => {
        event.preventDefault();

        this.handleSetState({search: event.target.elements.input.value})

        event.target.reset();
    };

    handleSetState = ({search = this.state.search, page = 1}) => {
        const res = getImages({search, page});
        console.log(res);
    }

    render() {
        return (
            <div className={styles.ImageFinder}>
                <Searchbar onSearch={this.handleSearch} />
                <ImageGallery images={this.state.images} />
            </div>
        );
    };
};