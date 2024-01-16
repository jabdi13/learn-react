import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="Primera entrada" onChange={handleChange} text={text} />
      <Input label="Segunda entrada" onChange={handleChange} text={text} />
    </>
  );
}

function Input({ label, text, onChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}
