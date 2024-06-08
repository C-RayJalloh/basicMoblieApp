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
          <Text style={styles.Footer}>12 July 2024</Text>
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

  card: {
    marginVertical: 12,
    marginHorizontal: 16,
    width: 350,
    height: 350,
    margin: 8,
    borderRadius: 6,
  },
  ElevatedCard: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  Title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  Label: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  Desc: {
    color: '#000000',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  Footer: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
});
