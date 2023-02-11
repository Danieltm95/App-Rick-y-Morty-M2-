import React from "react";
import SearchBar from "./SearchBar";
//import styles from '../../src/App.module.css';

export default function Nav({onSearch}) {


    return (
        <div>
            <SearchBar
                onSearch={onSearch}
            />
        </div>
        
    );
 }