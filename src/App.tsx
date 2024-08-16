import { useEffect, useState } from 'react';
import { ContainerApp, CreateArea, CreateButton, InputTitle, Items, LengthDesc, LengthTitle, ListArea, Separator, TextLoading } from './App.styles';
import ListItems from './components/ListItem/ListItem';
import { IoIosAddCircle } from 'react-icons/io';
import { ItemsList } from './@types/itemsList';
import TheresNoImg from './components/TheresNoImg/TheresNoTask';

const App = () => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [items, setItems] = useState<ItemsList[]>([]);
  const [createItemLoading, setCreateItemLoading] = useState<boolean>(false);

  useEffect((): void =>{
    const storage = localStorage.getItem('ItemsList');

    if(storage){
      const convertedStorage: ItemsList[] = JSON.parse(storage);
      setItems(convertedStorage);
    }
  },[]);

  useEffect(():void =>{
    localStorage.setItem('ItemsList', JSON.stringify(items));
  },[items]);

  function createItem(): void{
    setCreateItemLoading(true);
    let item: ItemsList = {title: '', description: ''}

    if(title != '' && description != ''){
      if(title.length <= 14 && description.length <= 60){
        item = {
          title: title,
          description: description,
        }
        setItems([...items, item]);
        setTitle('');
        setDescription('');
      }
    }

    setCreateItemLoading(false);
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
        {title.length > 0 &&
          <LengthTitle>{title.length}/14</LengthTitle>
        }
        <InputTitle placeholder='Title...' value={title} onChange={e => setTitle(e.target.value)}/>
        {description.length > 0 &&
          <LengthDesc>{description.length}/60</LengthDesc>
        }
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