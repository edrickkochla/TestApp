import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView, 
  TouchableOpacity,
  Image
} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'ed',
      surname: '',
      list: null
      }
    }

  componentDidMount = () => {
    this.getDataFromApi().then((list) => {
      this.setState({list: list})
      console.log("List: ", list)
    })
  }

  getDataFromApi = () => {
    return fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  navigateToDetails = () => {
    
  }

  renderList = () => {
    return this.state.list.map((item, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('Details', {
          url: item.links.mission_patch_small,
          missionName: item.mission_name,
          launchDate: item.launch_date_utc
      })}>
        <View style={{flexDirection: 'row'}}>
            <View >
              <Image
                style={{flex: 1, height: 100, width: 100}}
                source={{uri: item.links.mission_patch_small}}
              />
            </View>
            <View style={{flexDirection: 'column'}}>
            <Text>
              {item.mission_name}
            </Text>
            <Text>
              {item.launch_date_utc}
            </Text>
            </View>
          
        </View>
          
        </TouchableOpacity>
      )
    })

  }

  render(){
    if (!this.state.list){
      return (
        <View>
          <Text>
            Loading
          </Text>
        </View>
      )
    }
      return (
          <SafeAreaView style={[styles.container, { backgroundColor: 'lightblue' }]}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <View>
              {this.renderList()}
            </View>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details', {
                  itemId: 867,
                  otherParam: 'other props'
              })}
            />
          </View>
          </SafeAreaView>
        );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})


export default HomeScreen