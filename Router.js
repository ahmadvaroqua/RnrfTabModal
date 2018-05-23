import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Home from './components/Home';
import Search from './components/Search';
import Post from './components/Post';
import Profile from './components/Profile';
import More from './components/More';
import Placeholder from './components/Placeholder';

const RouterComponent = () => (
  <Router>
    <Scene key="modal" modal>
      <Stack key="root" hideNavBar>

        {/* Tab Bar */}
        <Scene hideNavBar panHandlers={null} animationEnabled={false} key="tabs">

          <Tabs
            key="tabbar"
            swipeEnabled={false}
            showLabel={true}
            tabBarStyle={styles.tabBarStyle}
            activeTintColor="#000000"
            activeBackgroundColor="white"
            inactiveBackgroundColor="rgba(255, 255, 255, 0.5)"
            tabBarPosition="bottom"
          >

            <Scene key="Home" component={Home} title="Home" />
            <Scene key="search" component={Search} title="Search"/>

            <Scene key="placeholder" component={Placeholder} title="Post"
              tabBarOnPress={() => {
                return Actions.post();
              }}
            />

            <Scene key="profile" component={Profile} title="Profile" />
            <Scene key="more" component={More} title="More"/>
          </Tabs>
        </Scene>

      </Stack>

      {/* Modal Scenes */}
      <Scene key="post" component={Post} title="Post" hideNavBar={true}/>

    </Scene>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBarStyle: {
    backgroundColor: '#eee',
  },

  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },

});

export default RouterComponent;
