import React from 'react'
import Image from 'next/dist/client/image'

const Opponents = ({ opponentTeam, awayTeam }) => {
  return (
    opponentTeam === true &&
        <div className='flex flex-col w-full border-l-2 border-purple-600 border-opacity-60'>
        <div className='align-center justify-center text-3xl font-semibold text-center py-3 text-white border-b-2 border-white'>
            Chicago Bulls
        </div>
            {awayTeam.map(player =>
            <div key={olayer.name} className={`border-b-2 border-white h-[200px] flex w-full p-6`}>
                <div className='flex flex-grow justify-end items-center'>
                    <div className='flex items-center'>
                        <div>
                        
                        </div>
                        <div>
                        
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center pr-5 h-full'>
                    <h1 className='font-semibold text-white text-2xl'>
                        {player.position}
                    </h1>
                </div>
                <div className='h-full relative w-[150px] flex flex-col group-hover:opacity-90 items-center '>
                    <Image width={'100%'} height='100%' src={player.image} alt={`${player.name} photo`} />
                    <h1 className='text-white font-semibold text-center pt-2 text-lg'>
                        {player.name}
                    </h1>
                </div>
            </div>
                )}
        </div>
    
  )
}

export default Opponents