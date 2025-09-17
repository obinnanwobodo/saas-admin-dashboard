'use client'

import React, { useState } from 'react';
import styles from './Analyticdash.module.css';
import { FaUsers, FaChartLine } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import { MdAccessTime } from 'react-icons/md';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Data for User Growth charts
const userGrowthData = [
    { name: 'Jan', total: 1100 },
    { name: 'Feb', total: 1350 },
    { name: 'Mar', total: 1650 },
    { name: 'Apr', total: 1800 },
    { name: 'May', total: 2000 },
    { name: 'Jun', total: 2200 },
];

const newVsReturningData = [
    { name: 'Jan', 'New Users': 250, 'Returning Users': 950 },
    { name: 'Feb', 'New Users': 300, 'Returning Users': 1100 },
    { name: 'Mar', 'New Users': 280, 'Returning Users': 1150 },
    { name: 'Apr', 'New Users': 320, 'Returning Users': 1300 },
    { name: 'May', 'New Users': 350, 'Returning Users': 1400 },
    { name: 'Jun', 'New Users': 400, 'Returning Users': 1600 },
];

// Data for Conversion funnel
const conversionFunnelData = [
    { label: 'Visitors', value: 10000, percentage: 100 },
    { label: 'Sign Ups', value: 2500, percentage: 25.0 },
    { label: 'Trial Users', value: 1200, percentage: 12.0 },
    { label: 'Paid Users', value: 480, percentage: 4.8 },
    { label: 'Premium Users', value: 120, percentage: 1.2 },
];

// Data for Revenue chart - now showing Product A vs. Product B sales
const productSalesData = [
    { name: 'Jan', 'Product A Sales': 8000, 'Product B Sales': 5500 },
    { name: 'Feb', 'Product A Sales': 9500, 'Product B Sales': 6000 },
    { name: 'Mar', 'Product A Sales': 8900, 'Product B Sales': 7000 },
    { name: 'Apr', 'Product A Sales': 11000, 'Product B Sales': 8500 },
    { name: 'May', 'Product A Sales': 10500, 'Product B Sales': 9200 },
    { name: 'Jun', 'Product A Sales': 12500, 'Product B Sales': 10000 },
];

const AnalyticsDashboard = () => {
    const [activeTab, setActiveTab] = useState('User Growth');

    const renderAnalyticsContent = () => {
        switch (activeTab) {
            case 'User Growth':
                return (
                    <div className={styles.chartsContainer}>
                        <div className={styles.chartCard}>
                            <div className={styles.chartHeader}>
                                <FaUsers className={styles.chartIcon} />
                                <h2 className={styles.chartTitle}>User Growth Trend</h2>
                                <p className={styles.chartSubtitle}>Total user growth over the last 6 months</p>
                            </div>
                            <div className={styles.chartWrapper}>
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={userGrowthData}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                        <YAxis axisLine={false} tickLine={false} tickCount={5} />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="total" stroke="#4251f0" strokeWidth={2} dot={{ fill: '#4251f0', r: 3 }} activeDot={{ r: 6 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className={styles.chartCard}>
                            <div className={styles.chartHeader}>
                                <h2 className={styles.chartTitle}>New vs Returning Users</h2>
                                <p className={styles.chartSubtitle}>User acquisition breakdown</p>
                            </div>
                            <div className={styles.chartWrapper}>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={newVsReturningData}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                        <YAxis axisLine={false} tickLine={false} />
                                        <Tooltip />
                                        <Bar dataKey="New Users" stackId="a" fill="#4251f0" />
                                        <Bar dataKey="Returning Users" stackId="a" fill="#99a6f8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                );
            case 'Retention':
                return <div className={styles.placeholder}>Retention analytics coming soon.</div>;
            case 'Conversion':
                return (
                    <div className={styles.conversionContainer}>
                        <div className={styles.conversionFunnel}>
                            <h2 className={styles.chartTitle}>Conversion Funnel</h2>
                            <p className={styles.chartSubtitle}>User journey from visitor to premium customer</p>
                            <ul className={styles.funnelList}>
                                {conversionFunnelData.map((step, index) => (
                                    <li key={index} className={styles.funnelItem}>
                                        <div className={styles.funnelLabel}>
                                            <span className={styles.funnelDot} style={{ backgroundColor: '#4251f0' }}></span>
                                            {step.label}
                                        </div>
                                        <div className={styles.funnelValues}>
                                            <span className={styles.funnelValue}>{step.value.toLocaleString()}</span>
                                            <span className={styles.funnelPercentage}>{step.percentage.toFixed(1)}%</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.conversionRateCard}>
                            <h2 className={styles.conversionRateValue}>4.8%</h2>
                            <p className={styles.conversionRateLabel}>Overall Conversion Rate</p>
                            <p className={`${styles.conversionRateChange} ${styles.positiveChange}`}>+0.8% from last month</p>
                        </div>
                    </div>
                );
            case 'Revenue':
                return (
                    <div className={styles.chartsContainer}>
                        <div className={styles.chartCard}>
                            <div className={styles.chartHeader}>
                                <IoMdTrendingUp className={styles.chartIcon} />
                                <h2 className={styles.chartTitle}>Product Sales Trend</h2>
                                <p className={styles.chartSubtitle}>Monthly sales performance for key products</p>
                            </div>
                            <div className={styles.chartWrapper}>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={productSalesData}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                        <YAxis axisLine={false} tickLine={false} />
                                        <Tooltip />
                                        <Bar dataKey="Product A Sales" fill="#4251f0" barSize={30} />
                                        <Bar dataKey="Product B Sales" fill="#99a6f8" barSize={30} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.analyticsPage}>
            <h1 className={styles.analyticsTitle}>Analytics Dashboard</h1>
            <p className={styles.analyticsSubtitle}>Comprehensive insights into your business performance</p>
            
            {/* The metric cards are now part of the main return to always be visible */}
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

            {/* Tab navigation */}
            <div className={styles.tabsContainer}>
                {['User Growth', 'Retention', 'Conversion', 'Revenue'].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab-specific content rendered by the switch statement */}
            <div className={styles.tabContent}>
                {renderAnalyticsContent()}
            </div>
        </div>
    );
};

export default AnalyticsDashboard;