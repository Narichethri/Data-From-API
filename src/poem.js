import React, { useEffect, useState } from 'react';
import './App.css';

function Poem() {
    const api = "https://poetrydb.org/title/";
    const [author, setAuthor] = useState("");
    const [poems, setPoems] = useState([]);

    const API = api + author;

    const getPoem = () => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setPoems(res); // Store the API response in the poems state
            });
    };

    useEffect(() => {
        if (author) { // Only make the API request if author is not empty
            getPoem();
        }
    }, [author]);

    return (
        <div class="one">
            <form>
                <select type="text" placeholder="Select the title of a Poem" id="selecttitle" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option>Select the title of a Poem.</option>
                    <option>To Mr John Moore, Author of the Celebrated Worm-Powder</option>
                    <option >To a Child of Quality, Five Years Old, 1704. The Author then Forty</option>
                    <option>395. Sonnet on the Author's Birthday</option>
                    <option>March the Third (the Author's Birthday)</option>
                    <option>To the Author of a Sonnet</option>
                    <option>To the Author of a Poem Entitled Successio</option>
                    <option>To a Lady Who Presented the Author With....</option>
                </select>
                <button type="button" class="button" onClick={() => {
                    getPoem(); // Fetch poems when the button is clicked
                }}
                >
                    Submit
                </button>
            </form>
            {/* Display the poems here */}
            <h4 class="poemlabel">Poem : </h4>
            {Array.isArray(poems) && poems.map((poem) => (
                <li class="poemdisplay">{poem.lines} </li>
            ))}

        </div>
    );
}

export { Poem };
