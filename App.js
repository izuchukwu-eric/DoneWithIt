import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from "./app/components/Card";
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

function App() {
  return (
          // <WelcomeScreen />
          // <ViewImageScreen />
          // <ListingDetailsScreen />
          // <MessagesScreen />
         //  <Screen>
         //     <ListItem 
         //        title="My title"
         //        ImageComponent={<Icon name="email" />}
         //     />
         //  </Screen>
         // <AccountScreen />
         <ListingsScreen />

  );
}



export default App;

