import { Component } from 'react';

import { Searchbar, ImageGallery, Button, Loader } from 'components';
import {getImages, api_per_page} from '../../services/fetch';

import styles from './ImageFinder.module.css';

const STATE_STATUS = {
    ready: "ready",
    loading: "loading",
};

export default class ImageFinder extends Component {
    state = {
        images: [],
        search: "",
        page: 1,
        totalPage: 1,
        status: STATE_STATUS.ready,
    };

    componentDidUpdate() {
        if (document.querySelectorAll('img').length > 0) {
            document.querySelectorAll('img')[12 * (this.state.page - 1)].scrollIntoView();
            window.scrollBy(0, -100);
        };
    }

    handleSearch = (event) => {
        event.preventDefault();

        if (this.state.search !== event.target.elements.input.value) {
            this.handleSetState({search: event.target.elements.input.value});
        }

        event.target.reset();
    };

    handleLoadMore = (event) => {
        this.handleSetState({page: this.state.page + 1});

        event.target.blur();
    }

    handleSetState = async ({search = this.state.search, page = 1}) => {
        this.setState({
            status: STATE_STATUS.loading,
        });

        try {
            const {data: {hits, total, totalHits}} = await getImages({search, page});
            
            if (total === 0) {
                return;
            }

            const arrayImages = page === 1 ? [] : [...this.state.images]

            this.setState({
                images: [...arrayImages, ...hits],
                search,
                page,
                totalPage: Math.ceil(totalHits / api_per_page),
            });
        } catch (error) {
            console.log("alarm: " + error.message);
        }

        this.setState({
            status: STATE_STATUS.ready,
        });
    }

    render() {
        const {page, totalPage} = this.state;
        return (
            <div className={styles.ImageFinder}>
                {this.state.status === "ready" && <>
                    <Searchbar onSearch={this.handleSearch} />
                    <ImageGallery images={this.state.images} />
                    {page !== totalPage && <Button onClick={this.handleLoadMore}/>}
                </>}
                {this.state.status === "loading" && <Loader />}
            </div>
        );
    };
};