import React from 'react';
import './Room.scss';
import { useParams } from 'react-router';

export interface IRoomProps {
}

const Room: React.FC<IRoomProps> = (props) => {
    const { roomId } = useParams<{ roomId: string }>();

    return (
        <div className="root">
            Room ID {roomId}
        </div>
    );
}

export default Room;
