const HTTP_ACTIONS = {
  POST: "create",
  GET: "read",
  PUT: "update",
  PATCH: "update",
  DELETE: "delete",
};

const permission = (resource, method) =>
  `${resource}:${HTTP_ACTIONS[method]}`;

export { HTTP_ACTIONS, permission };