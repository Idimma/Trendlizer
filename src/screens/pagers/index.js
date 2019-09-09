import React, {Component} from 'react';
import {AsyncStorage, View} from 'react-native';
// import { connect } from "react-redux";
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import {Spinner} from 'native-base';
import {Colors} from '../../utils/Colors';
import {NavigationActions} from 'react-navigation';
import {Page} from './Page';
import {APP_DB,} from '../../utils/helper';
import {connect} from "react-redux";
import {setUserDetails} from "../../store/modules/auth";


const storingValue = {isLoggedIn: false, firstTimeUser: false, id: '', name: '', email: '', token: ''};
const pageDetails = [
    {
        title: 'Hashtag Tracking',
        message: 'Track all posts containing specific hashtags and keywords in real-time.',
        image: require('../../../assets/images/hashtags.png')
    },
    {
        title: 'Sentiment View',
        message: 'Ascertain current mood of trends on twitter, before posting your tweet',
        image: require('../../../assets/images/emoigms.png')
    },
    {
        title: 'Data Analysis',
        message: 'Access data dating to the first post made with your hashtag or keyword.',
        image: require('../../../assets/images/analytics.png')
    },
];

class Pager extends Component {

    state = {
        index: 0,
        skip: 'Skip',
        next: 'Next'
    };


    static navigationOptions = ({navigation}) => ({
        header: null
    });

    constructor(props) {
        super(props);
        this.skipPage = this.skipPage.bind(this);
        // this.done = this.done.bind(this);
        this.next = this.next.bind(this);
        this.mounted = false
    }

    componentWillMount() {

    }

    async componentDidMount() {
        this.mounted = true;
        this.mounted && await AsyncStorage.getItem(APP_DB).then((value) => {
            if (value) {
                const data = JSON.parse(value);
                if (data.isLoggedIn === true) {

                    this.props.setUserDetails(data, this.props.navigation);
                } else if (!data.firstTimeUser) {
                    const navigateAction = NavigationActions.navigate({
                        routeName: 'Login',
                    });
                    this.props.navigation.dispatch(navigateAction);
                } else {
                }
                this.setState({done: true})
            }
            this.setState({done: true})
        }).catch((error) => {
            this.setState({done: true});
            console.log(error)
        })
    }

    componentWillUnmount() {
        this.mounted = false
    }

    skipPage() {

        AsyncStorage.setItem(APP_DB, JSON.stringify(storingValue));
        this.props.navigation.replace("Registration");
    }

    next() {
        if (this.state.index === 2) {

            AsyncStorage.setItem(APP_DB, JSON.stringify(storingValue));
            this.props.navigation.replace("Registration");
            return
        }
        this.setState({index: this.state.index + 1},
            () => {
                this.viewpager.setPage(this.state.index);
            })

    }


    render() {
        const {replace} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                {
                    this.state.done ? <IndicatorViewPager
                            style={{flex: 1, backgroundColor: Colors.PRIMARY_BG}}
                            indicator={Pager._renderDotIndicator()}
                            initialPage={0}
                            ref={(viewpager) => {
                                this.viewpager = viewpager
                            }}
                            onPageScroll={(params) => this.setState({index: params.position})}>
                            {
                                pageDetails.map(({title, message, image}, index) =>
                                    <Page
                                        key={index}
                                        title={title}
                                        message={message}
                                        index={index}
                                        image={image}
                                        next={this.next}
                                        skipPage={this.skipPage}/>
                                )
                            }
                        </IndicatorViewPager>
                        :
                        <View style={{justifyContent: 'center', alignContent: "center", flex: 1}}>
                            <Spinner color={Colors.PRIMARY} size="large"/>
                        </View>

                }
            </View>
        );
    }

    static _renderDotIndicator() {
        return <PagerDotIndicator
            dotStyle={{marginBottom: (40), width: 9, height: 9, borderRadius: 9, bottom: 0}}
            selectedDotStyle={{
                backgroundColor: Colors.SECONDARY,
                marginBottom: 40, width: 9, height: 9, borderRadius: 9, bottom: 0
            }}
            pageCount={3}/>;
    }

}


const mapActionCreators = {
    setUserDetails
};
export default connect(null, mapActionCreators)(Pager)
