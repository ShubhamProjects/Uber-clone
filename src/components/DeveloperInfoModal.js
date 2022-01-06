import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import tw from 'tailwind-react-native-classnames'
import { styles } from '../styles'

const DeveloperInfoModal = ({toggleModal, isModalVisible}) =>
{
    const closeModal = () =>
    {
        toggleModal(false);
    }

    const openLinkedInProfile = () =>
    {
        Linking.openURL('https://www.linkedin.com/in/shubham-vishwakarma-7252221a9');
    };

    const openGithubProfile = () =>
    {
        Linking.openURL('https://www.github.com/ShubhamProjects');
    };

    const openFacebookProfile = () =>
    {
        Linking.openURL('https://www.facebook.com/shubham.vishwakarma.06');
    };
    
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => closeModal()}
            backdropOpacity={0.6}
            backdropColor='black'
            animationIn='slideInUp'
            animationOut={'slideOutLeft'}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
        >
            <View style={[tw`rounded bg-gray-200`, styles.pt20, styles.pb20]}>
                <View style={[styles.aic]}>
                <Image style={[tw`rounded-full h-24 w-24`]} source={{ uri : "https://media-exp1.licdn.com/dms/image/C4E03AQFeBe16-WMwew/profile-displayphoto-shrink_800_800/0/1637319200346?e=1646870400&v=beta&t=OjDpWYL_poaxDBJCxVLMYDGkj7x1T7CYKC-dP7LoXSo"}}/>
                <Text style={[tw`text-xs font-bold`]}>Shubham Kr Vishwakarma</Text>
                </View>
                <View style={[styles.m10, styles.aic]}>
                <Text style={[tw`text-xs font-thin italic`]}>Company: Tata Consultancy & Services</Text>
                <Text style={[tw`text-xs font-thin italic`]}>Role: Frontend developer</Text>
                </View>

                <View style={[styles.pl10, styles.aic]}>
                    <Text style={[tw`font-bold`]}>It will be pleasure to connect with you.</Text>
                <View style={[tw`mt-2 mb-2 pr-4`, styles.aic]}>
                    <Text style={[tw`font-semibold text-xs`]}>Phone: 8753999734</Text>
                    <Text style={[tw`font-semibold text-xs`]}>Email: skpunk3695@gmail.com</Text>
                </View>
                </View>

                <View style={[styles.flxr, styles.jcsa, styles.m10]}>
                    <TouchableOpacity onPress={() => openLinkedInProfile()}>
                        <Image style={[tw`h-12 w-12 rounded`]}
                            source={{ uri: 'https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openGithubProfile()}>
                        <Image style={[tw`h-12 w-14 rounded`]}
                            source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openFacebookProfile()}>
                        <Image style={[tw`h-12 w-12 rounded`]}
                            source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' }}
                        />
                    </TouchableOpacity>
                </View>

        </View>
        </Modal>
    )
}

export default DeveloperInfoModal
