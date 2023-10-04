import React from 'react'
import { Button, HStack, Text, Image } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <HStack justifyContent="center" width="100%" spacing="80%" m="10px auto">
        <HStack spacing="30px">
            <Image src="/notiom-logo.svg" boxSize="50px" alt="Notiom Logo" />
            <Text fontSize="40px" >Notiom</Text>
        </HStack>
        
        <Button fontSize="20px" color="white">Create</Button>
    </HStack>

  )
}

export default Navbar