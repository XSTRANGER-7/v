import React from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Fragment} from 'react';
import img from "../assets/bg1.png";
import icon from "../assets/profile.png";

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Panel', href: '/panel', current: false },
    { name: 'Chat Room', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="bg-cyan-700 sticky" style={{background: "linear-gradient(90deg, rgba(1,0,20,1) 4%, rgba(21,0,99,1) 43%, rgba(36,0,69,1) 100%)"}}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen px-10 sm:px-6 lg:px-12">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center hidden sm:block justify-center">
                  <img
                    className="h-20 w-auto"
                    src={img}
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-16 sm:flex items-center justify-center">
                  <div className="flex space-x-4 gap-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white no-underline font-semibold text-xl' : 'text-white font-semibold text-xl hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium no-underline'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-14 w-14 rounded-full"
                        src={icon}   
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                       {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>  */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;





















// import { useState } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom'

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Panel', href: '/home', current: false },
//   { name: 'Chat Room', href: '#', current: false },
//   { name: 'Contact Us', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const [currentItem, setCurrentItem] = useState(navigation.find(item => item.current).name);

//   const handleClick = (name) => {
//     setCurrentItem(name);
//     navigation.forEach(item => {
//       item.current = item.name === name;
//     });
//   };

//   return (
//     <Disclosure as="nav" className="bg-gray-200 z-100">
//       {({ open }) => (
//         <>
//           <div className="mx-5 max-w-screen px-2 sm:px-4 lg:px-6 flex justify-between items-center">
//             <div className="flex flex-shrink-0 items-start">
//               <iframe src="https://lottie.host/embed/59678698-a7c7-4edb-8320-bcfa822ba3f3/JFrtEUCmcV.json" className='h-20 w-28 '></iframe>
//               <h1 className='text-[2rem] my-auto sm:text-[3rem] font-[Agbalumo]'>Bharat <span id='samarkand' className="text-[#ff9900]">Yatra</span></h1>
//             </div>
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute ml-48 inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-6">
//                     {navigation.map((item) => (
                     
//                       <Link to ={item.href} key={item.name} className={classNames(
//                             item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-600 hover:text-white',
//                             'rounded-md px-3.5 py-2.5 text-md font-medium'
//                           )}
//                           aria-current={item.current ? 'page' : undefined}
//                           onClick={() => handleClick(item.name)}> {item.name} </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col ">
//               {navigation.map((item) => (
//                 <Disclosure.Button>
//                   <Link to={item.href} key={item.name} as="a" className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-600 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                   onClick={() => handleClick(item.name)}>{item.name}</Link>
                  
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }









