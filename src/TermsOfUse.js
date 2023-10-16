import React from "react";
import Navbar from "./Component/Navbar";
import Footer2 from "./Component/Footer.js";

const TermsOfUse = () => {
    const tncObj = [
        {
            title: 'General',
            points: [
                `The Terms of Use contained herein along with the Privacy Policy form an Agreement regulating our relationship with regard to the use of HomeLane services by you, the user (hereinafter referred to a “you”, “your”, “user”), of the www.homelane.com (‘Website’) and HomeLane mobile application (‘App’) and such other electronic device from which a user can access the Website or App, including any sub-domains of the Website, or top-level domains including www.homelane.com, mobile sites, Apps and widgets (hereinafter referred to as “Platform”).`,
                `You are advised to read this Terms carefully. If you are not agreeable to any terms or Privacy Policy, you should not proceed to use this Platform and underlined services. You can use HomeLane services if you are agreeable to all the Terms of Use of this document in their entirety. If you accept this Terms of Use, it will be a legally binding agreement between you and HomeLane.`,
                `The User is any person/ individual, who visits, uses, browses, or otherwise becomes a buyer on the Platform and avails any Service through the Platform or deals with or transacts with the Platform in any manner.`,
                `You acknowledge and agree that by visiting, using, browsing or otherwise accessing or dealing or transacting with us, you agree to be bound by these Terms. You acknowledge that we provide use and access to our Platform to you, subject to these Terms. You agree and acknowledge that you have completely read and understood these Terms and the Privacy Policy, incorporated herein by reference, as amended from time to time.`,
                `We reserve the right to change any of the terms under this Terms of Use for using our Platforms at any time by publishing new “Terms of Use” on the Platform. Your use of our Platform constitutes your acceptance of those Terms of Use. If you are not agreeable to any of our terms of use or other notices on our Platform, your sole option is to immediately cease your use of our Platform and availing our Services.`,
            ],
        },
        {
            title: 'Eligibility',
            points: [
                `Use of the Platform is available only to persons who can form legally binding contracts under applicable law. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc. are not eligible to use the Platform. If you are a minor i.e. under the age of 18 years but at least 13 years of age you may use this Platform only under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use.`,
                `HomeLane reserves the right to terminate your use and refuse to provide you with access to the Platform if HomeLane discovers that you are under the age of 18 years. The Platform is not available to persons whose membership has been suspended or terminated by HomeLane for any reason whatsoever.`,
                `If you are registering as a business entity, you represent that you have the authority to bind the entity to these Terms. Unless otherwise specified, the products/services on this Platform are directed solely at those who use/avail the products/services within India. HomeLane makes no representation that any products or services referred to in the materials on this Platform are appropriate for use, or available outside India. Those who choose to access this Platform from outside India are responsible for compliance with local/international laws if and to the extent local laws are applicable. HomeLane will deliver the products only within India and will not be liable for any claims relating to any products ordered from outside India.`,
                `If you use the Platform, you shall be solely responsible for maintaining the confidentiality of your User Name and Password and you shall be responsible for all activities that occur under your User Name and Password. You agree that if you provide any information that is untrue, inaccurate, not current or incomplete, we shall have the right to indefinitely suspend or terminate or block access to the Platform and/or underlined Services. You agree to immediately notify us of any unauthorized use / breach of your password or account and ensure that you protect your User Account.`,
                `Your mobile phone number and/or e-mail address is treated as your primary identifier on the Platform. It is your responsibility to ensure that your mobile phone number and your email address is up to date on the Platform at all times. You agree to notify us promptly if your mobile phone number or e-mail address changes by updating the same on the Platform through a one-time password verification. You agree that HomeLane shall not be liable or responsible for the activities or consequences of use or misuse of any information that occurs under your Account in cases, including, where you have failed to update your revised mobile phone number and/or e-mail address on the Platform.`,
            ],
        },
        {
            title: 'What do we do?',
            points: [
                `HomeLane is an information technology based interior designing company that provides end to end solution to your home décor and furnishing needs (“Services”). All users/customers engaged with HomeLane, in a contractual capacity or customers who wish to engage with HomeLane for availing its services shall be deemed to have acknowledged and agreed our T&Cs and such other applicable covenants that apply to all project related work and services with HomeLane at applicable stages, which comprehensively forms a part of these Terms of Use. All products/services and information displayed on any HomeLane Platform constitute an "invitation to offer". Your order for purchase constitutes your "offer" which shall be subject to the terms and conditions as mentioned in final Quotation approved and accepted by you and the Works Contract (as applicable). HomeLane reserves the right to accept or reject your offer.`,
            ],
        },
        {
            title: 'Use of Platform',
            points: [
                `Access to our Platform is free of charge and you are to ensure your system is compatible to access or use of the Platform.`,
                `We may require you to provide us with certain information including your name, date of birth, contact e-mail, phone number and such other information as required for services availed on the Platform.`,
                `By using and accessing the Platform you represent and warrant to us that:`,
                [
                    `You have the right, authority, and capacity to use the Platform, and agree to and abide by these Terms `,
                    `The use and access of the Platform and all the content posted on the Platform by you is solely for your own private use;You shall use the Platform and the services provided therein only for purposes that are permitted by (a) the Terms of Use; and (b) any applicable law, regulation, or generally accepted practices or guide in the relevant jurisdictions;`,
                    `You will not reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from us or by the use of the Platform in any manner whatsoever;`,
                    `Your use of the Platform shall not violate any applicable laws and regulatory requirements currently in force relating to your use of this Platform;`,
                    `You shall not in any manner whatsoever, use this Platform to disperse any information and data which is not in consonance with the applicable laws and regulatory requirements currently in force;`,
                    `You agree not to publish any information or personal data relating to a third party in your material provided through the Platform;`,
                    `You shall not make any negative, denigrating or defamatory statement(s) or comment(s) about us or the brand name or domain name used by us or otherwise engage in any conduct or action that might tarnish the image or reputation, of HomeLane or otherwise tarnish or dilute any HomeLane’s trade or service marks, trade name and/or goodwill associated with such trade or service marks, trade name as may be owned or used by us.`,
                ]
            ],
        },
        {
            title: 'Prohibitions',
            points: [
                `The users of the Platform are strictly prohibited from doing the following acts:`,
                [
                    `Violating or attempting to violate the integrity or security of the Platform;`,
                    `Transmitting any information, through the Platform that is disruptive or competitive to the provisions of the use of Platform;`,
                    `Intentionally submitting on the Platform any incomplete, false, or inaccurate information;`,
                    `Attempting to decipher, decompile, disassemble or reverse engineer any part of the Platform;`,
                    `Framing or hotlinking or deep linking any of the Content posted on our Platform;`,
                    `Copying or plagiarizing in any manner any of the Content or information available on the Platform;`,
                    `Transmit or attempt to transmit any computer viruses, worms, defects, Trojan horses or other items of a destructive nature.`,
                ]
            ]
        },
        {
            title: 'Intellectual Property',
            points: [
                `This Platform is controlled and operated by HomeLane and products/services are sold by either HomeLane or other manufacturers, as applicable. All material on this Platform, including images, logos, illustrations, audio clips, and video clips, are protected by copyrights, trademarks, and other intellectual property rights. Material on Platform is solely for your personal, non-commercial use. You must not copy, reproduce, republish, upload, post, transmit or distribute such material in any way, including by email or other electronic means and whether directly or indirectly and you must not assist any other person to do so. Without the prior written consent of the owner, modification of the materials, use of the materials on any other Platform or networked computer environment or use of the materials for any purpose other than personal, non-commercial use is a violation of the copyrights, trademarks and other proprietary rights, and is prohibited. Any use for which you receive any remuneration, whether in money or otherwise, is a commercial use for the purposes of this clause.`,
                `The Platform, its selection and arrangement, including but not limited to all text, graphics, user interfaces, data, written posts, software, graphics, visual interfaces, sounds and music (if any), artwork and computer code, are owned and controlled exclusively by us, our partners or our licensors only. The design, structure, selection, coordination, expression, look and feel and arrangement of such Content is protected by copyright, patent and trademark laws, and various other intellectual property rights.`,
                `HomeLane may also contain and display third party trademark(s), logo(s), content(s) (“Third Party Marks”) under a valid license or in accordance with applicable law. The intellectual rights to such Third Party Marks shall belong to their respective owners. You are not permitted to use our marks or any such Third Party Marks. It is hereby specifically recorded that the trademark, copyright and other Intellectual Property in the products available on the Platform is the sole and exclusive property of third parties. We are authorised by such third parties to put up the products on the Platform for license of use to the end customers. Intellectual Property Rights for the purpose of this Terms shall always mean and include copyrights whether registered or not, patents including rights of filing patents, trademarks, trade names, trade dresses, house marks, collective marks, associate marks and the right to register them, designs both industrial and layout, geographical indicators, moral rights, broadcasting rights, displaying rights, distribution rights, selling rights, abridged rights, translating rights, reproducing rights, performing rights, communicating rights, adapting rights, circulating rights, protected rights, joint rights, reciprocating rights, infringement rights. The Parties hereto agree and confirm that no part of any Intellectual Property rights mentioned hereinabove is transferred in the name of User and any intellectual property rights arising as a result of these presents shall also be in the absolute ownership, possession and our control or control of its licensors, as the case may be.`,
                `Unless otherwise indicated, we own all intellectual property rights to and into the trademark "HomeLane", or any other IP that might be registered by us, and the Platform, including, without limitation, any and all rights, title and interest in and to copyright, trade mark, patents, utility models, designs, know-how, trade secrets and inventions, goodwill, source code, meta tags, databases, text, content, graphics, icons, and hyperlinks.`,
                `You acknowledge and agree that you shall not copy, republish, post, display, translate, transmit, reproduce or distribute any Content through any medium without obtaining the necessary authorization from us or thirty party owners of such Content.`,
                `We respect other people's intellectual property rights and if you believe that any content or material on our Platform infringes on your intellectual property rights, you can write and inform us about the same at <a href="mailto:legal@homelane.com">legal@homelane.com</a> `,
            ],
        },
        {
            title: 'Third-Party Links and Content',
            points: [
                `The Platform may have links to third-party websites or resources, where said third party may include individuals and entities affiliated with us. You acknowledge and agree that we are not responsible or liable for the accuracy of any content posted on such third-party websites or resources, products, services, and other information available on the third-party website. Links to such websites or resources do not imply any endorsement by us of such websites or resources or the Content, products, Services, and other information available from such websites or resources. You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources.`,
                `You also understand and agree that our Platform may have third-party links and these Terms of Use do not apply to other websites that might have their link on our Platform. These third-party sites have separate and independent policies of use and therefore, we have no responsibility or liability for the content and activities of these linked sites. Thus, it is recommended and advised that you peruse the respective policies of these third-party sites for more detailed information which will help you become aware of their practices and instructions for use of their Website.`,
            ]
        },
        {
            title: 'Disclaimer of Warranties',
            points: [
                `This Platform, all products (including but not limited to software) and services, included on or otherwise made available to you through this site are provided on "as is" and "as available" basis without any representation or warranties, express or implied except otherwise specified in writing. Without prejudice to the forgoing paragraph, HomeLane does not warrant that:`,
                [
                    `This Platform will be constantly available, or available at all; `,
                    `The information on this Platform is complete, true, accurate or non-misleading;`,
                    `HomeLane will be liable to you in any way or in relation to the Contents of, or use of, or otherwise in connection with, the Platform. We do not warrant that this site; information, Content, materials, product or Services included on or otherwise made available to you through the Platform; their servers; or electronic communication sent from us are free of viruses or other harmful components`,
                ],
                `We provide no express or inferred representation or warranty (whether statutory or otherwise) in respect of this Platform or its content thereof; including, without limitation, as to their condition, reasonable quality, performance, fitness, accuracy for purpose, or that it is up to date, and all such representations and warranties are excluded, except to the degree that such exclusion would be prohibited by law.`,
                `All the products on Platform and Services rendered, are governed by central and state laws, as applicable. You will be required to enter a valid email and/or phone number while placing an order on the Website. By registering your email/ phone number with us, you consent to be contacted by us via mails/phone calls and/or SMS notifications, in case of any order or delivery or installation related updates.`,
            ]
        },
        {
            title: 'Privacy Policy',
            subTitle: `We view protection of your privacy as a very important principle. We understand clearly that you and your Personal Information is one of our most important assets. We store and process your Information including any sensitive financial information collected (as defined under the Information Technology Act, 2000), if any, on computers that may be protected by physical as well as reasonable technological security measures and procedures in accordance with Information Technology Act, 2000 and Rules there under. Our current Privacy Policy is available at <a href="/privacypolicy">https://pronto.homelane.com/privacypolicy</a>`
        },
        {
            title: 'Breach of the Terms',
            subTitle: 'If we suspect or are under the suspicion that you have breached any of the provisions under this Terms, or if requested by any legal enforcement, we will take whatever steps we and/or they deem are necessary, including but not necessarily limited to stopping your use of our Platform and/or Service, removing your credentials from the Platform, sending you a warning, taking legal action, and informing the appropriate authorities. We hereby exclude any and all liability arising out of any actions (including, but not limited to those set out above) that we may take in response to breaches of these Terms. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, warranty disclaimers, indemnities and limitations of liability.',
        },
        {
            title: 'Limitation of Liability',
            points: [
                `You clearly understand and agree that HomeLane shall under no circumstances (including, without limitation, in contract, negligence or other tort), be liable for any direct, indirect, ancillary, special, incidental, consequential or exemplary damages. This includes, but is not limited to injury, claim, loss of data, loss of income, loss of profit or loss of opportunity, loss of or damage to property, damages for monetary loss, goodwill, use, data or other intangible loss, resulting from or arising out of the use of or the inability to use the Platform or Services thereof, even if we have been advised or become aware of the possibility of such damages or loss or that such loss was foreseeable.`,
                `We are not responsible for incomplete, illegible, misdirected or stolen entries. To the fullest extent permitted by the laws of the jurisdiction in which we operate, we also exclude legal responsibility for any loss to you arising from use of our Platform or Service including from viruses, bugs or other technical malfunction, the failure of any software or equipment that impedes the operation of our Platform or the placing of entry fees, or for delays and disruptions on our Platform, a suspension or other action taken with respect to your account, and for any loss of actual or anticipated income, loss of revenue, loss of goodwill and reputation, loss of anticipated savings, loss of use, loss of data, increased costs and expenses, wasted expenditure and any indirect, special and consequential damages, arising as a result of your use of the Platform or Services thereof, whether or not such loss or damage is foreseeable, foreseen or known.`,
                `We make reasonable efforts to ensure that the products, data, statistics, and other content and material appearing on or forming part of our Platform and Service is complete, accurate, and up-to-date. We do not, however, make any representations, warranties or guarantees (whether express or implied) in this respect.`,
                `HomeLane does not make any representation or Warranty as to specifics (such as quality, value, salability, etc.) of the products or Services proposed to be sold or offered to be sold or purchased on the Platform. HomeLane does not implicitly or explicitly support or endorse the sale or purchase of any products or Services on the Platform and accepts no liability for any errors or omissions`,
                `HomeLane is not responsible for any non-performance or breach of any contract entered into between Users and Sellers. We cannot and do not guarantee that the concerned Users/Buyers and/or Sellers will perform any transaction concluded on the Platform. HomeLane shall not and is not required to mediate or resolve any dispute or disagreement between Buyers and Sellers.`,
                `HomeLane does not make any representation or warranty as to the item-specifics (such as legal title, creditworthiness, identity, etc.) of any of its Users. You are advised to independently verify the bona fides of any particular User that you choose to deal with on the Platform and use your best judgment on that behalf.`,
                `At no time shall HomeLane hold any right, title or interest over the products nor shall HomeLane have any obligations or liabilities in respect of such contract entered into between Buyers and Sellers. HomeLane is not responsible for unsatisfactory or delayed performance of Services or damages or delays as a result of products which are out of stock, unavailable, back ordered and which are beyond reasonable control of the company.`,
                `IN NO EVENT SHALL HOMELANE BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND IN CONNECTION WITH THESE TERMS OF USE, EVEN IF USER HAS BEEN INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES.`,

            ]
        },
        {
            title: 'Indemnity',
            points: [
                `You agree to defend, indemnify and hold harmless us including, independent contractors, service providers, consultants, licensors, agents, and representatives, and each of their respective partners, officers, and employees, from and against any and all claims, losses, liability, damages, and/or costs (including, but not limited to, reasonable attorney fees and costs) arising from or related to`,
                [
                    `Your access to or use of the Platform or Services; or`,
                    `Your breach of these Terms of Use or Quotation/Works Contract (as may be applicable);`,
                    `your violation of any applicable law(s), rules or regulations or the rights (including infringement of intellectual property rights) of a third party;`,
                    `Your conduct in connection with the Platform.`,
                ]
            ],
        },
        {
            title: 'Complaints and Feedback',
            points: [
                `We use reasonable endeavors to ensure that our Services are trouble-free and operate with transparency and integrity. We welcome feedback from our Users and, whilst we always use all reasonable endeavors to ensure that your experience as User of our Platform is a positive one, we nevertheless want to hear from you if you have any cause for complaint. We shall take reasonable actions to remedy problems with our services as quickly as is reasonably possible, within the legal and technical boundaries.`,
                `If you wish to contact us with general questions, feedback or to complain about any aspect of your dealings or transactions with us or our services, please contact us at <a href="mailto:hello@homelane.com">hello@homelane.com</a>, setting out your complaint/feedback in sufficient detail (if applicable).`,
                `We take all complaints/feedbacks very seriously and always endeavor to deal with these in a fair, expedite and transparent manner.`,
            ],
        },
        {
            title: 'Miscellaneous',
            points: [
                `Electronic Contracting: Your affirmative act of using and accessing the Platform constitutes your electronic signature to the Terms, making the terms of this document binding upon you.`,
                `Force Majeure: We shall not be liable to the User or be deemed to be in breach of these Terms by reason of any delay in performing or any failure to perform any of our obligations if the delay or failure was due to any cause beyond our reasonable control on account of Force Majeure Events where Force Majeure Events include fire, earthquake, flood, tsunami, epidemic, pandemic, strike, lockout, lockdowns, labor controversy, riot, civil disturbance, war, civil commotion, acts of God, failure or delay of any transportation agency, laboratory, or any other furnisher of essential supplies, equipment, or other facilities’ omissions or acts of public authorities that prevent or delay the performance of an obligation relating to the acts of public authorities, including changes in law, regulations, or the policies of the Government or other regulatory authority acts which are beyond the control of either Party, or any other reasons which cannot be reasonably forecasted or provided against, and which cannot be predicted by men of ordinary prudence.`,
                `Breach(es) of these Terms of Use: If you breach any of these Terms  in any way, we may take such action as deemed appropriate to deal with the breach, including seeking of legal remedy, suspending your use/account, access to the Platform, prohibiting you from accessing the Platform, blocking electronic devices using your IP address from accessing, using and testing the Platform and/or contacting your internet service provider to request that they block your access to the Platform and such other action(s).`,
                `Severability: If any provision of the Terms is held to be unenforceable, then this document will be deemed amended to the extent necessary to render the otherwise unenforceable provision, and the rest of the document, valid and enforceable.`,
                `Amendments, Modifications: We reserve the right, at our sole discretion, to modify or replace any part of the Terms. It is your responsibility to check these Terms periodically for changes. Your continued use of or access to the Platform and/or services following the posting of any changes to this document constitutes acceptance of those changes.`,
                `Remedies: If either party to the Terms breaches any provision of these Terms relating to Confidential Information or intellectual property rights, there may not be an adequate remedy available solely at law; therefore, an injunction, specific performance, or other forms of equitable relief or monetary damages or any combination thereof may be sought by the injured party to these Terms.`,
                `Waiver: No failure or delay by the injured party to the Terms in exercising any right, power or privilege hereunder shall operate as a waiver thereof, nor shall any single or partial exercise thereof preclude any other or further exercise thereof or the exercise of any right, power or privilege hereunder at law or equity.`,
                `Relationship between the Parties: Nothing in the Terms shall deem to constitute a partnership between us and you and it is hereby understood and parties shall be related on principal to principal basis only, and is not a legal representative, partner, or agent of the other Party. Neither Party shall have any right, power or authority, whether express or implied, to create any obligation on behalf of the other Party.`,
            ]
        },
        {
            title: 'Governing Law',
            subTitle: 'Any dispute or claim between you and HomeLane arising out of or in connection with this Platform or its subject matter (whether allegedly contractual or non-contractual disputes and claims) shall be governed by and construed in accordance with Indian law. You hereby submit to the exclusive jurisdiction of the civil courts at Bengaluru.',
        },
        {
            title: 'Contact Us',
            subTitle: 'If you have additional questions or require more information about our Terms of Use or this Platform and services, do not hesitate to contact us through email at <a href="mailto:hello@homelane.com">hello@homelane.com</a>',
        },
        {
            title: 'Grievance Officer',
            subTitle: `In accordance with Information Technology Act 2000 and rules made there under and the Consumer Protection (E-Commerce) Rules, 2020, the name and contact details of the Grievance Officer are provided below:

            <p>Name - Mr. Yusuf Sisodia</p>
            <p>Designation: Compliance Officer</p>
            <p>E-mail: compliance@homelane.com </p>
            <p>Time: Mon-Sat (9.30 – 18.00)</p>
            `
        },
        {
            title: 'Update',
            subTitle: 'This document was last updated on April 29, 2022. If there will be any update, amendment, or changes to our Terms of Use, then these will be posted on this page.',
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
                <h1 className="maintitle">TERMS OF USE</h1>
                <h2 className="titleContent">
                    Welcome to <a href="www.homelane.com">www.homelane.com</a>, a brand owned and managed by Homevista Decor and Furnishings Private Limited (hereinafter referred to as “HomeLane”, “we”, “us”, or “our”), a company registered under the Companies Act, 2013 and with its registered address at AWFIS, 3rd floor, Samrah Plaza, Shanthala Nagar, Ashok Nagar, St. Marks Road, Bengaluru – 560001. These Terms of Use (“T&Cs/ “Terms of Use” “Terms””) is an electronic record in the form of an electronic contract formed under Information Technology Act, 2000 and Indian Contract Act, 1872, and do not require any physical, electronic or digital signature, and your continued use of the Platform shall mean that you accept the Terms, and any changes thereof.
                </h2>
                <ol>
                    {tncObj.map((data, id) => {
                        return <div key={id}>
                            <li className="termsofuse-title">{data.title}</li>
                            {data.subTitle && <p dangerouslySetInnerHTML={{ __html: data.subTitle }}></p>}
                            <ol className="list" >
                                {
                                    data.points && data.points.map((data, key) => {
                                        if (Array.isArray(data)) {
                                            return <ol key={key} className="subList" >
                                                {
                                                    data.map((data, key) => {
                                                        return <li classname="termsofuse-listItem" key={key} dangerouslySetInnerHTML={{ __html: data }}></li>
                                                    })
                                                }
                                            </ol>
                                        } else {
                                            return <li classname="termsofuse-listItem" key={key} dangerouslySetInnerHTML={{ __html: data }}></li>
                                        }
                                    })
                                }
                            </ol>
                        </div>
                    })}
                </ol>
            </div>
            <Footer2 />
        </div>
        </>
        )
}

export default TermsOfUse;

