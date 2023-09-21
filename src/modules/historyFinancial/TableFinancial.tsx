import { Card, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export function TableFinancial() {
  const mockTable = [
    {
      title: 'Pré Pagamento',
      years: [
        { ano: 2019, value: '1.000' },
        { ano: 2020, value: '2.000' },
      ],
    },
    {
      title: 'No Vencimento',
      years: [
        { ano: 2019, value: '3.000' },
        { ano: 2020, value: '4.000' },
      ],
    },
    {
      title: '1-5',
      years: [
        { ano: 2019, value: '12.000' },
        { ano: 2020, value: '12.000' },
      ],
    },
    {
      title: '6-15',
      years: [
        { ano: 2019, value: '12.000' },
        { ano: 2020, value: '12.000' },
      ],
    },
    {
      title: '16-30',
      years: [
        { ano: 2019, value: '12.000' },
        { ano: 2020, value: '12.000' },
      ],
    },
  ];
  return (
    <Card w="30%">
      <TableContainer mb="23px">
        <Table variant="simple" overflowX="hidden">
          <Thead>
            <Tr fontSize="13px" fontWeight="700" color="gray.600">
              <Th>Historico</Th>
              <Th>2019</Th>
              <Th>2020</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mockTable.map((item, index) => {
              return (
                <Tr key={index} fontSize="13px" fontWeight="400" color="gray.600">
                  <Td>{item.title}</Td>
                  {item.years.map((year, i) => {
                    return (
                      <>
                        <Td key={i}>{year.value}</Td>
                      </>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
