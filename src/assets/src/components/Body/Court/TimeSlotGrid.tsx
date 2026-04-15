//TimeSlotGrid 负责管理时间段的选中状态，当用户确认后，通过 onConfirm 通知父组件进行跳转。

import TimeSlot from "./TimeSlot";
import ConfirmModal from "../../Modal/ConfirmModal";
import { useState } from "react";

type Slot = {
  time: string;
  available: boolean;
};
type TimeSlotGridProps = {
  slots: Slot[];
  onConfirm: (time: string) => void;
};

export default function TimeSlotGrid(props: TimeSlotGridProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  function handleSelect(time: string) {
    console.log("[TimeSlotGrid] handleSelect", time);
    setSelectedTime(time);
  }

  return (
    <>
      {props.slots.map((slot) => (
        <TimeSlot
          key={slot.time}
          time={slot.time}
          available={slot.available}
          onSelect={() => handleSelect(slot.time)}
        />
      ))}

      {selectedTime && (
        <ConfirmModal
          show={true}
          title="确认预约"
          message={`确定要预约 ${selectedTime} 吗？`}
          confirmText="确认"
          cancelText="取消"
          onConfirm={() => {
            props.onConfirm(selectedTime);
            setSelectedTime(null);
          }}
          onCancel={() => setSelectedTime(null)}
        />
      )}
    </>
  );
}
