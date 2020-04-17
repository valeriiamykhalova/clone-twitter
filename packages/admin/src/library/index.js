/**
 *
 * Library
 *
 */

import Tweets from './resources/Tweets'
import Users from './resources/Users'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'

export default {
  resources: {
    Users,
    Tweets,
  },

  menuGroup: {
    label: 'Library',
    icon: LocalLibraryIcon,
    items: [Users, Tweets],
  },
}
