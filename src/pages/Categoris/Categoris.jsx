import React from 'react';
import Panel from '../../Components/Panel/Panel'; 
import { BiCategory } from "react-icons/bi";

export const Categoris = () => {
  return (
    <section>
      <Panel title="Category" icon={<BiCategory />} />
    </section>
  );
};
