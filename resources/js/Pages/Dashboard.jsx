import React from 'react';
import { Head, usePage } from '@inertiajs/react'
import  LogoutButton  from "../Components/LogoutButton";
import { Navbar, Dropdown, Avatar } from 'flowbite-react';

const Dashboard = () => {
    const { user } = usePage().props;

    return (
        
        
        <Navbar fluid rounded className="bg-gray-200">
             <Head title="Home" />
            <Navbar.Brand href="#">
                <img
                    src="https://img.icons8.com/?size=500&id=52559&format=png&color=000000"
                    className="h-10"
                    alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold text-black whitespace-nowrap">Authentication</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://static.vecteezy.com/system/resources/previews/027/312/306/non_2x/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png"
                            rounded
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">{user.name}</span>
                        <span className="block truncate text-sm font-medium">{user.email}</span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <LogoutButton />
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    

    );
};

export default Dashboard;
