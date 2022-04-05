import { useEffect } from 'react'
import { Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Text, View } from '../components/Themed'
import { RootState } from '../modules'
import { resetItem, setItem } from '../modules/SelectReducer'
import { RootTabScreenProps } from '../types'

const CAT: any = {
  빨:
    'https://imgnn.seoul.co.kr/img/upload/2021/11/14/SSI_20211114184347_V.jpg',
  주:
    'https://newsimg-hams.hankookilbo.com/2021/11/09/15423494-2006-403b-a665-6969a7b1aaa1.jpg',
  초:
    'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_302/104_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg',
  노:
    'https://img.etoday.co.kr/pto_db/2018/01/20180118112232_1176966_600_447.jpg',
}
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const dispatch = useDispatch()

  useEffect(() => {
    return function cleanup() {
      dispatch(resetItem())
    }
  }, [])

  const select = useSelector((state: RootState) => state.SelectReducer)
  return (
    <View style={styles.container}>
      {select.color ? (
        <>
          <Text style={styles.title}>당신과 어울리는 고양이는?</Text>
          <Image
            source={{
              uri: CAT[select.color],
            }}
            style={{ width: 300, height: 300 }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(dispatch(resetItem()))}
          >
            <Text style={styles.content}>다시 해보기</Text>
          </TouchableOpacity>
        </>
      ) : select.gender !== '' && select.mood !== '' ? (
        <Content
          title="좋아하는 색깔을 선택하세요"
          contents={['빨', '주', '노', '초']}
          value="color"
        />
      ) : select.gender !== '' ? (
        <Content
          title="분위기를 선택하세요"
          contents={['차분함', '우아함', '산만함', '시끄러움']}
          value="mood"
        />
      ) : (
        <Content
          title="성별을 선택하세요"
          contents={['남', '여']}
          value="gender"
        />
      )}
    </View>
  )
}

function Content({
  title,
  contents,
  value,
}: {
  title: string
  contents: Array<any>
  value: string
}) {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => dispatch(resetItem())}>
        {title}
      </Text>
      {contents.map((content, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.button}
          onPress={() => dispatch(setItem({ [value]: content }))}
        >
          <Text style={styles.content}>{content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginHorizontal: '1%',
    margin: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  content: {
    fontSize: 30,
    textAlign: 'center',
  },
})
