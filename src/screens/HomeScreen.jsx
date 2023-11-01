// HomeScreen.js
import React from 'react';
import {DrawerScreen} from './DrawerScreen';
import { AccountSummaryNav } from './NavDummyScreens/AccountSummaryNav';

export const HomeScreen = ({navigation}) => {
  return <DrawerScreen screen={AccountSummaryNav}/>;
};
