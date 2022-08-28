import React from 'react';
import {Accordion} from "flowbite-react";


const FAQs = ({faqs}) => {
    return (
        <React.Fragment>
            <h2 className="text-2xl">FAQS</h2>

            <div className="w-1/2 mb-32">
                <Accordion alwaysOpen={true}>
                    {
                        faqs && faqs.map(faq => (
                            <Accordion.Panel key={faq}>
                                <Accordion.Title>
                                    {faq.question}
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        {faq.answer}
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))
                    }
                </Accordion>
            </div>
        </React.Fragment>

    );
}

export default FAQs;


