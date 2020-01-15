import React from 'react';
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
