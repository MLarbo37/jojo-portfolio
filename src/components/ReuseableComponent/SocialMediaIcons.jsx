import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Button, Card, CardMedia, Grid, IconButton, styled, useMediaQuery } from "@mui/material";
import '../../App'

const SocialMediaIcons = () => {
 const socialMediaIcons = [

    { icon: <li><IconButton><Facebook className="iconColor" fontSize="large" /></IconButton></li> },
    { icon: <li><IconButton><LinkedIn className="iconColor" fontSize="large" /></IconButton></li> },
    { icon: <li><IconButton><GitHub className="iconColor" fontSize="large" /></IconButton></li> },
    { icon: <li><IconButton><Instagram className="iconColor" fontSize="large" /></IconButton></li> },
        

    ]

    return (
        <div className="h-100 d-flex align-items-center">
            <ul className="list-unstyled social-icons">
        {socialMediaIcons.map((socialMediaIcon) => 
            <li> {socialMediaIcon.icon}</li>
                )}
                </ul>
        </div>
    );
}
 
export default SocialMediaIcons;