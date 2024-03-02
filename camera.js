import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Stack } from "expo-router";
import { useEffect } from 'react';
import { useCameraPermission, useCameraDevice, Camera } from 'react-native-vision-camera';

const CameraScreen = ()=> {

  const { hasPermission, requestPermission } = useCameraPermission();
  console.log(hasPermission)

  const device= useCameraDevice('back')

  useEffect(()=> {
    if(!hasPermission){
      requestPermission();
    }
  }, [hasPermission]);

  if (!hasPermission){
    return <ActivityIndicator/>
    }

  if (!device){
    return <Text>Camera device not found</Text>
  }

  return(
    <View style={{flex:1}}>
      <Stack.Screen options={{ headerShown: false}}/>

      <Text>Camera</Text>

      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true}/>
    
    </View>
  
  );

}

export default CameraScreen