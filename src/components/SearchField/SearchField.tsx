import React from 'react';
import './SearchField.scss';

export interface ISearchFieldProps {
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;

}

const SearchField: React.FC<ISearchFieldProps> = (props) => {

    return (
        <input type={"text"} onChange={(event) => props.onChange(event)} />
    );
}

export default SearchField;
