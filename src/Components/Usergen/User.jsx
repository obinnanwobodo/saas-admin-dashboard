'use client'

import React from 'react';
import styles from './User.module.css'; // Assuming you have a shared CSS file
import { FiUsers, FiFilter, FiUser, FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiExport } from "react-icons/pi";
import Image from 'next/image';
import profile from '../../../public/Gemini_Generated_Image_eu7k7feu7k7feu7k.png';

// Dummy data for the Users Dashboard
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
];

const Users = () => {
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
                            <div><PiExport /></div>
                            <p>Export</p>
                        </div>
                        <div className={styles.add}>
                            <div><IoMdAdd /></div>
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
                            <p className={styles.jd}> Join Date</p>
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

            <div className={`${styles.thirdpart}`}>
                {ndarray.map((each, index) =>
                    <div key={index} className={`${styles.eachofthem}`}>
                        <div className={styles.boxcontent}>
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
};

export default Users;