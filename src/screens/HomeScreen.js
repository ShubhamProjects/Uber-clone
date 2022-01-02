import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { styles } from '../styles';

const HomeScreen = ({navigation}) => {
    return (
        <View style={[styles.flx1, tw`pt-10`]}>
            <View style={[tw`pb-4`]}>
                <Image style={[styles.h80, styles.w_30]}
                    source={{ uri: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" }}
                />
            </View>

            <NavOptions/>
        </View>
    )
}

export default HomeScreen
