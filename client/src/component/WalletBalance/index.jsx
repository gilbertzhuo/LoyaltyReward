import React, {useState, useEffect} from 'react';
import {Container} from "./walletElements"

const WalletBalance = ({drizzle, drizzleState}) => {
    const [balance, setBalance] = useState(0);
   
    return (
        <Container>
            <h3>Points: {balance}</h3>
        </Container>
    )
}
export default WalletBalance;