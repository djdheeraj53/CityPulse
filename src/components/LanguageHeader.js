import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  I18nManager,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { LocaleContext } from "../context/LocateContext";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LanguageHeader() {
  const { locale, switchLanguage } = useContext(LocaleContext);
  const navigation = useNavigation();
  const route = useRoute();

  const hideBackButtonScreens = ["Login", "Splash", "Home"];
  const showBack = !hideBackButtonScreens.includes(route.name);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {showBack ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>
              {I18nManager.isRTL ? "→" : "←"} Back
            </Text>
          </TouchableOpacity>
        ) : <View style={styles.backButtonPlaceholder} /> }
        <TouchableOpacity onPress={switchLanguage} style={styles.button}>
          <Text style={styles.btnText}>
            {locale === "en" ? "Change to AR" : "Change to EN"}
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#eee",
  },
  header: {
    width: "100%",
    padding: 12,
    backgroundColor: "#eee",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    backgroundColor: "#ddd",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  backButtonPlaceholder: {
    width: 70,
  },
  backText: {
    fontSize: 14,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
  },
});
