import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* the Flat cards */}
        <View>
          <FlatCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
