//general style
import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
     <Image style={styles.logo}
        source={require('../../assets/images/vli-b.png')}
      />
      <Image style={styles.imgRight}
        source={require('../../assets/images/pdd-digital-b.png')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20
  },
  logo: {
    width: 52,
    height: 26,
  },
  imgRight:{
    width: 52,
    height: 26,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:0,
    paddingTop:40,
    padding:20,
    textAlign: 'center',
    backgroundColor : '#3777BC',
    flexDirection: 'row'
  },
});
  
export default Header