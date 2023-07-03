import React from "react";
import { users } from "../components/mock";
import SectionItem from "./SectionItem";

const Section = () => {
  return (
    <div>
      {users.map((item) => (
        <SectionItem key={item.id} user={item} />
      ))}
    </div>
  );
};

export default Section;
