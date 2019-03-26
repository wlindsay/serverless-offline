let nextConnectionId = 0;
const connections = {};

const addConnection = (ws) => {
  const id = '' + ++nextConnectionId;
  connections[id] = ws;
  return id;
};
const removeConnection = (connectionId) => {
  delete connections[connectionId];
};
const getConnection = (connectionId) => connections[connectionId];

module.exports = {
  addConnection,
  removeConnection,
  getConnection
};
