import '../../App.css';


export const Board = () => {
    const arrayCells = [0,1,2,3,4,5,6,7,8,9,10,11]
    return (
        <div className='board'>
            {arrayCells.map((cell, index) => {
                return (
                    <div className='cell' key={index}>{cell}</div>
                )
            })}
        </div>
    )
}
