import React from 'react'

import { Case } from '.'

const exampleProps = {
  on: (+new Date) % 2,
  children: [
    (
      <Case when={ 0 }>
      Time is even
      </Case>
    ),
    (
      <Case when={ 1 }>
      Time is not even
      </Case>
    )
  ]
}

export default exampleProps;
