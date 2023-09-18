import dotenv from 'dotenv';

dotenv.config();

const {
	NODE_ENV: nodeEnv = 'development',
	// eslint-disable-next-line no-magic-numbers
	PORT = 3000,
	...env
} = process.env;

const config = {
	env: {
		...env,
		environment: nodeEnv,
		port: PORT,
	},

	// configurations here...
	plugin: {

	},
	cors: { origin: '*', credential: true },
	schemaPath: '/meta',
	basePath: '/api',
	statusCodes:{
		notFound: 404,
		invalidInput: 400,
		success: 200,
		created: 201,
		deleted: 204,
		unauthorized: 401,
	},
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
		students: {
			name: 'students',
			indexes: [{ fields: ['rollNo'] }],
			includes: ['teachers'],
			pagination: {
				offset: { type: 'number', default: 0 },
				limit: { type: 'number', default: 25, maximum: 200 },
				order: {
					default: 'recent',
					orders: {
						recent: [{
							field: 'createdAt',
							direction: 'ASC',
						}],
					},
				},
			},
			schema: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					rollNo: { type: 'number' },
					class: { type: 'string' },
					section: { type: 'string' },
					address: { type: 'string' },
					classTeacher: {
						type: 'string',
						format: 'ref',
						entity: 'teachers',
						prop: 'id',
					},
				},
				errorMessage: {
					type: 'data should be an object',
					properties: {
						rollNo: 'rollNo should be an integer.',
					},
					_: 'error message for properties other than rollNo.',
				},
			},
			repo: 'postgres',
		},
		teachers: {
			schema: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					subject: { type: 'string' },
					address: { type: 'string' },
					salary: { type: 'number' },
					experience: { type: 'string' },
				},
				errorMessage: 'Default error message.',
			},
			repo: 'sqlite',
		},
	},
	schemaExtensions: {
		createdBy: { type: 'string' },
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
		loginURL: '/auth/login',
		logoutURL: '/auth/logout',
		callbackURL: '/cb',
		renewURL: '/auth/refresh',
		session: '/auth/session',
		repo: 'postgres',
	},
	signed: {
		path: '/use-signed/:id',
		resource: 'signed',
		repo: 'postgres',
	},
};

export default config;
