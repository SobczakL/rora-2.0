export default function Avatar({
    userImage
}: {
    userImage: string
}) {
    return (
        <div className="absolute top-0 right-0 h-20 md:h-28 w-14 md:w-20 z-10">
            <div className="relative flex flex-col justify-between h-full w-full">
                <div className="flex justify-around">
                    <div className="w-4 md:w-6 h-4 md:h-6 bg-slate rounded-full"></div>
                    <div className="w-4 md:w-6 h-4 md:h-6 bg-slate rounded-full"></div>
                </div>
                <div
                    className="w-14 h-14 md:w-20 md:h-20 border border-slate rounded-full bg-contain"
                    style={{
                        backgroundImage: `url(${userImage})`
                    }}
                ></div>
            </div>
        </div>
    )

}
