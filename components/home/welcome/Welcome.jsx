import React, {useState} from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image  } from 'react-native'
import styles from "./welcome.style"
import {icons, SIZES} from "../../../constants"

const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance", "Internship  "]

const Welcome = ({searchTerm ,setSearchTerm, handleClick }) => {

  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full Time")
  return (
    <View>
     <View style={styles.container }>
      <Text style={styles.userName}>Heello John</Text>
      <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
     </View>

     <View style={styles.searchContainer  }>
       <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} 
          placeholder="Search for jobs" 
          value={searchTerm}
          onChangeText={(text)=>setSearchTerm(text)} />
         </ View>

      <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image 
           source={icons.search}
           resizeMode="contain"
           style={styles.searchBtnImage}
        />
      </TouchableOpacity>
     </View>
      
      <View style={styles.tabsContainer}>
        <FlatList
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
        keyExtractor={item=>item}
        data={jobTypes} 
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType, item)}
          onPress={()=>{setActiveJobType(item);
          router.push(`/search/${item}`)
          }}
          
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        
        />
      </View>
    </View>
  )
}

export default Welcome