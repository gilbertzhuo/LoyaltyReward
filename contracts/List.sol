// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract List {
    address owner;
    constructor() {
        owner = msg.sender;
    }
    event newItem(string name, string description);
    event deleteItem(string name);
    struct Item {
        string name;
        string description;
    }
    Item[] public ListTotal; 
    function ViewList() external view returns(Item[] memory){
        return ListTotal;
    }
    function AddItem(string calldata name, string calldata description) external{
        ListTotal.push(Item(name,description));
        emit newItem(name, description);
    }
    function DeleteItem(string memory _name) public {
        for (uint i = 0; i < ListTotal.length; ++i) {
            if (keccak256(abi.encodePacked(ListTotal[i].name)) ==  keccak256(abi.encodePacked(_name))) {
                ListTotal[i] = ListTotal[ListTotal.length-1];
                ListTotal.pop();
                emit deleteItem(_name);
            }
        }

    }
    
}