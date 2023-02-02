import axios from 'axios';
import PropTypes from 'prop-types';

const pixabayFetch = axios.create({
    baseURL: 'https://some-domain.com/api/',
});

export const getImages = async ({page, search}) => {
    const request = await pixabayFetch.get('');
    console.log(request);
};

getImages.PropTypes = {
    params: PropTypes.shape({
        page: PropTypes.number.isRequired,
        search: PropTypes.string.isRequired,
    }),
};