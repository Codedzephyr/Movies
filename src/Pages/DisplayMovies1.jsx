import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";



const theme = extendTheme({
    breakpoints: {
        xsml: "280px",
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1280px",
    },
});


const DisplayMovies1 = () => {
    const [ storeMovies, setStoreMovies ] = useState("");
    const getApiData = async () => {
        var url = 'https://www.omdbapi.com/?s=star&apikey=5503f080'
        const response = await fetch(
            url
        ).then((response) => response.json());
        console.log(response)
        setStoreMovies(response.Search)
    };

    useEffect(() => {
        getApiData();
    }, []);
    return (
        <ChakraProvider theme={ theme }>
            <Box my="3rem">
                <Grid templateColumns={ {
                    xsml: "repeat(1,1fr)",
                    sm: "repeat(1,1fr)",
                    md: "repeat(1,1fr)",
                    lg: "repeat(5,1fr)",
                    xl: "repeat(5,1fr)"

                } } gap={ 7 }>
                    {
                        storeMovies && storeMovies.map((MovieCollection) => {
                            return (
                                <GridItem key={ MovieCollection.imdbID }  w="100%" h="300px" bgImage={ MovieCollection.Poster } bgSize="cover"
                                    bgRepeat="no-repeat" display="flex" alignItems="center" justifyContent="center">
                                    {/* <Image src={ MovieCollection.Poster }></Image> */ }
                                    <Text textAlign="center" color="white" fontFamily="'DM Sans', sans-seriff" fontSize="1.5rem" fontWeight="500" > { MovieCollection.Title }</Text>
                                </GridItem>
                            )
                        }
                        ) }
                </Grid >
            </Box >
        </ChakraProvider>
    )

}




export default DisplayMovies1