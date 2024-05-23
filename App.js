import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import { Button } from '@rneui/themed';

const image = {uri: './img/ImagemNubank.jpg'}

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}>
      <ImageBackground source={image} rezideMode="cover" style={styles.imagem}></ImageBackground>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}>
      <Image source={{uri: './img/ImagemMenor1.png'}}
             style={styles.imagemMenor}
      />
      </View>
      
      <View style={{alignItems: 'center', 
       justifyContent: 'center',
       position: 'absolute', 
       marginTop: -670,
       marginLeft: 270}}>
        <Button 
            title="Brasil"
            buttonStyle={{backgroundColor: 'rgba(25, 31, 52, .2)', 
            borderBottomLeftRadius: 20, 
            borderBottomRightRadius: 20, 
            borderTopRightRadius: 20, 
            borderTopLeftRadius: 20,}}     
        />
      </View>

      <View>
        <Text style={{color: 'white', 
              fontSize: 31, 
              fontWeight: -20, 
              marginTop: 240, 
              marginLeft: 27}}>Um mundo{"\n"}financeiro sem complexidades</Text>
      </View>

      <View style={{alignItems: 'center',
       justifyContent: 'center',
      position: 'absolute'}}>
        <Button
           title="Começar"
           buttonStyle={{backgroundColor: 'rgba(133, 19, 165, 1)',
           borderBottomLeftRadius: 15,
           borderBottomRightRadius: 15,
           borderTopRightRadius: 15,
           borderTopLeftRadius: 15,
           width: 300,
          height: 53,
          marginTop: 500}}
        />
      </View>

      <View style={{alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'}}>
        <Button
           title="Entrar na minha conta"
           buttonStyle={{backgroundColor: 'rgba(133, 19, 165, 0)',
           marginTop: 640}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 412,
    height: 914,
  },
  imagemMenor: {
    width: 72,
    height: 36,
    marginTop: -650,
    marginRight: 270,
  }
});
