import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


const OpeningScreen = ()=> {
 return ( 
 
  <SafeAreaView edges={['bottom'] style={{flex: 1}}}>

      <Stack.Screen options={{title: 'BillSplitter'}}/>
      <Link href="./camera" asChild>
        <Button title="Go to Camera"/>
      </Link>
  </SafeAreaView>
  
  )

}