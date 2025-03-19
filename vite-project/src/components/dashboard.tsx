import React, { useEffect, useState } from 'react';
import { Menu, Layout, Phone, FileText, LogOut } from 'lucide-react';
// import { Tiptap } from './Tiptap'; 
import PostPopup from './popups/postPopup';
import AddProject from './popups/addProject';
import Delete from './popups/delete';
import AddPhone from './popups/addPhone';
export interface PhoneNumber {
  number: string,
  // provider: string,
  image: string,
  date: string,
  id: string,
}

export interface Project {
  lng: string,
  title: string,
  id: string,
  cost: number,
  description: string,
  icon: string,
  lastUpdated: string,
}

export interface Blog {
  title: string,
  author: string,
  publishDate: string,
  content: string,
  id: string,

}
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>([]);
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([])

  async function handleProjectDelete(id: string) {
    try {
      const projectDeleteRes = await fetch(`/api/projects/${id}`, { method: "delete" })
      console.log("deleting")
      if (projectDeleteRes.ok) {
        console.log("ok")
        setProjects((prev: Project[]) => prev.filter((item: Project) => item.id !== id))
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function handleBlogDelete(id: string) {
    try {
        const blogDeleteRes = await fetch(`/api/blog/${id}`, { method: "delete" });

        if (blogDeleteRes.ok) {
          setBlogs((prev: Blog[]) => prev.filter((item: Blog) => item.id !== id))
        }
      } catch (err) {
        console.log(err)
      }
    }

  async function handlePhoneNumberDelete(id: string) {
        try {
          const phoneDeleteRes = await fetch(`/api/phone/${id}`, { method: "delete" }).then(res => res.json());

          if (phoneDeleteRes.ok) {
            setPhoneNumbers((prev: PhoneNumber[]) => prev.filter((item: PhoneNumber) => item.id !== id))
          }
        } catch (err) {
          console.log(err)
        }
  }


  useEffect(() => {
        async function getNumbers() {
          try {
            const res = await fetch("/api/phone").then(res => res.json());
            setPhoneNumbers(res);
            // alert(res)
          } catch (err) {
            console.log(err)
          }
        }

        async function getProjects() {
          try {
            const resProjects = await fetch("/api/projects").then(res => res.json())
            setProjects(resProjects)
          }
          catch (err) {
            console.log(err)
          }
        }

        async function getBlogs() {
          try {
            const resBlogs = await fetch(`/api/blog`).then(res => res.json())
            setBlogs(resBlogs)
          }
          catch (err) {
            console.log(err)
          }
        }
        getNumbers();
        getProjects();
        getBlogs();
      }, [])

      useEffect(() => {
        console.log(projects)
    }, [projects])

      // Render content based on active section
      const renderContent = () => {
        switch (activeSection) {
          case 'projects':
            return (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Projects</h2>
                  <AddProject />
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                          <th className="text-right p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {projects.map((project) => (
                          <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 font-medium text-gray-900">{project.title}</td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium `}>
                                {project.cost} MRU
                              </span>
                            </td>
                            <td className="p-4 text-gray-600">{project.lastUpdated}</td>
                            <td className="p-4 text-right">
                              <button className="text-blue-600 hover:text-blue-800 font-medium mr-3 transition-colors">Edit</button>
                              <Delete 
                              id={project.id}
                              deletefunc= {handleProjectDelete}/>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          case 'phone-numbers':
            return (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Phone Numbers</h2>
                  <AddPhone setPhoneNumbers={setPhoneNumbers}/>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Department</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Number</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                          <th className="text-right p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {phoneNumbers.map((item, id) => (
                          <tr key={id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 font-medium text-gray-900">{item.id}</td>
                            <td className="p-4">{item.number}</td>
                            <td className="p-4 text-gray-600">{item.date}</td>
                            <td className="p-4 text-right">
                              <button className="text-blue-600 hover:text-blue-800 font-medium mr-3 transition-colors">Edit</button>
                              <Delete 
                              id={item.id}
                              deletefunc={handlePhoneNumberDelete}/>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          case 'blog':
            return (
              <div>
                {isPosting && <PostPopup setIsPosting={setIsPosting} />}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Blog Posts</h2>
                  <button
                    onClick={() => setIsPosting(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">+ New Post</button>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Author</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Publish Date</th>
                          <th className="text-right p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {blogs.map((post) => (
                          <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 font-medium text-gray-900">{post.title}</td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium`}>
                                {post.title}
                              </span>
                            </td>
                            <td className="p-4">{post.author}</td>
                            <td className="p-4 text-gray-600">{post.publishDate || 'Not published'}</td>
                            <td className="p-4 text-right">
                              <button className="text-blue-600 hover:text-blue-800 font-medium mr-3 transition-colors">Edit</button>
                              <Delete 
                              id={post.id}
                              deletefunc={handleBlogDelete}/>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <div className='mt-6'>
            <Tiptap />
            </div> */}
              </div>
            );
          default:
            return <div>Select a section</div>;
        }
      };

      return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className={`bg-gray-800 text-white ${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
            <div className="p-4 flex items-center justify-between">
              {!sidebarCollapsed && <h1 className="text-xl font-bold">CMS Dashboard</h1>}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded hover:bg-gray-700"
              >
                <Menu size={20} />
              </button>
            </div>
            <nav className="mt-6">
              <ul>
                <li>
                  <button
                    onClick={() => setActiveSection('projects')}
                    className={`flex items-center w-full p-4 ${activeSection === 'projects' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                  >
                    <Layout size={20} />
                    {!sidebarCollapsed && <span className="ml-4">Projects</span>}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('phone-numbers')}
                    className={`flex items-center w-full p-4 ${activeSection === 'phone-numbers' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                  >
                    <Phone size={20} />
                    {!sidebarCollapsed && <span className="ml-4">Phone Numbers</span>}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('blog')}
                    className={`flex items-center w-full p-4 ${activeSection === 'blog' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                  >
                    <FileText size={20} />
                    {!sidebarCollapsed && <span className="ml-4">Blog</span>}
                  </button>
                </li>
              </ul>
            </nav>
            <div className="absolute bottom-0 left-0">
              <button className="flex items-center p-4 text-red-300 hover:bg-gray-700 transition-colors">
                <LogOut size={20} />
                {!sidebarCollapsed && <span className="ml-4">Logout</span>}
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
            <header className="bg-white shadow p-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">
                  {activeSection === 'projects' ? 'Projects Management' :
                    activeSection === 'phone-numbers' ? 'Phone Numbers Management' : 'Blog Management'}
                </h1>
                <div className="flex items-center">
                  <div className="mr-4 text-right">
                    <p className="font-medium">Admin User</p>
                    <p className="text-sm text-gray-500">admin@example.com</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                </div>
              </div>
            </header>

            <main className="p-6">
              {renderContent()}
            </main>
          </div>
        </div>
      );
    };

    export default Dashboard;
