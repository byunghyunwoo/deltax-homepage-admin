function Header() {
  return (
    <header
      className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md before:-z-10 z-30`}
    >
      <div className='px-4 sm:px-6 lg:px-8 border-b bg-neutral-50'>
        <div className={`flex items-center justify-end h-16`}>
          <div className='flex items-center space-x-3'>
            <hr className='w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none' />
            <button className=''>
              <p>Logout</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
