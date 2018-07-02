import getInitialState from '../../../src/store/getInitialState';
import initialVerifiedStepsAssertion from '../../assertions/initialVerifiedSteps';

describe('store getInitialState test suite', function () {
  it('should set the default verifiedSteps property', function () {
    expect(getInitialState().verifiedSteps).toEqual(initialVerifiedStepsAssertion);
  });
});
