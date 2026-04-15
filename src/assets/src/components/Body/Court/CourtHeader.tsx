type CourtHeaderProps = {
  name: string;
  type?: string; // 球场类型（室内/室外），可选
  price?: number; // 价格，单位元/小时，可选
};



export default function CourtHeader(props: CourtHeaderProps) {
  return (
    <div className="court-header  mb-3">
      
      {/* 第一行：场地名 */}
      <h5 className="card-title mb-1">
        {props.name}
      </h5>

      {/* 第二行：属性信息 */}
      <div className="d-flex align-items-center gap-2">

        {props.type && (
          <span className= { props.type === '室内' ? "badge rounded-pill text-bg-success" : "badge rounded-pill text-bg-warning" }  >
            {props.type}
          </span>
        )}

        {props.price !== undefined && (
          <span className="badge rounded-pill text-bg-light">
            ¥ {props.price} / 小时
          </span>
        )}
      </div>

    </div>
  );
}
