import React, { ReactNode, useState, ChangeEvent, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import menuBox from './image/menu.png';
import searchBox from './image/search.png';
import "./css/SearchBarStyle.css";
import data from '../../data.json'

const SearchBar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<string[]>([]);


  //data내에 inpuvalue와 일치하는 요소 찾기
  //filterData안에는 필터링된 여러 값들이 있음

  const filterdData = data.filter(item => item.includes(inputValue));

  const handleChangeValue = (clickedItem: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const value = clickedItem.currentTarget.textContent || '';
    setInputValue(value);

  }

  const submitValue = () => {
    const url = "http://localhost:3000/busstation/search"
    fetch(url, {
      method: 'POST', // POST 방식으로 전송하거나 필요에 따라 수정
      body: JSON.stringify({ value: inputValue }), // JSON 형식으로 데이터 전송. 필요에 따라 수정
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  const resultComponents: ReactNode[] = filterdData.map((item, index) =>
    <p key={index} className='resultComponent' onClick={handleChangeValue}>{item}</p>
  )

  //value 실제 값
  //inputvalue 동기화 역할
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value !== '') {
      setIsHidden(false)
      setResult(filterdData)
    }

    else {
      setIsHidden(true)
      setResult([]);
    }
  }

  return (

    <div className="mainCss">
      <div className="searchContainerCss">
        <img src={menuBox} alt='menu' className="menuCss" />
        <input className="searchInputCss" placeholder='정류소 검색'
          onChange={onChange}
          type='text' value={inputValue} />

        <button
          onClick={() => { submitValue() }}
          className="searchContainerTextCss" >
          <div>검색</div>
          <img src={searchBox} alt="search" />
        </button>
      </div>
      <div className={isHidden ? "hiddenSearchListCss hidden" : "hiddenSearchListCss"}>
        <div className='hiddenSearchListInnerCss'> {resultComponents}</div>
      </div>
    </div>
  );
}

export default SearchBar;
