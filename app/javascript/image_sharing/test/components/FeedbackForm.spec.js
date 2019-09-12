/* eslint-env mocha */

import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import FeedbackForm from '../../components/FeedbackForm';

describe('<FeedbackForm />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<FeedbackForm />);
    const form = wrapper.find('form');
    const inputs = wrapper.find('input');

    assert.strictEqual(form.length, 1);
    assert.strictEqual(inputs.length, 2);
  });
});
