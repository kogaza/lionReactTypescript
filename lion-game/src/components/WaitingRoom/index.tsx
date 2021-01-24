import '../../App.css';

export interface WaitingRoomProps {
    team: string;
}

export const WaitingRoom = (props: WaitingRoomProps) => {
    const {team} = props;

    return (
        <div className={`waiting-room team-${team}`}>
            waiting room
        </div>
    )
}
