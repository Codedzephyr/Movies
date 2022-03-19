import React, { useState } from "react";
import BackgroundImage from "../Pictures/Rectangle_5.jpg";
import { ChakraProvider, extendTheme, StackDivider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { chakra } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import DisplayMovies from "../DisplayMovies";
import DisplayMovies1 from "../DisplayMovies1";

const theme = extendTheme({
    breakpoints: {
        xsml: "280px",
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1280px",
    },
});
const HomePage = () => {
    const [ inputValue, setInputValue ] = useState("");
    const [ movies, setMovies ] = useState("");


    React.useEffect(() => {
        if (!inputValue) {
            return;
        }

        fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=5503f080`)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                console.log(myJson)
                setMovies(myJson.Search)
            })
    }, [ inputValue ]);


    return (
        <ChakraProvider theme={ theme }>
            {/* surrounding container */ }
            <Box>
                {/* opening tag for navbar */ }
                <Box bgColor="black">
                    <Box
                        p="2rem"
                        display="flex"
                        justifyContent={ {
                            xsml: "center",
                            sm: "center",
                            md: "center",
                            lg: "flex-start",
                            xl: "flex-start",
                        } }
                        alignItems={ {
                            xsml: "center",
                            sm: "center",
                            md: "center",
                            lg: "start",
                            xl: "start",
                        } }
                        w="100%"
                    >
                        <Text
                            fontFamily="'Inter', sans-serif"
                            fontStyle="normal"
                            lineHeight="16px"
                            fontSize="2rem"
                            fontWeight="300"
                            margin={ {
                                xsml: "0rem",
                                sm: "0rem",
                                md: "0rem",
                                lg: "0rem 0rem 0rem 5rem",
                                xl: "0rem 0rem 0rem 5rem",
                            } }
                            border="1px"
                            p="1.2rem"
                            textAlign="center"
                            w="74%"
                            maxW="217px"
                            color="#ffffff"
                        >
                            MyTestApp
                        </Text>
                    </Box>
                </Box>
                {/* closing tag for navbar */ }
                {/* opening tag for backgroundimage */ }
                <Box
                    bgImage={ BackgroundImage }
                    padding="7rem"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgPosition={ {
                        xsml: "position",
                        sm: "position",
                        md: "initial",
                        lg: "initial",
                        xl: "initial",
                    } }
                >
                    <Text
                        color="#FFFFFF"
                        lineHeight={ {
                            xsml: "50.7px",
                            sm: "50.7px",
                            md: "69.7px",
                            lg: "93.7px",
                            xl: "93.7px",
                        } }
                        letterSpacing="-5%"
                        fontSize={ {
                            xsml: "1.5rem",
                            sm: "1.9rem",
                            md: "3.5rem",
                            lg: "4.5rem",
                            xl: "4.5rem"
                        } }
                        fontWeight="700"
                        fontStyle="normal"
                        fontFamily="'DM Sans', sans-seriff"
                        textAlign={ {
                            xsml: "center",
                            sm: "center",
                            md: "center",
                            lg: "left",
                            xl: "left"
                        } }
                    >
                        Watch <chakra.br />
                        Something <chakra.br />
                        Incredible <chakra.br />
                    </Text>
                </Box>
                {/* closing tag for backgroundimage */ }

                {/* opening tag of text field */ }
                <Box m="3rem auto" w="90%" maxW="1500px">
                    <Text
                        lineHeight="31px"
                        fontSize="1.5rem"
                        fontWeight="700"
                        fontStyle="normal"
                        fontFamily="'DM Sans', sans-seriff">Search</Text>
                    <Input size='lg' onChange={ (e) => setInputValue(e.target.value) } />
                    <Box>
                        {
                            movies && movies.map((MovieSearchCollection) => {
                                return (
                                    <VStack key={ MovieSearchCollection.imdbID } divider={
                                        <StackDivider borderColor="gray.200" />
                                    } spacing={ 8} align="stretch">
                                        <Box h="40px">
                                            <Text fontFamily="'DM Sans', sans-seriff" fontSize="1.5rem" fontWeight="500" > { MovieSearchCollection.Title }</Text>
                                        </Box>
                                    </VStack>
                                )
                            })
                        }
                    </Box>
                    <Text fontFamily="'DM Sans', sans-seriff" fontSize="2rem" fontWeight="500" my="0.5rem">Action</Text>
                    <DisplayMovies />
                    <Text fontFamily="'DM Sans', sans-seriff" fontSize="2rem" fontWeight="500" my="0.5rem">Adventure</Text>
                    <DisplayMovies1 />
                </Box>
                {/* closing tag of text field */ }

            </Box>
            {/* closing tag for surrounding container */ }
        </ChakraProvider>
    );
};

export default HomePage;
