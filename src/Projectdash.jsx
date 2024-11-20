import React from 'react'
import SideBar from './Dashboard/SideBar'
import MainDashboard from './Dashboard/MainDashboard'
import SmallCharts from './Dashboard/SmallCharts'
import ReCharts from './Dashboard/rightside'



export default function ProjectDash() {
  return (
    <div className=' flex bg-slate-200 '>
        <SideBar />
        <MainDashboard  />
        <SmallCharts/>
        <ReCharts/>
      
        </div>
     
      
    
  )
}
