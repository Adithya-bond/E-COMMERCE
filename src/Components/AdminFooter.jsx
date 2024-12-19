import React from 'react'
import "../styles/AdminFooter.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const AdminFooter = () => {
  return (
    <div className='footer'>
      <section className='left'>
        <p><LocalPhoneIcon/> : 7337633150</p>
        <p><EmailIcon/> : adithyamh@gmail.com</p>
      </section>
      <section className='right'>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <XIcon/>
        <GitHubIcon/>

      </section>
    </div>
  )
}

export default AdminFooter
