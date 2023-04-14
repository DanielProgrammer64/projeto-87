
import firebase from "firebase";
import { Alert
} from "react-native";

const appIcon = require("../assets/logo.png");

signIn = async (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            this.props.navigation.replace("Dashboard");
        })
        .catch(error => {
            Alert.alert(error.message);
        });
};