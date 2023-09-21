import { Box, Card, CardBody, CardHeader, Icon, Image, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { FaSquare, FaUndo, FaWindowMaximize } from 'react-icons/fa';

import { FarmContext } from '../../context/Farm/FarmContext';
import { CardFarmSelect, DescriptionFarm, RefreshRequestFarms } from './style';
export function Farms() {
  const farms = [
    {
      name: 'Fazenda Salto Alto',
      location: 'Belo Horizonte - MG',
      hectareTotais: '430',
      hectaresPlantil: '380',
      latitude: '-20.1574045',
      longitude: '-53.5029533',
    },
    {
      name: 'Fazenda da Barra - Soares & Cia',
      location: 'Belo Horizonte - MG',
      hectareTotais: '430',
      hectaresPlantil: '380',
      latitude: '-26.2436321',
      longitude: '-52.6538349',
    },
    {
      name: 'FAZENDA GOSS',
      location: 'Pato Branco - PR',
      hectareTotais: '430',
      hectaresPlantil: '380',
      latitude: '-26.0531213',
      longitude: '-52.6771593',
    },
    {
      name: 'Agropecuária OMEL - Fazenda Guará',
      location: 'Campio Grande - MS',
      hectareTotais: '430',
      hectaresPlantil: '380',
      latitude: '-20.7953081',
      longitude: '-54.1422707',
    },
    {
      name: 'Fazenda Três Irmãos-Rota dos Butiazais',
      location: 'Ribas do Rio Preto - MS',
      hectareTotais: '430',
      hectaresPlantil: '380',
      latitude: '-30.6031211',
      longitude: '-51.3927398',
    },
  ];

  const [active, setActive] = useState(0);

  const { setName, setLocation, setHectareTotais, setHectaresPlantil, setLatitude, setLongitude } =
    useContext(FarmContext);

  function SelectFarm(
    farm: {
      name: string;
      location: string;
      hectareTotais: string;
      hectaresPlantil: string;
      latitude: string;
      longitude: string;
    },
    index: number,
  ) {
    setActive(index);
    setName(farm.name);
    setLocation(farm.location);
    setHectareTotais(farm.hectareTotais);
    setHectaresPlantil(farm.hectaresPlantil);
    setLatitude(farm.latitude);
    setLongitude(farm.longitude);
  }
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
    <Card w="100%" mb="15px">
      <CardHeader display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="17px" color="gray.700" fontWeight="700">
          Fazendas
        </Text>
        <RefreshRequestFarms>
          <Icon
            onClick={() => getData()}
            fontSize="18px"
            color="gray.600"
            as={FaUndo}
            _hover={{ cursor: 'pointer', color: 'gray.900' }}
          />
          <Text fontSize="12px" color="gray.600" fontWeight="400">
            Atualizado às {hours}
            <br />
            no dia {day}
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
              onClick={() => SelectFarm(farm, index)}
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
