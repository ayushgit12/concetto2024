import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Leaderboard(){
    

    return (
        <>
        <div classname='bg-peach min-h-screen'>

        <br />
        <h1 className='text-center text-4xl font-bold'>Leaderboard</h1>
        <br /><br />
            <table className='border-collapse w-screen'>
                <tr className='border-bottom flex'>
                    <th className='basis-1/12'>Rank</th>
                    <th className='basis-1/2'>Ambassador</th>
                    <th className='basis-1/4'>Registations</th>
                    <th className='basis-1/4'>Referral Code</th>
                </tr>
                
            </table>
        </div>
        </>
    );
}
