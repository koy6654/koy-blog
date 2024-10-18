import Divider from '@/components/ui/divider';

function Sidebar() {
  return (
    <aside className="w-64 sticky top-0 overflow-hidden">
      <h2 className="text-lg font-bold">Sidebar</h2>
      <div className="flex items-center">
        <Divider orientation="vertical" />
        <ul className="ml-4">
          <li><a href="1" className="block py-2">Career</a></li>
          <li><a href="2" className="block py-2">Tech</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
