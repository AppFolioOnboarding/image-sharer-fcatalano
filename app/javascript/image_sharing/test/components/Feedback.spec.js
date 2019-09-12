/* eslint-env mocha */

import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import Feedback from "../../components/Feedback";

describe('<Feedback />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Feedback />);
    const form = wrapper.find('form');
    const inputs = wrapper.find('input');

    assert.strictEqual(form.length, 1);
    assert.strictEqual(inputs.length, 2);
  });
});
