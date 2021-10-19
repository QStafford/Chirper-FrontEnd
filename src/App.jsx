import React, { useState } from "react"

const App = () => {
    const [username, setUsername] = useState("")
    const [chirp, setChirp] = useState("")
    const [chirps, setChirps] = useState([
        {
            username: "Josh",
            chirp: "Hello"
        },
        {
            username: "Jake",
            chirp: "Hello"
        },
        {
            username: "Garrett",
            chirp: "Hello"
        }
    ]);

    const chirpContainer = e => {
        setChirp(e.target.value)
    }

    const userNameContainer = e => {
        setUsername(e.target.value)
    }

    const handleClick = e => {
        e.preventDefault();
        // document.getElementById("chirpHolder").innerText = Chirps;

        setChirps([
            ...chirps,
            {
                username: username,
                chirp: chirp
            }
        ])
    }

    return (
        <div>
            <h1>Chirper</h1>
            <form action="">
                Username: <input type="text" name="Username" id="UserName" value={username} onChange={userNameContainer} />
                Chirp: <textarea name="Chirp" id="Chirper" cols="30" rows="10" value={chirp} onChange={chirpContainer}></textarea>
                <button type="submit" onClick={handleClick} id = "Chrpbtn">Chirp Chirp!</button>
            </form>
            {chirps.map(chirp => (
                <div id="postedChrp">
                    <div>{chirp.username}</div>
                    <p>{chirp.chirp}</p>
                </div>
            ))}
        </div>
    );
};

export default App;