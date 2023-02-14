import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from '../../src/App.module.css';

export default function Nav({ onSearch }) {


    return (
        <nav className={styles.navBar}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
                alt=""
                width="20%"
            />
            <div>
                <NavLink className={styles.links} to='/about'>

                    About!

                </NavLink>
                <NavLink className={styles.links} to='/home'>

                    Home!

                </NavLink>
            </div>
            <SearchBar
                onSearch={onSearch}
            />
        </nav>

    );
}