import { CellConfig } from "../store/game/game.types";
import { boardColor, teamAColor, teamBColor } from "./cellColors";

export const defaultCellsConfig: CellConfig[] = [
    {
        name: '0',
        color: teamAColor,
        animal: 'giraffe',
        teamName: 'blue',
    },
    {
        name: '1',
        color: teamAColor,
        animal: 'lion',
        teamName: 'blue',
    },
    {
        name: '2',
        color: teamAColor,
        animal: 'elephant',
        teamName: 'blue',
    },
    {
        name: '3',
        color: boardColor,
        animal: '',
        teamName: '',
    },
    {
        name: '4',
        color: teamAColor,
        animal: 'chicken',
        teamName: 'blue',
    },
    {
        name: '5',
        color: boardColor,
        animal: '',
        teamName: '',
    },
    {
        name: '6',
        color: boardColor,
        animal: '',
        teamName: '',
    },
    {
        name: '7',
        color: teamBColor,
        animal: 'chicken',
        teamName: 'green',
    },
    {
        name: '8',
        color: boardColor,
        animal: '',
        teamName: '',
    },
    {
        name: '9',
        color: teamBColor,
        animal: 'elephant',
        teamName: 'green',
    },
    {
        name: '10',
        color: teamBColor,
        animal: 'lion',
        teamName: 'green',
    },
    {
        name: '11',
        color: teamBColor,
        animal: 'giraffe',
        teamName: 'green',
    },
]
