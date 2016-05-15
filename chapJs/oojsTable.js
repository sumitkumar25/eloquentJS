/**
 * Created by Sumit on 5/13/2016.
 */
var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];
function TextCell(text) {
    this.text = text.split('\n');
}
function repeat(str, n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += str;
    }
    return result;
}
TextCell.prototype.minWidth  = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0)
}
TextCell.prototype.minHeight = function () {
    return this.text.length;
}
TextCell.prototype.draw      = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
}