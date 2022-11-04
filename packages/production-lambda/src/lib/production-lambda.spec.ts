import { productionLambda } from './production-lambda';

describe('productionLambda', () => {
  it('should work', () => {
    expect(productionLambda()).toEqual('production-lambda');
  });
});
