import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

const PlaceInput = props => {
  const [enterInput, setInput] = useState('');

  const inputHandler = enteredText => {
    setInput(enteredText);
  };

  const submitHandler = () => {
    props.onPlaceAdded(enterInput);
    setInput('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="An awesome place"
        value={enterInput}
        onChangeText={inputHandler}
        style={styles.placeInput}
      />
      <Button title="Add" style={styles.placeButton} onPress={submitHandler} />
    </View>
  );
};

const styles = EStylesheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

export default PlaceInput;
