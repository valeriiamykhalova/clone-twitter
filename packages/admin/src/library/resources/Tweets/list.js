import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  SearchInput,
} from 'react-admin'
import { Filter } from 'react-admin-patch'

function TweetsListFilter(props) {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
    </Filter>
  )
}

export default function UsersList(props) {
  return (
    <List {...props} title="Tweets" filters={<TweetsListFilter />}>
      <Datagrid>
        <DateField />

        <TextField source="content" label="Content" />

        <TextField source="firstName" label="First name" />

        <TextField source="lastName" label="Last name" />

        <EditButton />

        <DeleteButton />
      </Datagrid>
    </List>
  )
}
