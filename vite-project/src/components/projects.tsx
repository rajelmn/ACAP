import { useEffect, useState } from "react"
import {Project} from "./dashboard"

export default function Projects({ lng }: { lng: string }) {
      const [projects , setProjects] = useState<Project[]>([]); 

      useEffect(() => {
        async function getProjects() {
            try {
                console.log("running projects")
                const projctsResponseWithLanguage = await fetch(`/projects/${lng}`).then(res => res.json());
                setProjects(projctsResponseWithLanguage)
            } catch(err) {
                console.log(err)
            }
        }
        getProjects()
      }, [lng])
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item: Project) => 
            
                                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-amber-100 rounded-lg text-amber-500">
                                            <img src={item.icon} className="max-w-10 object-fill" alt="" />
                                        </div>
        
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {item.description}
                                            </p>
                                            <div className="text-amber-500">
                                                Cost: {item.cost}
                                            </div>
                                        </div>
                                    </div>
                                </div>
            )}
            </div>
    )
}
