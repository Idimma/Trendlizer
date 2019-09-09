import React from 'react';
import {Text, View} from 'react-native';


class Settings extends Component {

    state = {};


    static navigationOptions = ({navigation}) => ({
        header: null
    });

    constructor(props) {
        super(props);

        this.mounted = false
    }

    componentWillMount() {

    }

    async componentDidMount() {
        this.mounted = true;

    }

    componentWillUnmount() {
        this.mounted = false
    }


    render() {
        const {replace} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text>Settings</Text>
            </View>
        );
    }

}

const mapStateToProps = {};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(Settings)