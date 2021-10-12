import React, {useState, useEffect} from 'react';
import {Container} from "./walletElements"

const WalletBalance = ({drizzle, drizzleState}) => {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        
    })
    return (
        <Container>
            <h3>Points: 0</h3>
        </Container>
    )
}
export default WalletBalance;