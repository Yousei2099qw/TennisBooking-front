import CourtHeader from "./CourtHeader";
import TimeSlotGrid from "./TimeSlotGrid";
import axios from "axios";

type Court = {
  id: number; // 场地ID
  name: string;
  type?: string; // 球场类型（室内/室外），可选
  price?: number; // 价格，单位元/小时，可选
  timeSlots: { time: string; available: boolean }[];
};

export default function CourtCard(props: Court) {
  function handleConfirm(time: string) {
    console.log("handleConfirm called, time =", time);

    // 这里可以调用后端接口进行预约，例如：
    axios
      .post(`/api/Reservation/1/reserve`, {
        courtId: 2,
        venueId: 1,
        timeSlot: { id: 1 },
        date: "2026-04-10", // 预约日期，格式为 YYYY-MM-DD
      })
      .then((res) => {
        console.log("Reservation successful:", res.data);
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          showError(err.response.data.message);
        }
      });
  }

  return (
    <div className="court-card mb-3 shadow-sm">
      <CourtHeader name={props.name} type={props.type} price={props.price} />
      <TimeSlotGrid slots={props.timeSlots} onConfirm={handleConfirm} />
    </div>
  );
}
