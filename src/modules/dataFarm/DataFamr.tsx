import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaHome, FaSeedling } from 'react-icons/fa';

import AreaIcon from '../../assets/areaIcon.svg';
import { ChartBar } from '../../components/ChartBar';
import { ChartLine } from '../../components/ChartLine';
import { Mapa } from '../../components/Mapa';
import { FarmContext } from '../../context/Farm/FarmContext';
import { AreaContainer, ImageIconArea, SubTitle } from './style';

export function DataFarm() {
  const { name, location } = useContext(FarmContext);
  return (
    <Card>
      <Box display="flex">
        <CardBody maxW="30%" display="flex" flexDirection="column">
          <Text fontSize="18px" color="gray.600" fontWeight="700" mb="8px">
            {name ? name : 'Nenhuma selecionada'}
          </Text>
          <SubTitle>Média Propriedade Produtiva</SubTitle>
          <Text fontSize="10px" color="gray.500" fontWeight="400" mb="11px">
            ROD BR 359 REGIÃO DO POSTO DA PÓLVORA + 6 KM ESQUERDA
          </Text>
          <Text fontSize="10px" color="gray.600" fontWeight="700" mb="32px">
            {location ? location : 'Nenhum selecionado'}
          </Text>
          <hr />
          <Text fontSize="12px" color="gray.600" fontWeight="400" mt="14px">
            NIRF
          </Text>
          <Text fontSize="18px" color="gray.600" fontWeight="600">
            -
          </Text>
          <Text fontSize="12px" color="gray.600" fontWeight="400" mt="24px">
            INCRA
          </Text>
          <Box display="flex" alignItems="center" mb="60px">
            <Text fontSize="18px" color="gray.600" fontWeight="700">
              9080531052877
            </Text>
            <Icon as={FaCheckCircle} color="green.800" fontSize="18px" ml="8px" mr="5px" />
            <Text fontSize="12px" color="green.800" fontWeight="700">
              Quitado
            </Text>
          </Box>
          <Text fontSize="12px" color="gray.600" fontWeight="400" mt="14px">
            MATRÍCULAS
          </Text>
          <TableContainer mb="23px">
            <Table variant="simple" overflowX="hidden">
              <Thead>
                <Tr fontSize="13px" fontWeight="700" color="gray.600">
                  <Th>Num.</Th>
                  <Th>Área</Th>
                  <Th>UF</Th>
                  <Th>Município</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr fontSize="13px" fontWeight="400" color="gray.600">
                  <Td isNumeric>12102</Td>
                  <Td isNumeric>232.2</Td>
                  <Td>MS</Td>
                  <Td>Coxim</Td>
                </Tr>
                <Tr fontSize="13px" fontWeight="400" color="gray.600">
                  <Td isNumeric>12102</Td>
                  <Td isNumeric>232.2</Td>
                  <Td>MS</Td>
                  <Td>Coxim</Td>
                </Tr>
                <Tr fontSize="13px" fontWeight="400" color="gray.600">
                  <Td isNumeric>12102</Td>
                  <Td isNumeric>232.2</Td>
                  <Td>MS</Td>
                  <Td>Coxim</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <hr />
          <Text fontSize="12px" color="gray.600" fontWeight="400" mt="23px">
            PROPRIETÁRIOS
          </Text>
          <TableContainer mb="37px">
            <Table variant="simple" overflowX="hidden">
              <Thead>
                <Tr fontSize="13px" fontWeight="700" color="gray.600">
                  <Th>Nome</Th>
                  <Th>%</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr fontSize="13px" fontWeight="400" color="gray.600">
                  <Td>FERNANDO C.</Td>
                  <Td isNumeric>12.3</Td>
                </Tr>
                <Tr fontSize="13px" fontWeight="400" color="gray.600">
                  <Td>CARLOS L.</Td>
                  <Td isNumeric>87.7</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <hr />
          <Text fontSize="12px" color="gray.600" fontWeight="400" mt="23px" mb="32px">
            ÁREAS
          </Text>
          <Box display="flex">
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
                <Icon as={FaHome} mt="6px" ml="-20px" bg="gray.200" fontSize="13px" p="1px" />
              </ImageIconArea>
              <Text fontSize="13px" color="gray.600" fontWeight="700">
                380.6 ha.
              </Text>
              <Text fontSize="8px" color="gray.500" fontWeight="700">
                PRÓPRIA
              </Text>
            </AreaContainer>
            <AreaContainer>
              <ImageIconArea>
                <img src={AreaIcon} alt="Area Icon" />
                <Icon as={FaSeedling} mt="6px" ml="-20px" bg="gray.200" fontSize="13px" p="1px" />
              </ImageIconArea>
              <Text fontSize="13px" color="gray.600" fontWeight="700">
                380.6 ha.
              </Text>
              <Text fontSize="8px" color="gray.500" fontWeight="700">
                PRODUTIVA
              </Text>
            </AreaContainer>
          </Box>
        </CardBody>
        <CardBody display="flex" flexDirection="column">
          <Box mb="37px">
            <ButtonGroup variant="outline" spacing="3" display="flex" justifyContent="flex-end">
              <Button
                ps="15px"
                h="21px"
                py="4px"
                borderRadius="4px"
                variant="outline"
                _hover={{
                  color: 'green.400',
                  borderColor: 'green.400',
                }}
                _focus={{ borderColor: 'green.400', outline: 'none', color: 'green.400' }}
              >
                <Text fontSize="12px" fontWeight="700">
                  GEO
                </Text>
              </Button>
              <Button
                ps="15px"
                h="21px"
                py="4px"
                borderRadius="4px"
                variant="outline"
                _hover={{
                  color: 'green.400',
                  borderColor: 'green.400',
                }}
                _focus={{ borderColor: 'green.400', outline: 'none', color: 'green.400' }}
              >
                <Text fontSize="12px" fontWeight="700">
                  CAFIR
                </Text>
              </Button>
              <Button
                ps="15px"
                h="21px"
                py="4px"
                borderRadius="4px"
                variant="outline"
                _hover={{
                  color: 'green.400',
                  borderColor: 'green.400',
                }}
                _focus={{ borderColor: 'green.400', outline: 'none', color: 'green.400' }}
              >
                <Text fontSize="12px" fontWeight="700">
                  INCRA
                </Text>
              </Button>
            </ButtonGroup>
          </Box>
          <Mapa />
          <Text fontSize="13px" fontWeight="700" mt="42px">
            Produtividade média por área (Sc/ha)
          </Text>

          <ChartLine />
          <Text fontSize="13px" fontWeight="700" mt="35px">
            NVDI médio e Chuva média por área (mm/ha)
          </Text>
          <ChartBar />
        </CardBody>
      </Box>
    </Card>
  );
}
