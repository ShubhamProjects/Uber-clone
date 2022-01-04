import React, { useEffect, useState } from 'react'
import { View, Image, PermissionsAndroid, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { styles } from '../styles';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../core/navSlice';
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = () =>
{

    //var watchId = null;
    const dispatch = useDispatch();

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    //use below code when developing in expo-cli environment
    useFocusEffect(
    React.useCallback(() =>{
            (async () =>
            {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted')
                {
                    setErrorMsg('Permission to access location was denied');
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
        }, [location])
        );
      
    //Use below code when developing in react-native-cli environment
    // useEffect(() =>
    // {
    //     const requestLocationPermission = async () =>
    // {
    //     try
    //     {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //                 title: 'Uber-clone location permission',
    //                 message: 'Uber-clone wants to access location for providing best service.',
    //                 buttonPositive: "Ok",
    //                 buttonNegative: "Cancel"
    //             }
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED)
    //         {
    //             console.log('permission granted');
    //             //getOneTimeLoation();
    //             //trackLocation();
    //             let loc = await Location.getCurrentPositionAsync({});
    //             setLocation(loc);
    //         }
    //         else
    //         {
    //             console.log("Permission denied");
    //         }
    //     } catch (err)
    //     {
    //         console.warn(err);
    //     }
    //     };
    //     requestLocationPermission();
    //      return () =>
    //      {
    //          Geolocation.clearWatch(watchId);
    //     // }
    // }, [])

    //const getOneTimeLoation = () =>
    // {
    //     Geolocation.getCurrentPosition(
    //         (position) =>
    //         {
    //             console.log(position);
    //             const lat = JSON.stringify(position.coords.latitude);
    //             const lng = JSON.stringify(position.coords.longitude);

    //             setLatitude(lat);
    //             setLongitude(lng);
                
    //             dispatch(setOrigin({
    //                 "lat": latitude,
    //                 "lng": longitude,
    //                 "desc": "You are here",
    //             }))
        
    //             dispatch(setDestination(null))
    //         },
    //         (error) =>
    //     {
    //         console.log(error.code, error.message);
    //     }, { enableHighAccuracy: false, timeout: 15000, maximumAge: 1000 }
    //     )
    // };

    // const trackLocation = () =>
    // {
    //     watchId = Geolocation.watchPosition(
    //         (position) =>
    //         {
    //             const lat = JSON.stringify(position.coords.latitude);
    //             const lng = JSON.stringify(position.coords.longitude);

    //             setLatitude(lat);
    //             setLongitude(lng);
    //         },
    //         (error) =>
    //         {
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: false, timeout: 15000, maximumAge: 1000 }
    //     );
    // };

    // useEffect(() =>
    // {
    //     dispatch(setOrigin({
    //         "lat": latitude,
    //         "lng": longitude,
    //         "desc": "You are here",
    //     }))

    //     dispatch(setDestination(null))
    // }, [latitude, longitude])

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
                <Text style={[tw`text-sm`]}>Powered by</Text>
                <Image style={[tw`rounded-full h-16 w-16`]}
                    source={{ uri: "https://media-exp1.licdn.com/dms/image/C4E03AQFeBe16-WMwew/profile-displayphoto-shrink_800_800/0/1637319200346?e=1646870400&v=beta&t=OjDpWYL_poaxDBJCxVLMYDGkj7x1T7CYKC-dP7LoXSo" }}
                />
            </View>
        </View>
    )
}

export default HomeScreen
