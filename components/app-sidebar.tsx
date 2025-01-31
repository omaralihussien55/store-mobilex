"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartArea,
  ChartBar,
  Command,
  DollarSignIcon,
  Frame,
  GalleryVerticalEnd,
  Heart,
  Map,
  PieChart,
  ProjectorIcon,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "omar ali",
    email: "omar@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "team 1",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "team 2",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "team 3",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "dashboard",
      url: "/dashboard",
      icon: ChartArea,
      isActive: true,
      items: [
      ],
    },
    {
      title: "products",
      url: "/dashboard/products",
      icon: SquareTerminal,
      isActive: true,
      items: [
      ],
    },
    {
      title: "favorite",
      url: "/dashboard/favorite",
      icon: Heart,
      isActive: true,
      items: [
      ],
    },
    {
      title: "Sales",
      url: "/dashboard/sales",
      icon:DollarSignIcon,
      isActive: true,
      items: [
      ],
    },
    {
      title: "category",
      url: "#",
      icon: Bot,
      items: [
        {
          title:"all category",
          url:"#"
        },
        {
          title: "samsung",
          url: "#",
        },
        {
          title: "iphone",
          url: "#",
        },
        {
          title: "lenovo",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "projects",
      url: "#",
      icon:   ProjectorIcon,
    },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavProjects projects={data.projects} /> */}
        
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
