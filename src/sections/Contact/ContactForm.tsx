import Header from "../../components/sharedComponents/Header";
import SharedForm from "../../components/sharedComponents/SharedForm";
import Container from "../../layouts/Container";
import type { ConactFormType } from "../../types/Contact/ContactType";
import { contactFormSection } from "../../data/Properties/PropertisData";

interface Props {
  title: string;
  description: string;
  data: ConactFormType[];
  areaText: ConactFormType;
  detailsPage?: boolean;
  properties?: boolean;
}

const ContactForm = ({
  title,
  description,
  data,
  areaText,
  detailsPage,
  properties,
}: Props) => {
  return (
    <Container
      className={`flex flex-col ${
        detailsPage
          ? "lg:flex-row lg:gap-[5.5556vw] xl:gap-[5.20834vw]"
          : "lg:gap-15 xl:gap-20"
      } gap-10 md:gap-12.5`}
    >
      <div
        className={`w-full ${
          detailsPage
            ? "lg:w-[28.6112vw] xl:w-[27.03125vw]"
            : "lg:w-[81.21478%]"
        }`}
      >
        <Header hash="contact-form" title={title} description={description} withIcon />
      </div>

      <div className="flex-1">
        <SharedForm
          data={data}
          areaText={areaText}
          detailsForm={detailsPage}
          propertiesForm={properties}
          checkboxItems={contactFormSection.boxCheck?.map((item) => ({
            id: item.id,
            name: item.name ?? item.id,
            placeholder: item.placeholder ?? "",
            icon: item.icon as unknown as React.ReactNode,
          }))}
        />
      </div>
    </Container>
  );
};

export default ContactForm;
