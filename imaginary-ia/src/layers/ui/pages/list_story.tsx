import { FC } from "react";
import { Logo_Container } from "../containers/logo_container";
import {
  Subtitle_Container,
  Title_Container,
} from "../containers/title_container";
import { Title_Layout } from "../layouts/title_layout";
import { Story_Template_Viewer } from "../components/story_template_viewer";
import { Header_Component } from "../components/common/header_component";
interface PageProps {
  //Props
}

export const List_Story_Page: FC<PageProps> = () => {
  return (
    <div>
    <Header_Component />

      <Title_Layout>
        <Title_Container
          title="Imaginary.AI"
          className="font-pixelify text-5xl font-bold"
        />
        <Subtitle_Container
          title="Plantillas Guardadas"
          className="font-pixelify "
        />
      </Title_Layout>
      <br />
      <br />
      <br />
      <Story_Template_Viewer />
    </div>
  );
};
