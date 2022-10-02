const routes = (handler) => [
    {
        method: 'POST',
        path: '/users',
        handler: (r, h) => handler.postUserHandler(r, h),
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: (r, h) => handler.getUserByIdHandler(r, h),
    },
];

module.exports = routes;
