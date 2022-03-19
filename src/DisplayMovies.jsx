import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react"

const DisplayMovies = () => {
    // const [ storeMovies, setStoreMovies ] = useState("");
    const getApiData = async () => {
        var url = 'http://www.omdbapi.com/?type=movie&page=1&apikey=5503f080'
        const response = await fetch(
          url
        ).then((response) => response.json());
        // let resp = JSON.stringify(response);
        // let res = JSON.parse(resp);
        console.log(response)
        // setStoreMovies(response)
    };

    useEffect(() => {
        getApiData();
    }, []);
    return (
        <Box>
            {/* {
                storeMovies &&
                storeMovies.localeCompare((storeMovies) => {
                    return (
                        <Box> </Box>
                    )
                })
            } */}
        </Box>
    )

}



export default DisplayMovies