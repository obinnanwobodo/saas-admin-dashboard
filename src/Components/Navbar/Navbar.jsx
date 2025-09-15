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
import { FiUser } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { LuDollarSign } from "react-icons/lu";
import { LuActivity } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { PiExport } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";











const boxarray = [
    {
        head: 'Total Revenue',
        icon: <LuDollarSign />,
        amount: '$67,429',
        percent: '+12.5% from last month',
        final: 'Revenue this month',
    },

    {
        head: 'Active Users',
        icon: <FiUsers />,
        amount: '8,429',
        percent: '+5.2% from last month',
        final: 'Currently online',
    },

    {
        head: 'Growth Rate',
        icon: <IoMdTrendingUp />,
        amount: '23.7%',
        percent: '+2.1% from last month',
        final: 'Monthly growth',
    },

    {
        head: 'Conversion Rate',
        icon: <LuActivity />,
        amount: '3.2%',
        percent: '-0.4% from last month',
        final: 'Sales conversion',
    },



]

















const Navbar = () => {



    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Dashboard"); // default page

    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); // ✅ added
    const [isProfileOpen, setIsProfileOpen] = useState(false);




    const handleNotificationClick = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };



    const handleNotificationsToggle = () => {
        setIsNotificationsOpen((prev) => {
            if (!prev) setIsProfileOpen(false); // close profile if opening notifications
            return !prev;
        });
    };




    const handleProfileToggle = () => {
        setIsProfileOpen((prev) => {
            if (!prev) setIsNotificationsOpen(false); // close notifications if opening profile
            return !prev;
        });
    };



    const renderContent = () => {
        switch (activeMenu) {


            case "Dashboard":
                return (
                    <div className={styles.dashboardgen}>
                        <h2 className={`${styles.dash}`}> Dashboard Overview</h2>
                        <p className={`${styles.welcome}`}>Welcome back! Here's what's happening with your business today.</p>



                        <div className={`${styles.mappingboxgen}`}>

                            {boxarray.map((each, index) =>
                                <div key={index} className={`${styles.eachbox}`}>

                                    <div className={`${styles.headndicon}`}>

                                        <div className={styles.head}> {each.head} </div>
                                        <div className={styles.icon}> {each.icon} </div>

                                    </div>


                                    <div className={`${styles.apf}`}>


                                        <h2 className={styles.amount}> {each.amount} </h2>

                                        <h3 className={`${styles.percent} ${each.percent === "-0.4% from last month" ? styles.specialpercent : ""}`}> {each.percent} </h3>

                                        <h4 className={`${styles.final}`}> {each.final}</h4>
                                    </div>




                                </div>

                            )}


                        </div>


                        {/* REVENUE AND USER */}

                        <div className={`${styles.revnduser}`}>


                            <div className={`${styles.revtrendgen}`}>

                                <div className={styles.icnndrev}>
                                    <div className={styles.trendicnn}><IoMdTrendingUp /></div>
                                    <h2>Revenue Trend</h2>

                                </div>

                                <p className={styles.monthly}>Monthly revenue over the last 6 months</p>
                            </div>



                            <div className={`${styles.usergen}`}>

                                <div className={styles.icnnduser}>
                                    <div className={styles.usersicn}><FiUsers /></div>
                                    <h2>User Analytics</h2>
                                </div>

                                <p className={styles.useracq}>User acquisition over time</p>

                            </div>





                        </div>

                        {/* DEVICE AND RECENT */}

                        <div className={styles.devicendrec}>


                            <div className={styles.devicegen}>

                                <h2>Device Usage</h2>
                                <p>Traffic by device type</p>
                            </div>




                            <div className={styles.recentgen}>

                                <div className={styles.icnndrecent}>
                                    <div><LuActivity /></div>
                                    <h2>Recent Activity</h2>
                                </div>

                                <p className={styles.late}>Latest user actions and system events</p>


                                <div className={styles.allgroups}>


                                    <div className={styles.group}>

                                        <div className={styles.first3}>
                                            <div className={styles.rounddot1}> {''}</div>

                                            <div className={styles.namendact}>
                                                <h4>John Doe</h4>
                                                <p>Signed up</p>
                                            </div>


                                        </div>


                                        <p className={styles.timme}>2 minutes ago</p>


                                    </div>


                                    <div className={styles.group}>

                                        <div className={styles.first3}>
                                            <div className={styles.rounddot2}> {''}</div>

                                            <div className={styles.namendact}>
                                                <h4>
                                                    Jane Smith</h4>
                                                <p>Made a purchase</p>
                                            </div>


                                        </div>


                                        <p className={styles.timme}>5 minutes ago</p>


                                    </div>

                                    <div className={styles.group}>

                                        <div className={styles.first3}>
                                            <div className={styles.rounddot3}> {''}</div>

                                            <div className={styles.namendact}>
                                                <h4>
                                                    System</h4>
                                                <p>Backup completed</p>
                                            </div>


                                        </div>


                                        <p className={styles.timme}>1 hour ago</p>


                                    </div>


                                    <div className={styles.group}>

                                        <div className={styles.first3}>
                                            <div className={styles.rounddot4}> {''}</div>

                                            <div className={styles.namendact}>
                                                <h4>

                                                    Bob Johnson</h4>
                                                <p>Updated profile</p>
                                            </div>


                                        </div>


                                        <p className={styles.timme}>2 hours ago</p>


                                    </div>


                                    <div className={styles.group}>

                                        <div className={styles.first3}>
                                            <div className={styles.rounddot5}> {''}</div>

                                            <div className={styles.namendact}>
                                                <h4>

                                                    Alice Brown</h4>
                                                <p>Left a review</p>
                                            </div>


                                        </div>


                                        <p className={styles.timme}>23 hours ago</p>


                                    </div>





                                </div>
                            </div>



                        </div>

                    </div>
                );




            case "Users":
                return (

                    <div className={`${styles.usersgen}`}>


                        <div className={`${styles.fitstpart}`}>

                            <h2 className={`${styles.umanage}`}>User Management</h2>
                            <p className={`${styles.manage}`}>Manage and monitor all users in your system</p>


                            <div className={`${styles.searchndfilter}`}>

                                <div className={`${styles.searchgen2}`}>

                                    <div><FiSearch /></div>
                                    <input type="text" placeholder='Search users...' />
                                </div>


                                <div className={styles.fea}>

                                    <div className={styles.filter}>

                                        <div><FiFilter /></div>
                                        <p>Filter</p>

                                    </div>



                                    <div className={styles.export}>

                                        <div><PiExport />

                                        </div>
                                        <p>Export</p>

                                    </div>


                                    <div className={styles.add}>
                                        <div><IoMdAdd />
                                        </div>
                                        <p>Add</p>
                                    </div>

                                </div>



                            </div>

                        </div>




                        <div className={`${styles.secondpart}`}>

                            <h2 className={styles.alluse}>All Users</h2>
                            <p className={styles.alist}>A list of all users including their name, email, role, and status.</p>


                            <div className={styles.tablegen}>

                                <div className={styles.firstline}>

                                    <h2>User</h2>
                                    <h4>Role</h4>
                                    <h4>Status</h4>
                                    <p>	Join Date</p>
                                    <p>Last Login</p>
                                    <h3>Actions</h3>

                                </div>


                                <div className={styles.secondline}>

                                    <div className={styles.first3}>
                                        <div className={styles.userimg}></div>

                                        <div>
                                            <h2>John Doe</h2>
                                            <p>john.doe@example.com</p>
                                        </div>

                                    </div>

                                    <h4>Admin</h4>
                                    <h4>Active</h4>
                                    <p>15/01/2024</p>
                                    <p>2 hours ago</p>
                                    <div><HiDotsHorizontal /></div>
                                </div>

                            </div>



                        </div>

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

                        <div className={`${styles.theduras}  ${activeMenu === "Dashboard" ? styles.activeMenu : ""
                            }`} onClick={() => setActiveMenu("Dashboard")}>
                            <div><MdOutlineDashboard /></div>
                            <p>Dashboard</p>
                        </div>

                        <div className={`${styles.theduras} ${activeMenu === "Users" ? styles.activeMenu : ""
                            }`} onClick={() => setActiveMenu("Users")}>
                            <div> <FiUsers /></div>
                            <p>Users</p>
                        </div>


                        <div className={`${styles.theduras} ${activeMenu === "Reports" ? styles.activeMenu : ""
                            }`} onClick={() => setActiveMenu("Reports")}>
                            <div><FiFileText /></div>
                            <p>Reports</p>
                        </div>


                        <div className={`${styles.theduras} ${activeMenu === "Analytics" ? styles.activeMenu : ""
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

                        <div className={`${styles.notifyicn}`} onClick={handleNotificationsToggle}><IoMdNotificationsOutline /></div>
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

                        <Image className={styles.prof}

                            src={profile}
                            alt='proile_pic' />
                    </div>

                    {isProfileOpen && (
                        <div className={styles.profileDropdown}>

                            <div className={`${styles.adminpart}`}>
                                <p>Admin User</p>
                                <h3>admin@nimbusadmin.com</h3>
                            </div>

                            <div className={`${styles.profndset}`}>
                                <div className={`${styles.profndicn}`}>
                                    <div> <FiUser /> </div>
                                    <p>Profile</p>
                                </div>

                                <div className={`${styles.setndicn}`}>
                                    <div><CiSettings /></div>
                                    <p>Settings</p>
                                </div>
                            </div>

                            <p className={`${styles.logout}`}>Log out</p>

                        </div>
                    )}


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