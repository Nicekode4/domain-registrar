import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FrontpageStyle } from './Frontpage.style';

function Frontpage() {
  const { register, handleSubmit } = useForm();
  const [domainResults, setDomainResults] = useState({});
  const [input, setInput] = useState("");
  const [searchInProgress, setSearchInProgress] = useState(false);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(1);
  let slides = [
    {
        heading: ".pizza?",
        text: "Pizza time!",
        image_link: "https://img.freepik.com/free-vector/dark-black-background-design-with-stripes_1017-38064.jpg"
      },
      {
        heading: "Want a domain?",
        text: "We can help!",
        image_link: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"
      },
      {
        heading: "1 pound domains!",
        text: "Only today!",
        image_link: "https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg"
      },
      
  ]


  let tlds = [
    '.dk',
    '.eu',
    '.net',
    '.wtf',
    '.cool'
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < slides.length - 1) {
        setCount(count + 1);
      }else{
      setCount(0);
      }
      
      console.log(count);
    }, 5000);
    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {

  }, [searchInProgress]);

  const onSubmit = async (data) => {
    setDomainResults({})
    setSearchInProgress(true)
    setInput(data.domain)
    const results = {};
    for (const tld of tlds) {
      
      try {
        const response = await axios.get(`https://domain.api.kode4.dk/check?domain=${data.domain.split(".")[1] ? data.domain.substring(0, data.domain.indexOf('.')) + tld : data.domain + tld}`);
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

  return (
    <FrontpageStyle>
      <section className='slider' style={{backgroundImage: `url(${slides[count].image_link})`}}>
        <h1>{`${slides[count].heading}`}</h1>
        <p>{`${slides[count].text}`}</p>
      </section>
      <section className='search'>
        <h1>Find your domain</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('domain', { required: true })} />
          <button type="submit">🔍</button>
        </form>
        <ul>
          <li style={{color: "red"}}>.dk</li>
          <li style={{color: "blue"}}>.eu</li>
          <li style={{color: "orange"}}>.com</li>
          <li style={{color: "purple"}}>.net</li>
          <li style={{color: "black"}}>.cool</li>
          <li style={{color: "green"}}>.wtf</li>
        </ul>
        
      </section>
      <hr />
      {
        <section className='result'>
          { Object.entries(domainResults).map(([tld, available], index) => (
            <h1 key={index}>{input.split(".")[1] ? input.substring(0, input.indexOf('.')) + tld : input + tld} - {!available ? 'Optaget' : 'Ledigt'}</h1>
            
          ))}
          <hr />
        </section>
        }
    </FrontpageStyle>
  );
}

export default Frontpage;

