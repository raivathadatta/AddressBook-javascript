 class addressBook{
  
    FirstName; 
     get getFirstName() {
         return this.FirstName;
     }
     set  setFirstName(value) {
         let nameRegex =RegExp('^{A-Z}{1}{3,}$');
         if(nameRegex.test(value))
         this.FirstName = value;
     else
     throw "Name formate is in corect";
        }
    LastName;
     get gatLastName() {
        
         return this.LastName;
        
     }
     set setlastName(value) {
        let nameRegex =RegExp('^{A-Z}{1}{3,}$');
        if(nameRegex.test(value))
         this._lastName = value;
        else
         throw "Name formate is in corect";
     }
    _phoneNumber;
     get getPhoneNumber() {
         return this._phoneNumber;
     }
     set setPhoneNumber(value) {
         let phoneNumberRegex=('^\+(?:[0-9]●?){6,14}[0-9]$')
         if(phoneNumberRegex.test(value))
         this._phoneNumber = value;
         else
         throw "incorect phone Number ";
     }
    _address;
     get getAddress() {
         return this._address;
     }
     set setAddress(value) {
         this._address = value;
     }
    _city;
     get getCity() {
         return this._city;
     }
     set setCity(value) {
         this._city = value;
     }
    _State;
     get getState() {
         return this._State;
     }
     set setState(value) {
         this._State = value;
     }
    _pinCode;
     get getPinCode() {
     
         return this._pinCode;
     }
     set setPinCode(value) {
        let pinCodeRegex=RegExp( "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$");
        if(pinCodeRegex.test(value))
         this._pinCode = value;
         else
         throw "Invalied zipcode";
     }
    _email;
     get getEmail() {
        
         return this._email;
     }
     set setEmail(value) {
        let emailRegex =RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if(emailRegex.test(value))
         this._email = value;
         else
         throw "Invalied Email";
     }
    constructor(firstname,lastName,phoneNumber,address,city,State,pinCode,email){
        this.Firstname=firstname;
        this.FastName=lastName;
        this._phoneNumber=phoneNumber;
        this._address=address;
        this._city=city;
        this._State=State;
        this._pinCode=pinCode;
        this._email=email;
    }
    toString(){
        return "firstName"+ this.firstname+" "+" lastName"+this.lastName+" " +" Phone Number "+this.phoneNumber+" "+" address" +this.address+
        +" "+"city" +this.city+"State "+this.State+" "+ " pincode "+this.pinCode;
    }
}


let addressArray=[addressBook];


let NewAddressBook= new addressBook("Datta","Raivatha",9949109649,"vija","andhra",520010,"raivatha@gmail.com");
console.log(addressBookCount(addressArray));


addressArray.push(NewAddressBook);


changeName(addressArra,datta,raivatha)
///searching for for requied name and changing it;
function changeNmeFromAddressBook(addressArray,nameSearch,changeName)
addressArray.forEach(element => {
   var name= element.getFirstName;
   if(nameSearch===name)
   element.setFirstName(changeName);
});
//function delete an name
function deletePersonFromAddressBook(array,name){
    let addressArray=[array];
    addressArray.forEach(element => {
        let firstNme=element.getFirstName();
        if(firstNme==name)
        addressArray.pop(element);
    });
}
//function to count number of contacts in an array;
function addressBookCount(array){
    let newArrey=[array];
    return newArrey.length;
}
//function add into addressbook
function addIntoAddressBook(parameter1,parameter2,parameter3,parameter4,parameter5,parameter6,parameter7,parameter8,parameter9,array){
    let person=new addressBook(parameter1,parameter2,parameter3,parameter4,parameter5,parameter6,parameter7,parameter8,parameter9);
 let addressbookArray=[array];
 var check=true;
 addressbookArray.forEach(element => {
     var firstname=element.getFirstName();
     if(firstname==parameter1)
     check=false;
 });
 if(check)
 addressbookArray.push(person);
 else
 throw " The person whin name is already exits"+parameter1;
}
//functionto check with city or state
function getPersonsByCityName(value,array){
let addressArray=[array];
var result=addressArray.filter(person=>(person.getCity()||person.getState()==value))
console.log(result.toString());
}
// function count by city or count by state 

function countPersonsByCityName(value,array){
    let addressArray=[array];
    var result=addressArray.filter(person=>(person.getCity()||person.getState()==value)).reduce((count,countnumber)=>count=countnumber++,0);
    console.log(result);
    }
//function to sort the array of address book
function sortAddressBook(array){
    let addressBookArray=[array];
    addressBookArray.sort((a,b)=>(a.getPinCode>b.getPinCode)?1:((b.getPinCode>a.getPinCode()) ? -1 : 0));
}