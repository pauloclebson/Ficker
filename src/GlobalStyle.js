import { StyleSheet }from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#FFF",
    },
    textLogo:{
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#FF4040',
    },
    textLogo01:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FF4040',
      },
    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#8B2323',
        margin: 10,
    },
    formInput: {
        borderColor: '#FF4040',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
    },
    formButton: {
        backgroundColor: '#FF4040',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        color: 'white',
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    subButton: {
        padding: 10,
    },
    subTextButton: {
        color: '#FF4040',
    }
  });