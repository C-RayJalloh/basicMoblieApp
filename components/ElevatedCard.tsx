import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.cardElevated, styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardElevated, styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardElevated, styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardElevated, styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardElevated, styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardElevated, styles.card]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cardElevated, styles.card]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#fff',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 5,
  },
  cardElevated: {
    backgroundColor: '#06af9b',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
