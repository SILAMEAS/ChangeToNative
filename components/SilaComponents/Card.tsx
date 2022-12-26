import React from 'react';
import {
  Box,
  HStack,
  NativeBaseProvider,
  Pressable,
  Text,
  VStack,
  Image,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {setDATA} from '../../src/Redux/counter/CounterSlice';
interface typeOF {
  name: string;
  email: string;
  id: string;
}
const Card = ({name, email, id}: typeOF) => {
  const datas: any = useSelector((state: any) => state.counter.DATA);
  const displact = useDispatch();
  const HandleDelete = async () => {
    const res = await fetch('http://localhost:3001/user/delete/' + id, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data) {
      const newData = datas.filter((i: any) => i.id !== id);
      displact(setDATA(newData));
    }
  };
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.600"
        py="4"
        px="3"
        borderRadius="5"
        rounded="md"
        width={375}
        maxWidth="100%"
        mt={3}
        key={id}
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text fontSize="xl" color="white">
                {email}
              </Text>
              <Text
                color="white"
                fontSize="sm"
                bg={'red.500'}
                rounded="lg"
                textAlign="center"
                onPress={HandleDelete}
              >
                Delete
              </Text>
            </VStack>
            <Pressable
              rounded="xs"
              bg="primary.400"
              alignSelf="flex-start"
              py="1"
              px="3"
            >
              <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white"
              >
                {name}
              </Text>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
            }}
            alt="Aang flying and surrounded by clouds"
            height="100"
            rounded="full"
            width="100"
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Card;
