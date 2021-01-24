import { useSelector } from 'react-redux';
import '../../App.css';
import { getCells } from '../../store/game/game.selectors';
import { useSellsConfig } from '../useCellsConfig';

export const Board = () => {
    useSellsConfig();
    const cellsList = useSelector(getCells);
    return (
        <div className='board'>
            {cellsList.map((cell, index) => {
                return (
                    <div key={index} className='cell' style={{ backgroundColor: cell.color }}>{cell.name}</div>
                )
            })}
        </div>
    )
}
