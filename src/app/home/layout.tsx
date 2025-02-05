export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="bg-gradient-to-t from-backgroundL via-backgroundM to-backgroundD h-[100vh] w-full relative pt-8 pb-20 px-6 md:px-7 overflow-y-hidden">
            {children}
        </section>
    )

}
