import { Wrapper } from 'src/common/Wrapper/Wrapper';
import { ObjectsTable } from 'src/modules/Dashboard/components/ObjectsTable/ObjectsTable';

import { Box } from '../common/Box/Box';
import { DashboardMenu } from '../modules/Dashboard/components/DashboardMenu/DashboardMenu';
import { Header } from '../modules/Header/components/Header';

const Dashobard = () => (
  <Box>
    <Header />
    <Wrapper>
      <DashboardMenu />
      <ObjectsTable />
    </Wrapper>
  </Box>
);
export default Dashobard;
