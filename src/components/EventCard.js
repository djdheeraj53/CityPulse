import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import useFavorites from '../hooks/useFavorites';

export default function EventCard({ event, onPress }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const img = event.images?.[0]?.url || null;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {img ? <Image source={{ uri: img }} style={styles.image} /> : null}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>{event.dates?.start?.localDate}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(event)} style={styles.star}>
        <Text style={{ fontSize: 22 }}>{isFavorite(event.id) ? '★' : '☆'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 8, borderBottomWidth: 1, alignItems: 'center' },
  image: { width: 110, height: 70, borderRadius: 6, marginRight: 8 },
  title: { fontSize: 16, fontWeight: '600' },
  date: { color: '#666' },
  star: { padding: 8 }
});
