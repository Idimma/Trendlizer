import React from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {Styles} from '../../utils/Styles';
import {Colors} from '../../utils/Colors';
import {Dimension} from '../../utils/Dimensions';
import BaseStyle from './styles'
import {heightDIP} from "../../utils/helper";



const {buttonText, buttonWrapper, container, pager, icons} = BaseStyle;

const {buttonContainer} = BaseStyle;
export const Page = ({index, message, next, image, skipPage, title, messageStyles}) => (

    <View style={container}>
        <View style={pager}>
            <Image
                resizeMode="contain"
                style={icons}
                source={image}
            />
            <Text style={{...Styles.title, marginBottom: heightDIP(20)}}>
                {title}
            </Text>
            <Text style={Styles.message}>
                {message}
            </Text>

            {index === 2 ?
                <View style={buttonWrapper}>
                    <TouchableOpacity
                        onPress={() => next()}
                        style={{
                            ...buttonContainer,
                            width: '100%',
                            justifySelf: 'center',
                            alignSelf: 'center',
                            height: 55,
                            borderRadius: 4,
                            backgroundColor: Colors.SECONDARY
                        }}
                    >
                        <Text style={buttonText}>
                            {index === 2 ? 'Lets start' : 'Next'}
                        </Text>
                    </TouchableOpacity>

                </View>
                :
                <View style={buttonWrapper}>
                    <TouchableOpacity
                        onPress={() => skipPage()}
                        style={buttonContainer}
                    >
                        <Text style={buttonText}>{index === 2 ? "" : 'SKIP'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => next()}
                        style={buttonContainer}
                    >
                        <Text style={buttonText}>
                            {index === 2 ? 'Get Started' : 'NEXT'}
                        </Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    </View>
);