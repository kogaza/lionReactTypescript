import { useDispatch } from "react-redux";
import { setLastUpdate, setSelectedCellAction } from "../../../store/game/game.actions";
import { BoardCellProps } from "./index.types";

export const BoardCell = (props: BoardCellProps) => {
    const dispatch = useDispatch();
    const { cell, index, addImage } = props;

    const handleClick = () => {
        dispatch(setSelectedCellAction(cell));
        dispatch(setLastUpdate(Date.now()));
    }

    return (
        <div key={index} className={`cell ${cell.teamName === 'blue' ? "rotate" : ""}`}>
            {cell.animal && <img
                src={addImage(cell.animal)}
                alt={cell.name}
                onClick={handleClick}
                className={cell.isSelected ? 'selected' : undefined}
            />}
        </div>
    )
}
