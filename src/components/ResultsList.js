import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultItem from './ResultItem';

// We have access to the navigation prop because we are wrapping the component with "withNavigation"
const ResultsList = ({ title, results, navigation }) => {
    const { navigate } = navigation;

    if (!results.length) {
        return null;
    }

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
                    const { id } = item;

                    return (
                        // Allows us to navigate to the defined screen, and lets the user know when they tap into something
                        // Pass the id of the business we want to show, this will be available as a param in the navigation object of the ResultScreen
                        <TouchableOpacity
                            onPress={() => navigate('Result', { id })}
                        >
                            <ResultItem result={item} />
                        </TouchableOpacity>
                    );
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

// Returns a new version of our component with access to the navigation prop added by StackNavigator
export default withNavigation(ResultsList);
