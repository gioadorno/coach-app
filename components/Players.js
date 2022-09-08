import React from 'react'
import Image from 'next/dist/client/image'
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

const Players = ({ setSelectedPlayer, data, selectedPlayer, inGame, setInGame, setError, playerTime, setRunning, running }) => {


  return (
    <div className='flex flex-col w-full'>
        <div className='align-center justify-center text-3xl font-semibold text-center py-3 text-white border-b-2 border-white'>
            Phoenix Suns
        </div>
        {data.map(player => (
            <div onClick={() => setSelectedPlayer(player)} className={`border-b-2 border-white h-[200px] flex w-full p-6 ${player.status === 'Injured' && 'bg-yellow-600'} ${player.status === 'Suspended' && 'bg-red-400 group-hover:opacity-90 transform ease-in duration-200'} ${player.name === selectedPlayer.name && 'bg-green-700 group-hover:opacity-90 transform ease-in duration-200'}`} key={player.name}>
                <div className='h-full relative w-[150px] flex flex-col group-hover:opacity-90 items-center'>
                    <Image width={'100%'} height='100%' src={player.image} />
                    <h1 className='text-white font-semibold text-center pt-2 text-lg'>
                        {player.name}
                    </h1>
                </div>
                <div className='flex items-center justify-center pl-5 h-full'>
                    <h1 className='font-semibold text-white text-2xl'>
                        {player.position}
                    </h1>
                </div>
                <div className='flex flex-grow h-full items-center jusify-center text-white pl-32'>
                <div className='flex-col flex items-center justify-center px-4'>
                                <h1 className='underline font-semibold text-2xl'>
                                    GP
                                </h1>
                                <p className='font-semibold text-xl'>{player.stats.GP}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-4'>
                                <h1 className='underline font-semibold text-2xl'>
                                    MIN
                                </h1>
                                <p className='font-semibold text-xl'>{player.stats.MIN}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-4'>
                                <h1 className='underline font-semibold text-2xl'>
                                    FG%
                                </h1>
                                <p className='font-semibold text-xl'>{player.stats.FG}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-4'>
                                <h1 className='underline font-semibold text-2xl'>
                                    3P%
                                </h1>
                                <p className='font-semibold text-xl'>{player.stats.ThreePointPercent}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-4'>
                                <h1 className='underline font-semibold text-2xl'>
                                    REB
                                </h1>
                                <p className='font-semibold text-xl'>{player.stats.REB}</p>
                            </div>
                </div>
                <div className='flex flex-grow justify-end items-center'>
                    <div className='flex items-center pr-12'>
                        <div className='flex flex-col text-center underline text-white font-semibold text-lg px-5 items-center'>
                            Time In
                            <Timer active={running === true ? true : false} time={playerTime}>
                                    <Timecode time={playerTime} />
                            </Timer>
                        </div>
                        <div className='flex flex-col text-center underline text-white font-semibold text-lg px-5 items-center'>
                            Total Time
                            <p>
                                0:00
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center px-3'>
                        {inGame.indexOf(player.name) === -1 ? (
                        <button onClick={() => {
                            if(inGame.length <= 4) {
                                if(inGame.indexOf(player.name) === -1)
                                setInGame([ ...inGame, player.name ])
                                setRunning(true)
                            } else {
                                setError(true)
                            }
                        }} className='py-1 px-3 text-white rounded-lg shadow-md border-white border-2 mr-2 hover:scale-105 hover:bg-white hover:text-black hover:border-white transform duration-200 ease-in'>
                            Put in
                        </button>

                        ): 
                        <button disabled className='py-1 px-3 text-gray-300 text-opacity-60 rounded-lg shadow-md border-gray-300 border-opacity-60 border-2 mr-2 hover:scale-105 transform duration-200 ease-in'>
                            In Game
                        </button>
                        }
                        {inGame.indexOf(player.name) != -1 ? (
                        <button onClick={() => {
                            const index = inGame.indexOf(player.name)
                            if (index) {
                                inGame.splice(index, 1)
                                setInGame(inGame)
                                setRunning(false)
                            }
                        
                        }} className='py-1 px-3 text-white rounded-lg shadow-md border-white border-2 hover:scale-105 hover:bg-white hover:text-black hover:border-white transform duration-200 ease-in'>
                            Take out
                        </button>
                        ) :
                        <button disabled className='py-1 px-3 text-gray-300 text-opacity-60 rounded-lg shadow-md border-gray-300 border-opacity-60 border-2 hover:scale-105  transform duration-200 ease-in'>
                            Take out
                        </button>
                        }
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Players