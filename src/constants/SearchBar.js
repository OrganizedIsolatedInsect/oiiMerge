import React, {useState} from 'react';
import {Icon, Input} from '@ui-kitten/components';

import styles from './Styles';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();

  const searchIcon = props => <Icon name="search-outline" {...props} />;

  return (
    <Input
      placeholder="Search..."
      value={searchTerm}
      onChangeText={nextSearchTerm => setSearchTerm(nextSearchTerm)}
      accessoryLeft={searchIcon}
      style={styles.searchBarContainer}
    />
  );
};

export default SearchBar;
