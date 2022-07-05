

import React, { useState }  from 'react';
import type {Node} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
  const [value , addVal] = useState(0);
  const [timesClicked , updateTimesClicked ] = useState(0);
  const [oddOrEven , updateOddOrEven] = useState(true);
  const onclickHandler = () =>{
    addVal(value + 5);
    updateTimesClicked(timesClicked + 1);
    updateOddOrEven(timesClicked % 2 == 0);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{value}</Text>
      <AppButton title="add" onPress={onclickHandler}></AppButton>
      <Text style={styles.text}>you clicked {timesClicked} times</Text>
      <Text style={styles.text}>that's {oddOrEven ? 'Odd' : 'Even'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#98dff5',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 10,
    borderColor: '#d18119',
    margin: 10,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  },
  appButtonContainer: {
    width: '40%',
    backgroundColor: '#009688',
    borderRadius: 10,
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'center'
  }
});

const AppButton = ({onPress , title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default App;
