import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export default class Searchbar extends Component{
    state = {
        search: '',
    };

    handleChange = (event) => {
        this.setState({
            search: event.target.value,
        });
    };

    render() {
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.props.onSearch}>
                    <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChange}
                        name="input"
                    />
                </form>
            </header>
        );
    };
};

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};