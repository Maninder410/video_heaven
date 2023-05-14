import { Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Text } from '@chakra-ui/react'
const Login = () => {
 return <Container maxW = {"container.xl"} h = {"100vh"} p = {"16"}>
    <form>
       <VStack
       alignItems={'stretch'}
       spacing={'8'}
        w = {'96'}
        m = {'auto'}
        my = {'16'}
        >
        
        <Heading> Welcome back</Heading>
        <Input placeholder='email' type = {'email'} required focusBorderColor='purple.500' >
        </Input>
        <Input placeholder='password' type = {'password'} required focusBorderColor='purple.500' >
        </Input>
        <Button variant = {"link"} alignSelf={'flex-end'}>
            <Link to = {'/fogetpassword'}>Forget Password</Link>
        </Button>
        <Button colorScheme='purple'>Log In</Button>
        <Text textAlign={'right'}>
            New user?
        
        <Button variant = {"link"} colorScheme='purple'>
            <Link to = {'/signup'}>sign up</Link>
        </Button>
        </Text>
       </VStack>
       
    </form>

 </Container>
}

export default Login