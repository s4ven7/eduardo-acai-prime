
import { Feather } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AcaiCards from './components/AcaiCards';

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

      <View style={styles.outdoor}>
        <Text style={styles.outdoorTitulo}>Refresque seu dia!</Text>
        <Text style={styles.outdoorSubTitulo}>Escolha seu açaí favorito hoje</Text>
      </View>

      <View style={styles.cardAnuncio}>
        <Image style={styles.imgAnuncio} source={require("./assets/imagem_acai_turbinado.jpg")}></Image>

        <View style={styles.infoAnuncio}>
          <Text style={styles.titleAnuncio}>Açaí Turbinado 500ml</Text>
          <Text style={styles.statusAnuncio}>MAIS PEDIDO</Text>
        </View>

        <Text style={styles.descricaoAnuncio}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>

        <View style={styles.infoAnuncio}>

          <Text style={styles.precoAnuncio}>R$ 22,90</Text>

          <TouchableOpacity style={styles.botaoadicionar}>
            <Feather name="shopping-bag" size={24} color="#ffffff" />
            <Text style={styles.textoBotaoAnuncio}> Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.tituloCardapio}>Nossos Copos & Tigelas</Text>

      <View style={styles.cardapiosectio}>
        <AcaiCards
          imagemURL={require('./assets/tradicional.jpg')}
          nome='Açaí Tradicional'
          descricao='Açaí cremoso com banana e granola tradicional'
          preco='R$ 14,00'
        />
        <AcaiCards
          imagemURL={require('./assets/copo.jpg')}
          nome='Açaí Tradicional'
          descricao='Camadas de açaí, morango, kiwi e leite em pó'
          preco='R$ 18,50'
        />
        <AcaiCards
          imagemURL={require('./assets/vitamina.jpg')}
          nome='Vitamina de Açaí'
          descricao='Bebida energética batida com guaraná e aveia'
          preco='R$ 12,00'
        />
        <AcaiCards
          imagemURL={require('./assets/fit.jpg')}
          nome='Açaí Fit Zero'
          descricao='Zero adição de açúcar, com chia e castanhas'
          preco='R$ 16,90'
        />

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
    alignItems: 'center'
  },
  titleHeader: {
    fontSize: 26,
    fontWeight: '800',
  },
  subTitleHeader: {
    color: '#644D6A',
    fontSize: 16,
  },
  avatarIcone: {
    width: 46,
    height: 46,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#7B1FA2",
    justifyContent: "center",
    alignItems: "center"
  },
  outdoor: {
    marginVertical: 15,
  },
  outdoorTitulo: {
    fontSize: 35,
    fontWeight: "800",
  },
  outdoorSubTitulo: {
    fontSize: 16,
    color: '#644D6A',
  },
  cardAnuncio: {
    backgroundColor: "#ffffffff",
    width: "100%",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    elevation: 3,
    marginBottom: 20,
  },
  imgAnuncio: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    elevation: 3,
  },
  infoAnuncio: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleAnuncio: {
    fontSize: 19,
    fontWeight: "800"
  },
  statusAnuncio: {
    backgroundColor: "#F3E5F5",
    color: "#7B1FA2",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontWeight: '700',
  },
  descricaoAnuncio: {
    fontSize: 13,
    fontWeight: "400",
    color: '#644D6A',
    marginTop: 5,
    marginBottom: 16
  },
  botaoadicionar: {
    backgroundColor: '#7B1FA2',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    elevation: 3,
  },
  textoBotaoAnuncio: {
    color: "#ffffffff",
    fontWeight: "700"
  },
  precoAnuncio: {
    fontSize: 25,
    fontWeight: "800",
    color: "#7B1FA2",
  },
  tituloCardapio: {
    fontWeight: "800",
    fontSize: 18,
  },
  cardapiosectio:{
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  }

});
