import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import Main from "../components/Main";
import ScanningPage from "../components/ScanningPage";
import ScannedListItemsPage from "../components/ScannedListItemsPage";
import LogInPage from "../components/LogInPage";

const navigator = Actions.create(
  <Scene key="root">
    <Scene key="Main" component={Main} hideNavBar initial/>
    <Scene key="ScanningPage" component={ScanningPage}/>
    <Scene key="ScannedListItemsPage" component={ScannedListItemsPage}/>
    <Scene key="LogInPage" title='Login' component={LogInPage}/>
  </Scene>
);

export default navigator;