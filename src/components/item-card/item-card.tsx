import { ScheduleFilledIcon } from "@xpadev-net/material-icons";

type props = {
  name: string;
  lastExecuted?: Date;
  errorCount: number;
};

const ItemCard = ({ name, lastExecuted, errorCount }: props) => {
  return (
    <div className="card bg-neutral text-neutral-content relative m-4">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        {lastExecuted && (
          <p className={"flex flex-row items-center gap-2"}>
            <ScheduleFilledIcon className={"fill-current"} />
            {lastExecuted.toLocaleString()}
          </p>
        )}
        {errorCount > 0 && (
          <div className="absolute badge badge-error gap-2 top-0 right-0 translate-x-1/2 -translate-y-1/2">
            {errorCount}
          </div>
        )}
      </div>
    </div>
  );
};

export { ItemCard };
