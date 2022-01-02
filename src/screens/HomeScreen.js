import React, { useEffect } from 'react'
import { View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { styles } from '../styles';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../core/navSlice';

const HomeScreen = ({ navigation }) =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(setOrigin({
            "lat": 26.4759731,
            "lng": 90.5148547,
            "desc": "New Bongaigaon Rly colony",
        }))

        dispatch(setDestination(null))
    }, [])

    return (
        <View style={[styles.flx1, tw`pt-8`]}>
            <View style={[styles.pl4]}>
                <Image style={[styles.h80, styles.w_30]}
                    source={{ uri: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" }}
                />
            </View>

            <NavOptions/>
        </View>
    )
}

export default HomeScreen
