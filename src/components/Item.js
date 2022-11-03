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
    <div>
      <h1>{title}</h1>
      <div>{statsList}</div>
    </div>
  )
}

export default Item
