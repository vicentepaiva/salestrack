import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class UsuariosModel {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    nome;

    @Column()
    login;

    @Column()
    senha;
}

export default UsuariosModel;

