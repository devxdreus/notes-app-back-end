const routes = (handler) => [
    {
        method: 'POST',
        path: '/collaborations',
        handler: (r, h) => handler.postCollaborationHandler(r, h),
        options: {
            auth: 'notesapp_jwt',
        },
    },
    {
        method: 'DELETE',
        path: '/collaborations',
        handler: (r, h) => handler.deleteCollaborationHandler(r, h),
        options: {
            auth: 'notesapp_jwt',
        },
    },
];

module.exports = routes;
