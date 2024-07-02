import { Client } from 'pg';

class Conexao {
  constructor() {
    this.connectionConfig = {
      host: 'localhost',
      user: 'admin',
      password: 'bcf7e7d1',
      database: 'postgres',
      port: 5432,
    };
  }

  async query(sql, params) {
    const client = new Client(this.connectionConfig);

    try {
      await client.connect();
      const res = await client.query(sql, params);
      return res.rows;
    } catch (error) {
      throw error;
    } finally {
      await client.end();
    }
  }
}

export default Conexao;