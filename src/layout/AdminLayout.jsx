import Sidebar from "../admin/components/Sidebar"
export default function AdminLayout({children}) {
    return (
        <div className="flex gap-10">
            <Sidebar/>
            {children}
        </div>
    )
}
