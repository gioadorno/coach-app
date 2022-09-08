import Image from 'next/image';
import React from 'react';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

const PlayerInfo = ({ selectedPlayer, running, playerTime }) => {
  return (
    <div className='flex flex-col border-b-2 border-white h-[300px] w-full bg-purple-600 bg-opacity-60'>
        <div className='flex h-[100%]'>
            <div className='flex items-center relative justify-center p-6 h-full w-[400px]'>
                <img src={selectedPlayer?.image} layout='fill'  />
            </div>
            <div className='flex w-full flex-grow'>
                <div className='flex-col pt-8 '>
                    <h1 className='text-4xl font-semibold'>
                        {selectedPlayer.name}, {selectedPlayer.number}
                    </h1>
                    {selectedPlayer.status === 'Injured' && (
                        <h1 className='font-semibold text-xl text-yellow-600'>Injured</h1>
                    )}
                    {selectedPlayer.status === 'Suspended' && (
                        <h1 className='font-semibold text-xl text-red-600'>Suspended</h1>
                    )}
                    <div className='flex pt-5 items-center'>

                        <h1 className='font-semibold text-2xl'>
                            Position:
                        </h1>
                        <p className='font-semibold text-2xl pl-3'>
                            {selectedPlayer.position}
                        </p>
                    </div>

                </div>
                    <div className='flex flex-grow pl-52 items-center'>
                        <div className='flex flex-col py-16'>
                            <h1 className='font-semibold text-3xl underline pb-3'>
                                Time in
                            </h1>
                            <div className='flex font-semibold items-center justify-center text-xl'>
                                <Timer active={running === true ? true : false} time={playerTime}>
                                    <Timecode time={playerTime} />
                                </Timer>

                            </div>
                        </div>
                        <div className='flex flex-col py-16 pl-28'>
                            <h1 className='font-semibold text-3xl underline pb-3'>
                                Total Time
                            </h1>
                            <div className='flex font-semibold items-center justify-center text-xl'>
                                <Timecode time={playerTime} />

                            </div>
                        </div>
                    </div>
            </div>
            <div className='flex flex-col justify-center items-center pr-8'>
                        <h1 className='font-semibold text-3xl pb-2'>
                            Stats
                        </h1>
                        <div className='items-center flex justify-center px-2'>
                            <div className='flex-col flex items-center justify-center px-2'>
                                <h1 className='underline font-semibold text-xl'>
                                    GP
                                </h1>
                                <p className='font-semibold text-xl'>{selectedPlayer.stats.GP}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-2'>
                                <h1 className='underline font-semibold text-xl'>
                                    MIN
                                </h1>
                                <p className='font-semibold text-xl'>{selectedPlayer.stats.MIN}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-2'>
                                <h1 className='underline font-semibold text-xl'>
                                    FG%
                                </h1>
                                <p className='font-semibold text-xl'>{selectedPlayer.stats.FG}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-2'>
                                <h1 className='underline font-semibold text-xl'>
                                    3P%
                                </h1>
                                <p className='font-semibold text-xl'>{selectedPlayer.stats.ThreePointPercent}</p>
                            </div>
                            <div className='flex-col flex items-center justify-center px-2'>
                                <h1 className='underline font-semibold text-xl'>
                                    REB
                                </h1>
                                <p className='font-semibold text-xl'>{selectedPlayer.stats.REB}</p>
                            </div>
                        </div>
                    </div>
        </div>
        <div className='h-[30%] w-full justify-evenly border-t-[1px] border-black flex items-center'>
            <div className='flex flex-col col-span-1 items-center'>
                <h1 className='text-md font-semibold'>Total Minutes (Selected Players)</h1>
                <p >Total time here</p>
            </div>
            <div className='flex flex-col col-span-1 items-center px-28'>
                <h1 className='text-md font-semibold'>Stats (Selected Players)</h1>
                <p >Combined Stats here</p>
            </div>
        </div>
    </div>
  )
}

export default PlayerInfo