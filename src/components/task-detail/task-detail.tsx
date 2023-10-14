type props = {
  task: {
    issuer: string;
    command: string;
    workDir: string;
    processId: number;
    exitCode?: number | null;
  };
};

const TaskDetail = ({ task }: props) => {
  return (
    <div className={"grid grid-cols-1 2xl:grid-cols-2 p-4 truncate"}>
      <TaskDetailItem name={"実行者"} value={task.issuer} />
      <TaskDetailItem name={"コマンド"} value={task.command} />
      <TaskDetailItem name={"作業ディレクトリ"} value={task.workDir} />
      <TaskDetailItem name={"PID"} value={task.processId} />
      {typeof task.exitCode !== "undefined" && (
        <TaskDetailItem name={"終了コード"} value={task.exitCode} />
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
