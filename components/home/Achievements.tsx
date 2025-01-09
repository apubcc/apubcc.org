import { cn } from "@/lib/utils"


const achievements = [
  {
    title: 'Achievement 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'upper left',
  },
  {
    title: 'Achievement 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'bottom left',
  },
  {
    title: 'Achievement 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'upper right',
  },
  {
    title: 'Achievement 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    position: 'bottom right',
  },
]

export default function Achievements() {
  return (
    <div className="relative min-h-[27rem] lg:h-[36.25rem] w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(251,191,58,0.30)] via-[rgba(245,113,12,0.30)] to-[rgba(245,113,12,0.30)] blur-[137.7px]"></div>

      {/* contents */}
      <DesktopContent />

      <MobileContent />
    </div>
  )
}

function DesktopContent() {
  return (
    <main className="p-8 hidden lg:block">
      {achievements.map((achievement, index) => (
        <aside key={index} className={cn("group absolute", {
          'left-80 top-8': achievement.position === 'upper left',
          'left-56 bottom-56': achievement.position === 'bottom left',
          'right-80 top-8': achievement.position === 'upper right',
          'right-56 bottom-56': achievement.position === 'bottom right'
        })}>
          <div className="relative lg:w-20 lg:h-20 cursor-pointer">
            {/* Largest circle (r=40) with 0.1 opacity - appears last and stays */}
            <div className="absolute bg-[#FBD954] group-hover:invisible opacity-0 rounded-full w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-01_1.5s_ease-in-out_infinite]"></div>
            
            {/* Large circle (r=40) with 0.2 opacity - appears third then fades */}
            <div className="absolute bg-[#FBD954] group-hover:invisible opacity-0 rounded-full w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-02_1.5s_ease-in-out_infinite]"></div>
            
            {/* Middle circle (r=25) with 0.5 opacity - appears second then fades */}
            <div className="absolute bg-[#FBD954] group-hover:invisible opacity-0 rounded-full w-[50px] h-[50px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-05_1.5s_ease-in-out_infinite]"></div>
            
            {/* Smallest circle (r=15) with full opacity - shows immediately */}
            <div className="absolute bg-[#FBD954] rounded-full w-[30px] h-[30px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 opacity-100"></div>

            {/* Achievements Texts */}
            <div className={cn("text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100", {
              '-translate-x-80 -translate-y-1/2 w-[286px] text-right': achievement.position === 'upper left' || achievement.position === 'bottom left',
              'translate-x-20 w-[286px] text-left': achievement.position === 'upper right' || achievement.position === 'bottom right'
            })}>
              <h3 className="text-3xl font-black">{achievement.title}</h3>
              <p className="text-[1.25rem] font-semibold">
                {achievement.description}
              </p>
            </div>
          </div>
        </aside>
      ))}

      {/* <img src="/fireball.png" alt="fireball" className="mx-auto"  /> */}
    </main>
  )
}

function MobileContent() {
  return (
    <>
      {achievements.map((achievement, index) => (
        <main key={index} className={cn("flex items-center justify-center relative pt-14 pb-20 last:pb-0 lg:hidden sm:w-10/12 mx-auto")}>
          {/* Timeline dot - centered */}
          <div>
            <div className="bg-[#FBD954] rounded-full w-3 h-3" />
          </div>

          {/* Content - alternating left and right */}
          <div className={cn(
            "text-white w-[135px] absolute top-0 sm:w-[250px]",
            index % 2 === 0 ? "left-2 text-right" : "right-2 text-left"
          )}>
            <h3 className="text-xl font-black whitespace-nowrap">
              {achievement.title}
            </h3>
            <p className="text-[0.8125rem] font-semibold">
              {achievement.description}
            </p>
          </div>
        </main>
      ))}
    </>
  )
}