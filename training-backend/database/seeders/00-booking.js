const bCrypt = require('bcrypt');
module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('bookings', [
            {
                status: 'waiting',
                idRestaurant: 1,
                nameCustomer: "Uyen",
                phone: "0377980440",
                numberPeople: 4,
                arrivalTime: 11,
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
