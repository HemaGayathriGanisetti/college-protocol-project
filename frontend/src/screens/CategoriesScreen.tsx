import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { getAllCategories } from '../api/CategoriesApi';

export default function CategoriesScreen({ navigation }: any) {

  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log('Error loading categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (item: any) => {
    navigation.navigate('Rules', {
      categoryId: item.id,
      categoryName: item.name
    });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f0f0'
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});