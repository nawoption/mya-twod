import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
  goAction = name => {
    this.props.navigation.navigate(name);
  };
  render() {
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.goAction('Twod')}>
          <Text style={{color: '#fff'}}>Twod</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.goAction('Threed')}>
          <Text style={{color: '#fff'}}>Threed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.goAction('Present')}>
          <Text style={{color: '#fff'}}>Present</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    marginTop:15
  },
});
