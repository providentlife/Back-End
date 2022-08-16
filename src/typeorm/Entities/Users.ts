import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { userStartingMetrics } from "./UserStartingMetrics";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

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

    @OneToMany(() => userStartingMetrics, (startingMetrics) => startingMetrics.user)
    startingMetrics: userStartingMetrics[];
}