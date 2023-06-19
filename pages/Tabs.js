import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState('Mpesa');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Mpesa' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Mpesa')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'Mpesa' && styles.activeTabButtonText,
            ]}
          >
            Mpesa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Ecocash' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Ecocash')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'Ecocash' && styles.activeTabButtonText,
            ]}
          >
            Ecocash
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>
        {activeTab === 'Mpesa' && (
          <Text style={styles.tabContentText}>Mpesa content goes here</Text>
        )}
        {activeTab === 'Ecocash' && (
          <><Text style={styles.tabContentText}>Ecocash content goes here</Text>
          <Image
            source={{ uri: 'https://www.rocapply.com/assets/UNIVERSITY/Kalinga-University/botho-uni-lesotho.png' }}
          style={{ width: 340, height: 300 }}></Image></>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,

  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  activeTabButton: {
    borderBottomColor: 'blue',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabButtonText: {
    color: 'blue',
  },
  tabContent: {
    paddingHorizontal: 20,
  },
  tabContentText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
