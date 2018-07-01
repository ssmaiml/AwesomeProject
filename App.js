import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  PixelRatio,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
 } from 'react-native';


var color_light_gray = '#ececec';
var color_blue = '#2198F2';
var color_white = '#ffffff'
var color_dark_gray = '#666666'
var color_light_black = '#444444'

var scale = 1/2;

class FlexBoxItem extends Component {
  render() {
    return (
      // <View style = {styles.card}>
      //   <Text style = {styles.cardTitle}>{this.props.title}</Text>
        <View style = {styles.cardFlexBox}>
          <View style = {styles.cardFlexBoxItem}>
          <Text style = {styles.cardFlexBoxTitle}>{"PHP"}</Text>
          <Text style = {styles.cardFlexBoxContent}>{this.props.data.php}</Text>
          </View>
          <View style = {styles.cardFlexBoxItem}>
          <Text style = {styles.cardFlexBoxTitle}>{"Android"}</Text>
          <Text style = {styles.cardFlexBoxContent}>{this.props.data.android}</Text>
          </View>
          <View style = {styles.cardFlexBoxItem}>
          <Text style = {styles.cardFlexBoxTitle}>{"IOS"}</Text>
          <Text style = {styles.cardFlexBoxContent}>{this.props.data.ios}</Text>
          </View>
        </View>
      // </View>
    );
  }
}
class ImageItem extends Component {
  render() {
    return (
      // <View style = {styles.card}>
      //   <Text style = {styles.cardTitle}>{this.props.title}</Text>
        <View flexDirection = "row" style = {{alignItems:'center'}}>
          <Image source = {{uri:this.props.data.imgUrl}} style = {styles.cardImage}/>
          <Text style = {styles.cardText}>{this.props.data.content}</Text>
        </View>
      // </View>
    );
  }
}

class Card extends Component{
  render(){
    return (
      <View style = {styles.card}>
        <Text style = {styles.cardTitle}>{this.props.title}</Text>
        {this.props.children}
      </View>
    );
  }
}

export default class UserInfo extends Component {

  constructor(props){
    super(props);
    var data = {
      userName:"Tinker",
      gender:"female",
      description:"三年Android从业经历",
      profilePhotoUrl:"profile",
      info:{
        techLevel:{
          php:"高级",
          android:"零基础",
          ios:"入门",
        },
        techStar:{
          php:"268",
          android:"8",
          ios:"1",
        },
        eduExp:{
          content:"中华女子学院·计算机科学",
          imgUrl:"school",
        },
        address:{
          content:"北京",
          imgUrl:"beijing",
        },
      },
    };
    this.state=data;
  }

  render() {
    return (
      <View style = {styles.background}>
        <View style = {styles.navbar}>
            <Image source = {{uri:"back"}}
            style = {styles.backButton}/>
            <Text style = {styles.navbarTitle}>{this.state.userName}</Text>
            <Image source = {{uri:"pencil"}} 
              style = {[styles.navbarButton,{right:px2dp(100),}]}/>
            <Image source = {{uri:"share"}} 
              style = {[styles.navbarButton,{right:px2dp(30),}]}/>
        </View>
        <View style = {styles.navbarContent}>
            <ImageBackground source = {{uri:this.state.profilePhotoUrl}} style = {styles.profilePhoto}>
              <Image source = {{uri:this.state.gender==="male"?"male":"female"}}
                style = {styles.genderPhoto}/>
            </ImageBackground>
            <Text style = {styles.description}>{this.state.description}</Text>
        </View>
          <ScrollView style = {styles.content}>
            {/* <FlexBoxItem title = "认证技术级别"
              data = {this.state.info.techLevel}/>
            <FlexBoxItem title = "奇迹技术星"
              data = {this.state.info.techStar}/>
            <ImageItem title = "教育经历" 
              content = {this.state.info.eduExp.content}
              imgUrl = {this.state.info.eduExp.imgUrl}/>
            <ImageItem title = "居住地" 
              content = {this.state.info.address.content}
              imgUrl = {this.state.info.address.imgUrl}/> */}
            <Card title = "认证技术级别">
              <FlexBoxItem data = {this.state.info.techLevel}/>
            </Card>
            <Card title = "奇迹技术星">
              <FlexBoxItem data = {this.state.info.techStar}/>
            </Card>
            <Card title = "教育经历">
              <ImageItem data = {this.state.info.eduExp}/>
            </Card>
            <Card title = "居住地">
              <ImageItem data = {this.state.info.address}/>
            </Card>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    flexDirection:'column',
    backgroundColor:color_light_gray,
  },
  navbar:{
    flexDirection:'row',
    height:px2dp(100),
    alignItems: 'center',
    backgroundColor:color_blue,
  },
  backButton:{
    width:px2dp(23),
    height:px2dp(37),
    marginLeft:px2dp(40),
    marginRight:px2dp(40),
  },
  navbarTitle:{
    color : color_white,
    fontSize:px2dp(36),
  },
  navbarButton:{
    width:px2dp(40),
    height:px2dp(40),
    position:'absolute',
  },
  navbarContent:{
    flexDirection:'column',
    backgroundColor:color_blue,
    alignItems: 'center',
  },
  profilePhoto:{
    margin:px2dp(30),
    width:px2dp(150),
    height:px2dp(150),
  },
  genderPhoto:{
    position:'absolute',
    width:px2dp(40),
    height:px2dp(40),
    right:px2dp(10),
    bottom:px2dp(-10),
  },
  description:{
    color:color_white,
    fontSize:px2dp(30),
    marginBottom:px2dp(50),
  },
  content:{
    marginTop:px2dp(20),
    marginBottom:px2dp(20),
  },
  card:{
    marginBottom:px2dp(20),
    backgroundColor:color_white,
    paddingTop:px2dp(40),
    paddingBottom:px2dp(40),
  },
  cardTitle:{
    marginLeft:px2dp(30),
    marginBottom:px2dp(30),
    fontSize:px2dp(28),
    color:color_dark_gray,
  },
  cardFlexBox:{
    flex:1,
    flexDirection:'row',
  },
  cardFlexBoxItem:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  cardFlexBoxTitle:{
    color:color_dark_gray,
    fontSize:px2dp(30),
    marginBottom:px2dp(30),
  },
  cardFlexBoxContent:{
    color:color_light_black,
    fontSize:px2dp(30),
  },
  cardImage:{
    marginLeft:px2dp(30),
    width:px2dp(60),
    height:px2dp(60),
  },
  cardText:{
    marginLeft:px2dp(30),
    fontSize:px2dp(30),
    color:color_light_black,
  },
});

function px2dp(x){
  return x*scale;
}