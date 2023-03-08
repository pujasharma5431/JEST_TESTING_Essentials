const functions={
    add:(num1, num2) =>
       num1+num2+1,
       isNull: ()=>null,
       checkValue: x=> x,
       createUser:()=>{
        const user={firstName:'Puja'};
        user['lastName']="Sharma";
        return user;
       }
    
}
module.exports=functions;