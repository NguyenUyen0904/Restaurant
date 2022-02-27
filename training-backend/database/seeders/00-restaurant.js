const bCrypt = require('bcrypt');
module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('restaurants', [
            {
                name: 'GR2',
                address: 'Nguyễn Đức Cảnh ',
                phone: '0377980440',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
            {
                name: 'GR2',
                address: 'Xã Đàn',
                phone: '0377980440',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            }, {
                name: 'GR2',
                address: 'Láng',
                phone: '0377980440',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            }, {
                name: 'GR2',
                address: 'Đại La',
                phone: '0377980440',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
        ], {});
    },

    down: (queryInterface) =>
        queryInterface.bulkDelete('restaurants', null, {})

};
