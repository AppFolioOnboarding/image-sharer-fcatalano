0/* eslint-env mocha */

import assert from 'assert';
import { shallow, mount } from 'enzyme';
import React from 'react';
import FeedbackForm from '../../components/FeedbackForm';
import * as api from '../../utils/helper'
import sinon from 'sinon';

describe('<FeedbackForm />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<FeedbackForm />);
    const form = wrapper.find('form');
    const inputs = wrapper.find('input');

    assert.strictEqual(form.length, 1);
    assert.strictEqual(inputs.length, 2);
  });

  it('should resolve on valid input', async () => {
    const wrapper = shallow(<FeedbackForm />);
    const inputs = wrapper.find('input');
    const textareas = wrapper.find('textarea');
    const forms = wrapper.find('form');
    const postStub = sinon.stub(api, "post");
    const name = 'Name';
    const comments = 'Comment';

    postStub.withArgs('/api/feedbacks', {feedback: {name: name, comments: comments}}).resolves({message: "Success"});

    inputs.at(0).simulate('change', {target: {value: name}});
    textareas.at(0).simulate('change', {target: {value: comments}});
    wrapper.update();

    await forms.at(0).simulate('submit', {preventDefault: () => {}, target: {name: {value: name}, comments: {value: comments}}});
    wrapper.update();

    assert.strictEqual(wrapper.state().name, name);
    assert.strictEqual(wrapper.state().comments, comments);
    assert.strictEqual(wrapper.state().statusMessage, "Success");
    assert(postStub.calledOnce);

    sinon.restore();
  });

  it('should fail on invalid input', async () => {
    const wrapper = shallow(<FeedbackForm />);
    const inputs = wrapper.find('input');
    const textareas = wrapper.find('textarea');
    const forms = wrapper.find('form');
    const postStub = sinon.stub(api, "post");

    postStub.withArgs('/api/feedbacks', {feedback: {name: '', comments: ''}}).rejects({data: {message: "Fail"}});

    inputs.at(0).simulate('change', {target: {value: ''}});
    textareas.at(0).simulate('change', {target: {value: ''}});
    wrapper.update();

    await forms.at(0).simulate('submit', {preventDefault: () => {}, target: {name: {value: ''}, comments: {value: ''}}});
    wrapper.update();

    assert.strictEqual(wrapper.state().name, '');
    assert.strictEqual(wrapper.state().comments, '');
    assert(postStub.calledOnce);

    sinon.restore();
  });


});
