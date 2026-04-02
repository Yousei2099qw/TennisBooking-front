import CourtCard from './assets/src/components/Court/CourtCard';
import { mockCourts } from './data/mockCourts';


function App() {
  return (
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
      
    </div>
  );
}

  
export default App;