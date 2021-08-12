import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {Link} from "react-router-dom";
import styles from './style.module.css'

const Greeting = () => {
    return (
        <Link className={styles.text} to='/form'>
            <TypeWriterEffect
                startDelay={1000}
                cursorColor="black"
                multiText={[
                    'Hey there,',
                    'This is little testing form',
                    'Go'
                ]}
                multiTextDelay={1000}
                typeSpeed={50}
            />
        </Link>
    );
};

export default Greeting;