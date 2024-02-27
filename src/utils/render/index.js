"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOutputText = exports.addToOutput = void 0;
var canvas = document.querySelector('output-canvas');
var logs = document.querySelector('output-text');
var outputArray = [];
var addToOutput = function (log) {
    outputArray.push("".concat(log, "<br>"));
};
exports.addToOutput = addToOutput;
var renderOutputText = function () {
    if (logs) {
        logs.innerHTML = outputArray.join('');
    }
};
exports.renderOutputText = renderOutputText;
