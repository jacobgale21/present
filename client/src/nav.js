function NavBar() {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <div className="flex items-center space-x-4">
          <a href="/home" className="text-white text-xl font-bold">
            DaWuv
          </a>
          <div className="hidden md:flex space-x-4">
            <a
              href="/home"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/message"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Create
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* User Profile/Settings */}
        <div className="flex items-center space-x-4">
          <a
            href="/profile"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Profile
          </a>
          <a
            href="/library"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Libraries
          </a>
          <a
            href="/follow"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Follow
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
