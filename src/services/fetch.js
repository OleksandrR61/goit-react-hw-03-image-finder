import axios from 'axios';

const pixabayFetch = axios.create({
    baseURL: 'https://some-domain.com/api/',
});

export const getImages = async () => {
    const request = await pixabayFetch
    console.log()
}