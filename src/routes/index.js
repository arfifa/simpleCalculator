import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainPage } from '../containers/pages';

const Router = createSwitchNavigator(
  {
    MainPage
  },
  {
    headerMode: 'none',
    initialRouteName: 'MainPage'
  }
)

export default createAppContainer(Router);