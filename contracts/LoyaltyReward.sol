// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract LoyaltyReward {
    address payable owner;
    uint balance = 0;
    constructor() {
        owner = payable(msg.sender);
    }
    mapping(address=>uint) PointBalance;
    event PurchaseItem(address person, uint value);
    event RedeemItem(address person, uint value);
    function getBalance() public view returns(uint) {
        return PointBalance[msg.sender];
    }
    function addPoints() internal {
        PointBalance[msg.sender]++;
    }
    function removePoints(uint _amount) internal {
        PointBalance[msg.sender] -= _amount;
    }
    function buyItem() external payable{
        balance += msg.value;
        addPoints();
        emit PurchaseItem(msg.sender, msg.value);
    }
    function ItemRedemption(uint _amount) external {
        require(PointBalance[msg.sender] >= 0, "You dont have enough points");
        removePoints(_amount);
        emit RedeemItem(msg.sender, _amount);
    }
    
}