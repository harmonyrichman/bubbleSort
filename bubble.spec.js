describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single item array', function(){
      expect( bubbleSort(['cat'] )).toEqual(['cat']);
    });
    it('can handle a multiple item array', function(){
      expect( bubbleSort([5,7,8,1,2,4,3,6]) ).toEqual([1,2,3,4,5,6,7,8]);
    });
  });