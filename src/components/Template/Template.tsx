import React from 'react';
import './Template.scss';
import Attendee from '../../models/Attendee';

export interface ITemplateProps {
    attendees: Attendee[];
}

const Template: React.FC<ITemplateProps> = (props) => {
    return (
        <div className="root">
            Template
        </div>
    );
}

export default Template;
