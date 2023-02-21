import React, { useState } from "react";
import validation from "./validation.js"
import '../../src/components/Form.modules.css';


export default function Form(props) {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    console.log(userData);

    // const handleInputChange = (e) => {
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     setUserData({ ...userData, [name]: value });
    //     //setErrors(validation(userData));


    //   };

    const handleInputChange = (e) => {
       
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
            
        })

        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value,
        })


        )
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            props.login(userData);
            console.log("holi hice el submit")

        };

    return (
        <div className='log'>
            <form onSubmit={handleSubmit}>
                <label >Username:</label>
                <input

                    type="text"
                    name="username"
                    placeholder='Ingrese el usuario...'
                    value={userData.username}
                    onChange={handleInputChange}

                >

                </input>

                <p>{errors.username}</p>


                <label>Password:</label>
                <input
                    className="loginBar"
                    type="password"
                    name="password"
                    placeholder='Ingrese su contrasena...'
                    value={userData.password}
                    onChange={handleInputChange}

                ></input>
                <p>{errors.password}</p>


                <button className="loginBtn" type="submit">LOGIN</button>
            </form>
        </div>
    );
}