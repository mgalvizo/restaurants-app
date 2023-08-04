import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            // The title that appears in the top bar
            title: 'Business Search',
        },
    }
);

// Creates a default App React Component and displays the content that the navigator is producing
export default createAppContainer(navigator);
