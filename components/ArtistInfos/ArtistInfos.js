import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Modalize } from 'react-native-modalize'
import PropTypes from 'prop-types'
import { BlurView } from 'expo-blur'

const ArtistInfos = ({ artist, refAttach }) => {
    const [subscribed, setSubscribed] = useState(false)

    return (
        <Modalize 
            ref={refAttach}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
            modalTopOffset={107}
            handlePosition={'inside'}
            handleStyle={{ marginTop: 12 }}
            modalStyle={styles.modal}
        >
            <Image source={artist.cover} resizeMode='cover' style={{ borderRadius: 4, width: '100%', marginTop: 16 }} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.artistName}>{artist.name}</Text>
                {artist.isCertified && <Image source={require('../../assets/check.png')} style={{ height: 14, width: 14, marginLeft: 6 }} /> }
            </View>
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                <BlurView intensity={50} tint='light'>
                    <TouchableOpacity style={[styles.subscribe, !subscribed ? styles.notSubscribed : styles.subscribed]} onPress={() => setSubscribed(!subscribed)}>
                        <Text style={styles.subscribeTitle}>{subscribed ? "Se désabonner" : "S'abonner"}</Text>
                    </TouchableOpacity>
                </BlurView>
            </View>
            <View>
                <Text style={styles.description}>{artist.description}</Text>
            </View>
            <View style={styles.stats}>
                <View>
                    <Text style={styles.title}>{artist.subscribers}</Text>
                    <Text style={styles.subtitle}>abonnés</Text>
                </View>
                <View>
                    <Text style={styles.title}>{artist.vues}</Text>
                    <Text style={styles.subtitle}>vues</Text>
                </View>
                <View>
                    <Text style={styles.title}>{artist.nox} <Image source={require('../../assets/star.png')} style={{ height: 20, width: 20 }} /></Text>
                    <Text style={styles.subtitle}>106 NOX</Text>
                </View>
            </View>
        </Modalize>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 32,
        paddingBottom: 16,
        justifyContent: 'center',
    },
    artistName: {
        color: '#000',
        fontFamily: 'TwCenMTBold',
        fontWeight: 'bold',
        fontSize: 48,
        letterSpacing: -2.83,
        marginTop: 19,
        textAlign: 'center',
        position: 'relative',
    },
    description: {
        marginTop: 37,
        fontSize: 16,
        fontFamily: 'TwCenMT',
    },
    notSubscribed: {
        backgroundColor: '#009eff',
        shadowOffset: { width: 0, height: 5 },
        shadowColor: 'rgba(0, 158, 255, 0.34)',
        shadowOpacity: .34,
        shadowRadius: 1, 
        elevation: 3,
        borderWidth: .2,
        borderColor: 'rgba(17, 22, 25, 0.2)'
    },
    subscribed: {
        backgroundColor: '#ff0052',
        shadowOffset: { width: 0, height: 5 },
        shadowColor: 'rgba(255, 0, 82, 0.34)',
        shadowOpacity: .34,
        shadowRadius: 1, 
        elevation: 3,
    },
    subscribe: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009eff',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 3,
        width: 160,
        height: 40
    },
    subscribeTitle: {
        fontFamily: 'TwCenMT',
        fontSize: 23,
        color: '#fff',
    },
    stats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 23,
        paddingLeft: 40,
        paddingRight: 40,
    },
    title: {
        fontFamily: 'TwCenMTBold',
        fontWeight: 'bold',
        fontSize: 24
    },
    subtitle: {
        textAlign: 'center'
    }
})


ArtistInfos.propTypes = {
    artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cover: PropTypes.number.isRequired,
        isCertified: PropTypes.bool.isRequired,
        vues: PropTypes.string.isRequired,
        subscribers: PropTypes.string.isRequired,
        nox: PropTypes.string.isRequired,

        description: PropTypes.string
    }),
    refAttach: PropTypes.any
}

export default ArtistInfos