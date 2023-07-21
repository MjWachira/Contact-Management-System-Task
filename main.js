let fName=document.getElementById('fname').value
let sName=document.getElementById('sname').value
let email=document.getElementById('email').value
let pNum=document.getElementById('number').value

btnAdd=document.getElementById('add')
btnUpdate=document.getElementById('update')
btnDelete=document.getElementById('delete')

btnAdd.addEventListener('click',()=>{
    console.log(fName.value)
    console.log('clicked')

})

class ContactItems{
    constructor(fName, sName, email, pNum) {
        this.fName=fName
        this.sName=sName
        this.email=email
        this.pNum}

    personDetails={
        fName,
        sName,
        email,
        pNum,

    } 

}
btnAdd.addEventListener('click',()=>{
    let fName=document.getElementById('fname').value

    console.log(fName)
    console.log('clicked')
    
    if(fName){
        var contactItems = new ContactItems(fName)
        console.log(contactItems)
    }

})

function addDetailsToLocal(contactItems){
    let contactItems=JSON.parse(localStorage.getItem(contactItems))||[];
    contactItems.push(contactItems)
    localStorage.setItem('contactItems',JSON.stringify(contactItems))
}





btnUpdate.addEventListener('click',()=>{
    console.log('clicked')
    a=details.personDetails.fName.value
    console.log(a)
})

class displayInputs{


}