import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  err: {
    color: 'red',
    marginBottom: 10,
    textAlign:'center'
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
    marginBottom: height * 0.05,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },

  modalHead: {
    marginBottom: height * 0.02,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },

  // product page

  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40
  },

  productCol: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  productCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative'
  },

  price: {
    color: '#FEA51B',
    marginTop: 10,
    
  
  },
  cardName: {
    fontWeight: '400',
    fontSize: 16,
  },
  cardBtm: {
    display: 'flex',
    flexDirection: 'row',
  },

  cardDelete: {
    position: 'absolute',
    right: 10
  },
  modalDelBtm: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '10%',
    alignItems: 'center',
  },
  delModal: {
    paddingVertical:20,
  },

  delModalText: {
    textAlign: 'center',
  },
  textWhite: {
    color: '#fff',
    textAlign:'center',
  }
});
