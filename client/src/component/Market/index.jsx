import React from 'react';
import {MarketContainer, MarketH1, MarketWrapper, MarketCard, MarketIcon, MarketH2, MarketP, MarketButton, CardContainer} from './marketElements';
import data from "./data.json";
import icon from "../../images/bitcoin.svg";

const Market = () => {
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
                                <MarketH2 style={{color:"lightseagreen"}}>{item.price}</MarketH2>
                            </CardContainer>
                            <MarketP>{item.description}</MarketP>
                            <MarketButton>BUY NOW</MarketButton>
                        </MarketCard>
                    )
                })}
            </MarketWrapper>
        </MarketContainer>
    )
}
export default Market;