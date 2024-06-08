import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCard />
          <ElevatedCard />
          <FancyCard />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
