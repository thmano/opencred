import { Box, Card, CardBody, CardFooter, CardHeader, Icon, Text } from '@chakra-ui/react';
import { FaAward } from 'react-icons/fa';

import score from '../../assets/score.svg';
import SiagriLogo from '../../assets/siagriLogo.png';
import Syngenta from '../../assets/SyngentaLogo.png';
import { Hr, Logo } from './style';

export function Institutional() {
  return (
    <Box w="50%" pb="20px">
      <Text fontSize="16px" fontWeight="700" color="gray.500" mb="24px">
        Institucional
      </Text>
      <Box display="flex" gap="16px">
        <Card w="50%" h="180px" justifyContent="space-between">
          <CardHeader p="16px" display="flex" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="700" color="gray.500">
              Unidades de Negócio
            </Text>
            <Box
              bg="green.100"
              w="48px"
              h="19px"
              borderRadius="8px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="10px" fontWeight="700" color="green.400">
                Baixo
              </Text>
            </Box>
          </CardHeader>
          <CardFooter p="16px">
            <Text fontSize="24px" fontWeight="700" color="gray.900">
              9 Unidades
            </Text>
          </CardFooter>
        </Card>
        <Card w="50%" h="180px" p="16px" justifyContent="space-between">
          <CardBody p="0" display="flex" flexDirection="column" alignItems="center">
            <Logo src={Syngenta} />
            <Text mt="24px" fontSize="14px" fontWeight="700" color="gray.900">
              Syngenta
            </Text>
            <Text fontSize="10px" fontWeight="700" color="gray.500">
              Principal fornecedor
            </Text>
            <Hr />
            <Text fontSize="14px" fontWeight="700" color="gray.700">
              50%
            </Text>
          </CardBody>
        </Card>
      </Box>
      <Box display="flex" gap="16px" mt="16px">
        <Card w="50%">
          <CardBody display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="18px" fontWeight="700" color="gray.500">
              ERP
            </Text>
            <Logo src={SiagriLogo} />
          </CardBody>
        </Card>
        <Card w="50%" bg="green.900" color="white.100">
          <CardBody display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="12px" fontWeight="700">
                Tempo de Mercado
              </Text>
              <Text fontSize="20px" fontWeight="700">
                22 anos
              </Text>
            </Box>
            <Icon as={FaAward} fontSize="24px" />
          </CardBody>
        </Card>
      </Box>
      <Box mt="16px">
        <Card>
          <CardBody justifyContent="space-between" alignItems="center" display="flex">
            <Box display="flex" gap="16px">
              <Text fontSize="12px" fontWeight="700" color="gray.500">
                Score Serasa
              </Text>
              <Box
                bg="green.100"
                w="48px"
                h="19px"
                borderRadius="8px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="10px" fontWeight="700" color="green.400">
                  Bom
                </Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={score} />
              <Text fontSize="24px" color="gray.900" fontWeight="700" mt="-30px">
                820
              </Text>
              <Text fontSize="10px" color="gray.500" mt="-10px" fontWeight="700">
                de 100
              </Text>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}
