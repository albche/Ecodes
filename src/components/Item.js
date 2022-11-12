import { getSelectionRange } from '@testing-library/user-event/dist/utils'
import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../style.css'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { isCompositeComponent } from 'react-dom/test-utils'

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
  const [productionStats, setProductionStats] = useState([])

  const [electricityStats, setElectricityStats] = useState([])

  const { height, width } = useWindowDimensions()
  const [initMargin, setInitMargin] = useState('960px')

  useEffect(() => {
    const id = searchParams.get('id')
    fetch('http://99.129.202.114:12345/item?id=' + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setItemData(data)
      })

    const pStatlist = Object.entries(productionStats).map((stat) => (
      <h4>
        {stat[0]}: {String(stat[1])}
      </h4>
    ))
    setProductionStats(pStatlist)

    const eStatlist = Object.entries(productionStats).map((stat) => (
      <h4>
        {stat[0]}: {String(stat[1])}
      </h4>
    ))
    setProductionStats(eStatlist)

    setInitMargin(width - 20 + 'px')
  }, [])

  return (
    <div className="absolute h-screen w-screen place-content-center text-lg">
      <div
        id="image"
        className="fixed -z-50 flex aspect-square w-full bg-black"
      >
        <img
          src={'https://drive.google.com/uc?export=view&id=' + itemData.imgId}
        />
      </div>
      <div
        className="w-full rounded-t-3xl bg-green-200 px-5 pb-10 pt-6"
        style={{ marginTop: `${initMargin}` }}
      >
        <p className="text-6xl">Production</p>
        <div
          id="productionBar"
          className="relative mt-5 h-14 w-full rounded-full bg-gray-400"
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
      <div id="descriptions" className="h-2/5 w-full bg-blue-600 text-center">
        <br />
        <p id="title" className="text-8xl">
          {itemData.name}
        </p>
        <br />
        <p id="description" className="text-4xl">
          {itemData.description}
        </p>
      </div>
      <div id="stats" className="h-2/5 w-full bg-green-600">
        {productionStats}
      </div>
      <div id="extra3" className="h-2/5 w-full bg-red-600"></div>
    </div>
  )
}

export default Item
