import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class VendedoresModel {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    nome;

    @Column()
    email;
}

export default VendedoresModel;

