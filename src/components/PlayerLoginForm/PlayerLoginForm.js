import React from 'react';
import './PlayerLoginForm.css';
import GameField from "../GameField/GameField";

const PlayerLoginForm = ({value, onChange}) => {
    return(
        <form
            className="payer-name-form"
            onSubmit = {
                (e) => {
                    e.preventDefault();
                }
            }
        >
            <label htmlFor="player-name">Введіть ім’я</label>
            <input id="player-name" type="text" value={value} onChange={onChange} required />
            <button className="btn">Грати</button>
        </form>
    )
}

export default PlayerLoginForm;