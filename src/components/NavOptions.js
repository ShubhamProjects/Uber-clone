import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles'
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const NavOptions = () =>
{
    const navigation = useNavigation();

    const navdata = [
        {
            id: "123",
            title: "Get a ride",
            image: "https://links.papareact.com/3pn",
            screen: 'Map Screen'
        },
        {
            id: "46",
            title: "Order Food",
            image: "https://links.papareact.com/28w",
            screen: 'Food Screen'
        }
    ]

    return (
        <View style={[tw`mt-10`]}>
            <FlatList
                data={navdata}
                horizontal
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[tw`p-2`, styles.aic]} onPress={() => navigation.navigate(item.screen)}>
                    <View style={[tw`bg-gray-200 w-40 p-2`, styles.b10, styles.jcc, styles.aic, styles.mr10]}>
                        <Image style={[styles.h120, styles.w120, {resizeMode: "contain"}]}
                            source={{uri: item.image}}/>
                        <Text style={[tw`font-semibold pb-6`]}>{item.title}</Text>
                        <Icon style={[tw`p-2, bg-black rounded-full w-10 mt-2`]}
                            name="arrowright" color="white" type="antdesign"/>
                        </View>
                    </TouchableOpacity>
                )}/>
        </View>
    )
}

export default NavOptions;
