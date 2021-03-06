import React, { Children } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { fieldPropTypes } from 'ra-ui-materialui/lib/field/types'

import {
  ReferenceManyFieldController as ReferenceArrayFieldController,
  DataStructures,
} from 'react-admin-patch/ra-core'

const styles = createStyles({
  progress: { marginTop: '1em' },
})

export const ReferenceArrayFieldView = ({
  children,
  className,
  classes = {},
  data,
  ids,
  loadedOnce,
  reference,
  referenceBasePath,
  page,
  pagination,
  perPage,
  setPage,
  setPerPage,
  // setSort,
  total,
}) => {
  if (loadedOnce === false) {
    return <LinearProgress className={classes.progress} />
  }

  return (
    <React.Fragment>
      {React.cloneElement(Children.only(children), {
        className,
        resource: reference,
        ids,
        data,
        loadedOnce,
        basePath: referenceBasePath,
        currentSort: {},
      })}

      {pagination &&
        total !== undefined &&
        React.cloneElement(pagination, {
          page,
          perPage,
          setPage,
          setPerPage,
          total,
        })}
    </React.Fragment>
  )
}

ReferenceArrayFieldView.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.object,
  ids: PropTypes.array,
  loadedOnce: PropTypes.bool,
  children: PropTypes.element.isRequired,
  reference: PropTypes.string.isRequired,
  referenceBasePath: PropTypes.string,
  page: PropTypes.number,
  pagination: PropTypes.any,
  perPage: PropTypes.number,
  setPage: PropTypes.func,
  setPerPage: PropTypes.func,
  setSort: PropTypes.func,
  total: PropTypes.number,
}

/**
 * A container component that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * // order = {
 * //   id: 123,
 * //   product_ids: [456, 457, 458],
 * // }
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categories of the current product as a list of chips
 * // product = {
 * //   id: 456,
 * //   category_ids: [11, 22, 33],
 * // }
 * <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 */
export const ReferenceArrayField = ({ children, ...props }) => {
  if (React.Children.count(children) !== 1) {
    throw new Error(
      '<ReferenceArrayField> only accepts a single child (like <Datagrid>)'
    )
  }

  return (
    <ReferenceArrayFieldController {...props}>
      {controllerProps => (
        <ReferenceArrayFieldView
          {...props}
          {...{ children, ...controllerProps }}
        />
      )}
    </ReferenceArrayFieldController>
  )
}

ReferenceArrayField.propTypes = {
  addLabel: PropTypes.bool,
  basePath: PropTypes.string.isRequired,
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  label: PropTypes.string,
  record: PropTypes.object.isRequired,
  reference: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  sortBy: PropTypes.string,
  source: PropTypes.string.isRequired,
}

ReferenceArrayField.defaultProps = {
  perPage: 10,
}

const EnhancedReferenceArrayField = withStyles(styles)(ReferenceArrayField)

EnhancedReferenceArrayField.defaultProps = {
  addLabel: true,
  dataStructure: DataStructures.REFERENCE_LIST,
}

EnhancedReferenceArrayField.propTypes = {
  ...fieldPropTypes,
  reference: PropTypes.string,
  children: PropTypes.element.isRequired,
}

EnhancedReferenceArrayField.displayName = 'EnhancedReferenceArrayField'

export default EnhancedReferenceArrayField
