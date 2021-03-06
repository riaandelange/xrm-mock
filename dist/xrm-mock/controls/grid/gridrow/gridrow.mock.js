"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridRowMock = /** @class */ (function () {
    function GridRowMock(data, gridRowData) {
        this.data = data;
        this.gridRowData = gridRowData;
    }
    GridRowMock.prototype.getData = function () {
        return this.gridRowData;
    };
    return GridRowMock;
}());
exports.GridRowMock = GridRowMock;
//# sourceMappingURL=gridrow.mock.js.map