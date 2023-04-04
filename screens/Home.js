import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {globalStyles} from '../components/globalStyle';

export default class Home extends Component {
  goAction = name => {
    this.props.navigation.navigate(name);
  };
  render() {
    return (
      <View style={globalStyles.body}>
        <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.setRow}>
            <View style={styles.setCard}></View>
            <View style={styles.setCard}></View>
          </View>
          <View style={styles.moderCard}></View>
          <View style={styles.adRow}></View>
          <View style={styles.presentRow}>
            <TouchableOpacity
              onPress={() => this.goAction('Present')}
              style={styles.presentCard}>
              <Text style={{color: '#fff'}}>Present</Text>
            </TouchableOpacity>
            <View style={styles.presentCard}>
              <Text style={{color: '#fff'}}>Lucky</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.goAction('Twod')}>
            <Text style={{color: '#fff'}}>2D Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.goAction('Threed')}>
            <Text style={{color: '#fff'}}>3D Calendar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    marginTop: 5,
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    height: 150,
    backgroundColor: '#333',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  setCard: {
    width: '44%',
    height: 120,
    backgroundColor: '#333',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  moderCard: {
    width: '90%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
  },
  presentCard: {
    width: '44%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#333',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setRow: {
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center',
  },
  adRow: {
    alignSelf: 'center',
    height: 100,
    backgroundColor: '#444',
    width: '90%',
    marginVertical: 5,
  },
  presentRow: {
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'center',
  },
});
