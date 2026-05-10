 import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/auth';
import { registerUser } from '../api/auth';
import { Roles } from '../constants/roles';

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

   const handleSubmit = async () => {
  setError('');

  const isInvalid =
    isRegister
      ? !name || !email || !password
      : !email || !password;

  if (isInvalid) {
    setError('Enter all fields');
    return;
  }

  try {
    setLoading(true);

    if (isRegister) {
      const res = await registerUser(name, email, password);
      Alert.alert('Success', res || 'Registered successfully');
      setIsRegister(false);
      return;
    }

    const res = await loginUser(email, password);
    const token = res?.token || res?.data?.token;
    const role = res?.user?.role;

    if (!token) throw new Error('Token missing');

    await login({
      accessToken: token,
      user: res?.user,
    });

    if (role === Roles.ADMIN) {
      navigation.replace('AdminDashboard');
    } else {
      navigation.replace('Home');
    }

  } catch (err: any) {
    setError(err.message || 'Something went wrong');
  } finally {
    setLoading(false);
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          {isRegister ? 'Register' : 'Login'}
        </Text>

        <Text style={styles.subtitle}>
          {isRegister
            ? 'Create your account'
            : 'Welcome back! Please login'}
        </Text>
      

        {/* Email */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#94a3b8"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#94a3b8"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Error */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Button */}
        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.btnText}>
              {isRegister ? 'Register' : 'Login'}
            </Text>
          )}
        </TouchableOpacity>

        {/* Toggle */}
        <TouchableOpacity
          onPress={() => {
            setIsRegister(!isRegister);
            setError('');
          }}
        >
          <Text style={styles.toggle}>
            {isRegister
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  toggle: {
    marginTop: 15,
    textAlign: 'center',
    color: '#38bdf8',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});