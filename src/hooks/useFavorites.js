import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'FAVORITE_EVENTS';

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setFavorites(JSON.parse(data));
      } else {
        setFavorites([]);
      }
    } catch (e) {
      console.warn('Failed to load favorites', e);
      setFavorites([]);
    }
  };

  const saveFavorites = async (list) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Failed to save favorites', e);
    }
  };

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];

    setFavorites(updated);
    saveFavorites(updated);
  };

  // ⭐ FIX: Add this
  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
