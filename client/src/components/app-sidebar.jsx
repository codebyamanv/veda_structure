import * as React from 'react'

import { SearchForm } from '@/components/search-form'
import { VersionSwitcher } from '@/components/version-switcher'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar'
import Link from 'next/link'

// This is sample data.
const data = {
    versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
    navMain: [
        {
            title: 'Stats',
            url: '#',
            items: [
                {
                    title: 'Dashboard',
                    url: '/admin/dashboard',
                },
            ],
        },
        {
            title: 'Rudraksha',
            url: '#',
            items: [
                {
                    title: 'All Rudraksha',
                    url: '/admin/rudraksha',
                },
                {
                    title: 'All Bracelets',
                    url: '/admin/bracelet',
                },
                // {
                //     title: 'Add Rudraksha',
                //     url: '/admin/add-rudraksha',
                // },
                {
                    title: 'Orders',
                    url: '/admin/orders',
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }) {
    return (
        <Sidebar {...props}>
            <SidebarHeader className="text-center text-2xl font-black my-2">
                <div>Admin Panel</div>
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={item.isActive}>
                                            <Link href={item.url}>{item.title}</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
