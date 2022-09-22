import React from 'react'
import { storiesOf } from '@storybook/react'
import { O2OButton } from '../components/O2OButton'

const stories = storiesOf('O2O Button', module)

stories.add('App', () => {
  return <O2OButton />
})
