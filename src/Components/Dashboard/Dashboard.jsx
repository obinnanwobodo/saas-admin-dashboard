'use client'

import React from 'react';
import styles from './Dashboard.module.css'
import { IoMdTrendingUp } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { LuDollarSign, LuActivity } from "react-icons/lu";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import DeviceUsageChart from "../charts/DeviceUsageChart.jsx";
import { FaUsers, FaChartLine } from 'react-icons/fa';
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
];

const Dashboard = ({ isSidebarCollapsed }) => {
    return (
        <div className={`${styles.dashboardgen} ${isSidebarCollapsed ? styles.dashboardExpanded : ''}`}>

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
                            <h3 className={`${styles.percent} ${each.percent.startsWith('-') ? styles.specialpercent : ""}`}> {each.percent} </h3>
                            <p className={`${styles.final}`}> {each.final}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.revnduser}`}>
                <div className={`${styles.revtrendgen}`}>
                    <div className={styles.icnndrev}>
                        <div className={styles.trendicnn}><IoMdTrendingUp /></div>
                        <h2>Revenue Trend</h2>
                    </div>
                    <p className={styles.monthly}>Monthly revenue over the last 6 months</p>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="revenue" stroke="#4251f0" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className={`${styles.usergen}`}>
                    <div className={styles.icnnduser}>
                        <div className={styles.usersicn}><FiUsers /></div>
                        <h2>User Analytics</h2>
                    </div>
                    <p className={styles.useracq}>User acquisition over time</p>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={userData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="users" fill="#4251f0" barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className={styles.devicendrec}>
                <div className={styles.devicegen}>
                    <h2>Device Usage</h2>
                    <p>Traffic by device type</p>
                    <div><DeviceUsageChart /></div>
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
                                <div className={styles.rounddot1}></div>
                                <div className={styles.namendact}>
                                    <h4>John Doe</h4>
                                    <p>Signed up</p>
                                </div>
                            </div>
                            <p className={styles.timme}>2 minutes ago</p>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.first3}>
                                <div className={styles.rounddot2}></div>
                                <div className={styles.namendact}>
                                    <h4>Jane Smith</h4>
                                    <p>Made a purchase</p>
                                </div>
                            </div>
                            <p className={styles.timme}>5 minutes ago</p>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.first3}>
                                <div className={styles.rounddot3}></div>
                                <div className={styles.namendact}>
                                    <h4>System</h4>
                                    <p>Backup completed</p>
                                </div>
                            </div>
                            <p className={styles.timme}>1 hour ago</p>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.first3}>
                                <div className={styles.rounddot4}></div>
                                <div className={styles.namendact}>
                                    <h4>Bob Johnson</h4>
                                    <p>Updated profile</p>
                                </div>
                            </div>
                            <p className={styles.timme}>2 hours ago</p>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.first3}>
                                <div className={styles.rounddot5}></div>
                                <div className={styles.namendact}>
                                    <h4>Alice Brown</h4>
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
};

export default Dashboard;