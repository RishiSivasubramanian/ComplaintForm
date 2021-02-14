var firebaseConfig = {
    apiKey: "AIzaSyCkBBfEtWEI0DJFZYKOndtZOPrU8QL3aIM",
    authDomain: "grievanceform-4c25a.firebaseapp.com",
    databaseURL: "https://grievanceform-4c25a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "grievanceform-4c25a",
    storageBucket: "grievanceform-4c25a.appspot.com",
    messagingSenderId: "748668736444",
    appId: "1:748668736444:web:43828806cede74bd71d1b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Reference Messages
  var messagesRef = firebase.database().ref('description');



document.getElementById('ComplaintForm').addEventListener('submit',submitForm);
   //Submit Form
function submitForm(e){
    e.preventDefault();
    // Get details
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var date = getInputVal('date');
    var personinvolved = getInputVal('personinvolved');
    var description = getInputVal('description');

    
    saveMessage(name,email,phone,date,personinvolved,description);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 secs
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },3000);

    //Clear form
    document.getElementById('ComplaintForm').reset();

}


function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,phone,date,personinvolved,description){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        date: date,
        personinvolved: personinvolved,
        description: description
    });
}
