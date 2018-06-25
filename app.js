function generateID() {
    let userFirstName = document.getElementById("firstName").value;
    console.log(userFirstName);

    let userLastName = document.getElementById("lastName").value;
    console.log(userLastName);

    let userFullName = userFirstName + " " + userLastName;

    let userAge = document.getElementById("Age").value;
    console.log(userAge);

    let userPhoneNumber = document.getElementById("phoneNumber").value;
    console.log(userPhoneNumber);

    let userAddress = document.getElementById("Address").value;

    document.getElementById("idName").innerHTML = userFullName;
    document.getElementById("idAge").innerHTML = "Age: " + userAge;
    document.getElementById("idAddress").innerHTML = "Address" + userAddress;
    document.getElementById("idphoneNumber").innerHTML = "Phone:#" + userPhoneNumber;

}
// generateID()
