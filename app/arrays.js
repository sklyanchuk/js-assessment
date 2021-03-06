exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    };

    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    };

    return sum;
  },

  remove : function(arr, item) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        newArr.push(arr[i]);
      }
    };

    return newArr;
  },

  removeWithoutCopy : function(arr, item) {
    var length = arr.length;

    for (var i = 0; i < length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        length--;
      }
    }

    return arr;

    // 1 вариант
    arr = arr.filter(function(arrItem) {
      return arrItem !== item;
    });

    return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
