import { Box, Card, CardBody, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaRegFrown, FaRegLaughBeam } from 'react-icons/fa';

import { LogoComent, LogoOpenReturn } from './style';

export function FeelingCards() {
  const [like, setLike] = useState(false);
  const [notLike, setNotLike] = useState(false);

  function Liked() {
    setLike(true);
    setNotLike(false);
  }

  function NotLiked() {
    setLike(false);
    setNotLike(true);
  }
  return (
    <Box w="50%">
      <Text fontSize="16px" fontWeight="700" color="gray.500" mb="24px">
        Sentimento
      </Text>

      <Card w="100%" display="flex" mb="12px">
        <CardBody display="flex" flexDirection="row" gap="16px">
          <LogoComent />
          <Box>
            <Box display="flex" justifyContent="space-between" mb="8px">
              <Text fontSize="10px" fontWeight="700" color="gray.500">
                João Júnior
              </Text>
              <Text fontSize="10px" fontWeight="400" color="gray.500">
                12/09/2022 11:45:12
              </Text>
            </Box>
            <Text fontSize="13px" fontWeight="400" color="gray.500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis massa id purus
              vulputate, at sodales tellus mattis. In commodo leo magna, porttitor dictum orci
              laoreet et. Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam |
            </Text>
          </Box>
        </CardBody>
      </Card>
      <Card w="100%" display="flex">
        <CardBody display="flex" flexDirection="row" gap="16px">
          <LogoOpenReturn />
          <Text fontSize="13px" fontWeight="400" color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis massa id purus
            vulputate, at sodales tellus mattis. In commodo leo magna, porttitor dictum orci laoreet
            et. Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam |
          </Text>
          <Box display="flex" gap="4px">
            <Icon
              fontSize="14px"
              as={FaRegLaughBeam}
              onClick={() => Liked()}
              color={like ? 'green.400' : ''}
              _hover={{
                color: 'green.400',
                cursor: 'pointer',
              }}
            />
            <Icon
              fontSize="14px"
              as={FaRegFrown}
              onClick={() => NotLiked()}
              color={notLike ? 'red' : ''}
              _hover={{
                color: 'red',
                cursor: 'pointer',
              }}
            />
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
