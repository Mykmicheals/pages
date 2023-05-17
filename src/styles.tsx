import { StyleSheet,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    btnBlue: {
       backgroundColor: '#FEA51B',
    paddingHorizontal: width * 0.05, 
    paddingVertical: height * 0.01, 
    borderRadius: width * 0.1,
    },

     modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for the backdrop
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    width: '80%', // Takes 80% of the screen width
    maxHeight: '80%', // Takes 80% of the screen height
    padding: 20,
      borderRadius: 10,
    },
    inputContainer: {
    marginBottom: 20,
    },
    
      input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
 