import React from 'react';

export default function FeedbackForm() {
  return (
    <form
      id="feedback-form"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: '250px' }}
    >
      <label htmlFor="name" style={{ marginBottom: '0px', display: 'block' }} >
        Your Name:
        <input id="name" type="text" name="name" size={75} style={{ display: 'block' }} />
      </label>
      <label htmlFor="comments" style={{ marginBottom: '0px', display: 'block' }} >
        Comments:
        <textarea id="comments" name="comments" rows={5} cols={75} style={{ display: 'block' }} />
      </label>
      <input type="submit" value="Submit" style={{ color: 'white', backgroundColor: 'blue' }} />
    </form>
  );
}
