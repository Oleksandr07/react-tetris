import React from 'react';
import PropTypes from 'prop-types';
import './GameField.css';

const Cell = ({full}) => <div className={`cell ${full ? 'full' : ''}`} />

Cell.propTypes = {
    full: PropTypes.bool.isRequired
};

const GameField = ({wall = []}) => {
    return (
        <div className="game">
            <div className="game-field">
                {wall.map((row, y) => row.map((col, x) => <Cell key={`${x}.${y}`} full={!!col} />))}
            </div>
        </div>
    );
}
GameField.propTypes = {
    wall: PropTypes.array.isRequired
};

export default GameField;