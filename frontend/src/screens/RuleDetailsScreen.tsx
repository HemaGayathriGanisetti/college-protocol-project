  import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getRulesByCategory } from '../api/rulesApi';

type Rule = {
  id: number;
  title: string;
  description: string;
  category: {
    id: number;
    name: string;
  };
};

export default function RuleDetailsScreen({ route }: any) {

 const { categoryId, categoryName } = route.params;

  const [rules, setRules] = useState<Rule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRules();
  }, []);

  const loadRules = async () => {
    try {
      // 🔥 API CALL BASED ON CATEGORY
      const data = await getRulesByCategory(categoryId);
      setRules(data || []);
    } catch (err) {
      console.log('Error loading rules:', err);
      setRules([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color="#38bdf8" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>📜 {categoryName} Rules</Text>

      <FlatList
        data={rules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.ruleTitle}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 16
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  ruleTitle: {
    color: '#38bdf8',
    fontSize: 16,
    fontWeight: 'bold'
  },
  desc: {
    color: '#cbd5e1',
    marginTop: 5
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});