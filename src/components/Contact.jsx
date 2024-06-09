import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Informasi kontak */}
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <img src="src\assets\email.png" alt="Email Icon" className='w-6 h-6' />
            <a href="mailto:hudamuhammadnur@mail.ugm.ac.id" className='text-white'>hudamuhammadnur@mail.ugm.ac.id</a>
          </div>
          <div className='flex gap-4 items-center'>
            <img src="src\assets\hp.png" alt="Phone Icon" className='w-6 h-6' />
            <a href="https://wa.me/085156338314" className='text-white'>085156338314</a>
          </div>
          <div className='flex gap-4 items-center'>
            <img src="src\assets\linkedin.png" alt="LinkedIn Icon" className='w-6 h-6' />
            <a href="https://www.linkedin.com/in/hudamuhammadnur" className='text-white'>hudamuhammadnur</a>
          </div>
          <div className='flex gap-4 items-center'>
            <img src="src\assets\github.png" alt="GitHub Icon" className='w-6 h-6' />
            <a href="https://github.com/hudaaaamn" className='text-white'>hudaaaamn</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
