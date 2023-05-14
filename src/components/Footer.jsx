import React from 'react'
import { Box, Button, HStack, Input, VStack } from '@chakra-ui/react';
import { Stack ,Heading} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';
import { Text } from '@chakra-ui/react';
const Footer = () => {
  return (
   <Box bgColor = {"blackAlpha.900"} minH = {"40"}
   p = "16" color={"white"}
   >
    <Stack direction={['column','row']}>
        <VStack alignItems={"stretch"} w = {"full"} px = {"4"}>
<Heading size = "md" textTransform={'uppercase'}>
Subscribe to get updates
</Heading>
<HStack
borderBottom={"2px solid white"}
py={"2"}>
    <Input placeholder = "enter email here" border={"none"}
    borderRadius={'none'}
    outline={'none'}
    focusBorderColor='none'></Input>
    <Button
    p = {"0"}
    colorScheme='purple'
    variant={'ghost'}
    borderRadius={'0 20px 20px 0'}>
        <AiOutlineSend size = {20}></AiOutlineSend>
    </Button>
</HStack>
</VStack>
<VStack w = {'full'}
borderLeft={['none',"1px solid white"]}
borderRight={['none',"1px solid white"]}
>
<Heading size = {"md"} textTransform={'uppercase'} textAlign={'center'}>Video Heaven</Heading>
<Text>All rights received</Text>
</VStack>
<VStack w = {'full'}>
<Heading size = {'md'} textTransform={'uppercase'}>
    Social Media
</Heading>
<Button variant={"link"} colorScheme={'white'}>
<a href = "https://www.youtube.com/channel/UCAIdIX2_H5aroRcCeDUYMWQ" target={'blank'}>Youtube</a>
</Button>
<Button variant={"link"} colorScheme={'white'}>
<a href = "https://www.youtube.com/channel/UCAIdIX2_H5aroRcCeDUYMWQ" target={'blank'}>Instagram</a>
</Button>
<Button variant={"link"} colorScheme={'white'}>
<a href = "https://github.com/Maninder410" target={'blank'}>Github</a>
</Button>
</VStack>
</Stack>
   </Box>
  )
}

export default Footer