import { useDispatch } from "react-redux"
import { setCellsConfig } from "../store/game/game.actions"
import { defaultCellsConfig } from "../utils/defaultCellsConfig";

export const useSellsConfig = () => {
    const dispatch = useDispatch();
    dispatch(setCellsConfig(defaultCellsConfig));
}
