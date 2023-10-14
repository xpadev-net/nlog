import Link from "next/link";

type props = {
  id: number;
  itemId: number;
  issuer: string;
  workDir: string;
  command: string;
  processId: number;
  exitCode: number | null;
  checked: boolean;
};

const TaskCard = ({
  id,
  itemId,
  issuer,
  command,
  workDir,
  processId,
  exitCode,
  checked,
}: props) => {
  return (
    <Link href={`/items/${itemId}/tasks/${id}`}>
      <div className="card bg-neutral text-neutral-content relative m-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{command}</h2>
        </div>
      </div>
    </Link>
  );
};

export { TaskCard };
