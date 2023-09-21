import { DataFarm } from '../modules/dataFarm/DataFamr';
import { Dimensions } from '../modules/dimensions/Dimensions';
import { Farms } from '../modules/farms/Farms';
import { Header } from '../modules/header/Header';

export function DashboardFarms() {
  return (
    <>
      <Header />
      <Dimensions />
      <Farms />
      <DataFarm />
    </>
  );
}
