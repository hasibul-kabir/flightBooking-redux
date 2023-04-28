import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookFlight } from '../redux/flightBooking/actions';

const Inputs = () => {
    const [desFrom, setDesFrom] = useState('');
    const [desTo, setDesTo] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const [guest, setGuest] = useState('');
    const [seat, setSeat] = useState('');

    const dispatch = useDispatch();

    const submitData = (e) => {
        e.preventDefault();
        dispatch(bookFlight({
            From: desFrom,
            To: desTo,
            Date: journeyDate,
            Guest: guest,
            Class: seat
        }))
    }
    return (
        //  Input Data 
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={submitData}>
                    {/* From  */}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src="assets/img/icons/Frame.svg" alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" onChange={(e) => setDesFrom(e.target.value)} required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* To  */}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src="assets/img/icons/Frame.svg" alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" onChange={(e) => setDesTo(e.target.value)} required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/*  Date  */}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" onChange={(e) => setJourneyDate(e.target.value)} required />
                    </div>

                    {/* Guests  */}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src="assets/img/icons/Vector (1).svg" alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" onChange={(e) => setGuest(e.target.value)} required>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/* Class  */}
                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src="assets/img/icons/Vector (3).svg" alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" onChange={(e) => setSeat(e.target.value)} required>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity">
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Inputs