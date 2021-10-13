var LoyaltyReward = artifacts.require("./LoyaltyReward.sol");

module.exports = function(deployer) {
    deployer.deploy(LoyaltyReward);
};