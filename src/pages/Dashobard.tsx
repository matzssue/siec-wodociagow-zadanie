import { DashboardMenu } from '../modules/Dashboard/components/DashboardMenu/DashboardMenu';
import { Header } from '../modules/Header/components/Header';
import { Wrapper } from '../common/Wrapper/Wrapper';
import { ObjectTable } from 'src/modules/Dashboard/components/ObjectsTable/ObjectTable';

export const Dashobard = () => {
  return (
    <Wrapper>
      <Header />
      <DashboardMenu />
      <ObjectTable />
    </Wrapper>
  );
};
