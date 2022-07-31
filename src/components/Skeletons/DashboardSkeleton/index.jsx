import Skeleton from "@mui/material/Skeleton"
import { useState, useEffect } from "react"

export default function DashboardSkeleton({ tabs, boxes }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", changeWidth)

    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, []) // not really needed

  const Nav = () => (
    <nav
      className='navigation-dashboard bg-[#fff]'
      style={{ maxHeight: "90px" }}
    >
      <Skeleton variant='text' height={80} width={100} />

      <Skeleton variant='rectangular' className='search-form' height={60} />
      <div className='flex justify-between items-center gap-3'>
        <Skeleton variant='text' width={114} height={40} />

        <div>
          <Skeleton variant='circular' width={60} height={60} />
        </div>
      </div>
    </nav>
  )

  const TabTitle = () => (
    <Skeleton
      variant='rectangular'
      height={80}
      className={`my-[2px] cursor-pointer hover:bg-[#c8c8c83a]`}
    />
  )

  return (
    <>
      <Nav />
      <main className='w-full h-auto bg-[#fafafa] p-[20px] flex'>
        {screenWidth > 1000 && (
          <div className='w-[350px] mr-[3rem] min-h-screen rounded-[10px] bg-[#ffffff] py-[3rem] left-nav'>
            <div className='w-full h-auto grid grid-cols-1'>
              {tabs.map((t, index) => (
                <TabTitle key={index} />
              ))}
            </div>
            <div className='border-t-[1px] border-[#c4c4c47b] h-[200px] mt-[5rem] flex items-center'>
              <Skeleton
                variant='text'
                height={100}
                className='w-full px-[20px] py-[17px] cursor-pointer  hover:bg-[#c8c8c83a]'
              />
            </div>
          </div>
        )}

        {/* content */}
        <MainSkeleton boxes={boxes} />
      </main>
    </>
  )
}

const MainSkeleton = ({ boxes }) => (
  <>
    {/* // show a skeleton here */}

    <div className='w-full h-[600px] px-[1rem] dashboard-container-home admin-dashboard__Content'>
      {boxes.map((box, index) => (
        <div key={index}>
          <Skeleton
            className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[0px] flex items-center relative'
            height={300}
          />
        </div>
      ))}
    </div>
  </>
)
