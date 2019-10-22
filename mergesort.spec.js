describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]])
    });
   });
   describe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
      expect(merge([1, 4, 6], [2, 3, 7])).toEqual([1, 2, 3, 4, 6, 7])
    });
   });