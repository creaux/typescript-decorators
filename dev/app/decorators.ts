
export function WaterDefault(target) {
	
  var original = target;
	
  function construct(constructor, args) {
    var c: any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  var f: any = function (...args) {
    return construct(original, args);
  }

  f.prototype = original.prototype;
	
  f.prototype.location = 'Prague';
  f.prototype.koeficient = '50';

  return f;
	
}