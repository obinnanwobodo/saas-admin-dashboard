'use client'

import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { IoMdTrendingUp } from "react-icons/io";
import { BsLayoutSidebar } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from 'next/image';
import profile from '../../../public/Gemini_Generated_Image_d2kcamd2kcamd2kc.png'
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";









const Navbar = () => {



    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

const handleNotificationClick = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
};




    return (
        <div className={`${styles.navgen} ${isSidebarCollapsed ? styles.collapsed : ''}`}>


            <div className={`${styles.menuside}`}>

                <div className={`${styles.menuicnndtext}`}>
                    <div className={`${styles.trendicn}`}><IoMdTrendingUp /></div>

                    <div className={`${styles.hndp}`}>
                        <h2>NimbusAdmin</h2>
                        <p>Admin Dashboard</p>
                    </div>
                </div>


                <div className={`${styles.wholemenu}`}>
                    <h2>MAIN MENU</h2>

                    <div className={`${styles.dura}`}>

                        <div className={`${styles.theduras}`}>
                            <div><MdOutlineDashboard /></div>
                            <p>Dashboard</p>
                        </div>

                        <div className={`${styles.theduras}`}>
                            <div> <FiUsers /></div>
                            <p>Users</p>
                        </div>


                        <div className={`${styles.theduras}`}>
                            <div><FiFileText /></div>
                            <p>Reports</p>
                        </div>


                        <div className={`${styles.theduras}`}>
                            <div><GrAnalytics /></div>
                            <p>Analytics</p>
                        </div>

                    </div>

                </div>

            </div>



            <div className={`${styles.topnavside}${isSidebarCollapsed ? styles.expanded : ''}`}>

                <div onClick={handleNotificationClick} className={styles.sidebaricn}><BsLayoutSidebar /></div>

                <div className={`${styles.searchgen}`}>

                    <div>
                        <div><FiSearch /></div>
                        <input type="text" placeholder='Search...' />
                    </div>


                </div>

                <div className={`${styles.notifygen}`}>

                    <div><IoMdNotificationsOutline /></div>
                    <span className="badge">3</span>

                </div>



                <div className={`${styles.profilesection}`}>

                    <Image

                        src={profile}
                        alt='proile_pic' />
                </div>

            </div>






        </div>
    )
}

export default Navbar