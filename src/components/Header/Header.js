import React from 'react';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Header = ({query, handleSearch}) => {
  return (
    <div className={styles.headerContainer}>
      <SearchBar query={query} handleSearch={handleSearch} />
      <h3>Logo</h3>
    </div>
  )
}

export default Header
