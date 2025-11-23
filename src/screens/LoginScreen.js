import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { LocaleContext } from '../context/LocateContext';
import { UserContext } from '../context/UserContext';
import { LOGIN_USERS } from '../mockData';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useContext(UserContext);

    const { t } = useContext(LocaleContext);

    const handleLogin = () => {
        if (!email || !password) {
            alert(t('login.invalid_credentials'));
            return;
        }

        const user = LOGIN_USERS.find(u => u.username === email && u.password === password);
        if (!user) {
            alert(t('login.invalid_credentials'));
            return;
        }

        loginUser(user);
        navigation.replace('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{t('login.welcome')}</Text>

            <TextInput
                style={styles.input}
                placeholder={t('login.username')}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder={t('login.password')}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>{t('login.login_btn')}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.linkText}>{t('login.create_account')}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
        padding: 14,
        marginBottom: 15,
        marginHorizontal: 20,
        fontSize: 16
    },
    button: {
        backgroundColor: '#007bff',
        padding: 14,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
    linkText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#007bff'
    }
});
