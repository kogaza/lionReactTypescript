import { CellConfig } from "../store/game/game.types";
import { boardColor, teamAColor, teamBColor } from "./cellColors";

export const defaultCellsConfig: CellConfig[] = [
    {
        name: '0',
        color: teamAColor,
        animal: 'giraffe',
        teamName: 'blue',
        isSelected: false,
    },
    {
        name: '1',
        color: teamAColor,
        animal: 'lion',
        teamName: 'blue',
        isSelected: false,
    },
    {
        name: '2',
        color: teamAColor,
        animal: 'elephant',
        teamName: 'blue',
        isSelected: false,
    },
    {
        name: '3',
        color: boardColor,
        animal: '',
        teamName: '',
        isSelected: false,
    },
    {
        name: '4',
        color: teamAColor,
        animal: 'chicken',
        teamName: 'blue',
        isSelected: false,
    },
    {
        name: '5',
        color: boardColor,
        animal: '',
        teamName: '',
        isSelected: false,
    },
    {
        name: '6',
        color: boardColor,
        animal: '',
        teamName: '',
        isSelected: false,
    },
    {
        name: '7',
        color: teamBColor,
        animal: 'chicken',
        teamName: 'green',
        isSelected: false,
    },
    {
        name: '8',
        color: boardColor,
        animal: '',
        teamName: '',
        isSelected: false,
    },
    {
        name: '9',
        color: teamBColor,
        animal: 'elephant',
        teamName: 'green',
        isSelected: false,
    },
    {
        name: '10',
        color: teamBColor,
        animal: 'lion',
        teamName: 'green',
        isSelected: false,
    },
    {
        name: '11',
        color: teamBColor,
        animal: 'giraffe',
        teamName: 'green',
        isSelected: false,
    },
]
