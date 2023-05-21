import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Blog = () => {
  const pageTitle = "Blog";

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <h1 className="mt-4 mb-6 text-2xl italic font-bold text-center md:text-4xl">Frequently Asked Questions</h1>
      <Accordion className="mb-6">
          {/* 1st Question: */}
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  What is an access token and refresh token? How do they work and where should we store them on the client-side?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                      <span className="font-medium">Access Token and Refresh Token:</span> Refresh tokens allow you to balance your users access needs with your organizations security practices. Access tokens help users get the resources they need to complete their tasks,
                      <br />
                      <span className="font-medium">Stored Token:</span>
                      <br />
                      1.HTTP-only Cookies: Storing tokens as HTTP-only cookies provides a level of security by preventing client-side scripts from accessing the cookie contents. 
                      <br />
                      2.Local Storage or Session Storage: Both local storage and session storage are web storage APIs provided by modern browsers. However, it is important to note that storing tokens in these mechanisms can be vulnerable to cross-site scripting (XSS) attacks
                      <br />
                      3.IndexedDB: IndexedDB is a more advanced client-side database available in modern browsers. It offers a structured and persistent storage mechanism, allowing you to store tokens securely.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
          {/* 2nd Question: */}
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  Compare SQL and NoSQL databases?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                      <span className="font-medium">SQL and NoSQL databases:</span>
                      <br />
                      <span className="font-medium">SQL:</span> SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it.
                      <br />
                      <span className="font-medium">NoSQL:</span> NoSQL databases prioritize scalability and performance over strict ACID compliance. However, some NoSQL databases offer varying degrees of consistency models. NoSQL databases are generally schema-less or have flexible schemas, allowing for dynamic changes to the data structure without requiring alterations to existing records.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
          {/* 3rd Question: */}
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  What is express js? What is Nest JS?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <div>
                    <p><span className="font-medium">express js:</span></p> Express JS is a Node.js framework designed to build API is web applications cross-platform mobile apps quickly and make node js easy.. Express.js is known for its simplicity, flexibility, and a large ecosystem of middleware that can be easily integrated to enhance its functionality.
                    <p>
                      <span className="font-medium">Nest js:</span> NestJS is a NodeJS framework that is used for building scalable server-side applications. With NestJS, you can have readable and predictable code, TypeScript makes it more popular. It is an extensible, progressive and versatile framework.
                    </p>
                  </div>
              </AccordionItemPanel>
          </AccordionItem>
          {/* 4th Question: */}
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  What is MongoDB aggregate and how does it work?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                      <span className="font-medium">MongoDB aggregate:</span> MongoDB provides aggregation operations through aggregation pipelines — a series of operations that process data documents sequentially.Once all stages in the pipeline are processed, the final result is returned as the output of the aggregate method. The result can be a cursor, an array, or a document, depending on the specific operations performed in the pipeline
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
    </div>
  );
};

export default Blog;
