import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { EVENT_LIST } from '../mockData';
import useFavorites from '../hooks/useFavorites';
import { LocaleContext } from "../context/LocateContext";

export default function HomeScreen({ navigation }) {
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(EVENT_LIST);
  const [visibleCount, setVisibleCount] = useState(10);

  const { favorites, toggleFavorite } = useFavorites();
  const { t } = useContext(LocaleContext);

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    filterEvents();
  }, [keyword, city, showFavoritesOnly, favorites]);

  const filterEvents = () => {
    let results = EVENT_LIST;

    if (showFavoritesOnly) {
      results = results.filter((e) => favorites.includes(e.id));
    }

    if (keyword.trim() !== '') {
      results = results.filter((e) =>
        e.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (city.trim() !== '') {
      results = results.filter((e) =>
        e.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    setFilteredEvents(results);
    setVisibleCount(10);
  };

  const loadMore = () => {
    if (visibleCount < filteredEvents.length) {
      setVisibleCount((prev) => prev + 10);
    }
  };

  const clearFilters = () => {
    setKeyword('');
    setCity('');
    setShowFavoritesOnly(false);
    setFilteredEvents(EVENT_LIST);
    setVisibleCount(10);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={t("home.search_placeholder")}
        value={keyword}
        onChangeText={setKeyword}
        style={styles.input}
      />
      <TextInput
        placeholder={t("home.city_placeholder")}
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => setShowFavoritesOnly((prev) => !prev)}
        style={styles.favToggle}
      >
        <Text style={{ fontSize: 16 }}>
          {showFavoritesOnly
            ? `⭐ ${t("home.showing_fav")}`
            : `☆ ${t("home.show_fav")}`}
        </Text>
      </TouchableOpacity>
      {(keyword || city || showFavoritesOnly) && (
        <TouchableOpacity onPress={clearFilters} style={styles.clearBtn}>
          <Text style={styles.clearText}>{t("home.clear")}</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={filteredEvents.slice(0, visibleCount)}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListEmptyComponent={
          <Text style={{ marginTop: 20 }}>{t("home.no_events")}</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() =>
                navigation.navigate('EventDetails', { id: item.id })
              }
            >
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.city}>{item.city}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Text style={styles.star}>
                {favorites.includes(item.id) ? '⭐' : '☆'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  favToggle: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  clearBtn: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  clearText: {
    color: 'blue',
    fontSize: 14,
  },
  card: {
    padding: 12,
    backgroundColor: '#f4f4f4',
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  city: { marginTop: 4, color: '#555' },
  star: { fontSize: 28, paddingHorizontal: 10 },
});
