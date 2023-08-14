import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SendForm = ({ recipient, amount, onRecipientChange, onAmountChange, onSend }) => {
    const handleSendPress = () => {
        if (!recipient || !amount) {
            alert('Recipient and amount are required.');
            return;
        }
        onSend();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send CBDC</Text>
            <TextInput
                style={styles.input}
                placeholder="Recipient"
                value={recipient}
                onChangeText={onRecipientChange}
            />
            <TextInput
                style={styles.input}
                placeholder="Amount"
                value={amount}
                onChangeText={onAmountChange}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSendPress}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SendForm;
