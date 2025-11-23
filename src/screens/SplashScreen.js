// src/screens/SplashScreen.js
import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LocaleContext } from "../context/LocateContext";

export default function SplashScreen({ navigation }) {
  const { t } = useContext(LocaleContext);

  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Login'), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("splash.title")}</Text>
      <Text style={styles.subtitle}>{t("splash.subtitle")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 34, fontWeight: '700' },
  subtitle: { marginTop: 8, color: '#666' }
});
