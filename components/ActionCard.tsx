/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  /* simple method to open a website link */
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 20 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1696549999348-71ec08f04cc1?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            libero voluptatem veniam quisquam quidem accusantium, dolores
            voluptatibus voluptatum architecto doloremque obcaecati aspernatur
            impedit tenetur, eaque aliquid! At temporibus fugiat adipisci.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.Links}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.facebook.com')}>
            <Text style={styles.Links}>Facebook</Text>
          </TouchableOpacity>
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
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#12aca4',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 180,
  },
  cardBody: {
    padding: 10,
  },
  footer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Links: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#0a51c4d6',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
