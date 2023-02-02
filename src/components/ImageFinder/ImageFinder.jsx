import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Searchbar, ImageGallery, Button, Loader } from 'components';
import {getImages, api_per_page} from '../../services/fetch';

import styles from './ImageFinder.module.css';

const STATE_STATUS = {
    ready: "ready",
    loading: "loading",
    modal: "modal"
};

export default class ImageFinder extends Component {
    state = {
        images: [],
        search: "",
        page: 1,
        totalPage: 1,
        status: STATE_STATUS.ready,
    };

    componentDidUpdate(_, prevState) {
        if (prevState.images.length !== this.state.images.length && document.querySelectorAll('img').length > 0) {
            document.querySelectorAll('img')[12 * (this.state.page - 1)].scrollIntoView();
            window.scrollBy(0, -76);
        };
    }

    handleSearch = (event) => {
        event.preventDefault();

        this.handleSetState({search: event.target.elements.input.value});

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
                Notify.failure("Nothing found for your request");
            }

            const arrayImages = page === 1 ? [] : [...this.state.images]

            this.setState({
                images: [...arrayImages, ...hits],
                search,
                page,
                totalPage: totalHits > 0 ? Math.ceil(totalHits / api_per_page) : 1,
            });
        }
        catch(error){
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
                <Searchbar onSearch={this.handleSearch} />
                {(this.state.status === "ready" || this.state.status === "modal") && <>
                    <ImageGallery images={this.state.images} />
                    {page !== totalPage && <Button onClick={this.handleLoadMore}/>}
                    {this.state.status === "modal" && <Loader />}                    
                </>}
                {this.state.status === "loading" && <Loader />}
            </div>
        );
    };
};