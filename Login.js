import React, { useState } from "react";
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import lankaNIC from 'lanka-nic';
import { Button } from "react-native-paper";




export default function Login() {
    const onLogin = () => {
        console.log("Date of birth is "+ dateOfBirth);
        console.log("Gender is "+ gender);
    }
    const [Nic,setNic]=useState('');
    let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(Nic);
    
    
    


    return (
        <View>
            <Text style={{ fontSize: 25, width: '50%', marginLeft: '25%' }}>NIC CHECKER</Text>
            <TextInput
      label="NIC Number"
    
      onChangeText={text => setText(text)}
      mode="flat"
      value={Nic}
      style={{width:'50%',marginLeft:'30%',}}
    />

      

      <Button style={{ width: '35%', margintop: '20%', marginLeft: '40%' }} mode="outlined" onPress={onLogin}>check</Button>

            



        </View>







    )






}