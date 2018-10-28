import React, { Component } from 'react';
import GameField from '../components/GameField/GameField';
import PlayerLoginForm from '../components/PlayerLoginForm/PlayerLoginForm';

const wall = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1]
];

class GameContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            paused: false,
            started: false,
        }
    }

    playerNameChange = ({target: {value}}) => {
        console.log(value)
        this.setState({
            name: value,
        });
    };

    gameControl = (e) => {
        const {name, paused} = this.state;
        switch (e.key) {
            case 'ArrowUp':
                console.log('Up')
                break;
            case 'ArrowRight':
                console.log('Right')
                break;
            case 'ArrowLeft':
                console.log('Left')
                break;
            case 'ArrowDown':
                console.log('Down')
                break;
            case 'Escape':
                console.log('Escape')
                break;
            default:
                break;
        }
    };

    componentDidMount(){
        document.documentElement.addEventListener('keydown', this.gameControl);
    }

    componentWillUnmount(){
        document.documentElement.removeEventListener('keydown', this.gameControl);
    }


    render(){
        const {name, paused, started} = this.state;
        return(
            <GameField wall={wall}>
                {!started && (
                    <PlayerLoginForm
                        value = {name}
                        onChange = {this.playerNameChange}
                    />
                )}
            </GameField>
        )
    }
}

export default GameContainer;