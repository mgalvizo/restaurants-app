import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ResultItem from './ResultItem';

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsVerticalScrollIndicator
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={result => result.id}
                // It must be called item
                renderItem={({ item }) => {
                    return <ResultItem result={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10,
    },
    titleStyle: {
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ResultsList;
