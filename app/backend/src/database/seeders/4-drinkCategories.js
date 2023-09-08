module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'drinkCategories',
      [
        {"strCategory": "Ordinary Drink"},
        {"strCategory": "Cocktail"},
        {"strCategory": "Shake"},
        {"strCategory": "Other/Unknown"},
        {"strCategory": "Cocoa"},
        {"strCategory": "Shot"},
        {"strCategory": "Coffee / Tea"},
        {"strCategory": "Homemade Liqueur"},
        {"strCategory": "Punch / Party Drink"},
        {"strCategory": "Beer"},
        {"strCategory": "Soft Drink"}
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('drinkCategories', null, {});
  },
};
