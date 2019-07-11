import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});