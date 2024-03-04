import React, { useEffect, useState } from "react";

const UserClassParent = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f2e60255172432e4392f942be7ff6b2f')
            .then(response => response.json())
            .then(data => {
                console.log(data?.results);
                setMovieList(data?.results); // Ensure movieList is always an array
            });
    }, []);

    return (
        <div>
            <h1>UserClassParent</h1>
            <ul>
                {movieList.map((movie, index) => (
                    <li key={index}>{movie.original_title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserClassParent;
