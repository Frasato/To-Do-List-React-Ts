import { useState } from 'react';
import { ContainerApp, CreateArea, CreateButton, InputTitle, Items, ListArea, Separator, TextLoading } from './App.styles';
import ListItems from './components/ListItem/ListItem';
import { IoIosAddCircle } from 'react-icons/io';
import { ItemsList } from './@types/itemsList';
import TheresNoImg from './components/TheresNoImg/TheresNoTask';

const App = () => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [items, setItems] = useState<ItemsList[]>([]);
  const [createItemLoading, setCreateItemLoading] = useState<boolean>(false);

  function createItem(): void{
    setCreateItemLoading(true);
    let item: ItemsList = {title: '', description: ''}

    if(title != '' && description != ''){
      item = {
        title: title,
        description: description,
      }
      setItems([...items, item]);
    }

    setCreateItemLoading(false);
    setTitle('');
    setDescription('');
  }

  function deleteItem(id: number): void{

    const updateItemsList: ItemsList[] = items.filter((item: ItemsList, index: number)=>{
      return index !== id
    });

    setItems(updateItemsList);

  }

  return (
    <ContainerApp>
      <CreateArea>
        <InputTitle placeholder='Title...' value={title} onChange={e => setTitle(e.target.value)}/>
        <InputTitle placeholder='Description...' value={description} onChange={e => setDescription(e.target.value)}/>
        <CreateButton onClick={createItem}>Create <IoIosAddCircle className='icon'/></CreateButton>
      </CreateArea>
      
      <Separator></Separator>

      {items.length == 0 && <TheresNoImg />}

      <ListArea>
        <Items>
          {createItemLoading? <TextLoading>Creating Items...</TextLoading> : items.map((it, index) =>{
            return(
                <ListItems key={index} title={it.title} description={it.description} onClick={() => deleteItem(index)}/>
            )
          })}
        </Items>
      </ListArea>
    </ContainerApp>
  )
}

export default App;