import { Header } from '../modules/Header/components/Header';
import { MultigraphNetwork } from '../modules/MultigraphNetwork/components/MultigraphNetwork';
import { Box } from '../common/Box/Box';
import { Wrapper } from 'src/common/Wrapper/Wrapper';

export const Graph = () => {
  return (
    <Box>
      <Header />
      <Wrapper>
        <MultigraphNetwork />
      </Wrapper>
    </Box>
  );
};
