import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import Header from '../components/Header';
import SendForm from '../components/SendForm';
import CBDCService from '../services/CBDCService'; // Import CBDCService
import RippleService from '../services/RippleService'; // Import RippleService

const SendScreen = () => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const handleSend = async () => {
        if (!recipient || !amount) {
            Alert.alert('Error', 'Recipient and amount are required.');
            return;
        }
        try {
            // Send CBDC using CBDCService
            const transactionId = await CBDCService.sendCBDC(1, 2, parseInt(amount, 10));
            console.log('Transaction ID:', transactionId);
            // Convert CBDC to XRP using RippleService
            const xrpAmount = await RippleService.convertToXRP(parseInt(amount, 10));
            console.log('XRP Equivalent:', xrpAmount);
            // Handle success and error cases
            Alert.alert('Success', `CBDC sent successfully. XRP equivalent: ${xrpAmount}`);
            // Reset form fields
            setRecipient('');
            setAmount('');
        } catch (error) {
            console.error('Error sending CBDC:', error);
            Alert.alert('Error', 'Failed to send CBDC. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Header title="Send CBDC" />
            <SendForm
                recipient={recipient}
                amount={amount}
                onRecipientChange={setRecipient}
                onAmountChange={setAmount}
            />
            <Button title="Send" onPress={handleSend} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default SendScreen;
