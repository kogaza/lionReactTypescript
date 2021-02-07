export const cellNeighbors = (cellId: number) => {
    switch (cellId) {
        case 0:
            return [1, 3];
        case 1:
            return [-1, 1, 2, 3, 4];
        case 2:
            return [-1, 2, 3];
        case 3:
            return [-3, -2, 1, 3, 4];
        case 5:
            return [-4, -3, -1, 2, 3];
        case 6:
            return [-3, -2, 1, 3, 4];
        case 8:
            return [-4, -3, -1, 2, 3];
        case 9:
            return [-3, -2, 1];
        case 10:
            return [-4, -3, -2, -1, 1];
        case 11:
            return [-3, -1];
        default:
            return [-4, -3, -2, -1, 1, 2, 3, 4];
    }
}
