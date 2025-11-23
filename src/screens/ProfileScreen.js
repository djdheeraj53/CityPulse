import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { LocaleContext } from '../context/LocateContext';

export default function ProfileScreen({ route }) {
  const { locale, switchLanguage, t } = useContext(LocaleContext);
  
  const user = route?.params?.user;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {t("profile.name")}: {user.name}
      </Text>
      <Text style={styles.label}>
        {t("profile.email")}: {user.email || 'demo@example.com'}
      </Text>

      <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.label}>{t("profile.arabic_toggle")}</Text>
        <Switch value={locale === 'ar'} onValueChange={switchLanguage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12 },
  label: { fontSize: 16, marginBottom: 8 }
});
