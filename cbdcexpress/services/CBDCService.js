const API_URL = 'http://localhost:3001'; // Use the mock server URL

const CBDCService = {
    getWalletBalance: async (userId) => {
        try {
            const response = await fetch(`${API_URL}/users/${userId}`);
            const data = await response.json();
            console.log('Wallet Balance Response:', data);
            return data.walletBalance; // Use the correct property name
        } catch (error) {
            console.error('Error fetching wallet balance:', error);
            throw error;
        }
    },

    sendCBDC: async (senderId, recipientId, amount) => {
        try {
            const response = await fetch(`${API_URL}/send`, { // Use the mock server endpoint for sending CBDC
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ senderId, recipientId, amount }),
            });
            const data = await response.json();
            return data.transactionId;
        } catch (error) {
            console.error('Error sending CBDC:', error);
            throw error;
        }
    },


    getTransactionHistory: async (userId) => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}`);
            const data = await response.json();
            return data.transactions;
        } catch (error) {
            console.error('Error fetching transaction history:', error);
            throw error;
        }
    },

    // Add more CBDC-related methods as needed
};

export default CBDCService;
