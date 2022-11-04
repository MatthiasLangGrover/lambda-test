import { stagingLambda } from './staging-lambda';

describe('stagingLambda', () => {
  it('should work', () => {
    expect(stagingLambda()).toEqual('staging-lambda');
  });
});
