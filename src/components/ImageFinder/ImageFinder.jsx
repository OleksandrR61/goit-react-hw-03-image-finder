import { Component } from 'react';

import { Searchbar, ImageGallery } from 'components';
import {getImages, api_per_page} from '../../services/fetch';

import styles from './ImageFinder.module.css';

export default class ImageFinder extends Component {
    state = {
        images: [],
        search: "",
        page: 1,
    };

    handleSearch = (event) => {
        event.preventDefault();

        this.handleSetState({search: event.target.elements.input.value})

        event.target.reset();
    };

    handleSetState = async ({search = this.state.search, page = 1}) => {
        try {
            const response = await getImages({search, page});
            this.setState(prevState => ({
                images: [...prevState.images, ...response.data.hits],
                search,
                page,
                totalPage: Math.ceil(response.data.totalHits / api_per_page),
            }));
        } catch (error) {
            console.log("alarm: " + error.message);
        }
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