import ConfirmModal from "../Modal/ConfirmModal";
import { useState } from "react";
import { bookCourt } from "../service/BookingService";

type Slot = {
  time: string;
  available: boolean;
};
type TimeSlotGridProps = {
  slots: Slot[];
  onConfirm: (time: string) => void;
};
type BookingData = {
  venueId: number;
  userId: number;
  courtId: number;
  timeSlot: string;
  date: string;
};

export default function AvailabilityFrames(props: TimeSlotGridProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    venueId: 1, // 假设用户选择了场地ID为1
    courtId: 123,
    timeSlot: "",
    date: "",
    userId: 123, // 假设当前用户ID为123
  });
  const [submitting, setSubmitting] = useState(false);

  const timeSlots = [
    { TimeSlotId: 0, time: "9:00-11:00", available: true },
    { TimeSlotId: 1, time: "11:00-13:00", available: false },
    { TimeSlotId: 2, time: "13:00-15:00", available: true },
    { TimeSlotId: 3, time: "15:00-17:00", available: false },
    { TimeSlotId: 4, time: "17:00-19:00", available: true },
    { TimeSlotId: 5, time: "19:00-21:00", available: false },
  ];

  const courtSlots = [
    { courtId: 1, courtName: "Venue 1" },
    { courtId: 2, courtName: "Venue 2" },
    { courtId: 3, courtName: "Venue 3" },
    { courtId: 4, courtName: "Venue 4" },
    { courtId: 5, courtName: "Venue 5" },
    { courtId: 6, courtName: "Venue 6" },
  ];

  const availabilityData = courtSlots.map((court) => ({
    courtId: court.courtId,
    courtName: court.courtName,
    timeSlots: timeSlots.map((slot) => ({
      time: slot.time,
      available: true, // 这里可以根据实际数据设置是否可预约
    })),
  }));

  return (
    <div>
      <table className="table table-bordered  ">
        <thead className="table-dark"></thead>
        <tbody className="table-group-divider">
          {/* 第一行显示时间段，第一列显示场地名称，交叉部分显示是否可预约 */}
          <tr>
            <th className="table-dark"></th>
            {timeSlots.map((slot) => (
              <th key={slot.TimeSlotId} className="table-dark">
                {slot.time}
              </th>
            ))}
          </tr>
          {/* 场地名称和对应的预约状态 */}
          {availabilityData.map((courtData) => (
            <tr key={courtData.courtName}>
              <th>{courtData.courtName}</th>
              {courtData.timeSlots.map((slot) => (
                <td key={slot.time} className="p-0 text-center align-middle">
                  {slot.available ? (
                    <button
                      type="button"
                      className="btn btn-warning btn-outline-dark w-100 h-100 rounded-0"
                      onClick={() => {
                        setBookingData((prev) => ({
                          ...prev,
                          courtId: courtData.courtId,
                          timeSlot: slot.time,
                        }));
                        console.log("Selected courtId:", courtData.courtId);
                        console.log("Selected timeSlot:", slot.time);
                        setShowConfirm(true);
                      }}
                    >
                      🎾
                    </button>
                  ) : (
                    "🚫"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showConfirm && (
        <ConfirmModal
          show={true}
          title="确认预约"
          message={`确定要预约 ${bookingData.timeSlot} 吗？`}
          confirmText="确认"
          cancelText="取消"
          onConfirm={async () => {
            setSubmitting(true);
            await bookCourt(bookingData);
            setSubmitting(false);
          }}
          onCancel={() => {
            setShowConfirm(false);
            setBookingData({
              venueId: 1,
              userId: 123,
              courtId: 123,
              timeSlot: "",
              date: "",
            });
          }}
        />
      )}
    </div>
  );
}
