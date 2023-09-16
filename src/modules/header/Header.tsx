import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaBuffer, FaMoneyBillWave, FaRegUser, FaSeedling } from 'react-icons/fa';

import {
  ButtonsProfile,
  Person,
  PersonGroup,
  ProfileIcon,
  ProfileRegion,
  ProfileSection,
  ProfileText,
  Region,
} from './style';

export function Header() {
  return (
    <>
      <Card fontFamily="standard" w="100%" h="200px" bg="green.900" px="28px">
        <CardHeader>
          <Text fontSize="12px" color="white.100">
            Home - Central de clientes - Produtor João Ferreira
          </Text>
        </CardHeader>

        <Card m="0 auto" w="100%" bg="white.100">
          <CardBody display="flex" justifyContent="space-between">
            <ProfileSection>
              <ProfileIcon>
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="../src/assets/ruralIcon.png"
                  alt="Dan Abramov"
                />
                <Text fontSize="12px" fontWeight="700" textAlign="center">
                  Produtor Rural
                </Text>
              </ProfileIcon>
              <ProfileText>
                <Text fontSize="16px" fontWeight="700">
                  Produtor João Ferreira
                </Text>
                <Text fontSize="12px" color="gray.400">
                  02.916.265/0001-60
                </Text>
              </ProfileText>
            </ProfileSection>
            <ProfileRegion>
              <Text fontSize="12px" fontWeight="700">
                REGIONAL
              </Text>
              <Region>Sul</Region>
            </ProfileRegion>
          </CardBody>
          <CardFooter display="flex" justifyContent="space-between">
            <ButtonsProfile>
              <ButtonGroup variant="outline" spacing="3" ml="104px">
                <Button
                  ps="15px"
                  py="10px"
                  leftIcon={<FaBuffer />}
                  borderRadius="12px"
                  variant="outline"
                >
                  <Text fontSize="12px" fontWeight="700">
                    Empresa
                  </Text>
                </Button>
                <Button
                  ps="15px"
                  py="10px"
                  leftIcon={<FaSeedling />}
                  borderRadius="12px"
                  variant="outline"
                >
                  <Text fontSize="12px" fontWeight="700">
                    Agronômico
                  </Text>
                </Button>
                <Button
                  ps="15px"
                  py="10px"
                  leftIcon={<FaMoneyBillWave />}
                  borderRadius="12px"
                  variant="outline"
                >
                  <Text fontSize="12px" fontWeight="700">
                    Financeiro
                  </Text>
                </Button>
              </ButtonGroup>
            </ButtonsProfile>
            <PersonGroup>
              <Person>
                <Text textAlign="end" color="grey.400" fontSize="12px" fontWeight="700">
                  CTC
                </Text>
                <Text
                  display="flex"
                  justifyContent="space-between"
                  color="grey.600"
                  fontSize="14px"
                  fontWeight="700"
                >
                  <Icon as={FaRegUser} /> Jorge M.
                </Text>
              </Person>
              <Person>
                <Text textAlign="end" color="grey.400" fontSize="12px" fontWeight="700">
                  CTC
                </Text>
                <Text
                  display="flex"
                  justifyContent="space-between"
                  color="grey.600"
                  fontSize="14px"
                  fontWeight="700"
                >
                  <Icon as={FaRegUser} /> Person Name
                </Text>
              </Person>
            </PersonGroup>
          </CardFooter>
        </Card>
      </Card>
    </>
  );
}
