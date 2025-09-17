'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdTrendingUp, IoMdNotificationsOutline } from "react-icons/io";
import { BsLayoutSidebar, BsFileEarmarkText, BsUpload } from "react-icons/bs";
import { FiSearch, FiUsers, FiFileText, FiUser } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";

import Dashboard from '../Dashboard/Dashboard.jsx'
import Users from '../Usergen/User.jsx';
import Report from '../Reports/Report.jsx'
import AnalyticsDashboard from '../AnalyticsDashboard/AnalyticsDashboard'

import profile from '../../../public/Gemini_Generated_Image_eu7k7feu7k7feu7k.png'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Changed to false by default
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const handleNotificationsToggle = () => {
        setIsNotificationsOpen((prev) => {
            if (!prev) setIsProfileOpen(false);
            return !prev;
        });
    };

    const handleProfileToggle = () => {
        setIsProfileOpen((prev) => {
            if (!prev) setIsNotificationsOpen(false);
            return !prev;
        });
    };

    // New handler to close sidebar on main content click
    const handleMainContentClick = () => {
        // Only close sidebar on mobile if it's open
        if (window.innerWidth <= 1200 && !isSidebarCollapsed) {
            setIsSidebarCollapsed(true);
        }
    };

    const renderContent = () => {
        switch (activeMenu) {
            case "Dashboard":
                return <Dashboard isSidebarCollapsed={isSidebarCollapsed}/>;
            case "Users":
                return <Users isSidebarCollapsed={isSidebarCollapsed}/>;
            case "Reports":
                return <Report isSidebarCollapsed={isSidebarCollapsed}/>;
            case "Analytics":
                return <AnalyticsDashboard isSidebarCollapsed={isSidebarCollapsed}/>;
            default:
                return (
                    <div className={`${styles.genContent}`}>
                        <h2>Welcome to NimbusAdmin!</h2>
                    </div>
                );
        }
    }

    return (
        <div className={`${styles.navgen} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
            {/* Sidebar */}
            <div className={`${styles.menuside}`}>
                {/* Desktop Toggle Icon */}
                <div onClick={handleSidebarToggle} className={`${styles.sidebaricn} ${styles.desktopToggle}`}>
                    <BsLayoutSidebar />
                </div>
                
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
                        <div className={`${styles.theduras} ${activeMenu === "Dashboard" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Dashboard")}>
                            <div><BsLayoutSidebar /></div>
                            <p>Dashboard</p>
                        </div>
                        <div className={`${styles.theduras} ${activeMenu === "Users" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Users")}>
                            <div><FiUsers /></div>
                            <p>Users</p>
                        </div>
                        <div className={`${styles.theduras} ${activeMenu === "Reports" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Reports")}>
                            <div><FiFileText /></div>
                            <p>Reports</p>
                        </div>
                        <div className={`${styles.theduras} ${activeMenu === "Analytics" ? styles.activeMenu : ""}`} onClick={() => setActiveMenu("Analytics")}>
                            <div><GrAnalytics /></div>
                            <p>Analytics</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Navigation and Main Content */}
            <div className={`${styles.topnavndcontent} ${isSidebarCollapsed ? styles.expanded : ''}`} onClick={handleMainContentClick}>
                <div className={`${styles.topnavside}`}>
                    {/* Mobile Toggle Icon */}
                    <div onClick={handleSidebarToggle} className={`${styles.sidebaricn} ${styles.mobileToggle}`}>
                        <BsLayoutSidebar />
                    </div>
                    
                    <div className={`${styles.searchgen}`}>
                        <div>
                            <FiSearch />
                            <input type="text" placeholder='Search...' />
                        </div>
                    </div>

                    <div className={`${styles.notifygen}`} onClick={handleNotificationsToggle}>
                        <div className={`${styles.notifyicn}`}>
                            <IoMdNotificationsOutline />
                        </div>
                        <span className="badge">3</span>
                        {isNotificationsOpen && (
                            <div className={styles.notificationDropdown}>
                                <div><h3 className={`${styles.noti}`}>🔔 Notifications</h3></div>
                                <div className={styles.grpgen}>
                                    <div className={`${styles.grp1}`}>
                                        <h3>• New user Registered</h3>
                                        <p>John Doe joined 5mins ago</p>
                                    </div>
                                    <div className={`${styles.grp2}`}>
                                        <h3>• System Maintenance</h3>
                                        <p>Scheduled for tonight at 2:00 AM</p>
                                    </div>
                                    <div className={`${styles.grp3}`}>
                                        <h3>• Report generated</h3>
                                        <p>Monthly analytics report is ready</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`${styles.profilesection}`} onClick={handleProfileToggle}>
                        <Image
                            className={styles.prof}
                            src={profile}
                            alt='profile_pic'
                        />
                        {isProfileOpen && (
                            <div className={styles.profileDropdown}>
                                <div className={`${styles.adminpart}`}>
                                    <p>Admin User</p>
                                    <h3>admin@nimbusadmin.com</h3>
                                </div>
                                <div className={`${styles.profndset}`}>
                                    <div className={`${styles.profndicn}`}>
                                        <FiUser />
                                        <p>Profile</p>
                                    </div>
                                    <div className={`${styles.setndicn}`}>
                                        <CiSettings />
                                        <p>Settings</p>
                                    </div>
                                </div>
                                <p className={`${styles.logout}`}>Log out</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`${styles.mainContent} ${styles.genContent}`}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Navbar;