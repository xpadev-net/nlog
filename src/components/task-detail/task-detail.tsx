type props = {
  task: {
    issuer: string;
    command: string;
    workDir: string;
    processId: number;
    exitCode?: number | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

const TaskDetail = ({ task }: props) => {
  const isRunning = task.createdAt.getTime() === task.updatedAt.getTime();
  return (
    <div className={"grid grid-cols-1 2xl:grid-cols-2 p-4 relative"}>
      <TaskDetailItem name={"User"} value={task.issuer} />
      <TaskDetailItem name={"Command"} value={task.command} />
      <TaskDetailItem name={"WorkingDir"} value={task.workDir} />
      <TaskDetailItem name={"PID"} value={task.processId} />
      {isRunning && (
        <div className="badge badge-secondary gap-2 absolute top-0 right-0 m-4">
          <div className={"flex flex-row items-center gap-1"}>
            <span className="loading loading-ring loading-xs"></span>Running
          </div>
        </div>
      )}
      {!isRunning && typeof task.exitCode !== "undefined" && (
        <TaskDetailItem name={"ExitCode"} value={task.exitCode} />
      )}
    </div>
  );
};

const TaskDetailItem = ({
  name,
  value,
}: {
  name: string;
  value: string | number | null;
}) => {
  return (
    <p className={"flex flex-row gap-4"}>
      <span className={"whitespace-nowrap"}>{name}:</span>
      <pre className={"break-normal whitespace-pre-wrap"}>
        <code>{value}</code>
      </pre>
    </p>
  );
};

export { TaskDetail };
