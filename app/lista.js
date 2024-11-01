import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.title}>Lista de tarefas</Text>
      </View>
      <View style={styles.conteudo}>
        <View style={styles.botao}>
            <View style={styles.texto}>
              <Text style={styles.entrega}>Entregar escopo</Text>
            </View>
            <View style={styles.verde}>
              <Image source={require("../assets/green.png")}/>
            </View>
            <View style={styles.lixeira}>
              <Image source={require("../assets/Remove.png")}/>
            </View>
        </View>
        <View style={styles.botao}>
            <View style={styles.texto}>
              <Text style={styles.entrega}>Entregar wireframe</Text>
            </View>
            <View style={styles.verde}>
              <Image source={require("../assets/green.png")}/>
            </View>
            <View style={styles.lixeira}>
              <Image source={require("../assets/Remove.png")}/>
            </View>
        </View>
        <View style={styles.botao}>
            <View style={styles.texto}>
              <Text style={styles.entrega}>Entregar layout</Text>
            </View>
            <View style={styles.verde}>
              <Image source={require("../assets/black.png")}/>
            </View>
            <View style={styles.lixeira}>
              <Image source={require("../assets/Remove.png")}/>
            </View>
        </View>
        <View style={styles.botao}>
            <View style={styles.texto}>
              <Text style={styles.entrega}>Entregar app</Text>
            </View>
            <View style={styles.verde}>
              <Image source={require("../assets/black.png")}/>
            </View>
            <View style={styles.lixeira}>
              <Image source={require("../assets/Remove.png")}/>
            </View>
        </View>
      </View>
      <View style={styles.rodape}>
        <Link href="/configuracao">
            <Image style={styles.icone} source={require("../assets/Sum.png")}/>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    height: 50,
    backgroundColor: '#001BC8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
  conteudo: {
    height: 720,
    display: 'flex',
    backgroundColor: '#515151',
    alignItems: 'center',
    
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },

  botao: {
    backgroundColor: 'white',
    marginTop: 30,
    height: 50,
    width: 350,
    alignItems: 'center',
    borderRadius: 30,
  },
  rodape: {
    backgroundColor: '#001BC8',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center,'
  },
  icone: {
    marginTop: 10,
  },
  entrega: {
    fontSize: 18,
    marginTop: 12,
    marginRight: 170,
  },
  verde: {
    marginTop: -25,
    marginLeft: 200,
  },
  lixeira: {
    marginTop: -30,
    marginLeft: 280,
  },
});
