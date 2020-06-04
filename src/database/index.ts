import { createConnection } from 'typeorm';

// o createConnection vai varrer os arquivos do projeto procurando o arquivo
// ormconfig.json. Por isso não precisa passar nada de parâmetro, pq os parâmetros
// estão no ormconfig
createConnection();
