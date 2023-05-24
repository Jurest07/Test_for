import React from 'react'
import CompanyLogo from '../../components/Decorations/CL_logo/CompanyLogo';
import { motion } from "framer-motion";
const LeftDecorate = () => {

    return (
        
        <motion.div
            animate={{ opacity: [0, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 1] }}
            initial={{ opacity: 0 }}
            transition={{
                delay: 1,
                duration: 1,
                repeat: 0,
            }}
            className="attributes_container"
        >
            <div className="Company_title">Code Life</div>
            <CompanyLogo id='CompanyLogoAuthorization'/>
        </motion.div>
    )
}

export default LeftDecorate