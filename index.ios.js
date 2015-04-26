/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/components/main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
})

class githubNotetaker extends React.Component{
  render() {
    return (
      < NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GitHub Notetaker',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
