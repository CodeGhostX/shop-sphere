import { BaggageClaim, Home, User } from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
  const menu = [
    {
      title:"Overview",
      icon:Home,
      url:"#"
    },
    {
      title:"Users",
      icon:User,
      url:"#"
    },
    {
      title:"Products",
      icon:BaggageClaim,
      url:"#"
    },
  ]
  return (
    <div className="pt-6 border-2 h-screen flex flex-col gap-1">
      {
        menu.map((item)=>{
          return <div key={item.title} className="flex flex-row p-4 gap-6">
            <item.icon size={30}/>
            <Link href={item.url}>
              <p className="text-xl">{item.title}</p>
            </Link>
          </div>
        })
      }
    </div>
  )
}

export default Sidebar