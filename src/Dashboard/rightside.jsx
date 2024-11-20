import React from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ReCharts() {
  const data = [
    { name: "Youtube" ,   y: 211 },
    { name: "Pinterest" , y: 192 },
    { name: "Facebook" ,  y: 145 }, 
    { name: "LinkedIn" ,  y: 46  },
    { name: "Instagram" , y: 40  },
    { name: "Twitter" ,   y: 27  },
  ];
  const data01 = [
    {  name: "Pinterest" , y: 110 },
    {  name: "Youtube"  ,  y: 100 },
    {  name: "Facebook" ,  y: 95  },
    {  name: "Twitter"  ,  y: 35  },
    {  name: "LinkedIn" ,  },
    {  name: "Instagram" , },
    
  ];
  
    return ( 
    
    <div className='w-[34%] border bg-white my-2 mx-auto '>

<ResponsiveContainer width="100%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar name='Website Traffic' dataKey="y" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>

     
      <ResponsiveContainer width="100%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={data01}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar name='Site Revenue' dataKey="y" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
     
     </div>
    
  
  
    
      
  )
}
