// app/index.js
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.title}>Lista de tarefas</Text>
      </View>
      <View style={styles.conteudo}>
        <Image style={styles.icone} source={require("../assets/Sum.png")}/>
        <View style={styles.botao}>
            <Text style={styles.tarefa}>Adicionar tarefa</Text>
            <TextInput style={styles.escreva} placeholder='Digite sua tarefa'></TextInput>
            <View style={styles.adicionar}>
                <Text style={styles.textad}>Adicionar</Text>
            </View>
        </View>
        <View style={styles.adicionados}>
            <Text style={styles.itens}>4 itens listados</Text>
            <Text style={styles.itens}>2 itens realizados</Text>
            <Text style={styles.itens}>2 itens não realizados</Text>
        </View>
      </View>
      <View style={styles.rodape}>
        <Link href="/lista">
            <Image style={styles.icone} source={require("../assets/Return.png")}/>
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
    backgroundColor: '#D9D9D9',
    marginTop: 20,
    height: 200,
    width: 350,
    alignItems: 'center',
  
    borderRadius: 20,
  },
  rodape: {
    backgroundColor: '#001BC8',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center,'
  },
  icone: {
    marginTop: 50,
    marginRight: 300,
  },
  adicionar: {
    backgroundColor: '#001BC8',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    marginTop: 40,
   },
   textad: {
    color: 'white',
   },
   tarefa: {
    fontSize: 20,
   },
   escreva: {
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    width: 200,
    height: 50,
    textAlign: 'center',
    borderRadius: 30,
    marginTop: 40,
   },
   adicionados: {
    marginRight: 130,
    marginTop: 30,
   },
   itens: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
   },
});
