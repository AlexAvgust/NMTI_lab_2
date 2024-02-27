import { Perceptron } from './Perceptron'
import { LearningData } from './utils/LearningData'
import type { LearningDataInterface } from './utils/LearningData/interfaces'
import { addToOutput, renderOutputText, drawInitCartesianSystem, drawPoints, drawSeparatorLine } from './utils/render'

const buttons = Array.from(document.querySelectorAll('button'))
const numbersOfInputs = 2

const perceptron = new Perceptron(numbersOfInputs)
const perceptronForTask2 = new Perceptron(numbersOfInputs, [20, -1])

if (buttons.every(button => button)) {
    const createCanvasPoints = (data: number[][], indexOfGreenPoints: number[]) => {
        return data.map((elem, i) => {
            return { x: elem[0] + 9, y: elem[1] + 9, color: indexOfGreenPoints.includes(i) ? "#008000" : '#000' }
        })
    }

    const testAndRenderResults = (funcName: string, testData: number[][]) => {
        const predictions: number[] = []
        drawInitCartesianSystem()
        addToOutput(`test for function: ${funcName}`)
        testData.forEach((testDataElement, i) => {
            console.log('testDataElement',testDataElement)
            const currentPredict = perceptron.predict(testDataElement)
            if (!!currentPredict) {
                predictions.push(i)
            }
            addToOutput(`<br/> predict for [${testDataElement.join(', ')}] - ${currentPredict}`)
            console.log(`predictions: ${currentPredict}`)
        })
        const points = createCanvasPoints(testData, predictions)
        drawPoints(points)
        drawSeparatorLine(points, funcName)
        renderOutputText()
    }

    const handleButtonClick = (learningData: LearningDataInterface) => {
        perceptron.train(learningData.trainData, learningData.trainDataT, 500);
    };

    const handleTask2Click = (learningData: LearningDataInterface) => { 
        perceptron.train(learningData.trainData, learningData.trainDataT, 500);
    }

    buttons.forEach(button => {
        switch (button.textContent) {
            case "NOR":
                button.addEventListener('click', () => {
                    const norData = new LearningData().getNOR()
                    handleButtonClick(norData)
                    testAndRenderResults(button.textContent as string, norData.trainData)
                })
                break;
            case "AND":
                button.addEventListener('click', () => {
                    const andData = new LearningData().getConjangere()
                    handleButtonClick(andData)
                    testAndRenderResults(button.textContent as string, andData.trainData)
                })
                break;
            case "OR":
                button.addEventListener('click', () => {
                    const orData = new LearningData().getDisjunctio()
                    handleButtonClick(orData)
                    testAndRenderResults(button.textContent as string, orData.trainData)
                })
                break;
            case "Task2":
                button.addEventListener('click', () => {
                    const task2Data = new LearningData().getTask2()
                    handleTask2Click(task2Data)
                    testAndRenderResults(button.textContent as string, task2Data.trainData)

                })
                break;
            default:
                break;
        }
    })

}
