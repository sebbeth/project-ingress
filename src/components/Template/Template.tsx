import React from 'react';
import logo from './logo.svg';
import './Template.css';
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
