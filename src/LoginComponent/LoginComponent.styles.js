import { Dimensions} from 'react-native';

const windowWidth = Dimensions.get("window").width;

export const stylesLogin = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: '#4B5320', // Green Army
  },
  label: {
    marginBottom: 5,
    color: '#FFFFFF', // White
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F0FFF0', // Honeydew
    color: '#000000', // Black
    borderRadius: 5,
  },
  registerText: {
    marginTop: 20,
    color: '#FFFFFF', // White
  },
  registerLink: {
    color: '#00FF00', // Lime
    textDecorationLine: "underline",
  },
  button: {
    borderRadius: 25,
    overflow: 'hidden', // Untuk memastikan gradient tetap di dalam batas border radius
    // marginTop: 20,
    // top: '25%',
  },
  gradient: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  imageSize: {
    width: 200,
    height: 200,
    marginBottom: '20%',
  },
};
