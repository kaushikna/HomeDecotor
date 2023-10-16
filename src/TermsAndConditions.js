import React from "react";
import Navbar from "./Component/Navbar";
import Footer2 from "./Component/Footer.js";

const TermsAndConditions = () => {
    const tncObj = [
        {
            title: "Price Validity:",
            points: [
                "The quotation is valid till xx-xx-xxxx (15 days)",
                "The exact price of your project will depend on measurements/ site conditions/wall, ceiling condition/ finishes and such other dependencies. Based on these revisions, you can expect the quote value to vary.",
                "Based on your initial discussion with the our representatives, you shall make an initial payment of 10% of Order Value, for booking the order with Pronto, subject to terms and conditions mentioned herein, if applicable",
                "The Price structure has 2 installments; First installment being 10% of the estimate shared, which is paid at the time of order booking, and the Second installment being the remaining 90% of the estimate, payable prior to the materials being dispatched by the Pronto team from its factory/warehouse/distributor.",
                "The final payment of 90% (ninety percent) of the estimate shared has to be completed before the material dispatch from the factory/warehouse/distributor and not before the job. Pronto is not responsible for any delay if caused on account of non-payment of the balance 90% amount.",
                "The name used for order booking should be in line with the KYC of the customer. No name change is possible once order is booked. Disclosing complete names at the time of order booking will help for all legal communications, availing finance options, GST Invoice in case of registered person and processing refund if in case of cancellation, and hence is appreciated."
            ]
        },
        {
            title: "Placing an Order:",
            points: [
                "The Customer intending to engage with Pronto shall first fill up the form available on the website pronto.homelane.com. The Form shall consist of the required basic details such as Name, Address, Mobile Number, Email Address etc. of the Customer.",
                "Post filling and submitting the online form, the Customer shall receive a call from the Pronto team to understand the requirements, in detail, and schedule a meeting.",
                "During the meeting, a site inspection shall be carried out by the Pronto Expert, and the prices shall be provided accordingly to the customer after the inspection.",
                "We shall then share an email with the Customer along with the quote, the link of the quote which can be accessed by the Customer by logging in with the generated User ID and Password.",
                "Finally, the Customer has to log-in, go through the quote which includes the Terms and Conditions, and accept the quote using the “I Agree” ClickWrap Button, which is in the form of a pop up text and shall read as “I have read, understood and accept the Terms and Conditions” or any of its similar variant, as updated from time to time. ",
            ]
        },
        {
            title: "Site Checks:",
            points: [
                "The painting job includes scrubbing the old paint and putty coat. Hence, the space (kitchen/living area etc) needs to be covered before starting the job.",
                "The user will not be able to use the space during the job.",
                "Any existing hardware/accessory etc. will be removed or covered. Pronto will not be responsible for any non functioning hardware or accessory during or after the painting job.",
                "Client/Customer has to share the details/issues related to wall condition (example dampness, chipping) or any other such specific requirements."
            ]
        },
        {
            title: "Delivery Timeline",
            points: [
                "We strive to deliver your project within a reasonable time, as per industry standards, from the date of starting the work, subject to conditions defined in point 5 of the Terms and Conditions."
            ]
        },
        {
            title: "Pre-Conditions for Delivery",
            subTitle: "At Pronto, we aim at professional and timely delivery of your project. However, the delivery of your project shall also depend on certain external conditions/circumstances such as:",
            points: [
                "If the site has restrictions on work timings during the day.",
                "If there is concurrent work being done at the site by any other third-party contractor like Wallpaper, Wooden Flooring, or Carpentry Work during the job, and work being executed by the builder such as civil works, core-cutting etc.",
                "Abnormal hindrances in execution like Continuous Lack of Power, Non-Working Lifts, No Permission from Builder, Society association, etc.",
                "A force majeure event occurs and such other events which are beyond the control of the company."
            ],
            subTitle2: "In such cases mentioned above, there might be a delay in the delivery of the project from the regular timelines and the same shall not be attributable to Pronto."
        },
        {
            title: "Up to 1-year warranty:",
            points: [
                {
                    title: "What’s covered?",
                    points: [
                        "Paint color variation, paint peel off",
                        "Waterproofing - dampness level should be same at the time of claim"
                    ]
                },
                {
                    title: "What’s not covered?",
                    points: [
                        "Dent, marks, scribbles on painted walls",
                        "Waterproofing - if the dampness level increased at the time of claim"
                    ]
                }
            ]
        },
        {
            title: "Cleaning Services:",
            points: [
                "Paint marks on the floor, modular fixtures etc.",
                "Dusting and collection of debris(bucket, sand paper etc)",
                "Cleaning of doors"
            ]
        },
        {
            title: 'Cancellation Policy',
            subTitle: `While Pronto strives to deliver every product to completion, it’s understandable that in some cases customers might want to cancel their orders. In such cases, the following policy will be applicable. Pronto shall deduct 50% of the total amount paid to cover expenses under Marketing and Operations. The applicable balance shall be refunded to the customer into his/her bank account.`
        },
        {
            title: "Termination",
            subTitle: "Pronto can terminate this Agreement without any liability under the following circumstances:",
            points: [
                "In case there is a discrepancy in Payment by the Customer",
                "In case the Customer is willingly interfering in Pronto’s job or creating too many and frequent obstacles during the job/project.",
                "In case the Customer resorts to any sort of assault/abuse, be it physical or verbal with any of the Pronto team members during the course of the Agreement."
            ],
            subTitle2: "In the aforementioned cases, Pronto reserves its right to terminate the Agreement with an immediate effect, and shall not be liable to refund any amount paid by Customer under the Agreement."
        },
        {
            title: 'Confidentiality',
            subTitle: 'In view of the engagement, the Customer might receive information proprietary to Pronto including the quote, vendor information etc., which is identified as “Confidential” or “Proprietary” or which the Customer has reasons to believe is treated as confidential by the Company (“Confidential Information”). The Customer understands and agrees that all Confidential Information disclosed by Pronto hereunder shall be maintained in confidence and shall not be disclosed to any Third Party or used for any purpose except as expressly permitted herein without the prior written consent of Pronto.',
        },
        {
            title: 'Intellectual Property Rights',
            subTitle: 'The term "Intellectual Property" (IP) includes without limitation all copyrightable works, all trademarks, logos, computer Software/ database and all other proprietary rights belonging to the Parties, of whatsoever description whether or not protected and whether or not capable of protection. Customer acknowledges that the performance of the Services by Pronto may / would result in discovery, creation or development of copyright, designs, processes, methods, techniques, improvements, strategies, data and/or other original works of authorship and other intellectual property rights, and the Customer agrees and acknowledges that all rights, title and interest in and to the Intellectual Property upon the creation of the same, shall always fully and absolutely be owned by Pronto during the subsistence of the Agreement and even after termination of this Agreement. In the event of an infringement of Pronto’s intellectual property rights by Customer, Pronto may terminate this Agreement forthwith, without being liable to refund any amounts already received from Customer.',
        },
        {
            title: 'Force Majeure',
            subTitle: 'Pronto will not be in default if its failure to perform any obligation is caused by supervening conditions beyond Pronto’s reasonable control, including without limitation, acts of God, pandemics, epidemics, lockdown, break-down of Pronto’s machinery, unexpected shortage or non-availability of raw materials, components or consumables, interference by third parties, lockdowns, lock-outs, wars, riots, civil commotion, strikes, or other causes beyond Pronto’s reasonable control. Pronto shall inform the Customer of such conditions with reasonableness and at the earliest, and shall strive to make best efforts in order to deliver the Scope as envisaged.',
        },
        {
            title: 'Privacy and Security',
            subTitle: 'You understand that by using the services or our website, you consent to the collection, use and disclosure of your personally identifiable information and aggregate data as set forth in our Privacy Policy, and to have your personally identifiable information collected, used, processed and transferred to such service providers or affiliates as detailed under the thereunder. You understand that Pronto cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.',
        },
        {
            title: 'Governing Law, Jurisdiction and Dispute Resolution',
            subTitle: 'This Agreement shall be governed by and interpreted in accordance with the laws of the Republic of India. The jurisdiction for all disputes arising out of and in relation to the Agreement shall vest exclusively with the courts in Bengaluru, India.',
        }
    ]
    return (
        <>
            <div id="Wrapper">
                <style>
                    {
                        `p{margin: 0}`
                    }
                </style>
                <Navbar />
                <div className="termsofuseContainer">
                    <h1 className="maintitle">Terms & Conditions</h1>
                    <h2 className="titleContent">HomeLane Pronto is a sub-brand of HomeLane, owned and managed by Homevista Decor and Furnishings Private Limited, which renders painting services to the customers.</h2>
                    <p>These Terms and Conditions shall apply and govern the totality of the project/engagement entered between You (“User/Customer/Client”) and HomeLane Pronto (“Pronto”).</p>
                    <p>These Terms and Conditions may be accepted online through an email or link provided by Pronto to you, in either modes, the acceptance shall be deemed valid under all applicable laws, and the document shall be construed as a legal and binding agreement between you and Pronto, respectively. That, by engaging with Pronto and using its Services, you confirm that you assent to (unconditionally and irrevocably) these Terms and Conditions (the 'Agreement').</p>
                    <ol>
                        {tncObj.map((data, id) => {
                            return <div key={id}>
                                <li className="termsofuse-title">{data.title}</li>
                                {data.subTitle && <p dangerouslySetInnerHTML={{ __html: data.subTitle }}></p>}
                                <ol className="list" >
                                    {
                                        data.points && data.points.map((subData, key) => {
                                            if (Array.isArray(subData.points)) {
                                                return <div>
                                                    <li className="termsofuse-title sub-title">{subData.title}</li>
                                                    <ol key={key} className="subList" >
                                                        {
                                                            subData.points.map((point, key) => {
                                                                return <li className="termsofuse-listItem" key={`sublist-${key}`} dangerouslySetInnerHTML={{ __html: point }}></li>
                                                            })
                                                        }
                                                    </ol>
                                                </div>
                                            } else {
                                                return <li className="termsofuse-listItem" key={`list-${key}`} dangerouslySetInnerHTML={{ __html: subData }}></li>
                                            }
                                        })
                                    }
                                </ol>
                                {data.subTitle2 && <p dangerouslySetInnerHTML={{ __html: data.subTitle2 }}></p>}
                            </div>
                        })}
                    </ol>
                    <p className="titleContent"><strong><i>We may change the Terms and Conditions or modify any features of the website at any time at our sole discretion. If you continue to use the Services after changes are posted you will be deemed to have accepted the change.</i></strong></p>
                </div>
                <Footer2 />
            </div>
        </>
    )
}

export default TermsAndConditions;

