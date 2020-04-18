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
import { Filter, ImageField } from 'react-admin-patch'

function UsersListFilter(props) {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
    </Filter>
  )
}

export default function UsersList(props) {
  return (
    <List {...props} title="Users" filters={<UsersListFilter />}>
      <Datagrid>
        <DateField />

        <ImageField
          source="image.uri"
          label="Profile image"
          title="Photo"
          small
        />

        <TextField source="firstName" label="First name" />

        <TextField source="lastName" label="Last name" />

        <EditButton />

        <DeleteButton />
      </Datagrid>
    </List>
  )
}
