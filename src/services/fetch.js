import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '31500744-82fe9083580524fe3bc41bb93';
export const api_per_page = 12;

const pixabayFetch = axios.create({
    baseURL: 'https://pixabay.com/api/',
});

export const getImages = async ({page, search}) => {
    const params = {
        key: API_KEY,
        q: search,
        page,
        image_type: "photo",
        orientation: "horizontal",
        per_page: api_per_page,
    }
    return await pixabayFetch.get('', {params});
};

getImages.PropTypes = {
    params: PropTypes.shape({
        page: PropTypes.number.isRequired,
        search: PropTypes.string.isRequired,
    }),
};