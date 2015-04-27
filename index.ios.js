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

class GitHubble extends React.Component{
  render() {
    return (
      < NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GitHubble',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('GitHubble', () => GitHubble);
