import { env } from 'process';
import dotenv from 'dotenv';

dotenv.config();

const {
	NODE_ENV: nodeEnv = 'development',
	// eslint-disable-next-line no-magic-numbers
	PORT = 3000,
	...rest
} = env;

const config = {
	env: {
		...rest,
		environment: nodeEnv,
		port: PORT,
	},

	// configurations here...
	repos: {
		postgres: {
			type: 'postgres',
			host: 'localhost',
			userName: 'root',
			password: 'root',
			dataBase: 'SampleDB',
		},
		sqlite: {
			type: 'sqlite',
			path: './db.sqlite',
		},
	},
	resources: {
		ledgers: {
			name: 'ledgers',
			indexes: [{ fields: ['ledger'] }],
			schema: {
				type: 'object',
				properties: {
					ledger: {
						type: 'string',
						title: 'Ledger',
					},
					type: {
						type: 'string',
						title: 'Type',
					},
					accountType: {
						type: 'string',
						title: 'AccountType',
					},
					balances: {
						type: 'number',
						title: 'Balances',
					},
					notes: {
						type: 'string',
						title: 'Notes',
					},
					isActive: {
						type: 'boolean',
						title: 'IsActive',
					},
					dateTime: {
						type: 'string',
						format: 'date-time',
						title: 'DateTime',
					},
					time: {
						type: 'string',
						format: 'time',
						title: 'Time',
					},
				},
			},
			repo: 'postgres',
		},
		journals: {
			name: 'journals',
			indexes: [{ fields: ['document'] }],
			schema: {
				type: 'object',
				properties: {
					date: {
						type: 'string',
						format: 'date',
						title: 'Date',
					},
					credit: {
						type: 'string',
						title: 'Credit',
					},
					debit: {
						type: 'string',
						title: 'Debit',
					},
					amount: {
						type: 'number',
						title: 'Amount',
					},
					document: {
						type: 'string',
						title: 'Document',
					},
					notes: {
						type: 'string',
						title: 'Notes',
					},
					country: {
						type: 'string',
						enum: ['India', 'Africa', 'US'],
					},
				},
			},
			repo: 'postgres',
		},
	},
	schemaExtensions: {
		test: {
			type: 'string',
			title: 'test',
		},
	},
	auth: {
		strategies: {
			google: {
				tokenURL: 'https://accounts.google.com/o/oauth2/token',
				issuer: 'accounts.google.com',
				passportStrategy: 'passport-google-oauth20',
			},
			azure: {
				passportStrategy: 'passport-azure-ad-oauth2',
			},
		},
		providers: {
			google: {
				clientID: env.GOOGLE_CLIENT_ID,
				clientSecret: env.GOOGLE_CLIENT_SECRET,
				scope: ['openid', 'email', 'profile'],
			},
			azure: {
				clientID: env.AZURE_CLIENT_ID,
				clientSecret: env.AZURE_CLIENT_SECRET,
				scope: ['openid', 'profile', 'email', 'User.Read'],
				tokenURL: `https://login.microsoftonline.com/${ env.AZURE_TENANT_ID }/oauth2/token`,
				tenantId: env.AZURE_TENANT_ID,
				issuer: `https://sts.windows.net/${ env.AZURE_TENANT_ID }/`,
			},
		},
		loginURL: '/login',
		logoutURL: '/logout',
		callbackURL: '/cb',
		repo: 'postgres',
	},
};

export default config;
