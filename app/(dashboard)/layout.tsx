import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden md:w-72 h-full md:fixed md:flex md:flex-col text-white bg-gray-900 z-[80] md:inset-y-0">
            <Sidebar />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout