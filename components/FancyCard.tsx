/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ElevatedCard from './ElevatedCard';

// with images and texts
export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card, styles.ElevatedCard]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1696549999348-71ec08f04cc1?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.Title}>Freetown</Text>
          <Text style={styles.Label}>Sierra Leone</Text>
          <Text style={styles.Desc}>
            sfjildaofjirbf baonfdjhfigafo jbdiohfe fiewfuuewio hdbaofeu8fohu
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  card: {},
  ElevatedCard: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  Title: {},
  Label: {},
  Desc: {},
});
