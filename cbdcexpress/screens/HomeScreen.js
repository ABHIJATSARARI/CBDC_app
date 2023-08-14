import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import WalletBalance from '../components/WalletBalance';
import TransactionHistory from '../components/TransactionHistory';
import NewsFeed from '../components/NewsFeed';
import CBDCService from '../services/CBDCService'; // Import CBDCService
import RippleService from '../services/RippleService'; // Import RippleService

const HomeScreen = () => {
    const [walletBalance, setWalletBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch wallet balance using CBDCService
                const balance = await CBDCService.getWalletBalance(1);
                setWalletBalance(balance);

                // Fetch transaction history using CBDCService
                const transactionHistory = await CBDCService.getTransactionHistory(1);
                setTransactions(transactionHistory);

                // Set mock news data (replace with actual news fetching)
                setNews([
                    { id: 1, title: 'News 1', content: 'This is news 1' },
                    { id: 2, title: 'News 2', content: 'This is news 2' },
                ]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Header title="CBDC-Express" />
            <WalletBalance balance={walletBalance} />
            <TransactionHistory transactions={transactions} />
            <NewsFeed news={news} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
