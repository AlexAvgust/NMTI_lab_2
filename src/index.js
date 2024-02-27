"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parceptron_1 = require("./Parceptron");
var LearningData_1 = require("./utils/LearningData");
var norButton = document.querySelector(".nor-button");
var andButton = document.querySelector(".and-button");
var orButton = document.querySelector(".or-button");
var numbersOfInputs = 4;
var parceptron = new Parceptron_1.Parceptron(numbersOfInputs);
if (norButton && andButton && orButton) {
    var handleButtonClick_1 = function (learningData) {
        parceptron.train(learningData.trainData, learningData.trainDataT, 1000);
    };
    norButton.addEventListener("click", function () {
        handleButtonClick_1(new LearningData_1.LearningData().getNOR());
    });
    andButton.addEventListener("click", function () {
        handleButtonClick_1(new LearningData_1.LearningData().getConjangere());
    });
    orButton.addEventListener("click", function () {
        handleButtonClick_1(new LearningData_1.LearningData().getDisjunctio());
    });
}
