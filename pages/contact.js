import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="You can contact me regarding frontend work!"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
