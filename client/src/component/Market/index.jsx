import React from 'react';
import {MarketContainer, MarketH1, MarketWrapper, MarketCard, MarketIcon, MarketH2, MarketP, MarketButton, CardContainer} from './marketElements';
import data from "./data.json";
import icon from "../../images/bitcoin.svg";

const Market = ({drizzle, drizzleState}) => {
    return (
        <MarketContainer>
            <MarketH1>MARKETPLACE</MarketH1>
            <MarketWrapper>
                {data.Market.map(item=>{
                    return (
                         <MarketCard key={item.title}>
                            <MarketIcon src={icon}/>
                            <CardContainer>
                                <MarketH2>{item.title}</MarketH2>
                                <MarketH2 style={{color:"lightseagreen"}}>{item.price} ETH</MarketH2>
                            </CardContainer>
                            <MarketP>{item.description}</MarketP>
                            <MarketButton onClick={()=>{
                                drizzle.contracts.LoyaltyReward.methods.buyItem.cacheSend({from: drizzleState.accounts[0], value: drizzle.web3.utils.toWei(item.price, 'ether')})
                            }}>BUY NOW</MarketButton>
                        </MarketCard>
                    )
                })}
            </MarketWrapper>
        </MarketContainer>
    )
}
export default Market;