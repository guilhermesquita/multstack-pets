import type { NextPage } from 'next';
import Title from '../ui/components/title/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Title title='' 
      subtitle={
      <span>Com um pequeno valor mensal, você pode <br/> <strong>adotar um pet virtualmente</strong></span>
      } />
    </div>
  )
}

export default Home
