// SPDX-License-Identifier: GPL-3.0

//This its a simple Smart contract wallet 

// Todo list 
// Gonna let one person (The deployer)able to send and withdraw fromthe wallet
// Single person wallet
//Implement the Deposit() and Send() function
// Implement the Balanceof() to receive the current balance in the wallet

pragma solidity ^0.8.18;

contract EtherWallet {

    address payable public owner;

    constructor(){
        owner = payable(msg.sender);
    }

    function deposit() payable public {

    }

    function withdraw(address payable receiver, uint amount) public {
        require(msg.sender == owner, "Only owner can withdraw the Ether");
        receiver.transfer(amount);
    }


    function BalanceOf()view public returns(uint){
        return address(this).balance;
    }
}