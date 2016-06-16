'use strict';

// var React = require('react-native');
// import React, { Component } from 'react';
var React = require('react');
var {
  Component
} = React;
// import {
// AppRegistry,
// StyleSheet,
// Text,
// NavigatorIOS
// } from 'react-native';
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS
} = ReactNative;

var SearchPage = require('./SearchPage');

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

class HelloWorld extends Component {
  render() {
    return React.createElement(Text, {style: styles.text}, "Hello World!");
  }
}

AppRegistry.registerComponent('PropertyFinder', function() 
  { 
    return PropertyFinderApp; 
  }
);