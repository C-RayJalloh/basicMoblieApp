import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* the Flat cards div/ container */}
        <View>
          <FlatCard />
          <ElevatedCard />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
