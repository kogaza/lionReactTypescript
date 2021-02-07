import { useSelector } from 'react-redux';
import './index.css';
import { getCells, getLastUpdate, getPossibleMoves, getIsBlueMove } from '../../store/game/game.selectors';
import { useSellsConfig } from '../../hooks/useSellsConfig';
import chicken from '../../images/chicken.png';
import lion from '../../images/lion.png';
import elephant from '../../images/elephant.png';
import giraffe from '../../images/giraffe.png';
import superChicken from '../../images/superChicken.png';
import { Cell } from '../Cell';
import { useUpdateBoard } from '../../hooks/useUpdateBoard';
import { CellConfig } from '../../store/game/game.types';
import { boardColor, teamAColor, teamBColor } from '../../utils/cellColors';
import { whoseMove } from '../../utils/checkIsClickable';

export const Board = () => {
    const lastUpdate = useSelector(getLastUpdate);
    const cellsList = useSelector(getCells);
    const possibleMoves = useSelector(getPossibleMoves);
    const isBlueMove = useSelector(getIsBlueMove)

    useSellsConfig();
    useUpdateBoard(lastUpdate);

    console.log('Board possibleMoves', possibleMoves, isBlueMove);

    // poniższa funcja powinna aktualozować store, a tylko aktualizuje dane przez wyświetleniem
    const updatedCellsList = cellsList.map((cell: CellConfig) => {
        let color = boardColor;
        let isAtRiskOfAttack = false;
        let isClickable = whoseMove(isBlueMove, cell.teamName);

        if (possibleMoves.find((el: number) => el === cell.id)) {
            color = isBlueMove ? teamAColor : teamBColor;
            isAtRiskOfAttack = !whoseMove(isBlueMove, cell.teamName);
            isClickable = true;
        }

        return {
            ...cell,
            color,
            isClickable,
            isAtRiskOfAttack,
        }
    })

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
            {updatedCellsList.map((cell, index) => {
                return (
                    <Cell
                        key={index}
                        cell={cell}
                        index={index}
                        isBlueMove={isBlueMove}
                        addImage={addImage}
                    />
                )
            })}
        </div>
    )
}
