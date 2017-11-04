import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#5fcf80', alignItems: 'center', justifyContent: 'center' }}>
                <Text> Hello world! </Text>
            </View>
        );
    }
}

export default App;
