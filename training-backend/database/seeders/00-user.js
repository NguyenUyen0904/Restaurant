const bCrypt = require('bcrypt');
module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                fullName: 'admin1',
                phone: '535352525',
                email: 'Supervisor1@gr2.com',
                position: 'Supervisor',
                idRestaurant: 1,
                password: bCrypt.hashSync('Uyen1234', bCrypt.genSaltSync(8), null),
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
            {
                fullName: 'Cashier1',
                phone: '535352525',
                email: 'Cashier1@gr2.com',
                position: 'Cashier',
                idRestaurant: 1,
                password: bCrypt.hashSync('Uyen1234', bCrypt.genSaltSync(8), null),
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
            {
                fullName: 'admin2',
                phone: '535352525',
                email: 'Supervisor2@gr2.com',
                position: 'Supervisor',
                idRestaurant: 2,
                password: bCrypt.hashSync('Uyen1234', bCrypt.genSaltSync(8), null),
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
            {
                fullName: 'Cashier2',
                phone: '535352525',
                email: 'Cashier2@gr2.com',
                position: 'Cashier',
                idRestaurant: 2,
                password: bCrypt.hashSync('Uyen1234', bCrypt.genSaltSync(8), null),
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 1,
                updatedBy: 1,
            },
        ], {});
    },

    down: (queryInterface) =>
        queryInterface.bulkDelete('users', null, {})

};
