/**
 * Created by Sumit on 5/7/2016.
 */
function p(a) {
    console.log(a);
}

function testConstructor(a, b) {
    this.a  = a;
    this.b  = b;
    this.fn = function () {
        return a + " and " + b;
    }
}

var testObj                       = new testConstructor("testObj", "first");
testConstructor.prototype.newProp = "newProp";
var newTest                       = new testConstructor("testObj", "second");
//p(newTest.newProp);
//p(testObj.newProp);
/* creating a custom table.
 *  1) array of arrays of table cells
 *  2) Builder fn to ask each cell how wide and high
 *  3) assemble into a string
 *  minHeight() returns a number indicating the minimum height this
 cell requires (in lines).
 • minWidth() returns a number indicating this cell’s minimum width
 (in characters).
 • draw(width, height) returns an array of length height, which contains
 a series of strings that are each width characters wide. This represents
 the content of the cell.*/

/*rows :rows variable will hold an array of arrays,
 with each inner array representing a row of cells.*/
/*
 function fnMinHeight() {

 }
 function fnMinWidth() {

 }
 function rowHeights(rows) {
 return rows.map(function (row) {
 return row.reduce(function (max, cell) {
 return Math.max(max, cell.fnMinHeight())
 }, 0);
 })
 }
 /!*
 the index of the current
 element. By mapping over the elements of the first row and only using
 the mapping function’s second argument, colWidths builds up an array
 with one element for every column index. The call to reduce runs over
 the outer rows array for each index and picks out the width of the widest
 cell at that index.
 *!/
 function colWidths(rows) {
 return rows[0].map(function (_, i) {
 return rows.reduce(function (max, row) {
 return Math.max(max, row[i].fnMinWidth())
 }, 0)
 })
 }

 /!*function to draw table*!/
 function drawTable(rows) {
 var height = rowHeights(rows);
 var widths = colWidths(rows);

 function drawRow(row, rowNum) {
 var blocks = row.map(function(cell,colNum){
 return cell.draw(widths[colNum],height[rowNum]);
 });
 return
 }
 }*/


var table = [
    ['Name', 'Age', 'Sex'],
    ['first', '25', 'feMale'],
    ['second', '24', 'Male'],
    ['third', '24', 'feMale'],
    ['fourth', '22', 'Male'],
    ['fifth', '23', 'Male'],
    ['Sixth', '24', 'feMale'],
]
function columnWidth(data) {
    return data[0].map(function (cell, columnNo) {

        return data.reduce(function (minWidth, row) {
            return Math.max(minWidth, row[columnNo].length);
        }, 0);
    });
}
function getCharacter(n, char) {
    var char = char || " ";
    var res  = ''
    for (var i = 0; i < n; i++) {
        res += char;
    }
    return res;
}


function configureData(data, widthArray) {
    return data.map(function (row) {
        return row.map(function (cell, index) {
                return cell += getCharacter((widthArray[index] - cell.length), '#');
            }) + "\n";
    });
}
//var widthArray = columnWidth(table);
//var test = configureData(table,widthArray);
//test.toString();

var testGetSet         = {
    name: "getter and setter using object literal",
    get: function () {
        return this.name;
    },
    set: function (value) {
        this.name = value;
    }
}
var testGetSetFunction = Object.create(null, {
    name: {
        value: "get and set using Object .create",
        writable: true,
        enumerable: true,
        configurable: true
    },
    bar:{
        get function() {
            return this.name
        },
        set function(value) {
            this.name = this.name + value;
        }
    }
})