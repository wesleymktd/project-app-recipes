module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'mealCategories',
      [
        { strCategory: 'Beef' },
        { strCategory: 'Breakfast' },
        { strCategory: 'Chicken' },
        { strCategory: 'Dessert' },
        { strCategory: 'Goat' },
        { strCategory: 'Lamb' },
        { strCategory: 'Miscellaneous' },
        { strCategory: 'Pasta' },
        { strCategory: 'Pork' },
        { strCategory: 'Seafood' },
        { strCategory: 'Side' },
        { strCategory: 'Starter' },
        { strCategory: 'Vegan' },
        { strCategory: 'Vegetarian' }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('mealCategories', null, {});
  },
};
