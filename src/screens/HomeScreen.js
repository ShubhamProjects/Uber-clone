import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { styles } from '../styles';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../core/navSlice';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';
import DeveloperInfoModal from '../components/DeveloperInfoModal';

const HomeScreen = () =>
{
    const dispatch = useDispatch();

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [location, setLocation] = useState(null);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () =>
    {
        setIsModalVisible(true);
    };

    //use below code when developing in expo-cli environment
        useFocusEffect(
            React.useCallback(() =>
            {
                setTimeout(() =>
                {
                    (async () =>
                    {
                        let { status } = await Location.requestForegroundPermissionsAsync();
                        if (status !== 'granted')
                        {
                            console.warn('Permission to access location was denied');
                        }
                        else
                        {
                            let loc = await Location.getCurrentPositionAsync({});
                            setLocation(loc);
                        }
                    })();
                    setLatitude(location?.coords?.latitude);
                    setLongitude(location?.coords?.longitude);
    
                    dispatch(setOrigin({
                        "lat": latitude,
                        "lng": longitude,
                        "desc": "You are here!",
                    }))
    
                    dispatch(setDestination(null))
                    return () => true;
                }, 5000)
            }, [location])
        )

    return (
        <View style={[styles.flx1, tw`pt-8 bg-white`]}>
            <View style={[styles.pl4]}>
                <Image style={[styles.h80, styles.w_30]}
                    source={{ uri: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" }}
                />
            </View>

            <NavOptions latitude={latitude} longitude={longitude} />
            
            {((latitude === null || latitude === undefined) || (longitude === null || longitude === undefined)) && (
                <View style={[styles.flx1,styles.aic, styles.jcc]}>
                    <Text>Fetching your location!!!</Text>
                </View>
            )
            }
            
            <View style={[styles.jcfe, styles.flx1, styles.p10, styles.aic]}>
                <TouchableOpacity onPress={() =>  toggleModal()} style={[styles.aic]}>
                <Text style={[tw`text-sm`]}>Powered by</Text>
                <Image style={[tw`rounded-full h-16 w-16`]}
                    source={{ uri: "https://media-exp1.licdn.com/dms/image/C4E03AQFeBe16-WMwew/profile-displayphoto-shrink_800_800/0/1637319200346?e=1646870400&v=beta&t=OjDpWYL_poaxDBJCxVLMYDGkj7x1T7CYKC-dP7LoXSo" }}
                    />
                </TouchableOpacity>
            </View>
            {isModalVisible === true && (
                <DeveloperInfoModal toggleModal={setIsModalVisible} isModalVisible={isModalVisible} />
            )}
        </View>
    )
}

export default HomeScreen
