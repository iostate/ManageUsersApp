const Nav = () => {
  return (
    <nav className='flex sm:justify-center space-x-4'>
      {[
        ['Home', '/dashboard'],
        ['SideBar', '/SideBar'],
        ['Projects', '/projects'],
        ['Reports', '/reports'],
      ].map(([title, url], uuid) => (
        // eslint-disable-next-line react/jsx-key
        <a href={url} key={uuid} className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
