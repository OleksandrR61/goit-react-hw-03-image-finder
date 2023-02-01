import { Component } from 'react';

import { Searchbar, ImageGallery } from 'components';

import styles from './ImageFinder.module.css';

export default class ImageFinder extends Component {
    state = {
        images: [1, 2, 3, 4],
        search: "",
    };

    handleSearch = (event) => {
        event.preventDefault();

        const searhValue = event.target.elements.input.value;

        if (this.state.search !== searhValue) {
            this.setState(prevState => ({
                ...prevState,
                search: searhValue,
            }));
        };

        event.target.reset();
    };

    render() {
        return (
            <div className={styles.ImageFinder}>
                <Searchbar onSearch={this.handleSearch} />
                <ImageGallery images={this.state.images} />
            </div>
        );
    };
};