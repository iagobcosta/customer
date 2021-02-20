import {StyleSheet} from 'react-native';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({
  root: {padding: 20, minHeight: 300, alignItems:'center', justifyContent: 'center'},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 280,
   
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#52197F',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#52197F',
    borderBottomWidth: 2,
  },
  errorText:{
  },
});