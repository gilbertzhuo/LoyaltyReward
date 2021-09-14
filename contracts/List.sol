// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract List {
    address owner;
    constructor() {
        owner = msg.sender;
    }
    event newItem(string name);
    event deleteItem(string name);
    string[] public ListTotal; 
    function ViewList() external view returns(string[] memory){
        return ListTotal;
    }
    function AddItem(string calldata name) external{
        ListTotal.push(name);
        emit newItem(name);
    }
    function DeleteItem(string memory _name) public {
        for (uint i = 0; i < ListTotal.length; ++i) {
            if (keccak256(abi.encodePacked(ListTotal[i])) ==  keccak256(abi.encodePacked(_name))) {
                ListTotal[i] = ListTotal[ListTotal.length-1];
                ListTotal.pop();
                emit deleteItem(_name);
            }
        }

    }
    
}