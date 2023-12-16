import {
  type FC,
  forwardRef,
  type ForwardRefRenderFunction,
  type UIEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Log } from "@prisma/client";
import { api } from "~/utils/api";
import { parseAnsi } from "~/utils/ansi";

const LogViewer = ({ taskId }: { taskId: number }) => {
  const list = useRef<HTMLPreElement>(null);
  const timeoutRef = useRef<number>();
  const [logs, setLogs] = useState<Log[]>([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const [anchor, setAnchor] = useState<number | undefined>(undefined);
  const _logs = api.logs.getAll.useQuery({ taskId });

  const reFetch = () => {
    if (_logs.isFetching) return;
    void _logs?.refetch();
  };

  useEffect(() => {
    if (!_logs.data) return;
    const isUpdated = _logs.data.length !== logs.length;
    if (isUpdated) {
      setLogs(_logs.data);
    }

    if (autoScroll) {
      timeoutRef.current = window.setTimeout(reFetch, 1000);
    } else {
      timeoutRef.current = -1;
    }
  }, [_logs, logs, autoScroll]);

  useEffect(() => {
    if (autoScroll) {
      setAnchor(logs[logs.length - 1]?.id);
    }
  });

  useEffect(() => {
    console.log("on mount: set timeout");
    timeoutRef.current = window.setTimeout(reFetch, 1000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const onScrollEnd: UIEventHandler<HTMLPreElement> = (event) => {
    if (!event.target) return;
    const isBottom =
      event.currentTarget.scrollTop + event.currentTarget.clientHeight ===
      event.currentTarget.scrollHeight;
    setAutoScroll(isBottom);
    if ((timeoutRef.current ?? 0) > -1) return;
    if (isBottom) {
      timeoutRef.current = window.setTimeout(reFetch, 1000);
    }
  };
  return (
    <LogViewerWrapperRef
      ref={list}
      logs={logs.slice(-1000)}
      onScroll={onScrollEnd}
      anchor={anchor}
    />
  );
};
export const LogViewerBlock = LogViewer;

const LogViewerWrapper: ForwardRefRenderFunction<
  HTMLPreElement,
  { onScroll: UIEventHandler<HTMLPreElement>; logs: Log[]; anchor?: number }
> = ({ onScroll, logs, anchor }, ref) => {
  return (
    <pre
      ref={ref}
      className={
        "whitespace-pre-wrap break-words max-w-full overflow-x-auto flex-grow bg-base-300"
      }
      onScroll={onScroll}
    >
      <code>
        {logs.map((log) => {
          return (
            <LogLine
              key={log.id}
              content={log.message}
              isError={log.type === "err"}
              anchor={log.id === anchor}
            />
          );
        })}
      </code>
    </pre>
  );
};
const LogViewerWrapperRef = forwardRef(LogViewerWrapper);

const LogLine: FC<{ content: string; isError: boolean; anchor: boolean }> = ({
  content,
  isError,
  anchor,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!anchor) return;
    ref.current?.scrollIntoView();
  }, [anchor]);
  const message = useMemo(() => {
    const line = content
      .split(/\r\n|\r|\n/)
      .filter((v) => v.trim().length)
      .map((v) => parseAnsi(v.replace(/^[\s\r\n]*[\r\n](.+?)$/, "$1")))
      .filter((v) => v.length);
    return (
      <>
        {line.map((v, i) => {
          return (
            <span key={i} className={"block"}>
              {v.map((part, index) => {
                return (
                  <span
                    key={index}
                    className={`${part.foreground} ${part.background} ${
                      part.bold && "font-bold"
                    } ${part.italic && "italic"} ${
                      part.underline && "underline"
                    }`}
                  >
                    {part.text}
                  </span>
                );
              })}
            </span>
          );
        })}
      </>
    );
  }, [content]);
  return (
    <span className={`flex flex-row animate-highlight`} ref={ref}>
      <span
        className={`${isError && "bg-error"} w-5 inline-block flex-shrink-0`}
      />
      <span className={"px-1"}>{message}</span>
    </span>
  );
};
