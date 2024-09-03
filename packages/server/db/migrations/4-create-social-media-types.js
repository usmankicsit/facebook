'use strict';
const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('');
    console.log('------------------- SOCIAL MEDIA TYPES');
    console.log('');
    const socialMediaTypes = [
      {
        name: 'Facebook',
        createdAt: moment().toDate(),
      },
      {
        name: 'Instagram',
        createdAt: moment().toDate(),
      },
      {
        name: 'Twitter',
        createdAt: moment().toDate(),
      },
      {
        name: 'LinkedIn',
        createdAt: moment().toDate(),
      },
      {
        name: 'Pinterest',
        createdAt: moment().toDate(),
      },
      {
        name: 'GooglePlus',
        createdAt: moment().toDate(),
      },
    ];

    await queryInterface.bulkInsert('SocialMediaTypes', socialMediaTypes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("SocialMediaTypes", null, {
      truncate: true,
      cascade: true,
    });
  },
};
