import AppointmentBooking from "./atoms/Atab";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-4" id="appointment">
      <h1 className="text-2xl font-bold text-center mb-6">
        Appointment System
      </h1>
      <AppointmentBooking />
    </div>
  );
};

export default App;
