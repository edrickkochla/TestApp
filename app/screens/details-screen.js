import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image
} from 'react-native';
import Header from '../shared/components/header'

class DetailsScreen extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        launchDate: '',
        missionName: '',
        url: ''
        }
      }

  componentDidMount = () => {
    console.log("DetailsScreen props", this.props.route.params)
    this.setState({launchDate: this.props.route.params.launchDate, missionName: this.props.route.params.missionName, url: this.props.route.params.url})
      //this.props.navigation.setOptions({ title: 'Updated!' })
  }
  
  render(){
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'lightBlue'}}>
          <ScrollView style={{backgroundColor: 'lightblue'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View >
              <Image
                style={{height: 150, width: 150}}
                source={{uri: this.state.url}}
              />
            </View>
              <Text>
                {this.state.missionName}
              </Text>
              <Text style={{textAlign: 'center'}}>
                {this.state.launchDate}
              </Text>
            </View>
              </ScrollView>
        </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'lightblue'
}
})

export default DetailsScreen

