import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCellsConfig } from "../store/game/game.actions";
import { getCells, getSelectedCell } from "../store/game/game.selectors";

export const useUpdateBoard = (lastUpdate: number) => {
    const dispatch = useDispatch();
    const boardCells = useSelector(getCells);
    const selectedCell = useSelector(getSelectedCell);

    const setCurrentBoard = () => {
        const currentBoard = boardCells.map(cell => {
            const isSelected = cell.name === selectedCell.name ? cell.isSelected = true : cell.isSelected = false;
            return (
                {
                    ...cell,
                    isSelected,
                }
            )
        });
        dispatch(setCellsConfig(currentBoard));
    }

    useEffect(() => {
        setCurrentBoard()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastUpdate]);

}
