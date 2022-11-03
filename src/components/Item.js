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
  const title = 'Cool Item!'

  const impact = ''
  const recommendations = ''

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
      <div id="image" className="flex h-3/5 w-full bg-black"></div>
      <div id="description" className="h-2/5 w-full bg-gray-400"></div>
      <div id="extra" className="h-2/5 w-full bg-blue-600"></div>
      <div id="extra2" className="h-2/5 w-full bg-green-600"></div>
      <div id="extra3" className="h-2/5 w-full bg-red-600"></div>
    </div>
  )
}

export default Item
