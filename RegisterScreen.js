import firebase from "firebase";
import {
Alert,
} from "react-native";
const appIcon = require("../assets/logo.png");


registerUser = (email, password, confirmPassword, first_name, last_name) => {
    if (password == confirmPassword) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                Alert.alert("Usuário registrado!")
            })
            .catch(error =>  {
               Alert.alert(error.message);
            });
        } else {
            Alert.alert("As senhas não são iguais!");
        }}

