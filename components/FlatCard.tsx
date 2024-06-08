import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cardOne, styles.card]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cardTwo, styles.card]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cardThree, styles.card]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cardFour, styles.card]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
}

// CSS stylings for the heading
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#',
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 8,
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: 100,
    height: 100,
    borderRadius: 5,
  },

  cardOne: {
    backgroundColor: '#EF5352',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  cardFour: {
    backgroundColor: 'yellow',
  },
});
