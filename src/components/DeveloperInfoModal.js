import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Modal from 'react-native-modal'
import tw from 'tailwind-react-native-classnames'
import { styles } from '../styles'

const DeveloperInfoModal = ({toggleModal, isModalVisible}) =>
{
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            backdropOpacity={0.6}
            backdropColor='black'
            animationIn='slideInUp'
            animationOut='slideOutDown'
        >
            <View style={[tw`rounded bg-gray-200`, styles.pt20, styles.pb20]}>
                <View style={[styles.aic]}>
                <Image style={[tw`rounded-full h-24 w-24`]} source={{ uri : "https://media-exp1.licdn.com/dms/image/C4E03AQFeBe16-WMwew/profile-displayphoto-shrink_800_800/0/1637319200346?e=1646870400&v=beta&t=OjDpWYL_poaxDBJCxVLMYDGkj7x1T7CYKC-dP7LoXSo"}}/>
                <Text style={[tw`text-xs font-bold`]}>Shubham Kr Vishwakarma</Text>
                </View>
                <View style={[styles.m10]}>
                <Text style={[tw`text-xs font-thin italic`]}>Company: Tata Consultancy & Services</Text>
                <Text style={[tw`text-xs font-thin italic`]}>Role: Frontend developer</Text>
                </View>

                <View style={[styles.m10]}>
                {/* <Text style={[tw`text-xs font-thin `]}>{`LinkedIn: ${Linking.openURL('https://www.linkedin.com/in/shubham-vishwakarma-7252221a9')}`}</Text> */}
                </View>

        </View>
        </Modal>
    )
}

export default DeveloperInfoModal
