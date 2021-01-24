import { useSelector } from 'react-redux';
import './index.css';
import { getCells } from '../../store/game/game.selectors';
import { useSellsConfig } from '../useCellsConfig';
import chicken from '../../images/chicken.jpeg';
import lion from '../../images/lion.jpeg';
import elephant from '../../images/elephant.jpeg';
import giraffe from '../../images/giraffe.jpeg';
import superChicken from '../../images/superChicken.jpeg';

export const Board = () => {
    useSellsConfig();
    const cellsList = useSelector(getCells);

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
    }

    return (
        <div className='board'>
            {cellsList.map((cell, index) => {
                return (
                    <div key={index} className={`cell ${cell.teamName === 'blue' ? "rotate" : ""}`}>
                        {cell.animal && <img src={addImage(cell.animal)} />}
                    </div>
                )
            })}
        </div>
    )
}
