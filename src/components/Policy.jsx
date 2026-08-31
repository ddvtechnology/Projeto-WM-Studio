import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const policies = [
  {
    title: "Agendamento",
    text: "Os horários devem ser agendados antecipadamente. A confirmação do atendimento será realizada após o pagamento do sinal, quando solicitado.",
  },
  {
    title: "Pontualidade",
    text: "Pedimos que chegue no horário combinado. Atrasos podem comprometer o tempo da produção e, em casos de atraso significativo, o atendimento poderá ser ajustado ou cancelado.",
  },
  {
    title: "Cancelamento e remarcação",
    text: "Caso precise cancelar ou remarcar, avise com antecedência para que possamos reorganizar a agenda.",
  },
  {
    title: "Preparação para o atendimento",
    text: "Para melhor resultado e durabilidade do penteado, venha com os cabelos limpos, secos e sem excesso de produtos ou oleosidade.",
  },
  {
    title: "Referências",
    text: "Fique à vontade para enviar fotos de inspiração. O penteado será adaptado ao seu tipo de cabelo, formato do rosto e estilo pessoal.",
  },
  {
    title: "Crianças e acompanhantes",
    text: "Para manter o ambiente organizado e proporcionar um atendimento de qualidade, pedimos que acompanhantes sejam evitados sempre que possível.",
  },
  {
    title: "Valores",
    text: "Os valores podem variar de acordo com o comprimento, volume, complexidade do penteado e necessidade de preparação.",
  },
  {
    title: "Atendimento personalizado",
    text: "Cada produção é realizada com carinho, dedicação e atenção aos detalhes, buscando sempre valorizar a beleza e a personalidade de cada cliente.",
  },
];

function AccordionItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  return (
    <div className="border-b border-wine-dark/10">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-display text-lg sm:text-xl text-wine-dark pr-4">{item.title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-terracotta shrink-0"
        >
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-ink/75 leading-relaxed text-[0.95rem] max-w-2xl">{item.text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Policy() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="atendimento" className="bg-ivory py-24 sm:py-32">
      <div className="container-studio">
        <Reveal className="max-w-xl mb-14">
          <p className="divider-label mb-6 max-w-[220px]">Antes de agendar</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-wine-dark">
            Política de Atendimento
          </h2>
        </Reveal>

        <Reveal className="max-w-3xl">
          {policies.map((item, i) => (
            <AccordionItem
              key={item.title}
              item={item}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
