import React, { useRef, useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font'
import { StyleSheet, Text, View, Pressable, Image, ImageBackground, TouchableOpacity, ViewBase } from 'react-native'

import ArtistInfos from './components/ArtistInfos'

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const modalizeRef = useRef(null)

  const onOpen = () => {
    modalizeRef.current?.open()
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      TwCenMT: require('./assets/fonts/tcm.ttf'),
      TwCenMTBold: require('./assets/fonts/tcb.ttf')
    });
    
    setFontsLoaded(true)
  }

  useEffect(() => {
    loadFonts()
  }, [])

  if (!fontsLoaded)
    return null

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/angele-scene.jpg')} resizeMethod='auto' style={styles.angeleScene} imageStyle={{ resizeMode: 'cover' }}>
        <View style={styles.topContainer}>
          <Pressable style={styles.artist} onPress={onOpen}>
            <Image source={require('./assets/angele.png')} resizeMode='cover' style={styles.artistAvatar} />
            <View style={styles.artistInfos}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.artistName}>Angèle</Text>
                <Image source={require('./assets/check.png')} style={{ height: 10, width: 10, marginLeft: 4, marginTop: 4}} />
              </View>
              <Text style={styles.artistPos}>Bruxelle, BELGIQUE</Text>
            </View>
          </Pressable>
          <View>
            <Text style={styles.countdown}>- 01 : 06 : 22</Text>
          </View>
        </View>

        <ArtistInfos 
          refAttach={modalizeRef} 
          artist={{
            name: 'Angèle',
            cover: require('./assets/angele-banner.png'),
            isCertified: true,
            vues: '55.6M',
            subscribers: '872k',
            nox: '31M',
            description: 'Angèle BE BROL BE\n🎵 Angele vl records 🎵\n😀😀😀😀'
          }} 
        />
      </ImageBackground>

      <StatusBar hidden />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  angeleScene: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  topContainer: {
    position: 'absolute',
    left: 20,
    top: 30,
    right: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  artist: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative'
  },  
  artistAvatar: {
    height: 45,
    width: 45,
    borderRadius: 100,
    marginRight: 8,
  },
  artistName: {
    fontFamily: 'TwCenMTBold',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    letterSpacing: -1.4
  },
  artistPos: {
    fontFamily: 'TwCenMT',
    fontSize: 16,
    color: '#fff',
    letterSpacing: -.5
  },
  countdown: {
    fontFamily: 'TwCenMTBold',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    letterSpacing: -.4
  }
})

export default App
