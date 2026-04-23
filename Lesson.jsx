import "../index.css";
import About from "../About.jsx";
import {Box,Typography} from '@mui/material';
import {Link} from "react-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
 function Back(){

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
        </>
    )}
export default function Lesson(){
    

    return(

                <div style={{margin:"35px"}}>
                 <Back/>
                    <h2>聴解問題</h2>
                    <div className="lvdo">
                    <div>
                       
                    <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/cm_aqCRrl9Y?si=L94r7m7gowZpXHCt"
                    title="YouTube video"
                    allowFullScreen
                    ></iframe>
                    </div>
                    <div>
                     <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/IyU9lftzFd0?si=ar2PElGqgE-o1wRJ"
                    title="YouTube video"
                    allowFullScreen
                    ></iframe>
                    </div>
                    <div>
                            <p>2010/7 JLPT N1 listening</p>
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/Fj4YrFQ9g0A?si=l9VZWMFYwZHM21hO"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                    <div>
                            <p>2010/12 JLPT N1 listening</p>
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/IzegVoNrEDc?si=7_WBKSGDFmKfpThR"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                     <div>
                            <p>2011/7 JLPT N1 listening</p>
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/tOrRO6vZR0g?si=6ccdVtVD5QwuAPVS"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                    <div>
                            <p>2011/12 JLPT N1 listening</p>
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/QiA_nSd_eMQ?si=WycgPnJY1ahomqHM"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                    </div>
                </div>
    )
}