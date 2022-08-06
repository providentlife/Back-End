import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    username: string;

    @Column({
        nullable: false
    })
    password: string;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        name: "first_name",
        nullable: false
    })
    firstName: string;

    @Column({
        name: "last_name",
        nullable: false
    })
    lastName: string;
}