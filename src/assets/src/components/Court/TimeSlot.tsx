// TimeSlot 只负责展示单个时间段，不管理选中状态


type TimeSlotProps = {
  time: string;
  available: boolean;
  onSelect?: () => void;
};


export default function TimeSlot(props: TimeSlotProps) {
  const { time, available, onSelect } = props;

  return (
    <button
      className={`slot ${available ? 'btn btn-primary btn-lg' : 'btn btn-secondary btn-'}`}
      disabled={!available}
      onClick={onSelect}
    >
      {time}
    </button>
  );
}

