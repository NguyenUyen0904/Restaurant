const bCrypt = require('bcrypt');
module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('categories', [
            {
                name: 'Món tráng miệng',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
            {
                name: 'Đồ uống',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            }, {
                name: 'Món chính',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
        ], {});
    },

    down: (queryInterface) =>
        queryInterface.bulkDelete('categories', null, {})

};
