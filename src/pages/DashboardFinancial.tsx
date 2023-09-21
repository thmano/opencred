import { Box } from '@chakra-ui/react';

import { ChartFinancial } from '../modules/chartFinacial/ChartFinancial';
import { FeelingCards } from '../modules/feeling/FeelingCards';
import { Header } from '../modules/header/Header';
import { TableFinancial } from '../modules/historyFinancial/TableFinancial';
import { Institutional } from '../modules/institutional/Institutional';
import { Score } from '../modules/score/Score';

export function DashboardFinancial() {
  return (
    <>
      <Header />
      <Box display="flex" gap="13" mb="32px">
        <Score />
        <ChartFinancial />
        <TableFinancial />
      </Box>
      <hr />
      <Box mt="32px" display="flex" gap="24px">
        <Institutional />
        <FeelingCards />
      </Box>
    </>
  );
}
