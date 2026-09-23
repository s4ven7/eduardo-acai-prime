
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.titleHeader}>Açaí Prime</Text>
          <Text style={styles.subTitleHeader}>Sabor puro da Amazônia</Text>
        </View>
        
          <Image style={styles.avatarIcone} source={require("./assets/imagemPerfil.jpg")}></Image>
        

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0ff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:'center'
  },
  titleHeader: {
    fontSize: 26,
    fontWeight:'800',
  },
  subTitleHeader:{
    color:'#9b9b9b',
    fontSize:16,
  },
  avatarIcone:{
    width: 44,
    height: 44,
    borderRadius: 22,

    borderColor:"#b700ffff",

    justifyContent: "center",
    alignItems: "center"
  },

  

});
