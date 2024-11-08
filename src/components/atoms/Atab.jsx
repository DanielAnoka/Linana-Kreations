import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CombinedAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [contactDetails, setContactDetails] = useState({ name: '', email: '', phone: '' });
  const [dressType, setDressType] = useState('');
  const [fabricPreference, setFabricPreference] = useState('');
  const [styleImage, setStyleImage] = useState(null);
  const [notes, setNotes] = useState('');

  const handleImageUpload = (e) => {
    setStyleImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment submitted:', {
      date: selectedDate,
      time: selectedTime,
      slot: selectedSlot,
      contact: contactDetails,
      consultation: { dressType, fabricPreference, styleImage, notes },
    });
  };

  const morningSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];
  const afternoonSlots = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Book an Appointment & Consultation</h2>
      <form onSubmit={handleSubmit}>
        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-md font-semibold mb-2">Select Date</h3>
            <Calendar value={selectedDate} onChange={setSelectedDate} />
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-md font-semibold mb-2">Select Time Slot</h3>
            <div className="flex justify-around space-x-4 mt-2">
              {['Morning', 'Afternoon'].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors duration-300 ${
                    selectedTime === slot ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
                  } hover:bg-indigo-100 hover:text-indigo-600`}
                  onClick={() => {
                    setSelectedTime(slot);
                    setSelectedSlot(''); // Reset selected slot when changing time of day
                  }}
                >
                  {slot === 'Morning' ? '🌅' : '🌙'} {slot}
                </button>
              ))}
            </div>
            
            {/* Display time slots based on morning or afternoon selection */}
            {selectedTime && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {(selectedTime === 'Morning' ? morningSlots : afternoonSlots).map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      selectedSlot === time ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                    } hover:bg-indigo-200`}
                    onClick={() => setSelectedSlot(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Details */}
        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2">Contact Details</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg w-full mb-2 p-2"
            value={contactDetails.name}
            onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg w-full mb-2 p-2"
            value={contactDetails.email}
            onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-lg w-full mb-2 p-2"
            value={contactDetails.phone}
            onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
            required
          />
        </div>

        {/* Consultation Details */}
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="text-md font-semibold mb-2">Consultation Details</h3>
          <label className="block mb-2">Dress Type:</label>
          <select
            className="border rounded-lg w-full mb-2 p-2"
            value={dressType}
            onChange={(e) => setDressType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="wedding">Wedding</option>
            <option value="evening_gown">Evening Gown</option>
          </select>

          <label className="block mb-2">Fabric Preference:</label>
          <select
            className="border rounded-lg w-full mb-2 p-2"
            value={fabricPreference}
            onChange={(e) => setFabricPreference(e.target.value)}
          >
            <option value="">Select</option>
            <option value="silk">Silk</option>
            <option value="satin">Satin</option>
          </select>

          <label className="block mb-2">Upload Style Inspiration (optional):</label>
          <input
            type="file"
            className="border rounded-lg w-full mb-2 p-2"
            onChange={handleImageUpload}
          />

          <label className="block mb-2">Additional Notes:</label>
          <textarea
            className="border rounded-lg w-full mb-2 p-2"
            rows="4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
          Submit Appointment & Consultation
        </button>
      </form>
    </div>
  );
};

export default CombinedAppointment;
