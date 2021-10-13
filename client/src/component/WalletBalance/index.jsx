import React, {useState, useEffect} from 'react';
import {Container} from "./walletElements"
const WalletBalance = ({drizzle, drizzleState}) => {
    const [key, setKey] = useState();
    useEffect(()=>{
        let dataKey = drizzle.contracts.LoyaltyReward.methods["getBalance"].cacheCall()
        setKey(dataKey)
    },[])
    
    return (
        <Container>
            <h3>Points: {drizzleState.contracts["LoyaltyReward"].getBalance[key] ? drizzleState.contracts["LoyaltyReward"].getBalance[key].value:0}</h3>
        </Container>
    )
}
export default WalletBalance;