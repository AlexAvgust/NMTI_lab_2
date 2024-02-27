"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parceptron = void 0;
var activationFunction_1 = require("../activationFunction");
var render_1 = require("../utils/render");
var Parceptron = /** @class */ (function () {
    function Parceptron(numbersOfInputs) {
        this.numbersOfInputs = numbersOfInputs;
        this.weights = new Array(numbersOfInputs).fill(0);
        this.bias = 0;
    }
    Parceptron.prototype.trainOneExample = function (x, target) {
        var classified = 0;
        var predict = 0;
        for (var i = 0; i < this.numbersOfInputs; i++) {
            predict += x[i] * this.weights[i];
        }
        if ((0, activationFunction_1.activationFunc)(target) === (0, activationFunction_1.activationFunc)(predict)) {
            classified = 1;
        }
        else {
            if (target === 1) {
                for (var i = 0; i < this.numbersOfInputs; i++) {
                    this.weights[i] += x[i];
                    this.bias += x[i];
                }
            }
            else {
                for (var i = 0; i < this.numbersOfInputs; i++) {
                    this.weights[i] -= x[i];
                    this.bias -= x[i];
                }
            }
        }
        return classified;
    };
    Parceptron.prototype.train = function (trainData, trainDataT, maxEpochs) {
        var epochs = 0;
        while (true) {
            var classified = 0;
            (0, render_1.addToOutput)("Epochs: ".concat(epochs));
            for (var i = 0; i < trainData.length; i++) {
                classified += this.trainOneExample(trainData[i], trainDataT[i]);
            }
            (0, render_1.addToOutput)("Classified: ".concat(classified));
            (0, render_1.addToOutput)("b=".concat(this.bias, "; w=").concat(this.weights.toString()));
            if (classified === trainData.length) {
                break;
            }
            epochs++;
            if (epochs === maxEpochs) {
                break;
            }
        }
    };
    Parceptron.prototype.predict = function (x) {
        var preActivation = this.bias;
        for (var i = 0; i < this.numbersOfInputs; i++) {
            preActivation += x[i] * this.weights[i];
        }
        return (0, activationFunction_1.activationFunc)(preActivation);
    };
    return Parceptron;
}());
exports.Parceptron = Parceptron;
