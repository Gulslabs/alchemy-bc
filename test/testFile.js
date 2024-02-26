// test/testFile.js
import { myFunction } from '../src/myModule.js';
import { expect } from 'chai';

describe('myModule', () => {
  it('should return the correct greeting', () => {
    const result = myFunction();
    expect(result).to.equal("Hello from myFunction!");
  });
});
