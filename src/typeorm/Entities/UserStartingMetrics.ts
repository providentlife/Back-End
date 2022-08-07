import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class userStartingMetrics {
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => Users, (user) => user.startingMetrics)
    user: Users;

    @Column()
    age: number;

    @Column({type: "decimal", precision: 3, scale: 2, default: 0})
    weight: number;

    @Column()
    gender: string;

    @Column()
    activity_levels: number;

    @Column()
    goal: number;
};