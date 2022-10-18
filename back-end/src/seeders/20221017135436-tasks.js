module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tasks',
      [{
        id: 1,
        description: 'Estudar os conteúdos de Docker da Trybe',
        check: true
      },
      {
        id: 2,
        description: 'Resolver o projeto Docker Todo List',
        check: false
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
