import React from 'react';

import {Accordion, AccordionTab} from 'primereact/accordion';


const FAQs = ({faqs}) => {
    return (
        <React.Fragment>
            <h2 className="text-2xl">FAQS</h2>
            <Accordion multiple activeIndex={0} className="w-1/2">

                {faqs && faqs.map(faq => (
                    <AccordionTab header={faq.question} key={faq.id}>
                        <div>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    </AccordionTab>

                ))}
            </Accordion>
        </React.Fragment>

    );
}

export default FAQs;