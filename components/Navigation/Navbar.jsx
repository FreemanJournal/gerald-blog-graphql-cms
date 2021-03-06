import { Disclosure } from '@headlessui/react'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { BsList, BsListNested } from 'react-icons/bs'



export default function Navbar() {
  const [show, setShow] = useState(true);

//   useEffect(() => user ? setShow(true) : setShow(false), [user])

  const menu = [
    { name: 'Home', href: '/', current: true },
    // { name: 'Blog', href: '/blog', current: true },
    // { name: 'Manage Inventories', href: '/manageInventory', current: show },
    // { name: 'Add Items', href: '/newInventory', current: show },
    // { name: 'My Items', href: '/userProduct', current: show },
    // { name: 'Log In', href: '/logIn', current: !show},
    // { name: 'Registration', href: '/registration', current: !show},
  ]

  return (
    <section className=" inset-0 top-3 z-10  pointer-events-none">
      <Disclosure as="nav" className="bg-transparent">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                {/* Mobile menu open and close button*/}
                <div className="absolute mt-10 right-5 flex items-center sm:hidden pointer-events-auto">
                  <Disclosure.Button className="p-2 rounded-sm text-slate-800  focus:outline-none">
                    {open ? (
                      <BsListNested className="block h-6 w-6" />
                    ) : (
                      <BsList className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Desktop Menu */}
                <div className=" flex-1 flex items-center justify-center sm:items-stretch sm:justify-between mt-10 pointer-events-auto border-b-2">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className='text-slate-600 drop-shadow-lg uppercase text-2xl tracking-wide font-mont font-bold cursor-pointer pointer-events-auto'> <Link href="/">Dev Blog</Link> </h1>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4 my-5">
                      {menu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          // style={({ isActive }) => isActive ? { color: "#242B2E" } : { color: "" }}
                          className={`${item.current ? 'block' : "hidden"} bg-transparent uppercase font-mont  cursor-pointer text-slate-500  hover:text-slate-800 px-3 py-2 rounded-sm text-base font-medium`}

                        >
                          {item.name}
                        </Link>
                      ))}
                   
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* Dropdown Menu */}
            <Disclosure.Panel className="pointer-events-auto">
              <div className="px-2 py-3 rounded-sm flex flex-col">
                {menu.map((item) => {
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      style={{ borderBottom: "1px solid #758283" }}
                      className={`${item.current ? 'block' : "hidden"} bg-slate-700 mx-auto cursor-pointer uppercase font-mont text-white  hover:bg-slate-600 px-3 py-2 w-11/12 first:rounded-t-sm last:rounded-b-sm  text-base font-medium text-center`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                })}
               
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  )
}