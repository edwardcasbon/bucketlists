var ISW = ISW || {};

ISW.Polyfill = ISW.Polyfill || {};

// initIndexOfPolyfill - Polyfill for the array indexOf command.
ISW.Polyfill.indexOf = function() {
  if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf= function(find, i /*opt*/) {
      if (i===undefined) i= 0;
      if (i<0) i+= this.length;
      if (i<0) i= 0;
      for (var n= this.length; i<n; i++) {
        if (i in this && this[i]===find) {
          return i;
        }
      }
      return -1;
    };
  }
};

jQuery(function(){
  ISW.Polyfill.indexOf();
});
