import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ReceiveQRCode from '../components/ReceiveQRCode';
import CBDCService from '../services/CBDCService';
import RippleService from '../services/RippleService';

const ReceiveScreen = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [xrpAmount, setXrpAmount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch wallet balance using CBDCService
                const balance = await CBDCService.getWalletBalance(1);
                console.log('Wallet Balance:', balance);

                // Convert wallet balance to XRP using RippleService
                const xrpEquivalent = await RippleService.convertToXRP(balance);
                console.log('XRP Equivalent:', xrpEquivalent);
                setXrpAmount(xrpEquivalent);

                // Fetch user's wallet address from CBDCService
                const user = await CBDCService.getUserInfo(1);
                setWalletAddress(user.walletAddress);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Header title="Receive CBDC" />
            <ReceiveQRCode walletAddress={walletAddress} />
            <Text>XRP Equivalent: {xrpAmount} XRP</Text>
            {/* Display wallet address in text format */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ReceiveScreen;
