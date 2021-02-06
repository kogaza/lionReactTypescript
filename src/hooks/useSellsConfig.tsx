import { useDispatch } from "react-redux"
import { setCellsConfigAction } from "../store/game/game.actions"
import { defaultCellsConfig } from "../utils/defaultCellsConfig";

export const useSellsConfig = () => {
    const dispatch = useDispatch();
    dispatch(setCellsConfigAction(defaultCellsConfig));
}
