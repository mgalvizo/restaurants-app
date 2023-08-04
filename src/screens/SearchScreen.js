import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    const handleSetTerm = newSearchTerm => {
        setTerm(newSearchTerm);
    };

    const handleTermSubmit = () => {
        console.log('term was submitted');
    };

    console.log(term);

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={handleSetTerm}
                onTermSubmit={handleTermSubmit}
            />
            <Text>SearchScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
