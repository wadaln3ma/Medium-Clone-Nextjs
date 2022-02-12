

const Hero = ()=>{
    return (
        <div className="flex justify-between items-center border-y border-black py-10 lg:py-0 bg-yellow-400">
            <div className="px-10 space-y-5">
                <h1 className="text-4xl max-w-xl font-serif">
                    <span className="underline decoration-black decoration-4">Medium</span> is a place to write, read, and connect
                </h1>
                <h2>it is easy and free to post your thinking on any topic and connect with millions of readers</h2>
             </div>
            
            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Medium_icon.svg/968px-Medium_icon.svg.png"
                 className="hidden md:inline-flex h-32 lg:h-full pr-10" />
        </div>
)}

export default Hero
