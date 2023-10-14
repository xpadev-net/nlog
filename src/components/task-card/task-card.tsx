import Link from "next/link";
import { ScheduleFilledIcon } from "@xpadev-net/material-icons/schedule-filled";
import { AccountTreeFilledIcon } from "@xpadev-net/material-icons/account-tree-filled";
import { HistoryFilledIcon } from "@xpadev-net/material-icons/history-filled";

type props = {
  id: number;
  itemId: number;
  issuer: string;
  workDir: string;
  command: string;
  processId: number;
  exitCode: number | null;
  checked: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const TaskCard = ({
  id,
  itemId,
  command,
  processId,
  createdAt,
  updatedAt,
}: props) => {
  return (
    <li>
      <Link
        href={`/items/${itemId}/tasks/${id}`}
        className={"flex flex-col items-start"}
      >
        <div className={"flex flex-row gap-2"}>
          <span>#{id}</span>
          <pre>
            <code>{command}</code>
          </pre>
        </div>
        <div className={"flex flex-row gap-2"}>
          <div className={"flex flex-row items-center gap-1"}>
            <ScheduleFilledIcon
              className={"fill-current"}
              width={16}
              height={16}
            />
            {createdAt.toLocaleString()}
          </div>
          <div className={"flex flex-row items-center gap-1"}>
            <HistoryFilledIcon
              className={"fill-current"}
              width={16}
              height={16}
            />
            {updatedAt.toLocaleString()}
          </div>
          <div className={"flex flex-row items-center gap-1"}>
            <AccountTreeFilledIcon
              className={"fill-current"}
              width={16}
              height={16}
            />
            {processId}
          </div>
        </div>
      </Link>
    </li>
  );
};

export { TaskCard };
