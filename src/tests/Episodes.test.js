import React from 'react';
import { render } from '@testing-library/react';
import Episodes from '../components/Episodes';
//Episode test
test('Data rendered', () => {
    const {} = render(
        <Episodes error='' episodes={[]} />
    )
})