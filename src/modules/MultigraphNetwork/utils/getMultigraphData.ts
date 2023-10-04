import { EdgeData, Nodes, NodesData } from '../types';

export const getMultigraphData = (matrix: number[][], nodes: Nodes[]) => {
  const numberOfColumns = matrix[0]?.length;

  const tableOfEdges = Array.from({ length: numberOfColumns }, () => [0, 0]);

  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value === 1) tableOfEdges[j][0] = i;
      if (value === -1) tableOfEdges[j][1] = i;
    });
  });

  const edgeData = tableOfEdges.map(([source, target]) => {
    const { id: sourceId, label: sourceLabel } = nodes[source];
    const { id: targetId, label: targetLabel } = nodes[target];
    return {
      data: {
        id: `${sourceId}-${targetId}`,
        source: sourceId,
        target: targetId,
        label: `z ${sourceLabel} do ${targetLabel} `,
      },
    };
  });

  const nodesData = nodes.map(({ id, label }) => ({
    data: {
      id,
      label,
    },
  }));

  const multigraphData: (EdgeData | NodesData)[] = [...edgeData, ...nodesData];
  return multigraphData;
};
