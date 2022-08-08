import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { userStartingMetrics } from "./UserStartingMetrics";

@Entity()
export class WeightEntries {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    weight_lbs: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => userStartingMetrics, (startingMetrics) => startingMetrics.weightEntries)
    userStartingMetrics: userStartingMetrics;
}