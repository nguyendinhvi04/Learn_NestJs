import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';

export default function MenuDashboard({
  onMenuSelect,
  activeKey,
}: {
  onMenuSelect: (key: string) => void;
  activeKey: string;
}) {
  const itemRenderer = (item: any) => {
    const isActive = item.key === activeKey;
    return (
      <div
        className={`p-menuitem-content ${
          isActive ? 'bg-blue-100 font-semibold' : ''
        }`}
      >
        <a
          className="flex align-items-center p-menuitem-link"
          onClick={item.command}
        >
          <span className={item.icon} />
          <span className="mx-2">{item.label}</span>
          {item.badge && <Badge className="ml-auto" value={item.badge} />}
          {item.shortcut && (
            <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
              {item.shortcut}
            </span>
          )}
        </a>
      </div>
    );
  };

  let items = [
    {
      label: 'Management',
      items: [
        {
          key: 'products',
          label: 'Products',
          icon: 'pi pi-shopping-cart',
          template: itemRenderer,
          command: () => onMenuSelect('products'),
        },
        {
          key: 'users',
          label: 'Users',
          icon: 'pi pi-users',
          template: itemRenderer,
          command: () => onMenuSelect('users'),
        },
        {
          key: 'appointments',
          label: 'Appointments',
          icon: 'pi pi-calendar',
          template: itemRenderer,
          command: () => onMenuSelect('appointments'),
        },
        {
          key: 'orders',
          label: 'Orders',
          icon: 'pi pi-credit-card',
          template: itemRenderer,
          command: () => onMenuSelect('orders'),
        },
        {
          key: 'charts',
          label: 'Charts',
          icon: 'pi pi-chart-bar',
          template: itemRenderer,
          command: () => onMenuSelect('charts'),
        },
      ],
    },
    {
      label: 'System',
      items: [
        {
          key: 'settings',
          label: 'Settings',
          icon: 'pi pi-cog',
          template: itemRenderer,
          command: () => onMenuSelect('settings'),
        },
        {
          key: 'theme',
          label: 'Toggle Dark Mode',
          icon: 'pi pi-moon',
          template: itemRenderer,
          command: () => onMenuSelect('theme'),
        },
        {
          key: 'logout',
          label: 'Logout',
          icon: 'pi pi-sign-out',
          template: itemRenderer,
          command: () => onMenuSelect('logout'),
        },
      ],
    },
  ];

  return (
    <div className="h-screen bg-white shadow-lg">
      <Menu model={items} className="w-15rem border-none bg-transparent" />
    </div>
  );
}
