import { assert } from 'chai';
import {
  parseVersion
} from '../src/paramParser';

describe('Parameter parser', () => {
  it('should parse version', () => {
    const params = ['foo', 'patch', 'bar'];

    const expectedVal = 'patch';
    assert(parseVersion(params) === expectedVal, 'Reading version failed.');
  });
});
