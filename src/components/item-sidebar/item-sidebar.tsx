import { api } from "~/utils/api";
import { Sidebar } from "~/components/sidebar";
import { SidebarItem } from "~/components/sidebar/sidebar-item";
import { useRef, useState } from "react";

const ItemSidebar = () => {
  const { data: items, refetch } = api.items.getAll.useQuery(undefined, {
    cacheTime: 0,
  });
  const [val, setVal] = useState("");
  const ref = useRef<HTMLDialogElement>(null);
  const mutation = api.items.createItem.useMutation();
  const append = () => {
    ref.current?.showModal();
  };
  const create = () => {
    setVal("");
    void (async () => {
      mutation.mutate({ name: val });
      await refetch();
    })();
  };
  return (
    <>
      <Sidebar className={"fixed left-0 top-0 bg-base-300"}>
        <li onClick={append}>
          <span>Add Task</span>
        </li>
        <li className="menu-title">Tasks</li>
        {items?.map((item) => {
          return (
            <SidebarItem
              name={`#${item.id} ${item.name}`}
              href={`/items/${item.id}`}
              key={item.id}
            />
          );
        })}
      </Sidebar>
      <dialog className="modal" ref={ref}>
        <div className="modal-box">
          <input
            type="text"
            placeholder="Enter Task Name"
            className="input input-bordered w-full max-w-xs"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={create}>
                Create
              </button>
              <button className="btn" onClick={() => setVal("")}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export { ItemSidebar };
