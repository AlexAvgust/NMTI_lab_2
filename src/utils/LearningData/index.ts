import type { LearningDataInterface } from "./interfaces";

export class LearningData {
    private logicalNor: number[][] = [
        [1, 1],
        [1, 0],
        [0, 1],
        [0, 0]
    ];
    private logicalNorT: number[] = [0,0,0,1];

    private conjangere: number[][] = [
        [1, 1],
        [1, 0],
        [0, 1],
        [0, 0]
    ];
    private conjangereT: number[] = [1,0,0,0];

    private disjunctio: number[][] = [
        [1, 1],
        [1, 0],
        [0, 1],
        [0, 0]
    ];
    private disjunctioT: number[] = [1,1,1,0];

    private task2: number[][] = [
        [7, 0.15], 
        [10, 0.2], 
        [12, 0.3], 
        [8, 0.3], 
        [6, 0.25]  
    ];

    private task2T: number[] = [1, 1, 1, 0, 0];

    public getNOR(): LearningDataInterface{
        return {
            trainData: this.logicalNor,
            trainDataT: this.logicalNorT
        }
    }

    public getConjangere(): LearningDataInterface { 
        return {
            trainData: this.conjangere,
            trainDataT: this.conjangereT
        }
    }

    public getDisjunctio(): LearningDataInterface { 
        return {
            trainData: this.disjunctio,
            trainDataT: this.disjunctioT
        }
    }

    public getTask2(): LearningDataInterface { 
        return {
            trainData: this.task2,
            trainDataT: this.task2T
        }
    }
} 