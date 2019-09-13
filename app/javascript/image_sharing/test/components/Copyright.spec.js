/* eslint-env mocha */

import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import Copyright from '../../components/Copyright';

describe('<Copyright />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Copyright message="Test" />);
    const span = wrapper.find('span');

    assert.strictEqual(span.length, 1);
    assert.strictEqual(span.text(), 'Test');
  });
});
