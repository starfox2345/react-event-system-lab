// Code Keypad Component Here
import React, { Component } from 'react';

export default class KeyPad extends Component {

    keyPressCallback = () => {
        console.log('Entering password...')
    }


    render() {
        return(
            <input type="password" onKeyUp={this.keyPressCallback}></input> // only keyup works. keyPress and keyDown doesn't work
        )
    }
}