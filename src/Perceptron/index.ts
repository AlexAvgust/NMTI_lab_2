import { activationFunc } from "../activationFunction";
import { addToOutput } from "../utils/render";


export class Perceptron {
    private weights: number[];
    private bias: number;
    private numbersOfInputs: number;

    constructor(numbersOfInputs: number, weights?: number[]) {
        this.numbersOfInputs = numbersOfInputs;
        this.weights = weights ? weights : new Array(numbersOfInputs).fill(0);
        this.bias = 0;
      
    }

    private trainOneExample(x: number[], target: number) {
        let classified: number = 0;
        let predict: number = this.bias;
        for (let i = 0; i < this.numbersOfInputs; i++) {
            predict += x[i] * this.weights[i];
        }
        const predictedActivation = activationFunc(predict);
        if (predictedActivation === target) {
            classified = 1;
        } else {
            if (predictedActivation === 1) { 
                for (let i = 0; i < this.numbersOfInputs; i++) {
                    this.weights[i] -= x[i];
                }
                this.bias -= 1;
            } else {
                for (let i = 0; i < this.numbersOfInputs; i++) {
                    this.weights[i] += x[i];
                }
                this.bias += 1;
            }
        }
        return classified;
    }

    public train(trainData: number[][], trainDataT: number[], maxEpochs: number) {
        let epochs = 0;
        while (true) {
            let classified = 0;
            addToOutput(`Epochs: ${epochs}`)
            for (let i = 0; i < trainData.length; i++) {
                classified += this.trainOneExample(trainData[i], trainDataT[i]);
            }
            addToOutput(`Classified: ${classified}`)
            addToOutput(`b=${this.bias}; w=[${this.weights.toString()}]`)
            if (classified === trainData.length) {
                break;
            }
            epochs++;
            if (epochs === maxEpochs) {
                break;
            }
        }
    }


    public predict(x: number[]) {
        let preActivation: number = this.bias;
        for (let i = 0; i < this.numbersOfInputs; i++) {
            preActivation += x[i] * this.weights[i];
        }
        return activationFunc(preActivation);
    }
}