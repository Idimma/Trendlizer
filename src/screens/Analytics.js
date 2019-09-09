import React from 'react';
import {Text, View} from 'react-native';


class Analytics extends Component {

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
                <Text>Analytics</Text>
            </View>
        );
    }

}

const mapStateToProps = {};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(Analytics)