import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FrontpageStyle } from './Frontpage.style';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import pic1 from "../../Images/2.png"
import pic2 from "../../Images/4.png"
import pic3 from "../../Images/6.png"

function Frontpage() {
  const { register, handleSubmit } = useForm();
  const [domainResults, setDomainResults] = useState(null);
  const [input, setInput] = useState("");
  const [searchInProgress, setSearchInProgress] = useState(false);
  const [count, setCount] = useState(0);
  const [chosenTld, setChosenTld] = useState('');
  const [progress, setProgress] = useState(1);
  let slides = [
    {
        heading: "Spiser du .pizza?",
        text: "",
        image_link: pic1
      },
      {
        heading: "Bor du i .dk?",
        text: "",
        image_link: pic2
      },
      {
        heading: "Hvad er din ide .io?",
        text: "",
        image_link: pic3
      },
      
  ]


  let tlds = [
    '.pizza',
    '.dk',
    '.io',
    '.eu',
    '.net',
    '.wtf',
    '.cool'
  ];

  let price = [
    70,
    13,
    130,
    30,
    150,
    30,
    30,
  ];
  


  useEffect(() => {

  }, [searchInProgress]);

  const onSubmit = async (data) => {
    setDomainResults({})
    setSearchInProgress(true)
    setInput(data.domain)
    const results = {};
    for (const tld of tlds) {
      
      try {
        const response = await axios.get(`http://localhost:3001/check?domain=${data.domain.split(".")[1] ? data.domain.substring(0, data.domain.indexOf('.')) + tld : data.domain + tld}`);
        console.log((data.domain).split(".")[1]);
          results[tld] = response.data.available;
        
      } catch (error) {
        console.error(`Error fetching data for ${tld}:`, error);
        results[tld] = false; // Assuming the domain is not available if there's an error
      }
    }
    console.log(results);
    setDomainResults(results);
    setSearchInProgress(false)

  };
console.log(chosenTld);
function counter() {
  if (count < slides.length - 1) {
    setCount(count + 1);
  }else{
  setCount(0);
  }
  
  console.log(count);
}
  return (
    <FrontpageStyle>
      <Fade 
      duration={5000} 
      indicators={false}
      arrows={false}
      pauseOnHover={false}
      onChange={() => counter()}
      >
      {slides.map((fadeImage, index) => (
      <section className='slider' style={{backgroundImage: `url(${fadeImage.image_link})`}}>
        <h1>{`${fadeImage.heading}`}</h1>
        {/* <p>{`${slides[count].text}`}</p> */}

      </section>
        ))}
      </Fade>
      <section className='search'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select name="" id="" onChange={(e) => setChosenTld(e.target.value)} value={`${chosenTld || tlds[count]}`}>
            <option value=".pizza">.pizza</option>
            <option value=".dk">.dk</option>
            <option value=".io">.io</option>
          </select>
          <input type="text" placeholder='Domæne navn' {...register('domain', { required: true })} />
          <button type="submit">🔍</button>
        </form>
        {/* <ul>
          <li style={{color: "red"}}>.dk</li>
          <li style={{color: "blue"}}>.eu</li>
          <li style={{color: "orange"}}>.com</li>
          <li style={{color: "purple"}}>.net</li>
          <li style={{color: "black"}}>.cool</li>
          <li style={{color: "green"}}>.wtf</li>
        </ul> */}
{domainResults ? (
  <section className="result">
    {Object.entries(domainResults)
      .sort(([tldA], [tldB]) => {
        // Bring chosenTld to the front if it exists
        if (tldA === chosenTld) return -1;
        if (tldB === chosenTld) return 1;
        return 0;
      })
      .map(([tld, available], index) => (
        <article key={index}>
          <p>
            {input.split(".")[1]
              ? input.substring(0, input.indexOf(".")) + tld
              : input + tld}
          </p>
          <p>
            {!available ? (
              <span style={{ color: "red" }}>Optaget</span>
            ) : (
              <span style={{ color: "green" }}>Ledigt</span>
            )}
          </p>
          <p>{available ? `${price[index]} Kr.` : "X"}</p>
          {available ? (
            <button>Buy</button>
          ) : (
            <button disabled={true} style={{ color: "white" }}>
              Buy
            </button>
          )}
        </article>
      ))}
    <hr />
  </section>
) : null}

      </section>
    </FrontpageStyle>
  );
}

export default Frontpage;

