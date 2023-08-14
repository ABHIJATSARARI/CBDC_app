import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReceiveQRCode = ({ walletAddress }) => {
  // Generate QR code based on walletAddress
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receive CBDC</Text>
      {/* Display QR code */}
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
});

export default ReceiveQRCode;
