import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field';
import store from '../Service/storage'

import styles from '../styles/stylesUnderline';


const Underline  = () => {
  
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
      const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });

    store.save('messageId', value);

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        autoFocus={true}        
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (          
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>            
          </View>
        )}
      />
    </SafeAreaView>
  );
};



export default Underline