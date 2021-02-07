export const whoseMove = (isBlueMove: boolean, teamName: string): boolean => {
    return (isBlueMove && teamName === 'blue') || (!isBlueMove && teamName === 'green')
}
