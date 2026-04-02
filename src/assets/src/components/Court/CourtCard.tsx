
import CourtHeader from './CourtHeader';
import TimeSlotGrid from './TimeSlotGrid';


type Court = {
  name: string;
  type?: string; // 球场类型（室内/室外），可选
  price?: number; // 价格，单位元/小时，可选
  timeSlots: {time: string;available: boolean;
  }[];
};


export default  function CourtCard(props:  Court ) {
  return (
    <div className="court-card mb-3 shadow-sm">
      <CourtHeader name={props.name} type={props.type} price={props.price} />
      <TimeSlotGrid slots={props.timeSlots} onConfirm={() => {}} />
    </div>
  );
}
