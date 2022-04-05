import { StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

import { Text, View } from '../components/Themed'
import { RootState } from '../modules'
import { RootStackScreenProps } from '../types'

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  const code = useSelector((state: RootState) => state.StatusCodeReducer.code)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
