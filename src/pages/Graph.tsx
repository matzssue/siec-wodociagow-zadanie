import { Wrapper } from 'src/common/Wrapper/Wrapper';

import { Box } from '../common/Box/Box';
import { Header } from '../modules/Header/components/Header';
import { MultigraphNetwork } from '../modules/MultigraphNetwork/components/MultigraphNetwork';

const Graph = () => (
  <Box>
    <Header />
    <Wrapper>
      <MultigraphNetwork />
    </Wrapper>
  </Box>
);
export default Graph;
