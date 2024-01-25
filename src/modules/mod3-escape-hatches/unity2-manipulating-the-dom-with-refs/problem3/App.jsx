import { useState, useRef } from 'react';
import { flushSync } from 'react-dom'

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const itemsRef = useRef(null)
  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }
  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  return (
    <>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1) {
            flushSync(() => {
              setIndex(index + 1);
            })
            scrollToId(index + 1)
          } else {
            flushSync(() => {
              setIndex(0);
            })
            scrollToId(0)
          }
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}
              ref={node => {
                const map = getMap();
                if (node) {
                  // Add to the Map
                  map.set(cat.id, node);
                } else {
                  // Remove from the Map
                  map.delete(cat.id);
                }
              }}  
            >
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}

