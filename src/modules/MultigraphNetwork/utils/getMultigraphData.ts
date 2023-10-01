type Nodes = {
  id: string;
  label: string;
};

export const getMultigraphData = (matrix: number[][], nodes: Nodes[]) => {
  const numberOfColumns = matrix[0].length;

  const tableOfEdges = Array(numberOfColumns)
    .fill(null)
    .map(() => [0, 0]);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) tableOfEdges[j][0] = i;
      if (matrix[i][j] === -1) tableOfEdges[j][1] = i;
    }
  }

  const edgeData = tableOfEdges.map((edge) => {
    return {
      data: {
        id: `${nodes[edge[0]].id}-${nodes[edge[1]].id}`,
        source: nodes[edge[0]].id,
        target: nodes[edge[1]].id,
        label: `z ${nodes[edge[0]].label} do ${nodes[edge[1]].label} `,
      },
    };
  });

  const nodesData = nodes.map(({ id, label }) => {
    return {
      data: {
        id,
        label,
      },
    };
  });
  const multigraphData = [...edgeData, ...nodesData];
  return multigraphData;
};
