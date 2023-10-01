import { Header } from '../modules/Header/components/Header';
import { MultigraphNetwork } from '../modules/MultigraphNetwork/components/MultigraphNetwork';
import { Wrapper } from '../common/Wrapper/Wrapper';

export const Graph = () => {
  return (
    <Wrapper>
      <Header />
      <MultigraphNetwork />
    </Wrapper>
  );
};
