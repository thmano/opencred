import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaBuffer, FaMoneyBillWave, FaRegUser, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      <Card m="0 auto" w="100%" bg="white.100" mb="30px">
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
              <Link to={`/`}>
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
              </Link>
              <Link to={`/Farms`}>
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
              </Link>
              <Link to={`/Financial`}>
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
              </Link>
            </ButtonGroup>
          </ButtonsProfile>
          <PersonGroup>
            <Person>
              <Text textAlign="end" color="gray.400" fontSize="12px" fontWeight="700">
                CTC
              </Text>
              <Text
                display="flex"
                justifyContent="space-between"
                color="gray.600"
                fontSize="14px"
                fontWeight="700"
              >
                <Icon as={FaRegUser} /> Jorge M.
              </Text>
            </Person>
            <Person>
              <Text textAlign="end" color="gray.400" fontSize="12px" fontWeight="700">
                CTC
              </Text>
              <Text
                display="flex"
                justifyContent="space-between"
                color="gray.600"
                fontSize="14px"
                fontWeight="700"
              >
                <Icon as={FaRegUser} /> Person Name
              </Text>
            </Person>
          </PersonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
