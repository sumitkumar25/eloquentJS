/*
/!**
 * Created by Sumit on 4/23/2016.
 *!/
/!* value types and operators*!/
(function () {
    'use strict'
    /!*refactor for odd grids
     function constructString(s, e, size) {
     var str = '',
     i   = 0;
     for (i = 0; i < size / 2; i = i + 1) {
     str = str + s + e;
     }
     return str + '\n';
     }

     function displayGrid(size) {
     var finalSize = size || 8,
     start     = "_",
     end       = "#",
     ist       = constructString(start, end, finalSize),
     second    = constructString(end, start, finalSize),
     str       = '',
     i         = 0;
     for (i; i < finalSize / 2; i = i + 1) {
     str = str + ist + second;
     }
     return str;
     }

     console.log(displayGrid(6));*!/

    var flag = true;

    function getChar(first, second) {
        var a   = first || '$',
            b   = second || '#',
            res = flag ? a : b;
        return res;
    }

    function grid(s) {
        var i = 0, str = '';
        for (i = 0; i < s; i = i + 1) {
            str  = str + getChar();
            flag = flag ? false : true;
        }
        return str;
    }

    function gridFull(size) {
        var fgrid = '', i = 0, startFlag = true;
        for (i = 0; i < size; i = i + 1) {
            flag      = startFlag;
            fgrid     = fgrid + grid(size) + '\n';
            startFlag = startFlag ? false : true;
        }
        return fgrid;
    }

    // window.console.log(gridFull(3));
    /!*chapter functions*!/
    /!*1. minimum*!/
    function min(a, b) {
        return a < b ? a : b;
    }

    function isEven(n) {
        /!*expand for floating point*!/
        if (n === 0) {
            return true;
        }
        else if (n === 1) {
            return false;
        }
        else if (n > (-1)) {
            return isEven(n - 2);
        }
        else {
            return isEven(n + 2);
        }
    }

    // console.log(isEven(75));
    function count(str, char) {
        var counter = 0, i = 0
        for (i = 0; i < str.length; i = i + 1) {
            if (str[i] === char) {
                counter = counter + 1;
            }
        }
        return counter;
    }

    // console.log(count("AjasjkhhahkHJSDFJHSKHFAHLKAHSFLHIEPQCBLWKNEKLEKLASNLKDABOQPOUPOUCBMNLLKCP;;ANLKA;LHFFPOWJJEOWOPEJFIOWHPHW", 'A'));
    function getArray(start, end, step) {
        if (step === undefined) {
            step = 1;
        }
        var res = [];
        for (var i = start, j = 0; i <= end; i += step, j++) {
            res[j] = i;
        }
        return res;
    }

    function sumArray(arr) {
        var res = 0;
        for (var i = 0; i < arr.length; i++) {
            res += arr[i];
        }
        return res;
    }

    var test = getArray(1, 15, 2);
    //var testa = getArray(15, 1, -1);
    //console.log((testa))
    /!*configure for reverse array*!/

    function reverseArray(arr) {
        var res = [];
        for (var i = arr.length - 1, j = 0; i >= 0; i--, j++) {
            res[j] = arr[i];
        }
        return res;
    }

    function reverseInPlace(arr) {
        for (var i = 0, j = arr.length - 1 - i; i <= j; i++) {
            var temp = arr[i];
            arr[i]   = arr[j];
            arr[j]   = temp;
        }
        return arr;
    }

    //console.log((test));
    //console.log(reverseInPlace(test));
    //console.log((test));
    function list(val) {
        return {
            value: val,
            list: ''
        }
    }

    function arrayToList(arr) {
        var l   = {};
        l.value = arr[0];
        if (arr[1] === undefined) {
            l.list = null;
        }
        else if (arr[1] !== undefined) {
            l.list = arrayToList(arr.slice(1));
        }
        return l;
    }

    var resAC = [];

    function listToArray(list) {
        resAC.push(list.value);
        if (list.list === null) {
            return resAC;
        }
        else {
            return listToArray(list.list);
        }
    }

    function prepend(list, item) {
        var temp   = {};
        temp.value = item;
        temp.list  = list;
        list       = temp;
        return list;
    }

    function append(l, pos) {
        var count = 0;
        var ref   = {value: "dummy", list: ''}
        var test  = l;
        var temp;
        while (test) {
            ++count;
            if (count == (pos - 1)) {
                ref.list  = test.list;
                test.list = ref;
                break;
            }
        }

        return list;
    }

    //var atoList = arrayToList(test);
    //console.log((atoList));
    //console.log(append(atoList, 2));
    function deepCompare(a,b){

    }
}());
*/
