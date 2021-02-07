import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import './index.css';
import { setLastUpdate, setPossibleMoves, setSelectedCell } from "../../store/game/game.actions";
import { CellConfig } from "../../store/game/game.types";
import { availableCells } from "../../utils/availableCells";
import { cellNeighbors } from "../../utils/cellNeighbors";
import { possibleAnimalMoves } from "../../utils/possibleAnimalMoves";
import { BoardCellProps } from "./index.types";
import { getPossibleMoves } from "../../store/game/game.selectors";
import { teamAColor, teamBColor } from "../../utils/cellColors";
import { whoseMove } from "../../utils/checkIsClickable";

export const Cell = (props: BoardCellProps) => {
    const dispatch = useDispatch();
    const { cell, index, isBlueMove, addImage } = props;
    const selectTeamColor = (teamName: string) => {
        console.log('selectTeamColor', teamName);
        const selectedColor = teamName === 'blue' ? teamAColor : teamBColor;
        return selectedColor;
    }

    return (
        <div key={index}
            className={`
                cell
                ${cell.teamName === 'blue' && 'rotate'}
                ${cell.isClickable && 'clickable'}
                `}
            style={{ backgroundColor: cell.color }}>
            {cell.animal && <img
                src={addImage(cell.animal)}
                alt={cell.animal || 'empty'}
                onClick={() => handleClickAnimal(dispatch, cell, isBlueMove)}
                className={`
                ${cell.isSelected && 'selected'}
                ${cell.isAtRiskOfAttack && 'attacked'}
                ${whoseMove(isBlueMove, cell.teamName) && 'move'}
                `}
            />}
            {/* {console.log('---------------->>>', cell.id)} */}
        </div>
    )
}

const handleClickAnimal = (dispatch: Dispatch, cell: CellConfig, isBlueMove: boolean) => {
    if ((isBlueMove && cell.teamName === 'blue') || (!isBlueMove && cell.teamName === 'green')) {
        const animalMoves = possibleAnimalMoves(cell.animal, cell.teamName);
        const neighbors = cellNeighbors(cell.id);
        const possibleMoves = availableCells(animalMoves, neighbors);
        const availableCellsToMove = possibleMoves.map((el: number) => cell.id + el);
        // console.log('=====>', animalMoves, neighbors);
        // console.log('handleClickAnimal', possibleMoves);
        // console.log('availableCellsToMove', availableCellsToMove);
        dispatch(setPossibleMoves(availableCellsToMove));
        dispatch(setSelectedCell(cell));
        dispatch(setLastUpdate(Date.now()));
    }
}
