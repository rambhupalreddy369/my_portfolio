export function Copy() {
  // return (
  //   <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
  //     <div className="flex">
  //       {/* Desktop Sidebar */}
  //       <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 fixed h-full z-30">
  //         <div className="p-6 border-b border-gray-200 dark:border-gray-700">
  //           <div className="flex items-center justify-between">
  //             <h1 className="text-xl font-bold text-gray-900 dark:text-white">
  //               Portfolio
  //             </h1>
  //             {/* <ThemeToggle /> */}
  //           </div>
  //         </div>

  //         <nav className="flex-1 p-4">
  //           <ul className="space-y-2">
  //             {navigation.map(({ id, icon: Icon, label }) => (
  //               <li key={id}>
  //                 <button
  //                   onClick={() => setActiveSection(id)}
  //                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
  //                     activeSection === id
  //                       ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
  //                       : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
  //                   }`}
  //                 >
  //                   <Icon className="w-5 h-5" />
  //                   {label}
  //                 </button>
  //               </li>
  //             ))}
  //           </ul>
  //         </nav>

  //         <div className="p-4 border-t border-gray-200 dark:border-gray-700">
  //           <div className="flex justify-center gap-3">
  //             <Button size="sm" variant="outline" asChild>
  //               <a href="#">
  //                 <Github className="w-4 h-4" />
  //               </a>
  //             </Button>
  //             <Button size="sm" variant="outline" asChild>
  //               <a href="#">
  //                 <Linkedin className="w-4 h-4" />
  //               </a>
  //             </Button>
  //             <Button size="sm" variant="outline" asChild>
  //               <a href="#">
  //                 <Twitter className="w-4 h-4" />
  //               </a>
  //             </Button>
  //           </div>
  //         </div>
  //       </aside>

  //       {/* Mobile Sidebar */}
  //       <aside
  //         className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
  //           sidebarOpen ? "translate-x-0" : "-translate-x-full"
  //         }`}
  //       >
  //         <div className="p-6 border-b border-gray-200 dark:border-gray-700">
  //           <div className="flex items-center justify-between">
  //             <h1 className="text-xl font-bold text-gray-900 dark:text-white">
  //               Portfolio
  //             </h1>
  //             <Button
  //               variant="ghost"
  //               size="sm"
  //               onClick={() => setSidebarOpen(false)}
  //             >
  //               <X className="w-5 h-5" />
  //             </Button>
  //           </div>
  //         </div>

  //         <nav className="flex-1 p-4">
  //           <ul className="space-y-2">
  //             {navigation.map(({ id, icon: Icon, label }) => (
  //               <li key={id}>
  //                 <button
  //                   onClick={() => {
  //                     setActiveSection(id);
  //                     setSidebarOpen(false);
  //                   }}
  //                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
  //                     activeSection === id
  //                       ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
  //                       : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
  //                   }`}
  //                 >
  //                   <Icon className="w-5 h-5" />
  //                   {label}
  //                 </button>
  //               </li>
  //             ))}
  //           </ul>
  //         </nav>
  //       </aside>

  //       {/* Main Content */}
  //       <div className="flex-1 lg:ml-64">
  //         {/* Mobile Header */}
  //         <header className="lg:hidden bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-20">
  //           <div className="flex items-center justify-between p-4">
  //             <Button
  //               variant="ghost"
  //               size="sm"
  //               onClick={() => setSidebarOpen(true)}
  //             >
  //               <Menu className="w-5 h-5" />
  //             </Button>
  //             <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
  //               Portfolio
  //             </h1>
  //             {/* <ThemeToggle /> */}
  //           </div>
  //         </header>

  //         {/* Page Content */}
  //         <main className="p-6 lg:p-8">
  //           <div className="max-w-4xl mx-auto">{renderContent()}</div>
  //         </main>
  //       </div>
  //     </div>

  //     {/* Mobile overlay */}
  //     {sidebarOpen && (
  //       <div
  //         className="fixed inset-0 bg-black/50 lg:hidden z-40"
  //         onClick={() => setSidebarOpen(false)}
  //       />
  //     )}
  //   </div>
  // );
}
