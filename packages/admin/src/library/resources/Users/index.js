import list from './list'
// import create from './create'
// import edit from './edit'
import DataProviders from '@/app/constants/DataProviders'
import DataSources from '@/app/constants/DataSources'
import GroupIcon from '@material-ui/icons/Group'

export default {
  name: 'users',
  label: 'Users',
  icon: GroupIcon,
  list,
  //   create,
  //   edit,
  dataProvider: {
    id: DataProviders.FIREBASE_DATA_PROVIDER,
    path: '/users',
    dataType: 'collection',
    primaryKey: 'id',
  },
  dataSource: DataSources.FIREBASE_REALTIME_DATABASE,
}
