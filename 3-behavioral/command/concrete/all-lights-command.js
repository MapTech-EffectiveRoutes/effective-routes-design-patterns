"use strict";
exports.__esModule = true;
exports.AllLightsCommand = void 0;
var AllLightsCommand = /** @class */ (function () {
    function AllLightsCommand(lights) {
        this.lights = lights;
    }
    AllLightsCommand.prototype.execute = function () {
        for (var _i = 0, _a = this.lights; _i < _a.length; _i++) {
            var light = _a[_i];
            light.toggle();
        }
    };
    return AllLightsCommand;
}());
exports.AllLightsCommand = AllLightsCommand;
