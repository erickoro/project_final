import { Dimensions} from 'react-native';

const windowWidth = Dimensions.get("window").width;

export const stylesRegister = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: '#4B5320', // Green Army
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: '#FFFFFF', // White
  },
  formContainer: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: '#F0FFF0', // Honeydew
  },
  loginText: {
    marginTop: 20,
    color: '#FFFFFF', // White
  },
  loginLink: {
    color: '#00FF00', // Lime
    textDecorationLine: "underline",
  },
  button: {
    borderRadius: 25,
    overflow: 'hidden', // Untuk memastikan gradient tetap di dalam batas border radius
    // alignItems: "center",
    // marginTop: 20,
    // top: '25%',
  },
  gradient: {
    // width: 200,
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
