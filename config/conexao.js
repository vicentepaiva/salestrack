import { Client } from 'pg';

class Conexao {
  constructor() {
    this.connectionConfig = {
        host: 'bd-opencomtgecnologia.com.br',
        user: 'opencomtgecnologia',
        password: 'bcf7e7d1',
        database: 'opencomtgecnologia_bd',
        port: 5432,
  };
}

async qyuery(sql, params){
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