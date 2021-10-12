pragma solidity ^0.8.7;

contract LoyaltyReward {
    address owner;
    uint balance = 0;
    constructor() {
        owner = msg.sender;
    }
    
    mapping(address=>uint) PointBalance;

    function getBalance() public view returns(uint) {
        return PointBalance[msg.sender];
    }
    function addPoints() internal {
        PointBalance[msg.sender]++;
    }
    function buyItem() external payable{
        balance += msg.value;
        addPoints();
    }
    function removePoints(uint _amount) external {
        require(PointBalance[msg.sender] >= 0, "Not enough points");
        PointBalance[msg.sender] -= _amount;
    }
    
}