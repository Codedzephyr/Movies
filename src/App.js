// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './Pages/HomePage';

function App() {
  return (
   <ChakraProvider>
     <HomePage/>
   </ChakraProvider>
  );
}

export default App;
