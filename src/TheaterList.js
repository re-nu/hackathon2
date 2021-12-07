import { Theater } from './Theater';
import { useEffect, useState } from 'react';

export function TheaterList() {
  const [theaters, settheaters] = useState([]);

  useEffect(() => {
    async function getTher() {
      const d = await fetch("https://hackaton2-node.herokuapp.com/theaters");
      const ther = await d.json();
      settheaters(ther);
      console.log(theaters);
    }
    getTher();
  }, []);

  return (
    <div className="all-theaters">
      {theaters.map((i) => (
        <Theater key={i._id} name={i.name} pic={i.pic} id={i._id} />
      ))}
    </div>
  );
}
