import React from 'react';
import {RewardContainer, RewardH1, RewardWrapper, RewardCard, RewardIcon, RewardH2, RewardP, RewardButton, CardContainer} from './rewardElements';
import data from "./data.json";
import icon from "../../images/bitcoin.svg";

const RewardSection = () => {
    return (
        <RewardContainer>
            <RewardH1>Reward Redemption</RewardH1>
            <RewardWrapper>
                {data.Reward.map(item=>{
                    return (
                         <RewardCard key={item.title}>
                            <RewardIcon src={icon}/>
                            <CardContainer>
                                <RewardH2>{item.title}</RewardH2>
                                <RewardH2 style={{color:"lightseagreen"}}>{item.price}</RewardH2>
                            </CardContainer>
                            <RewardP>{item.description}</RewardP>
                            <RewardButton>REDEEM</RewardButton>
                        </RewardCard>
                    )
                })}
            </RewardWrapper>
        </RewardContainer>
    )
}
export default RewardSection;