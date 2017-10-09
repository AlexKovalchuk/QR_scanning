import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import Main from "../components/Main";
import ScanningPage from "../components/ScanningPage/ScanningPage";
import ScannedListItemsPage from "../components/ScannedListItemsPage/ScannedListItemsPage";
// import LogInPage from "../components/LogInPage/index";
import ServerConnectionPage from '../components/ServerConnection/ServerConnectionPage';
import ServerList from '../components/ServerConnection/ServerList';
import PrintScannedItems from '../components/ScannedListItemsPage/PrintScannedItems';

const navigator = Actions.create(
  <Scene key="root">
    <Scene key="Main" component={Main} hideNavBar initial/>
    <Scene key="ScanningPage" title='Scanning' component={ScanningPage}/>
    <Scene key="ScannedListItemsPage" title='Scanned List' component={ScannedListItemsPage}/>
    {/*<Scene key="LogInPage" title='Login' component={LogInPage}/>*/}
    <Scene key="ServerConnectionPage" title='Scan server' component={ServerConnectionPage}/>
    <Scene key="ServerList" title='Servers List' component={ServerList}/>
    <Scene key="PrintScannedItems" title='Print Scanned Items' component={PrintScannedItems}/>
  </Scene>
);

export default navigator;