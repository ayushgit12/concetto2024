import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Leaderboard(){
    

    const Leaderboard_data = [
        {
            rank: 1,
            ambassador: 'Sakshi',
            registrations: 10,
            referral_code: 123456
        },
        {
            rank: 2,
            ambassador: 'Saumya',
            registrations: 32,
            referral_code: 696969
            
        },
        {
            rank: 3,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
        {
            rank: 4,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
        {
            rank: 5,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
        {
            rank: 6,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
        {
            rank: 7,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
        {
            rank: 8,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
        {
            rank: 9,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
        {
            rank: 10,
            ambassador: 'Saksham',
            registrations: 5,
            referral_code: 420420
        },
    ]



    return (
        <>
        <div classname='bg-peach min-h-screen'>

        <br />
        <h1 className='text-center text-4xl font-bold'>Leaderboard</h1>
        <br /><br />
            <table className='border-collapse w-screen flex flex-col gap-2'>
                <tr className='border-bottom flex text-2xl mb-2'>
                    <th className='basis-1/12'>Rank</th>
                    <th className='basis-1/2'>Ambassador</th>
                    <th className='basis-1/4'>Registrations</th>
                    <th className='basis-1/4'>Referral Code</th>
                </tr>

                {Leaderboard_data.map((data) => (
                    <tr className='border-bottom flex text-center text-lg'>
                        <td className='basis-1/12'>{data.rank}</td>
                        <td className='basis-1/2'>{data.ambassador}</td>
                        <td className='basis-1/4'>{data.registrations}</td>
                        <td className='basis-1/4'>{data.referral_code}</td>
                    </tr>
                ))}
                
            </table>
        </div>
        </>
    );
}
