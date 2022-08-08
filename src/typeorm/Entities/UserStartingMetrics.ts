import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { WeightEntries } from "./WeightEntries";

@Entity()
export class userStartingMetrics {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    age: number;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    weight: number;

    @Column()
    gender: string;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    activity_levels: number;

    @Column()
    goal: number;

    @ManyToOne(() => Users, (user) => user.startingMetrics)
    user: Users;

    @OneToMany(() => WeightEntries, (entries) => entries.userStartingMetrics)
    weightEntries: WeightEntries[];
};