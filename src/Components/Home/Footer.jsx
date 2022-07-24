import React from 'react';
import {Flex} from "@chakra-ui/react";
import FooterComponet from './FooterComponet';


const Footer = () => {
  return (
    <>
      <Flex padding={6} justifyContent="space-between" width={"95%"}>
        <FooterComponet title="Product" arr={
          [
            "Subscription Management",
            "Recurring Billing and Invoicing",
            "Recurring Payments",
            "Accounting and Taxes",
            "SaaS Reporting",
            "Enterprise Billing",
            "Integrations"
            ]
          }/>
        <FooterComponet title="Help & Support" arr={
          [
            "Security",
            "FAQs",
            "Status",
            "Product Documentation",
            "API Documentation",
            "Supported Payment Gateways",
            "Sitemap"
            ]
          }/>
        <FooterComponet title="Resources" arr={
          [
            "Blog",
            "Compare Payment Gateways",
            "Tackling Payment Failures",
            "Enterprise Billing Guide",
            "Webinars",
            "Events",
            "Glossaries",
            "Subscription Academy"
            ]
          }/>
        <FooterComponet title="Company" arr={
          [
            "Customers",
            "Partners",
            "Careers",
            "Press",
            "Brand Guidelines",
            "Terms of Service",
            "Privacy Policy"
            ]
          }/>
      </Flex>
    </>
  )
}

export default Footer