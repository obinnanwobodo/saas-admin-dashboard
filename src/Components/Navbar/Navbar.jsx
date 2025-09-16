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

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

import DeviceUsageChart from "../Charts/DeviceUsageChart";

import { BsFileEarmarkText, BsUpload } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineDateRange } from 'react-icons/md';
import { BsEye, BsDownload } from 'react-icons/bs'; // Using BsEye and BsDownload for visibility and download icons
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { FaUsers, FaChartLine } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md';








// Data for the line chart (Revenue Trend)
const revenueData = [
    { name: 'Jan', revenue: 42000 },
    { name: 'Feb', revenue: 55000 },
    { name: 'Mar', revenue: 52000 },
    { name: 'Apr', revenue: 63000 },
    { name: 'May', revenue: 58000 },
    { name: 'Jun', revenue: 70000 },
];




// Data for the bar chart (User Analytics)
const userData = [
    { name: 'Jan', users: 2500 },
    { name: 'Feb', users: 1500 },
    { name: 'Mar', users: 10000 },
    { name: 'Apr', users: 4000 },
    { name: 'May', users: 5000 },
    { name: 'Jun', users: 4500 },
];




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


const ndarray = [

    {
        user: 'Total Users',
        number: 5,
        details: '+2 from last week',

    },

    {
        user: 'Active Users',
        number: 3,
        details: '85% of total users',

    },

    {
        user: 'Pending Users',
        number: 1,
        details: 'Awaiting verification',

    },

    {
        user: 'Admins',
        number: 1,
        details: 'System administrators',

    },

]



const reportsData = [
    {
        title: 'Total Reports',
        value: '47',
        subtitle: '+12% from last month',
        icon: <BsFileEarmarkText />,
    },
    {
        title: 'Reports Generated',
        value: '23',
        subtitle: 'This month',
        icon: <BsFileEarmarkText />,
    },
    {
        title: 'Failed Reports',
        value: '2',
        subtitle: 'Need attention',
        icon: <BsFileEarmarkText />,
    },
    {
        title: 'Storage Used',
        value: '156 MB',
        subtitle: 'Of 1GB limit',
        icon: <BsFileEarmarkText />,
    },
];




const dashboardData = [
    {
        title: 'Total Reports',
        value: '47',
        subtitle: '+12% from last month',
        icon: <BsFileEarmarkText />,
    },
    {
        title: 'Reports Generated',
        value: '23',
        subtitle: 'This month',
        icon: <BsFileEarmarkText />,
    },
    {
        title: 'Failed Reports',
        value: '2',
        subtitle: 'Need attention',
        icon: <BsFileEarmarkText />,
    },
    {
        title: 'Storage Used',
        value: '156 MB',
        subtitle: 'Of 1GB limit',
        icon: <BsFileEarmarkText />,
    },
];





const recentReportEntries = [
    {
        name: 'Monthly Revenue Report',
        type: { text: 'Financial', class: 'financial' },
        date: '01/03/2024',
        status: { text: 'Completed', class: 'completed' },
        size: '2.4 MB',
        format: 'PDF',
    },
    {
        name: 'User Analytics Summary',
        type: { text: 'Analytics', class: 'analytics' },
        date: '15/03/2024',
        status: { text: 'Processing', class: 'processing' },
        size: '1.8 MB',
        format: 'Excel',
    },
    {
        name: 'Security Audit Report',
        type: { text: 'Security', class: 'security' },
        date: '28/02/2024',
        status: { text: 'Completed', class: 'completed' },
        size: '5.2 MB',
        format: 'PDF',
    },
    {
        name: 'Customer Satisfaction Survey',
        type: { text: 'Survey', class: 'survey' },
        date: '10/03/2024',
        status: { text: 'Completed', class: 'completed' },
        size: '980 KB',
        format: 'CSV',
    },
    {
        name: 'Inventory Management',
        type: { text: 'Operations', class: 'operations' },
        date: '20/03/2024',
        status: { text: 'Failed', class: 'failed' },
        size: 'N/A',
        format: 'Excel',
    },
];








const reportTemplates = [
    { templateName: 'Daily Sales Summary' },
    { templateName: 'User Activity Report' },
    { templateName: 'Financial Overview' },
    { templateName: 'System Performance' },
];

const reportSchedules = [
    { itemName: 'Weekly Analytics', scheduleDetails: 'Every Monday at 9:00 AM', scheduleStatus: 'Active' },
    { itemName: 'Monthly Financial', scheduleDetails: '1st of every month', scheduleStatus: 'Active' },
    { itemName: 'Quarterly Review', scheduleDetails: 'Every 3 months', scheduleStatus: 'Paused' },
];













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

                                        <p className={`${styles.final}`}> {each.final}</p>
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

                                {/* LINE CHART */}
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                            width={500}
                                            height={300}
                                            data={revenueData}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line type="monotone" dataKey="revenue" stroke="#4251f0" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                {/* END LINE CHART */}
                            </div>






                            <div className={`${styles.usergen}`}>

                                <div className={styles.icnnduser}>
                                    <div className={styles.usersicn}><FiUsers /></div>
                                    <h2>User Analytics</h2>
                                </div>

                                <p className={styles.useracq}>User acquisition over time</p>

                                {/* BAR CHART */}
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={userData}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="users" fill="#4251f0" barSize={30} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                {/* END BAR CHART */}
                            </div>





                        </div>

                        {/* DEVICE AND RECENT */}

                        <div className={styles.devicendrec}>


                            <div className={styles.devicegen}>

                                <h2>Device Usage</h2>
                                <p>Traffic by device type</p>

                                <div> <DeviceUsageChart /></div>


                                <div className={styles.genperc}>
                                    <div className={styles.percgrp1}>
                                        <h6 className={styles.mbl}>Mobile</h6>
                                        <h6 className={styles.six8}>68%</h6>
                                    </div>

                                    <div className={styles.percgrp2}>
                                        <h4 className={styles.dstop}>Desktop</h4>
                                        <p className={styles.two2}>22%</p>
                                    </div>

                                    <div className={styles.percgrp3}>
                                        <h4 className={styles.tblt}>Tablet</h4>
                                        <p className={styles.ten}>10%</p>
                                    </div>



                                </div>

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

                                    <h2 className={styles.us}>User</h2>

                                    <div className={styles.middlege}>
                                        <h4 className={styles.role}>Role</h4>
                                        <h4 className={styles.sts}>Status</h4>
                                        <p className={styles.jd}>	Join Date</p>
                                        <p className={styles.ll}>Last Login</p>
                                    </div>

                                    <h3 className={styles.acti}>Actions</h3>

                                </div>


                                <div className={styles.secondline}>

                                    <div className={styles.first3}>
                                        <div className={styles.userimg}></div>

                                        <div>
                                            <h2 className={styles.jon}>John Doe</h2>
                                            <p className={styles.jonemail}>john.doe@example.com</p>
                                        </div>

                                    </div>

                                    <div className={styles.middlele2}>
                                        <h4 className={styles.adm}>Admin</h4>
                                        <h4 className={styles.accti}>Active</h4>
                                        <p className={styles.datee}>15/01/2025</p>
                                        <p className={styles.timeo}>2 hours ago</p>
                                    </div>

                                    <div className={styles.dlstdot}><HiDotsHorizontal /></div>
                                </div>


                                {/* <NO></NO>2 */}
                                <div className={styles.secondline}>

                                    <div className={styles.first3}>
                                        <div className={styles.userimg}></div>

                                        <div>
                                            <h2 className={styles.jon}>Jane Smith</h2>
                                            <p className={styles.jonemail}>jane....smith@example.com</p>
                                        </div>

                                    </div>

                                    <div className={styles.middlele2}>
                                        <h4 className={styles.adm}>User</h4>
                                        <h4 className={styles.accti}>Active</h4>
                                        <p className={styles.datee}>20/02/2025</p>
                                        <p className={styles.timeo}>2 days ago</p>
                                    </div>

                                    <div className={styles.dlstdot}><HiDotsHorizontal /></div>
                                </div>

                                {/* NO3 */}
                                <div className={styles.secondline}>

                                    <div className={styles.first3}>
                                        <div className={styles.userimg}></div>

                                        <div>
                                            <h2 className={styles.jon}>Bob Johnson</h2>
                                            <p className={styles.jonemail}>hnson@example.com</p>
                                        </div>

                                    </div>

                                    <div className={styles.middlele2}>
                                        <h4 className={styles.admi}>Manager</h4>
                                        <h4 className={styles.acctii}>Inactive</h4>
                                        <p className={styles.datee}>10/01/2025</p>
                                        <p className={styles.timeo}>1 week ago</p>
                                    </div>

                                    <div className={styles.dlstdot}><HiDotsHorizontal /></div>
                                </div>


                                {/* NO4 */}
                                <div className={styles.secondline}>

                                    <div className={styles.first3}>
                                        <div className={styles.userimg}></div>

                                        <div>
                                            <h2 className={styles.jon}>Alice Brown</h2>
                                            <p className={styles.jonemail}>aliccce.brown@example.com</p>
                                        </div>

                                    </div>

                                    <div className={styles.middlele2}>
                                        <h4 className={styles.adm}>User</h4>
                                        <h4 className={styles.accti}>Active</h4>
                                        <p className={styles.datee}>05/03/2025</p>
                                        <p className={styles.timeo}>5 minutes ago</p>
                                    </div>

                                    <div className={styles.dlstdot}><HiDotsHorizontal /></div>
                                </div>


                                {/* NO5 */}
                                <div className={styles.secondline}>

                                    <div className={styles.first3}>
                                        <div className={styles.userimg}></div>

                                        <div>
                                            <h2 className={styles.jon}>Charlie Wilson</h2>
                                            <p className={styles.jonemail}>ch.wilson@example.com</p>
                                        </div>

                                    </div>

                                    <div className={styles.middlele2}>
                                        <h4 className={styles.adm}>User</h4>
                                        <h4 className={styles.accti}>Pending</h4>
                                        <p className={styles.datee}>15/03/2024</p>
                                        <p className={styles.timeo}>Never</p>
                                    </div>

                                    <div className={styles.dlstdot}><HiDotsHorizontal /></div>
                                </div>

                            </div>



                        </div>

                        {/* THIRD PART */}

                        <div className={`${styles.thirdpart}`}>
                            {ndarray.map((each, index) =>

                                <div key={index} className={`${styles.eachofthem}`}>

                                    <div className={styles.boxcontent} >

                                        <div className={styles.userr}>
                                            {each.user}
                                        </div>

                                        <div className={styles.numberr}>
                                            {each.number}
                                        </div>


                                        <div className={styles.detailss}>
                                            {each.details}
                                        </div>

                                    </div>

                                </div>
                            )}



                        </div>
                    </div>

                );




            case "Reports":
                return (
                    <div>

                        <div className={`${styles.reportsContainer}`}>
                            <div className={`${styles.reportsHeader}`}>
                                <h1 className={`${styles.reportsTitle}`}>Reports</h1>
                                <p className={`${styles.reportsSubtitle}`}>
                                    Generate, manage, and download business reports
                                </p>
                            </div>

                            <div className={`${styles.reportsActions}`}>
                                <div className={`${styles.filterGroup}`}>
                                    <div className={`${styles.filterButton}`}>
                                        <MdOutlineDateRange className={`${styles.filterIcon}`} />
                                        <span>Date Range</span>
                                    </div>
                                    <div className={`${styles.filterButton}`}>
                                        <FiFilter className={`${styles.filterIcon}`} />
                                        <span>Filter Type</span>
                                    </div>
                                </div>

                                <div className={`${styles.actionButtons}`}>
                                    <button className={`${styles.uploadButton}`}>
                                        <BsUpload />
                                        <span>Upload Report</span>
                                    </button>
                                    <button className={`${styles.generateButton}`}>
                                        <BsFileEarmarkText />
                                        <span>Generate Report</span>
                                    </button>
                                </div>
                            </div>

                            <div className={`${styles.reportsGrid}`}>
                                {dashboardData.map((report, index) => (
                                    <div className={`${styles.reportCard}`} key={index}>
                                        <div className={`${styles.cardHeader}`}>
                                            <span className={`${styles.cardTitle}`}>{report.title}</span>
                                            {report.icon}
                                        </div>
                                        <div className={`${styles.cardBody}`}>
                                            <span className={`${styles.cardValue}`}>{report.value}</span>
                                            {report.subtitle.includes('%') && (
                                                <IoIosArrowUp className={`${styles.trendIcon}`} />
                                            )}
                                        </div>
                                        <p className={`${styles.cardSubtitle}`}>{report.subtitle}</p>
                                    </div>
                                ))}
                            </div>

                            <div className={`${styles.recentReportsContainer}`}>
                                <div className={`${styles.reportsHeader}`}>
                                    <h2 className={`${styles.reportsTitle}`}>Recent Reports</h2>
                                    <p className={`${styles.reportsSubtitle}`}>
                                        View and manage all generated reports
                                    </p>
                                </div>
                                <div className={`${styles.reportsTable}`}>
                                    <div className={`${styles.tableHeader}`}>
                                        <div className={`${styles.headerItem} ${styles.reportName}`}>Report Name</div>
                                        <div className={`${styles.headerItem} ${styles.type}`}>Type</div>
                                        <div className={`${styles.headerItem} ${styles.dateGenerated}`}>Date Generated</div>
                                        <div className={`${styles.headerItem} ${styles.status}`}>Status</div>
                                        <div className={`${styles.headerItem} ${styles.size}`}>Size</div>
                                        <div className={`${styles.headerItem} ${styles.format}`}>Format</div>
                                        <div className={`${styles.headerItem} ${styles.actions}`}>Actions</div>
                                    </div>
                                    <div className={`${styles.tableBody}`}>
                                        {recentReportEntries.map((report, index) => (
                                            <div className={`${styles.tableRow}`} key={index}>
                                                <div className={`${styles.rowItem} ${styles.reportNameContent}`}>
                                                    <BsFileEarmarkText className={`${styles.reportFileIcon}`} />
                                                    {report.name}
                                                </div>
                                                <div className={`${styles.rowItem} ${styles.typeContent}`}>
                                                    <span className={`${styles.typeBadge} ${styles[report.type.class]}`}>
                                                        {report.type.text}
                                                    </span>
                                                </div>
                                                <div className={`${styles.rowItem} ${styles.dateGeneratedContent}`}>
                                                    {report.date}
                                                </div>
                                                <div className={`${styles.rowItem} ${styles.statusContent}`}>
                                                    <span className={`${styles.statusBadge} ${styles[report.status.class]}`}>
                                                        {report.status.text}
                                                    </span>
                                                </div>
                                                <div className={`${styles.rowItem} ${styles.sizeContent}`}>
                                                    {report.size}
                                                </div>
                                                <div className={`${styles.rowItem} ${styles.formatContent}`}>
                                                    {report.format}
                                                </div>
                                                <div className={`${styles.rowItem} ${styles.actionsContent}`}>
                                                    <BsEye className={`${styles.actionIcon}`} />
                                                    <BsDownload className={`${styles.actionIcon}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* Reports last part */}


                        <div className={`${styles.widgetLayout}`}>
                            {/* Quick Report Templates Section */}
                            <div className={`${styles.widgetCard}`}>
                                <div className={`${styles.widgetHeader}`}>
                                    <h2 className={styles.widgetTitle}>Quick Report Templates</h2>
                                    <span className={styles.widgetSubtitle}>Create a new report from a template</span>
                                </div>
                                <ul className={styles.widgetList}>
                                    {reportTemplates.map((template, index) => (
                                        <li key={index} className={styles.widgetListItem}>
                                            <BsFileEarmarkText className={styles.listItemIcon} />
                                            <span>{template.templateName}</span>
                                            <button className={styles.generateBtn}>Generate</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Scheduled Reports Section */}
                            <div className={`${styles.widgetCard}`}>
                                <div className={`${styles.widgetHeader}`}>
                                    <h2 className={styles.widgetTitle}>Scheduled Reports</h2>
                                    <span className={styles.widgetSubtitle}>Reports that run automatically</span>
                                </div>
                                <ul className={styles.widgetList}>
                                    {reportSchedules.map((schedule, index) => (
                                        <li key={index} className={styles.widgetListItem}>
                                            <MdOutlineDateRange className={styles.listItemIcon} />
                                            <div className={styles.scheduleDetails}>
                                                <span>{schedule.itemName}</span>
                                                <span className={styles.scheduleInfo}>{schedule.scheduleDetails}</span>
                                            </div>
                                            <span className={`${styles.scheduleStatus} ${styles[schedule.scheduleStatus.toLowerCase()]}`}>
                                                {schedule.scheduleStatus}
                                            </span>
                                            <HiDotsHorizontal />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>








                    </div>
                );




            case "Analytics":
                return (

                    



<div className={styles.analyticsDashboard}>
    <h1 className={styles.analyticsTitle}>Analytics Dashboard</h1>
    <p className={styles.analyticsSubtitle}>Comprehensive insights into your business performance</p>

    <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
                <span className={styles.metricLabel}>Total Users</span>
                <FaUsers className={styles.metricIcon} />
            </div>
            <p className={styles.metricValue}>2,100</p>
            <p className={`${styles.metricChange} ${styles.positiveChange}`}>+15.4% from last month</p>
        </div>

        <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
                <span className={styles.metricLabel}>Conversion Rate</span>
                <FaChartLine className={styles.metricIcon} />
            </div>
            <p className={styles.metricValue}>4.8%</p>
            <p className={`${styles.metricChange} ${styles.positiveChange}`}>+0.8% from last month</p>
        </div>

        <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
                <span className={styles.metricLabel}>Avg. Session Time</span>
                <MdAccessTime className={styles.metricIcon} />
            </div>
            <p className={styles.metricValue}>4m 32s</p>
            <p className={`${styles.metricChange} ${styles.negativeChange}`}>-12s from last month</p>
        </div>

        <div className={styles.metricCard}>
            <div className={styles.cardHeader}>
                <span className={styles.metricLabel}>Revenue Growth</span>
                <IoMdTrendingUp className={styles.metricIcon} />
            </div>
            <p className={styles.metricValue}>21.8%</p>
            <p className={`${styles.metricChange} ${styles.positiveChange}`}>+5.2% from last month</p>
        </div>
    </div>
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