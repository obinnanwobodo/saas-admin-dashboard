'use client'

import React from 'react';
import styles from './Report.module.css'
import { FiFilter } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsFileEarmarkText, BsUpload, BsEye, BsDownload } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineDateRange } from 'react-icons/md';

// Data for the Report dashboard cards
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

// Data for the recent reports table
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

// Data for the quick report templates section
const reportTemplates = [
    { templateName: 'Daily Sales Summary' },
    { templateName: 'User Activity Report' },
    { templateName: 'Financial Overview' },
    { templateName: 'System Performance' },
];

// Data for the scheduled reports section
const reportSchedules = [
    { itemName: 'Weekly Analytics', scheduleDetails: 'Every Monday at 9:00 AM', scheduleStatus: 'Active' },
    { itemName: 'Monthly Financial', scheduleDetails: '1st of every month', scheduleStatus: 'Active' },
    { itemName: 'Quarterly Review', scheduleDetails: 'Every 3 months', scheduleStatus: 'Paused' },
];


const Report = () => {
    return (
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

            <div className={`${styles.widgetLayout}`}>
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
};

export default Report;