import { db } from "../config/firebase";
import firebase from "firebase/compat/app";

export function AddChannel(channelInput) {
    
db.collection("Channels").add({
    channelName : channelInput,
    timeStamp : firebase.firestore.FieldValue.serverTimestamp()
})
}