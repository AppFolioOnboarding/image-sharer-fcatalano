/* eslint-env mocha */

import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../components/Footer';

describe('<Header />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Footer />);
    const copyright = wrapper.find('Copyright');

    assert.strictEqual(copyright.length, 1);
    assert.strictEqual(copyright.prop('message'), 'Copyright: Appfolio Inc. Onboarding');
  });
});
