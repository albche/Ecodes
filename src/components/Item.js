import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../style.css'

const stats = {
  efficiency: 100,
  goodness: 10,
  coolness: 10,
  awesomeness: 10,
}

const Item = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [statsList, setStatsList] = useState([])
  const id = searchParams.get('id')
  const imgId = '17suPPzUlIVaO9zhu0XEzIeWVjg2D48pg'
  const title = 'Old AC'
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  useEffect(() => {
    // fetch from database here
    let list = Object.entries(stats).map((stat) => (
      <h4>
        {stat[0]}: {String(stat[1])}
      </h4>
    ))
    setStatsList(list)
  }, [])

  return (
    <div className="h-screen w-screen place-content-center text-lg">
      <div id="image" className="flex h-3/5 w-full bg-black">
        <img src={'https://drive.google.com/uc?export=view&id=' + imgId} />
      </div>
      <div id="description" className="h-2/5 w-full bg-green-200 text-center">
        <p id="title" className="text-8xl">
          {title}
        </p>
        <br />
        <p id="description" className="text-4xl">
          {description}
        </p>
      </div>
      <div id="extra" className="h-2/5 w-full bg-blue-600"></div>
      <div id="extra2" className="h-2/5 w-full bg-green-600"></div>
      <div id="extra3" className="h-2/5 w-full bg-red-600"></div>
    </div>
  )
}

export default Item
