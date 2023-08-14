import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsFeed = ({ news }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Feed</Text>
      <Text style={styles.news}>{news}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  news: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default NewsFeed;
