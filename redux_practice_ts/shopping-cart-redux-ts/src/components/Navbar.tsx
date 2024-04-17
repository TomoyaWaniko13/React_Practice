const Navbar = () => {
  return (
    <nav className={'w-full h-24 flex flex-wrap items-center justify-around bg-black'}>
      <h3 className={'font-bold text-4xl text-white'}>Redux shopping</h3>
      <p className={' text-white text-xl'}>Cart:{0}</p>
    </nav>
  );
};

export default Navbar;
