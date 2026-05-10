  import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/type';

type SearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: { navigation: SearchScreenNavigationProp }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  // 🔍 Dummy data (replace with your real data)
  const allData = [
    { id: 1, title: 'Dress Code', type: 'rule' },
    { id: 2, title: 'Physics Lab Safety', type: 'lab' },
    { id: 3, title: 'Java Class', type: 'timetable' },
  ];

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const handleSearch = (text: string) => {
    setQuery(text);

    if (!text.trim()) {
      setResults([]);
      return;
    }

    const filtered = allData.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );

    setResults(filtered);
  };

  const handlePress = (item: any) => {
    if (item.type === 'rule') {
      navigation.navigate('RuleDetails', { rule: item });
    } else if (item.type === 'lab') {
      navigation.navigate('LabDetails', { lab: item });
    } else if (item.type === 'timetable') {
      navigation.navigate('Timetable', { data: item });
    }
  };

  // 🔥 Sticky Search Bar
  const renderHeader = () => (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search rules, labs, timetable..."
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />
    </View>
  );

  return (
    <FlatList
      data={results}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
      stickyHeaderIndices={[0]} // 🔥 THIS MAKES IT STICKY
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.type}>{item.type}</Text>
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <Text style={styles.noResult}>No Results Found</Text>
      }
    />
  );
}

 const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  card: {
    padding: 15,
    backgroundColor: '#1e293b',
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  type: {
    color: '#38bdf8',
    marginTop: 5,
  },
  noResult: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});