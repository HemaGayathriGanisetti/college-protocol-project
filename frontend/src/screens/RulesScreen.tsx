 import React, { useEffect, useState } from 'react';
  import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'; 
  import { getAllRules } from '../api/rulesApi';
   type Rule = { id: number; 
    title: string;
     description: string; 
    category:
     { id: number;
       name: string; 
      }; 
    }; 
    type GroupedRule = 
    { category: string; 
      data: Rule[];

     };
 
 
 export default function RulesScreen({ navigation }: any) {
  const [groupedRules, setGroupedRules] = useState<GroupedRule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const groupByCategory = (rules: Rule[]) => {
    const map: Record<string, Rule[]> = {};

    rules.forEach((r) => {
      const categoryName = r.category?.name || "Unknown";

      if (!map[categoryName]) {
        map[categoryName] = [];
      }

      map[categoryName].push(r);
    });

    return Object.keys(map).map((key) => ({
      category: key,
      data: map[key],
    }));
  };

  const load = async () => {
    try {
      const data = await getAllRules();
      const grouped = groupByCategory(data || []);
      setGroupedRules(grouped);
    } catch (err) {
      console.log(err);
      setGroupedRules([]);
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
      <Text style={styles.title}>📜 Rules Categories</Text>

      <FlatList
        data={groupedRules}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('RuleDetailsScreen', {
                  categoryId: item.data[0].category.id,   // ✅ send ID
                  categoryName: item.category
              })
            }
          >
            {/* ✅ FIXED */}
            <Text style={styles.text}>{item.category}</Text>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}  


const styles = StyleSheet.create
({ 
  container:
   {
     flex: 1,
     backgroundColor: '#0f172a', 
    padding: 16 
  },
     title:
      { 
        color: '#fff',
         fontSize: 22, 
         fontWeight: 'bold',
          marginBottom: 15
         },
          card: 
          {
             backgroundColor: '#1e293b', 
             padding: 18, 
             marginBottom: 12,
              borderRadius: 12, 
              flexDirection: 'row',
               justifyContent: 'space-between',
               }, 
               text: 
               { 
                color: '#38bdf8',
                 fontSize: 16
                 }, 
                 arrow:
                  { 
                    color: '#fff',
                     fontSize: 20 
                    },
                     center:
                      { 
                        flex: 1, justifyContent: 'center', 
                        alignItems: 'center' 
                      }, });