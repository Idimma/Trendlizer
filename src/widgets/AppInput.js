import React from 'react';
import {View} from 'react-native';
import {DatePicker, Icon, Input, Picker} from "native-base";
import {AppText} from './AppText'
import {widthDIP} from "../utils/helper";
import {Colors} from "../utils/Colors";


class AppInput extends React.Component {
    render() {
        return (
            <View style={[{
                width: '100%',
                alignSelf: 'center',
                marginBottom: 10

            }, this.props.containerStyles,
            ]}>
                <AppText bold style={[{marginTop: 10, marginBottom: 8}, this.props.textStyles,]}>
                    {this.props.text || this.props.title}
                </AppText>
                {!this.props.picker ?
                    this.props.date ?
                        <View style={[{borderRadius: 5, borderWidth: 0.5,}, this.props.inputStyles]}>
                            <DatePicker
                                defaultDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="DD/MM/YYYY"
                                textStyle={{color: Colors.PRIMARY, fontSize: 14}}
                                placeHolderTextStyle={{color: "#d3d3d3"}}
                                disabled={false}
                                {...this.props}
                            />
                        </View>
                        :
                        <Input
                            style={[{borderRadius: 5, borderWidth: 0.5,}, this.props.inputStyles]}

                            {...this.props}
                        />
                    :
                    <View style={[{ borderRadius: 5, borderWidth: 0.5,}, this.props.inputStyles]}>
                        <Picker
                            style={[{borderRadius: 0, borderWidth: 0, width: '100%'},]}
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down"
                                           type="Feather"
                                           style={{marginRight: 20}}/>}
                            mdIcon={<Icon name="arrow-down"/>}
                            // iosIconStyle={{marginRight: 20}}
                            {...this.props}
                        >
                            {
                                this.props.pickerList.map((e, i) =>
                                    <Picker.Item key={i} label={e.label} value={e.value}/>
                                )
                            }
                        </Picker>
                    </View>
                }
            </View>
        );
    }
}

export default AppInput;