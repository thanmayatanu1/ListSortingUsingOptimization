import React, { useState, useMemo } from 'react';
import Button from '../../UI/Button';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const [isDescending, setIsDescending] = useState(true);

  const sortedList = useMemo(() => {
    if (isDescending) {
      return props.items.slice().sort((a, b) => b - a);
    } else {
      return props.items.slice().sort((a, b) => a - b);
    }
  }, [isDescending, props.items]);

  const toggleOrder = () => {
    setIsDescending((prevState) => !prevState);
  };

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
  
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={toggleOrder} isDescending={isDescending} />
    </div>
  );
};

export default React.memo(DemoList);