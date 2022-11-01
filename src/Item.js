import { useSearchParams } from "react-router-dom"

function Item (props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")
    const title = "Cool Item!"
    const stats = {
        efficiency: 100,
        goodness: 10,
        coolness: 10,
        awesomeness: 10
    }
    const statArray = Object.entries(stats)
    console.log(statArray)
    const impact = ""
    const recommendations = ""

    const statsList = statArray.map((stat) =>
        <h4>{stat[0]}: {String(stat[1])}</h4>
    );

    return (
        <div>
            <h1>
                {title}
            </h1>
            <div>{statsList}</div>
        </div> 
    )
}

export default Item