'use client';

import React, { useState } from 'react';
import styles from './User.module.css';
import { FiUsers, FiFilter, FiUser, FiSearch } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';
import { PiExport } from 'react-icons/pi';
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

// Initial user data for the table
const initialUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '15/01/2025',
    lastLogin: '2 hours ago',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '20/02/2025',
    lastLogin: '2 days ago',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Manager',
    status: 'Inactive',
    joinDate: '10/01/2025',
    lastLogin: '1 week ago',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '05/03/2025',
    lastLogin: '5 minutes ago',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'User',
    status: 'Pending',
    joinDate: '15/03/2024',
    lastLogin: 'Never',
  },
];

const Users = ({ isSidebarCollapsed }) => {
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: 'New User',
      email: 'new.user@example.com',
      role: 'User',
      status: 'Pending',
      joinDate: new Date().toLocaleDateString(),
      lastLogin: 'Just now',
    };

    setUsers([...users, newUser]);
  };

  return (
    <div className={`${styles.usersgen} ${isSidebarCollapsed ? styles.usersExpanded : ''}`}>

      <div className={styles.fitstpart}>
        <h2 className={styles.umanage}>User Management</h2>
        <p className={styles.manage}>Manage and monitor all users in your system</p>
        <div className={styles.searchndfilter}>
          <div className={styles.searchgen2}>
            <div>
              <FiSearch />
            </div>
            <input type="text" placeholder="Search users..." />
          </div>
          <div className={styles.fea}>
            <div className={styles.filter}>
              <div>
                <FiFilter />
              </div>
              <p>Filter</p>
            </div>
            <div className={styles.export}>
              <div>
                <PiExport />
              </div>
              <p>Export</p>
            </div>
            <button className={styles.add} onClick={handleAddUser}>
              <div>
                <IoMdAdd />
              </div>
              <p>Add</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.secondpart}>
        <h2 className={styles.alluse}>All Users</h2>
        <p className={styles.alist}>A list of all users including their name, email, role, and status.</p>
        <div className={styles.tablegen}>
          {/* Header Row */}
          <div className={styles.firstline}>
            <h2 className={styles.us}>User</h2>
            <h4 className={styles.role}>Role</h4>
            <h4 className={styles.sts}>Status</h4>
            <p className={styles.jd}>Join Date</p>
            <p className={styles.ll}>Last Login</p>
            <h3 className={styles.acti}>Actions</h3>
          </div>

          {/* User Rows */}
          {users.map((user) => (
            <div key={user.id} className={styles.secondline}>
              <div className={styles.first3}>
                <div className={styles.userimg}>
                  <Image src={profile} alt="User Profile" width={30} height={30} className={styles.userimg_pic} />
                </div>
                <div>
                  <h2 className={styles.jon}>{user.name}</h2>
                  <p className={styles.jonemail}>{user.email}</p>
                </div>
              </div>
              <div className={styles.role_data}>{user.role}</div>
              <div className={styles.status_data}>
                <h4 className={user.status === 'Active' ? styles.accti : styles.acctii}>{user.status}</h4>
              </div>
              <div className={styles.join_date_data}>{user.joinDate}</div>
              <div className={styles.last_login_data}>{user.lastLogin}</div>
              <div className={styles.actions_data}>
                <HiDotsHorizontal />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.thirdpart}>
        {ndarray.map((each, index) => (
          <div key={index} className={styles.eachofthem}>
            <div className={styles.boxcontent}>
              <div className={styles.userr}>{each.user}</div>
              <div className={styles.numberr}>{each.number}</div>
              <div className={styles.detailss}>{each.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;