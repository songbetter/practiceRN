import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { RootStackScreenProps } from '../types'

export default function SignUp({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/icon.png')}
        // source={{ uri: 'https://' }}
        style={{ width: 40, height: 40 }}
      />
      <Text style={styles.title}>회원가입</Text>
      {['name', 'mobile', 'password'].map((item) => (
        <TextInput placeholder={`write your ${item}`} key={item} />
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('NotFound')}
      >
        <Text>Go To NotFound Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
})
