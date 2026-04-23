import {Link} from "react-router-dom";
import './index.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Box,Typography} from '@mui/material';
import {useState,useEffect} from "react";

// downloadable file//
// const downloadFile=()=>{
// const link=document.createElement("a");
// link.href="c:/Users/User/Downloads/[studyjapanese.net]_Shin_Kanzen_Master_N1-Dokkai.pdf";
// link.download="first.db";
// link.click();
// }
//
function Userdata(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        async function fetchUserdata(){
            const res=await fetch('http://localhost:5000/users');
            const users=await res.json();
            setData(users)
        }
        fetchUserdata();
    },[]);
    return (
        <div>

            {data.map(datas=>(
                <p key={datas.id}>
                    {/* {datas.id}.
                    {datas.name}- */}
                    {datas.status}
                </p>
                
            ))}
                
            
        </div>
    )
}
export default function About(){

    return (
        <>
          <Box
        component={Link} to="/home"
        sx={{
            display:"flex",
            gap:1,
            alignItems: "center",
            textDecoration: "none",
            color: "black",
            width:"200px",
        }}
        >

             <KeyboardBackspaceIcon/>
        <Typography>Back to home</Typography>
        
        
        </Box>
         
       
        <h2>
            問題セクション
        </h2>
     
        
       <Userdata/>
     
            
        </>
    )
        
    
}