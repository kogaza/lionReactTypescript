import { CellConfig } from "../../store/game/game.types";

export interface BoardCellProps {
    cell: CellConfig;
    index: number;
    isBlueMove: boolean;
    addImage: (animal: string) => string | undefined;
}
