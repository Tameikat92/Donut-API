import { error } from "console";
import React,{ useEffect,useState} from "react"
import { useParams } from "react-router-dom";


interface DonutDetails {
   name: string;
   calories: number;
   photo: string;
   extras: string[]; 
}

const API_URL = 'https://grandcircusco.github.io/demo-apis/donuts.json';

const Details: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [donuts,setDonuts] = useState<DonutDetails | null>(null)

    useEffect(() => {
        fetch(`${API_URL}/${id}.json`)
        .then((response) => response.json())
        .then((data) => setDonuts(data))
        .catch((error) => console.error("Error fetching donumt details",error))
    },[id]);

    return(
        <div>
            {donuts ? (
                <div>
                   <h1>{donuts.name}</h1> 
                   <p>Calories: {donuts.calories}</p>
                   {donuts.photo && <img src={donuts.photo} alt={donuts.name} />}
                </div>
            ) : (
                <p> Loading... </p>
            )

            }
        </div>
    )

}




export default Details;