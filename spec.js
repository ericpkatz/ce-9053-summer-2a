/* globals describe it expect */
var foo = {
  bar: function(num){
    if(typeof num != 'number')
      throw("send me a number");
    return num * 2;
  },
  buzz: function(){
    return 'buzz';
  }
};

describe("foo", function(){
  describe("#buzz", function(){
    it("returns 'buzz'", function(){
      expect(foo.buzz()).toEqual('buzz');
    });
  });
  describe("#bar", function(){
     it("passing in 2 returns 4", function(){
       expect(foo.bar(2)).toEqual(4);
     });
     it("passing in 4 returns 8", function(){
       expect(foo.bar(4)).toEqual(8);
     });
     it("passing in hello world throws an exception", function(){
       expect(function(){ foo.bar('hello world');}).toThrow();
     });
  });    
});