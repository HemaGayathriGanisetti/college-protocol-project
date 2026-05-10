import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TimetableScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
          

      <Text style={styles.title}>📅 Timetable</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Monday - Java / DBMS</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Tuesday - React / Node</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Wednesday - Python / AI</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Thursday - OS / Networks</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Friday - Project Work</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0f172a',
  },
    backBtn: {
    marginBottom: 15,
  },

  backText: {
    color: '#38BDF8',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: '#e2e8f0',
    fontSize: 16,
  },
});