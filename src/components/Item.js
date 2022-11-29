import { getSelectionRange } from '@testing-library/user-event/dist/utils'
import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../style.css'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { isCompositeComponent } from 'react-dom/test-utils'
import iron from '../assets/iron_steel.png'
import aluminum from '../assets/aluminum.png'
import concrete from '../assets/concrete.png'
import copper from '../assets/copper.png'
import glass from '../assets/glass.png'
import paper from '../assets/paper.png'
import plastic from '../assets/plastic.png'
import rubber from '../assets/rubber.png'
import silver from '../assets/silver.png'
import textiles from '../assets/textiles.png'

const Item = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [itemData, setItemData] = useState({
    id: 0,
    name: '',
    imgid: '',
    description: '',
    productionCost: 0,
    productionTopFive: [],
    electricityCost: 0,
  })

  const iconstyling = 'ml-4 mb-2 w-20 rounded-full text-4xl'

  const [productionStats, setProductionStats] = useState([])
  const [electricityStats, setElectricityStats] = useState([])
  const { height, width } = useWindowDimensions()
  const [initMargin, setInitMargin] = useState('960px')
  const [icons, setIcons] = useState()

  useEffect(() => {
    const id = searchParams.get('id')
    fetch('http://99.129.202.114:12345/item?id=' + id)
      .then((response) => response.json())
      .then((data) => {
        setItemData(data)
        setIcons(
          data.productionTopFive.slice(0, 3).map((mat) => {
            switch (mat[0]) {
              case 'aluminum':
                return (
                  <img className={iconstyling} src={aluminum} alt="Aluminum" />
                )
              case 'cement':
                return (
                  <img className={iconstyling} src={concrete} alt="Cement" />
                )
              case 'plastic':
                return (
                  <img className={iconstyling} src={plastic} alt="Plastic" />
                )
              case 'glass':
                return <img className={iconstyling} src={glass} alt="Glass" />
              case 'latex':
              case 'rubber':
                return (
                  <img
                    className={iconstyling}
                    src={rubber}
                    alt="Rubber/Latex"
                  />
                )
              case 'copper':
                return <img className={iconstyling} src={copper} alt="Copper" />
              case 'silver':
                return <img className={iconstyling} src={silver} alt="Silver" />
              case 'steelIron':
                return (
                  <img className={iconstyling} src={iron} alt="Steel/Iron" />
                )
              case 'paper':
                return <img className={iconstyling} src={paper} alt="Paper" />
              case 'textile':
                return (
                  <img className={iconstyling} src={textiles} alt="Textiles" />
                )
            }
          })
        )
      })
      .catch((err) => {
        console.log(err)
      })

    // const pStatlist = Object.entries(productionStats).map((stat) => (
    //   <h4>
    //     {stat[0]}: {String(stat[1])}
    //   </h4>
    // ))
    // setProductionStats(pStatlist)

    setInitMargin(width - 62 + 'px')
  }, [])

  // handleIconClick() {

  // }

  // handleProductionInfoClicked() {

  // }

  /*
   *small shadow between text and image?
   */

  return (
    <div
      className="absolute -z-50 w-screen place-content-center border-green-400 bg-green-400 text-lg"
      style={{ minHeight: '100vh', borderWidth: '16px' }}
    >
      <div id="title" className="fixed z-50 mt-5 w-full text-center">
        <p id="title" className="text-8xl">
          {itemData.name}
        </p>
      </div>
      <div
        id="image"
        className="fixed -z-40 flex aspect-square"
        style={{ width: `${width - 34}px` }}
      >
        <img
          src={'https://drive.google.com/uc?export=view&id=' + itemData.imgid}
        />
      </div>
      <div
        className="w-full rounded-t-3xl bg-green-400 px-5 pb-10 pt-6"
        style={{ marginTop: `${initMargin}` }}
      >
        <div className="inline-flex">
          <p className="ml-2 text-6xl">Material Score</p>
          {icons}
        </div>
        <div
          id="productionBar"
          className="relative mt-5 h-14 w-full rounded-full bg-gray-400"
        >
          <div
            className="rounded-full bg-blue-400"
            style={{
              height: '100%',
              width: 100 - itemData.productionCost / 100 + '%',
              maxWidth: '100%',
              minWidth: '6%',
            }}
          />
        </div>
        <div className="mt-7 inline-flex">
          <p className="ml-2 mb-2 text-6xl">Electricity Score</p>
          <button className="ml-4 mt-3 w-fit rounded-full bg-gray-200 px-4 py-2 text-4xl">
            {itemData.electricityKWH}kWh
          </button>
        </div>
        <div
          id="electricityBar"
          className="mt-5 h-14 w-full rounded-full bg-gray-400"
        >
          <div
            className="rounded-full bg-yellow-400"
            style={{
              height: '100%',
              width: 100 - itemData.electricityCost + '%',
              maxWidth: '100%',
              minWidth: '6%',
            }}
          />
        </div>
      </div>
      <div
        id="descriptions"
        className="h-2/5 w-full bg-green-400 pb-10 text-center"
      >
        <br />
        <p id="description" className="text-4xl">
          {itemData.description}
        </p>
      </div>
      <div
        id="extra"
        className="w-full bg-green-400"
        style={{ height: '3000px' }}
      ></div>
    </div>
  )
}

export default Item
