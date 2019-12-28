import React from 'react';
import logo from './logo.svg';
import './SearchField.css';

export interface ISearchFieldProps {
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchField: React.FC<ISearchFieldProps> = (props) => {

    return (
        <input type={"text"} onChange={(event) => props.onChange(event)} />
    );
}

export default SearchField;
