// test/test.js

describe('Simple Test', function() {
  it('should check if one equals one', function() {
    if (1 === 1) {
      console.log('Test passed: 1 equals 1');
    } else {
      throw new Error('Test failed: 1 does not equal 1');
    }
  });
});

