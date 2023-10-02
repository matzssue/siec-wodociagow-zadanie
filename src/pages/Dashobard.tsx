import { DashboardMenu } from '../modules/Dashboard/components/DashboardMenu/DashboardMenu';
import { Header } from '../modules/Header/components/Header';
import { Box } from '../common/Box/Box';
import { ObjectsTable } from 'src/modules/Dashboard/components/ObjectsTable/ObjectsTable';
import { Wrapper } from 'src/common/Wrapper/Wrapper';

export const Dashobard = () => {
  return (
    <Box>
      <Header />
      <Wrapper>
        <DashboardMenu />
        <ObjectsTable />
      </Wrapper>
    </Box>
  );
};
