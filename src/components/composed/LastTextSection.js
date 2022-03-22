import { SectionTitle } from "../units/SectionTitle";
import { Icon } from "../units/Icon";
import { lastSectionBulletPoints } from "../../assets/copy";
import { BsFillLightningFill } from "react-icons/bs";

export const LastTextSection = () => {
  const listItems = lastSectionBulletPoints.map((item, index) => (
    <li key={index} className="flex flex-row items-start sm:text-lg my-2">
      <Icon className="mt-2 mr-2" color="var(--bright-red-text)" title="smile">
        <BsFillLightningFill />
      </Icon>
      <p>{item}</p>
    </li>
  ));

  return (
    <section className="my-8 px-4 md:mx-12 2xl:mx-36">
      <SectionTitle titleText="...dulcis in fundo" />
      <p className="px-2 sm:text-lg">
        As much as I love writing, I couldn't let you leave without sharing some fun facts:
      </p>
      <ul className="my-2 px-2">{listItems}</ul>
    </section>
  );
};
