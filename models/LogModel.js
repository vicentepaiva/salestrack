import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class LogModel {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    mensagem;

    @Column()
    tipo;
}

export default LogModel;
