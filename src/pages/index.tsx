import type { NextPage } from 'next';
import List from '../ui/components/list/list';
import Title from '../ui/components/title/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Title title='' 
      subtitle={
      <span>Com um pequeno valor mensal, você pode <br/> <strong>adotar um pet virtualmente</strong></span>
      } />

      <List />

    </div>
  )
}

export default Home
