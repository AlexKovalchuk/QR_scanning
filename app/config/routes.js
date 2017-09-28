import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import Main from "../components/Main";
import ScanningPage from "../components/ScanningPage/ScanningPage";
import SuccessPage from "../components/ScanningPage/SuccessPage";
import ErrorPage from "../components/ScanningPage/ErrorPage";
import ScannedListItemsPage from "../components/ScannedListItemsPage/ScannedListItemsPage";
// import LogInPage from "../components/LogInPage/index";

const navigator = Actions.create(
  <Scene key="root">
    <Scene key="Main" component={Main} hideNavBar initial/>
    <Scene key="ScanningPage" title='Scanning' component={ScanningPage}/>
    <Scene key="SuccessPage" title='Success' component={SuccessPage}/>
    <Scene key="ErrorPage" title='Error' component={ErrorPage}/>
    <Scene key="ScannedListItemsPage" title='Scanned List' component={ScannedListItemsPage}/>
    {/*<Scene key="LogInPage" title='Login' component={LogInPage}/>*/}
  </Scene>
);

export default navigator;