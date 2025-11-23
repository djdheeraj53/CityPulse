import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { LocaleContext } from '../context/LocateContext';
import { LOGIN_USERS } from '../mockData';

export default function SignupScreen({ navigation }) {
  const { t } = useContext(LocaleContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doSignup = () => {
    if (!username || !password) {
      return Alert.alert(t('signup.empty_fields'));
    }

    const exists = LOGIN_USERS.find(u => u.username === username);
    if (exists) {
      return Alert.alert(t('signup.username_exists'));
    }

    LOGIN_USERS.push({ username, password, name: username });

    Alert.alert(
      t('signup.title'), 
      t('signup.signup_success') || 'Account created successfully', 
      [
        {
          text: 'OK',
          onPress: () => navigation.replace('Login')
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={t('signup.username')}
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder={t('signup.password')}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title={t('signup.signup_btn')} onPress={doSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  input: { borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 6 },
});
