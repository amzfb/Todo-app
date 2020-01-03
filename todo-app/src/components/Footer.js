import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const Footer = () => (
  <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
    <Button>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    </Button>
    <Button>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    </Button>
    <Button>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </Button>
  </ButtonGroup>
)

export default Footer