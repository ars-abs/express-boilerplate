import { Sequelize } from 'sequelize';

const freezeTableName = {
	define: {
		freezeTableName: true,
	},
};

const repoTypes = {
	sqlite: ({ path }) => new Sequelize({
		dialect: 'sqlite',
		storage: path,
		logging: false,
		...freezeTableName,
	},),
	postgres: ({ host, userName, password, dataBase }) => new Sequelize(
		dataBase,
		userName,
		password,
		{
			host: host,
			dialect: 'postgres',
			logging: false,
			...freezeTableName,
		},
	),
};

export default repoTypes;
