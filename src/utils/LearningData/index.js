"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningData = void 0;
var LearningData = /** @class */ (function () {
    function LearningData() {
        this.logicalNor = [
            [1, 1],
            [1, 0],
            [0, 1],
            [0, 0]
        ];
        this.logicalNorT = [0, 0, 0, 1];
        this.conjangere = [
            [1, 1],
            [1, 0],
            [0, 1],
            [0, 0]
        ];
        this.conjangereT = [1, 0, 0, 0];
        this.disjunctio = [
            [1, 1],
            [1, 0],
            [0, 1],
            [0, 0]
        ];
        this.disjunctioT = [1, 1, 1, 0];
    }
    LearningData.prototype.getNOR = function () {
        return {
            trainData: this.logicalNor,
            trainDataT: this.logicalNorT
        };
    };
    LearningData.prototype.getConjangere = function () {
        return {
            trainData: this.conjangere,
            trainDataT: this.conjangereT
        };
    };
    LearningData.prototype.getDisjunctio = function () {
        return {
            trainData: this.disjunctio,
            trainDataT: this.disjunctioT
        };
    };
    return LearningData;
}());
exports.LearningData = LearningData;
