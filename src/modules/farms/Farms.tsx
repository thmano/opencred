import { Box, Card, CardBody, CardHeader, Icon, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaSquare, FaUndo, FaWindowMaximize } from 'react-icons/fa';

import { CardFarmSelect, DescriptionFarm, RefreshRequestFarms } from './style';
export function Farms() {
  const farms = [
    {
      name: 'Fazenda Salto Alto',
      location: 'Belo Horizonte - MG',
      hectareTotais: '430',
      hectaresPlantil: '380',
    },
    {
      name: 'Fazenda Salto Alto',
      location: 'Belo Horizonte - MG',
      hectareTotais: '430',
      hectaresPlantil: '380',
    },
    {
      name: 'Fazenda Salto Alto',
      location: 'Belo Horizonte - MG',
      hectareTotais: '430',
      hectaresPlantil: '380',
    },
    {
      name: 'Fazenda Salto Alto',
      location: 'Belo Horizonte - MG',
      hectareTotais: '430',
      hectaresPlantil: '380',
    },
    {
      name: 'Fazenda Salto Alto',
      location: 'Belo Horizonte - MG',
      hectareTotais: '430',
      hectaresPlantil: '380',
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <Card w="100%" mb="15px">
      <CardHeader display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="17px" color="gray.700" fontWeight="700">
          Fazendas
        </Text>
        <RefreshRequestFarms>
          <Icon fontSize="18px" color="gray.600" as={FaUndo} />
          <Text fontSize="12px" color="gray.600" fontWeight="400">
            Atualizado às 23:34:23
            <br />
            no dia 14/09/2022
          </Text>
        </RefreshRequestFarms>
      </CardHeader>
      <Box display="flex" flexWrap="wrap">
        {farms.map((farm, index) => {
          return (
            <CardBody
              _hover={{
                cursor: 'pointer',
              }}
              ml="20px"
              key={index}
              onClick={() => setActive(index)}
            >
              <CardFarmSelect className={active === index ? 'active' : ''}>
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="../src/assets/farm.png"
                  alt="farm icon"
                  mr="15px"
                />
                <DescriptionFarm>
                  <Text color="gray.600" fontSize="13px" fontWeight="700">
                    {farm.name}
                  </Text>
                  <Text color="gray.600" fontSize="13px" fontWeight="700">
                    {farm.location}
                  </Text>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                      <Icon as={FaSquare} fontSize="10px" mr="2px" />
                      <Text color="gray.600" fontSize="10px" fontWeight="700">
                        {farm.hectareTotais} ha.
                      </Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Icon as={FaWindowMaximize} fontSize="10px" mr="2px" />
                      <Text color="gray.600" fontSize="10px" fontWeight="700">
                        {farm.hectaresPlantil} ha.
                      </Text>
                    </Box>
                  </Box>
                </DescriptionFarm>
              </CardFarmSelect>
            </CardBody>
          );
        })}
      </Box>
    </Card>
  );
}
