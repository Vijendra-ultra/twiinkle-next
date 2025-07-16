import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type AccordionProp = {
  question: string;
  answer: string;
};
const AccordionComp: React.FC<AccordionProp> = ({ question, answer }) => {
  return (
    <>
      {" "}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default AccordionComp;
