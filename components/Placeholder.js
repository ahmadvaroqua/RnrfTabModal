import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Placeholder extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.containerStyle}>

        </View>

      </View>

    )
  }
}

const styles = {
	containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
	},
};
