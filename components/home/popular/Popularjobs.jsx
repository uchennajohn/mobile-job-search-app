import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useRouter  } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES  } from '../../../constants'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import { isLoading } from 'expo-font'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {

  const router = useRouter()
  // const isLoading = false
  // const error = false 
  const {data,isLoading, error} = useFetch
  ('search',{
    query:"React Developer",
    num_pages: 1 
  })

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>

     <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text> 
        <TouchableOpacity> 
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
     </View>

      <View style={styles.cardsContainer}> 
      { isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} /> 
      ): error ? (
        <Text>Something Went Wrong</Text>
      ) :(
        <FlatList 
        data={data}
        renderItem={({item})=>(
          <PopularJobCard
          selectedJob={selectedJob}
          handleCardPress={handleCardPress}
          item={item}
          />
        )}
        keyExtractor={item=>item ?.job_id}
        contentContainerStyle={{columnGap: SIZES.medium}}
        horizontal
        />
      )}
      </View>
    </View>
  )
}

export default Popularjobs