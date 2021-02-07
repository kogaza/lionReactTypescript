export const possibleAnimalMoves = (animalName: string, teamName: string) => {
    let animalMoves: number[] = []
    switch (animalName) {
        case 'giraffe':
            animalMoves = [-3, -1, 1, 3];
            break;
        case 'elephant':
            animalMoves = [-4, -2, 2, 4];
            break;
        case 'chicken':
            animalMoves = [-3];
            break;
        case 'superChicken':
            animalMoves = [-4, -3, -2, -1, 1, 3];
            break;
        default:
            animalMoves = [-4, -3, -2, -1, 1, 2, 3, 4];
            break;
    }
    const possibleMoves = teamName === 'blue'
        ? animalMoves.map(move => move * (-1))
        : animalMoves;

    return possibleMoves;
}
