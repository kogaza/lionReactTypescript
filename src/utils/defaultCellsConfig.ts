import { CellConfig } from "../store/game/game.types";
import { boardColor, teamAColor, teamBColor } from "./cellColors";

export const defaultCellsConfig: CellConfig[] = [
    {
        name: '0',
        color: teamAColor,
    },
    {
        name: '1',
        color: teamAColor,
    },
    {
        name: '2',
        color: teamAColor,
    },
    {
        name: '3',
        color: boardColor,
    },
    {
        name: '4',
        color: teamAColor,
    },
    {
        name: '5',
        color: boardColor,
    },
    {
        name: '6',
        color: boardColor,
    },
    {
        name: '7',
        color: teamBColor,
    },
    {
        name: '8',
        color: boardColor,
    },
    {
        name: '9',
        color: teamBColor,
    },
    {
        name: '10',
        color: teamBColor,
    },
    {
        name: '11',
        color: teamBColor,
    },
]
