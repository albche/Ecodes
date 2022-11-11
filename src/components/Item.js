import { getSelectionRange } from '@testing-library/user-event/dist/utils'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../style.css'

const Item = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [itemData, setItemData] = useState({
    id: 0,
    name: '',
    imgId: '',
    description: '',
    productionStatsId: 0,
    productionStatTotal: 0,
    electricityStatId: 0,
    electricityStatTotal: 0,
  })
  const [productionStats, setProductionStats] = useState({
    steeliron: 0,
    cement: 0,
    plastic: 0,
    glass: 0,
    latex: 0,
    rubber: 0,
    copper: 0,
    silver: 0,
    aluminum: 0,
    textile: 0,
  })

  const [electricityStats, setElectricityStats] = useState({
    stat1: 0,
  })

  useEffect(() => {
    const id = searchParams.get('id')
    fetch('http://192.168.1.68:3421/item?id=' + id)
      .then((response) => response.json())
      .then((data) => console.log(data))

    const tempData = {
      id: id,
      name: 'Lorem Ipsum',
      imgId: '17suPPzUlIVaO9zhu0XEzIeWVjg2D48pg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      productionStatsId: 0,
      productionStatTotal: 75,
      electricityStatId: 0,
      electricityStatTotal: 40,
    }
    setItemData(tempData)

    const tempStats = {
      steeliron: 1,
      cement: 1,
      plastic: 1,
      glass: 1,
      latex: 1,
      rubber: 1,
      copper: 1,
      silver: 1,
      aluminum: 1,
      textile: 1,
    }
    setProductionStats(tempStats)

    const statlist = Object.entries(productionStats).map((stat) => (
      <h4>
        {stat[0]}: {String(stat[1])}
      </h4>
    ))
    setProductionStats(statlist)
  }, [])

  return (
    <div className="h-screen w-screen place-content-center text-lg">
      <div id="image" className="flex h-3/5 w-full bg-black">
        <img
          src={'https://drive.google.com/uc?export=view&id=' + itemData.imgId}
        />
      </div>
      <div
        id="description"
        className="w-full rounded-3xl bg-green-200 px-5 py-10"
      >
        <p className="text-6xl">Production</p>
        <div
          id="productionBar"
          className="mt-5 h-14 w-full rounded-full bg-gray-400"
        >
          <div
            className="rounded-full bg-blue-400"
            style={{
              height: '100%',
              width: itemData.productionStatTotal + '%',
            }}
          />
        </div>
        <p className="mt-10 text-6xl"> Electricity</p>
        <div
          id="electricityBar"
          className="mt-5 h-14 w-full rounded-full bg-gray-400"
        >
          <div
            className="rounded-full bg-yellow-400"
            style={{
              height: '100%',
              width: itemData.electricityStatTotal + '%',
            }}
          />
        </div>
      </div>
      <div id="extra" className="h-2/5 w-full bg-blue-600 text-center">
        <br />
        <p id="title" className="text-8xl">
          {itemData.name}
        </p>
        <br />
        <p id="description" className="text-4xl">
          {itemData.description}
        </p>
      </div>
      <div id="extra2" className="h-2/5 w-full bg-green-600"></div>
      <div id="extra3" className="h-2/5 w-full bg-red-600"></div>
    </div>
  )
}

export default Item
