import { Card, CardBody, CardHeader, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaRegUser, FaSeedling, FaUndo, FaUser } from 'react-icons/fa';

import AreaIcon from '../../assets/areaIcon.svg';
import { AreaContainer, ImageIconArea } from './style';
export function Dimensions() {
  const [hours, setHours] = useState(
    `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} `,
  );
  const [day, setDay] = useState(
    `${new Date().getDate()}/${new Date().getMonth() + 1} : ${new Date().getFullYear()} `,
  );

  function getData() {
    setHours(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `);
    setDay(`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} `);
  }
  return (
    <>
      <Card w="100%" mb="13px">
        <CardHeader display="flex" flexDirection="column" alignItems="end" textAlign="end">
          <Icon
            onClick={() => getData()}
            fontSize="18px"
            color="gray.600"
            as={FaUndo}
            _hover={{ cursor: 'pointer', color: 'gray.900' }}
          />
          <Text fontSize="12px" color="gray.600" fontWeight="400">
            Atualizado às {hours}
          </Text>
          <Text fontSize="12px" color="gray.600" fontWeight="400">
            no dia {day}
          </Text>
        </CardHeader>
        <CardBody display="flex">
          <Text fontSize="18px" color="gray.700" fontWeight="700" mr="50px">
            Áreas Totais
          </Text>
          <AreaContainer>
            <ImageIconArea>
              <img src={AreaIcon} alt="Area Icon" />
            </ImageIconArea>
            <Text fontSize="13px" color="gray.600" fontWeight="700">
              437.1 ha.
            </Text>
            <Text fontSize="8px" color="gray.500" fontWeight="700">
              TOTAL
            </Text>
          </AreaContainer>
          <AreaContainer>
            <ImageIconArea>
              <img src={AreaIcon} alt="Area Icon" />
              <Icon as={FaRegUser} mt="10px" ml="-24px" bg="gray.200" fontSize="13px" p="1px" />
            </ImageIconArea>
            <Text fontSize="13px" color="gray.600" fontWeight="700">
              437.1 ha.
            </Text>
            <Text fontSize="8px" color="gray.500" fontWeight="700">
              TOTAL
            </Text>
          </AreaContainer>
          <AreaContainer>
            <ImageIconArea>
              <img src={AreaIcon} alt="Area Icon" />
              <Icon as={FaUser} mt="10px" ml="-24px" bg="gray.200" fontSize="13px" p="1px" />
            </ImageIconArea>
            <Text fontSize="13px" color="gray.600" fontWeight="700">
              437.1 ha.
            </Text>
            <Text fontSize="8px" color="gray.500" fontWeight="700">
              TOTAL
            </Text>
          </AreaContainer>
          <AreaContainer>
            <ImageIconArea>
              <img src={AreaIcon} alt="Area Icon" />
              <Icon as={FaSeedling} mt="10px" ml="-24px" bg="gray.200" fontSize="13px" p="1px" />
            </ImageIconArea>
            <Text fontSize="13px" color="gray.600" fontWeight="700">
              437.1 ha.
            </Text>
            <Text fontSize="8px" color="gray.500" fontWeight="700">
              TOTAL
            </Text>
          </AreaContainer>
        </CardBody>
      </Card>
    </>
  );
}
