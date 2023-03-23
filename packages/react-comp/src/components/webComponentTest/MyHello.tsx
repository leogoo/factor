import  { useEffect } from 'react';

const MyHello = ({ name }: { name: string }) => {
  useEffect(() => {
    console.log(`Hello ${name}`);
  }, []);
  return (
    <div>
      hello {name}
    </div>
  )
};
export default MyHello;