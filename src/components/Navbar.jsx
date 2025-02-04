

const Navbar = () => {
  return (
    <div className="w-screen h-[10vh] mx-20">
      <div className="flex items-center justify-between ">
        <div>
            <h2>Ashwani Singh</h2>
        </div>
        <div>
            <ul className="flex items-center gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <button className="px-6 py-3 rounded-xl border-white border-2">Let&apos;s Talk</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

