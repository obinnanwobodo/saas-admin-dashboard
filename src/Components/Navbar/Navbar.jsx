'use client'

import React, { isValidElement, useState } from 'react';
import styles from './Navbar.module.css'
import { IoMdTrendingUp } from "react-icons/io";
import { BsLayoutSidebar } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from 'next/image';
import profile from '../../../public/Gemini_Generated_Image_eu7k7feu7k7feu7k.png'
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";









const Navbar = () => {



    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Dashboard"); // default page



    const handleNotificationClick = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };



const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

const handleNotificationsToggle = () => {
  setIsNotificationsOpen((prev) => !prev);
};




    const renderContent = () => {
        switch (activeMenu) {

            
            case "Dashboard":
                return  (
              <div className={styles.dashboardContent}>
                <h2>📊 Dashboard Overview</h2>
                <p>This is where your dashboard widgets, charts, or summaries will go.</p>

                <p>{Array(200).fill("This is a scroll test sentence. ").join(" ")}</p>
              </div>
            );




            case "Users":
                return (
                
           <div>
                             <p>{Array(200).fill("This is a scroll test sentence. ").join(" ")}</p>

           </div>

                );




            case "Reports":
                return (
                    
                    <div>
                         <h2>📑 Reports Section</h2>
                    </div>


                );




            case "Analytics":
                return (
                
              <div>
                  <h2>📈 Analytics Data</h2>
              </div>

                );


            default:
                return ( 
                <div className={`${styles.genContent}`}>
                    <h2>Welcome</h2>;

                </div>

                );
        }

    }


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

                        <div className={`${styles.theduras}  ${
    activeMenu === "Dashboard" ? styles.activeMenu : ""
  }`} onClick={() => setActiveMenu("Dashboard")}>
                            <div><MdOutlineDashboard /></div>
                            <p>Dashboard</p>
                        </div>

                        <div className={`${styles.theduras} ${
    activeMenu === "Users" ? styles.activeMenu : ""
  }`} onClick={() => setActiveMenu("Users")}>
                            <div> <FiUsers /></div>
                            <p>Users</p>
                        </div>


                        <div className={`${styles.theduras} ${
    activeMenu === "Reports" ? styles.activeMenu : ""
  }`} onClick={() => setActiveMenu("Reports")}>
                            <div><FiFileText /></div>
                            <p>Reports</p>
                        </div>


                        <div className={`${styles.theduras} ${
    activeMenu === "Analytics" ? styles.activeMenu : ""
  }`} onClick={() => setActiveMenu("Analytics")}>
                            <div><GrAnalytics /></div>
                            <p>Analytics</p>
                        </div>

                    </div>

                </div>

            </div>







            <div className={`${styles.topnavndcontent} ${isSidebarCollapsed ? styles.expanded : ''}`}>

                <div className={`${styles.topnavside}`}>

                    <div onClick={handleNotificationClick} className={styles.sidebaricn}><BsLayoutSidebar /></div>

                    <div className={`${styles.searchgen}`}>

                        <div>
                            <div><FiSearch /></div>
                            <input type="text" placeholder='Search...' />
                        </div>


                    </div>

                    <div className={`${styles.notifygen}`}>

                        <div className={`${styles.notifyicn}`}  onClick={handleNotificationsToggle}><IoMdNotificationsOutline /></div>
                        <span className="badge">3</span>


                          {isNotificationsOpen && (
    <div className={styles.notificationDropdown}>
      <p>🔔 You have new notifications</p>
      <p>• User John signed up</p>
      <p>• Report #123 was generated</p>
      <p>• System update available</p>
    </div>
  )}

                    </div>



                    <div className={`${styles.profilesection}`}>

                        <Image className={styles.prof}

                            src={profile}
                            alt='proile_pic' />
                    </div>



                </div>


                {/* Main Content Area */}
                <div className={`${styles.mainContent} ${styles.genContent}`}>
                    {renderContent()}
                </div>
            </div>



        </div>









    )
}

export default Navbar