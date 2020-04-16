/**
 *
 * Library
 *
 */

import Books from './resources/Books'
import Users from './resources/Users'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'

export default {
  resources: {
    Books,
    Users,
  },

  menuGroup: {
    label: 'Library',
    icon: LocalLibraryIcon,
    items: [Books, Users],
  },
}
