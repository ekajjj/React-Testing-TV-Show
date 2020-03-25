import React from 'react';
import { render } from '@testing-library/react';
import Episodes from '../components/Episodes';
//Episode test
test('Data rendered', () => {
    const { queryByTestId } = render(
        <Episodes error='' episodes={episodesTester} />
    )
    expect(queryByTestId(/Card1/i)).toHaveLength(2)    
})

const episodesTester = [{id: 909340, url: "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax", name: "Chapter One: MADMAX", season: 2, number: 1}
, {id: 909342, url: "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak", name: "Chapter Two: Trick or Treat, Freak", season: 2, number: 2}
]