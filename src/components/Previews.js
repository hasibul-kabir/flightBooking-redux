import React from 'react';
import { useSelector } from 'react-redux';
import PreviewRow from './PreviewRow';

const Previews = () => {
    const bookings = useSelector((state) => state);

    return (
        bookings.length > 0 &&
        <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                    <tr className="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th className="text-center">Journey Date</th>
                        <th className="text-center">Guests</th>
                        <th className="text-center">Class</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                {
                    bookings.map((booking, index) =>
                        <PreviewRow booking={booking} index={index} />
                    )
                }

            </table>
        </div>
    )
}

export default Previews