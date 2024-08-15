import { ContainerApp, CreateArea, CreateButton, InputTitle, Items, ListArea, Separator } from './App.styles';
import ListItems from './components/ListItem/ListItem';
import { IoIosAddCircle } from 'react-icons/io';

const App = () => {
  return (
    <ContainerApp>
      <CreateArea>
        <InputTitle placeholder='Title...'/>
        <InputTitle placeholder='Description...'/>
        <CreateButton>Create <IoIosAddCircle className='icon'/></CreateButton>
      </CreateArea>
      
      <Separator></Separator>

      <ListArea>
        <Items>
          <ListItems title='Test' description='Testando mais ainda essa porra!'/>
          <ListItems title='Test' description='Testando mais ainda essa porra!'/>
          <ListItems title='Test' description='Testando mais ainda essa porra!'/>
          <ListItems title='Test' description='Testando mais ainda essa porra!'/>
        </Items>
      </ListArea>
    </ContainerApp>
  )
}

export default App;