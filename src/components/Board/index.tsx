import { useSelector } from 'react-redux';
import './index.css';
import { getCells, getLastUpdate } from '../../store/game/game.selectors';
import { useSellsConfig } from '../../hooks/useSellsConfig';
import chicken from '../../images/chicken.png';
import lion from '../../images/lion.png';
import elephant from '../../images/elephant.png';
import giraffe from '../../images/giraffe.png';
import superChicken from '../../images/superChicken.png';
import { BoardCell } from './BoardCell';
import { useUpdateBoard } from '../../hooks/useUpdateBoard';

export const Board = () => {
    const lastUpdate = useSelector(getLastUpdate);
    const cellsList = useSelector(getCells);

    useSellsConfig();
    useUpdateBoard(lastUpdate);

    const addImage = (animal: string) => {
        let animalImage;
        switch (animal) {
            case 'lion':
                animalImage = lion;
                break;
            case 'chicken':
                animalImage = chicken;
                break;
            case 'elephant':
                animalImage = elephant;
                break;
            case 'giraffe':
                animalImage = giraffe;
                break;
            case 'superChicken':
                animalImage = superChicken;
                break;
            default:
                break;
        }
        return animalImage;
    };

    return (
        <div className='board'>
            {cellsList.map((cell, index) => {
                return (
                    <BoardCell key={index} cell={cell} index={index} addImage={addImage} />
                )
            })}
        </div>
    )
}
