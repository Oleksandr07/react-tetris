import React from 'react';
import './PlayerLoginForm.css';

const PlayerLoginForm = ({value, onChange, onStartGame}) => {
    return(
        <form
            className="payer-login-form"
            onSubmit = {
                (e) => {
                    e.preventDefault();
                    onStartGame();
                }
            }
        >
            <label htmlFor="player-name">Введіть ім’я</label>
            <input id="player-name" type="text" value={value} placeholder="Введіть ім’я" onChange={onChange} required />
            <button className="btn">Грати</button>
        </form>
    )
}

export default PlayerLoginForm;