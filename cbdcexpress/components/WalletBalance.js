import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WalletBalance = ({ balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your CBDC Wallet</Text>
      <Text style={styles.balance}>{balance}</Text>
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
  balance: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default WalletBalance;
