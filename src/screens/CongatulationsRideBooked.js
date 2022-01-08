import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { styles } from '../styles';
import { Icon } from 'react-native-elements';

const CongatulationsRideBooked = ({navigation}) => {

    const [congratsView, setCongratsView] = useState(true);

    const CongratulationView = () =>
    {
        return(
            <View style={[styles.aic, styles.jcc, styles.h_80, styles.w_80]}>
                <ImageBackground style={[styles.h_80, styles.w_80]} resizeMode='contain'
                    source={{ uri: 'https://www.freepnglogos.com/uploads/smiley-png/image-thumb-smiley-community-central-fandom-18.png' }} />
                
            <Text style={[tw`text-3xl italic font-bold`]}>Congratulations</Text>
                    <Text style={[tw`text-xl italic`]}>Ride booked</Text>

        </View>
        )
    }

        setTimeout(() =>
        {
            setCongratsView(!congratsView);
        }, 900)

    return (
        <View style={[styles.flx1, styles.bgWhite]}>
            <View style={[tw`w-2/3`]}>
                    <TouchableOpacity onPress={()=> navigation.navigate('NavigateCard')}>
                    <Icon style={[tw`w-10 mt-3 mb-4`]}
                            name="arrowleft" color="black" type="antdesign" />
                    </TouchableOpacity>
            </View>
            <View style={[styles.flx1, styles.jcc, styles.aic]}>
                {congratsView !== false && (
                    <CongratulationView/>
                )}
            </View>
        </View>
    )
}

export default CongatulationsRideBooked;
