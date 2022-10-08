const routes = (handler) => [
    {
        method: 'POST',
        path: '/authentications',
        handler: (r, h) => handler.postAuthenticationHandler(r, h),
    },
    {
        method: 'PUT',
        path: '/authentications',
        handler: (r, h) => handler.putAuthenticationHandler(r, h),
    },
    {
        method: 'DELETE',
        path: '/authentications',
        handler: (r, h) => handler.deleteAuthenticationHandler(r, h),
    },
];

module.exports = routes;
