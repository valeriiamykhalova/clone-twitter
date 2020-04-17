import list from './list'
import edit from './edit'
import DataProviders from '@/app/constants/DataProviders'
import DataSources from '@/app/constants/DataSources'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

export default {
  name: 'library/tweets',
  label: 'Tweets',
  icon: LibraryBooksIcon,
  list,
  edit,
  dataProvider: {
    id: DataProviders.FIREBASE_DATA_PROVIDER,
    path: '/library/tweets',
    dataType: 'collection',
    primaryKey: 'id',
  },
  dataSource: DataSources.FIREBASE_REALTIME_DATABASE,
}
