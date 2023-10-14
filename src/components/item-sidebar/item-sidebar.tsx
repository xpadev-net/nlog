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
  const parts =
    items?.map((task) => {
      return {
        name: task.name,
        href: `/items/${task.id}`,
      };
    }) ?? [];
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
          <span>Add Item</span>
        </li>
        <li className="menu-title">Items</li>
        {parts.map((item) => {
          return (
            <SidebarItem name={item.name} href={item.href} key={item.href} />
          );
        })}
      </Sidebar>
      <dialog className="modal" ref={ref}>
        <div className="modal-box">
          <input
            type="text"
            placeholder="Enter Item Name"
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
