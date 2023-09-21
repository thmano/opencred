import { Card, CardBody, Text } from '@chakra-ui/react';

import { Hr, ScoreGo } from './style';

export function Score() {
  return (
    <Card w="20%">
      <CardBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Text fontSize="12px" fontWeight="700" mb="16px">
          Rating Final
        </Text>
        <Text fontSize="64px" fontWeight="700" color="green.800">
          A
        </Text>
        <Text fontSize="16px" fontWeight="400" mb="32px">
          96,5
        </Text>
        <Hr />
        <Text fontSize="12px" color="gray.400" fontWeight="400" mt="16px">
          OBJETIVO
        </Text>
        <ScoreGo>
          <Text fontSize="16px" fontWeight="700" color="gray.500">
            98,9
          </Text>
        </ScoreGo>
      </CardBody>
    </Card>
  );
}
