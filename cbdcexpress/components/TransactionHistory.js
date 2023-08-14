import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TransactionHistory = ({ transactions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text>Date: {item.date}</Text>
            <Text>From: {item.sender}</Text>
            <Text>To: {item.receiver}</Text>
            <Text>Amount: {item.amount}</Text>
          </View>
        )}
      />
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
    marginBottom: 10,
  },
  transactionItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default TransactionHistory;
