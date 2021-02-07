export const availableCells = (animalMoves: number[], neighbors: number[]) => {
    return animalMoves.filter(cell => neighbors.includes(cell));
}
