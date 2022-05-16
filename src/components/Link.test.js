import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

it(`renders correctly with given props`, () => {
  const linkJsonSnapshot = 
  renderer.create(<Link id={'myNewLink'} url={'https://reactjs.org/docs/getting-started.html'} text={'Get Started'} />)
    .toJSON();
  expect(linkJsonSnapshot).toMatchSnapshot();
});