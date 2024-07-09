import pkg from 'pg';
const { Client } = pkg;

class Conexao {
  constructor() {
    this.connectionConfig = {
      host: 'localhost',
      user: 'postgres',
      password: '',
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
