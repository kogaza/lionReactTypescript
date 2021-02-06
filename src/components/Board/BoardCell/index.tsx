import { useDispatch } from "react-redux";
import { setLastUpdate, setSelectedCell } from "../../../store/game/game.actions";
import { CellConfig } from "../../../store/game/game.types";
import { BoardCellProps } from "./index.types";

export const BoardCell = (props: BoardCellProps) => {
    const dispatch = useDispatch();
    const { cell, index, addImage } = props;

    const handleClick = (cell: CellConfig) => {
        dispatch(setSelectedCell(cell));
        dispatch(setLastUpdate(Date.now()));
    }

    return (
        <div key={index} className={`cell ${cell.teamName === 'blue' ? "rotate" : ""}`}>
            {cell.animal && <img
                src={addImage(cell.animal)}
                alt={cell.name}
                onClick={() => handleClick(cell)}
                className={cell.isSelected ? 'selected' : undefined}
            />}
        </div>
    )
}
