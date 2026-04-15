import CourtCard from "./assets/src/components//Body/Court/CourtCard";
import CourtSearcher from "./assets/src/components//Body/Court/CourtSearcher";
import AvailabilityDateSelection from "./assets/src/components/availability/AvailabilityDateSelection";
import AvailabilityFrames from "./assets/src/components/availability/AvailabilityFrames";
import Nav from "./assets/src/components/Navgition/Nav";
import { mockCourts } from "./data/mockCourts";

function App() {
  return (
    <>
      <Nav />
      <CourtSearcher />
      <div>
        {mockCourts.map((court) => (
          <CourtCard
            key={court.id}
            name={court.name}
            type={court.type}
            price={court.price}
            timeSlots={court.timeSlots}
          />
        ))}
        <div>
          <AvailabilityDateSelection />
          <AvailabilityFrames />
        </div>
      </div>
    </>
  );
}

export default App;
