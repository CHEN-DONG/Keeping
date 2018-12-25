import { createConnection } from 'typeorm';
import { async } from 'rxjs/internal/scheduler/async';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    userFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgre',
        password: '123',
        database: 'blog',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
