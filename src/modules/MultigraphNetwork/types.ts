export type Nodes = {
  id: string;
  label: string;
};
export type EdgeData = {
  data: {
    id: string;
    label: string;
    source: string;
    target: string;
  };
};
export type NodesData = {
  data: Nodes;
};
