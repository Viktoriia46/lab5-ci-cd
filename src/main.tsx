import React from 'react';

function Hello({ name }: { name: string }) {
  console.log('Hello, ' + name); // ESLint тут посвариться за console
  const unused = 123; // і за це теж
  return <div>Hello, {name}</div>;
}

export default Hello;
