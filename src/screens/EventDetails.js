import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { getEventById } from '../api/eventsApi';
import MapView, { Marker } from 'react-native-maps';
import useFavorites from '../hooks/useFavorites';
import { LocaleContext } from "../context/LocateContext";

export default function EventDetails({ route, navigation }) {
  const { id } = route.params;
  const [event, setEvent] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { t } = useContext(LocaleContext);

  useEffect(() => {
    (async () => {
      try {
        const data = await getEventById(id);
        setEvent(data);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, [id]);

  if (!event) return <Text>{t("eventDetails.loading")}</Text>;

  const venue = event._embedded?.venues?.[0];
  const lat = Number(venue?.location?.latitude || 0);
  const lon = Number(venue?.location?.longitude || 0);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text>{t("eventDetails.profile")}</Text>
      </TouchableOpacity>

      <ScrollView style={{ padding: 12 }}>
        <Text style={styles.title}>{event.name}</Text>
        <Button
          title={
            isFavorite(event.id)
              ? t("eventDetails.remove_fav")
              : t("eventDetails.add_fav")
          }
          onPress={() => toggleFavorite(event.id)}
        />
        <Text style={{ marginTop: 12 }}>
          {event.info || event.description}
        </Text>
        {lat && lon ? (
          <MapView
            style={{ height: 250, marginTop: 12 }}
            initialRegion={{
              latitude: lat,
              longitude: lon,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={{ latitude: lat, longitude: lon }} />
          </MapView>
        ) : (
          <Button
            title={t("eventDetails.open_maps")}
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  venue?.name || event.name
                )}`
              )
            }
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: '700' },
  profileButton: {
    alignItems: 'flex-end',
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 24,
  },
});
