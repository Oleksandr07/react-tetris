import React from 'react';
import moment from 'moment';
import './GameList.css';
import PropTypes from 'prop-tipes';

const GameList = ({data}) => {
	return(
		<div className='game-list'>
			<ul>
				{data.map(({id, playerName, points, time, finished}) => (
					<li key={id}>
						<div className="player-name">Ім’я: {playerName}</div>
						<div className="player-point">Результат: {points}</div>
						<div className="player-time">Час: {time}</div>
						<div className="player-finished">Завершено: {moment(finished).format('MMMM do YYYY, h:mm')}</div>
					</li>
				))}
			</ul>
		</div>
	)	
}

GameList.propTypes = {
	wall: PropTypes.array.isRequired,
};

export default GameList;