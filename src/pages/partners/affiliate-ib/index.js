import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import Hero from './_hero.js'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { SectionContainer, Container, SEO } from 'components/containers'
import { localize, Localize, WithIntl } from 'components/localization'
import { affiliate_signup_url } from 'common/utility'
import device from 'themes/device'

const DNumber = Loadable(() => import('components/custom/_dnumbers.js'))
const WhyUs = Loadable(() => import('./_why-us.js'))
const WhoCanAplly = Loadable(() => import('./_who-can-apply.js'))
const DerivAffiliateProgramme = Loadable(() => import('./_deriv-affiliate-programme'))
const DerivIBProgramme = Loadable(() => import('./_deriv-ib-programme.js'))
const MinimumVolume = Loadable(() => import('./_minimum-volume.js'))
const MoreReason = Loadable(() => import('./_more-reason.js'))
const Faq = Loadable(() => import('./_faq'))
const CTA = Loadable(() => import('./_partner-cta'))

const StyledHeader = styled(Header)`
    width: 100%;
    max-width: 70rem;
    @media ${device.tabletS} {
        font-size: 40px;
        text-align: left;
    }

    &:nth-child(2) {
        margin-bottom: 4rem;
    }
`

const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;
    @media ${device.tabletS} {
        font-size: 14px;
        padding: 12px 10px;
        white-space: nowrap;
    }

    @media ${device.mobileL} {
        font-size: 12px;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding-top: 40px;
        padding-bottom: 40px;
        padding-right: 16px;
        padding-left: 16px;
    }
`

const SubtitleHeader = styled(Header)`
    width: 1170px;
    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        font-size: 16px;
        text-align: justify;
    }
`

const items = [
    { title: '47K+', subtitle: <Localize translate_text="members" /> },
    { title: '$14M+', subtitle: <Localize translate_text="paid out" /> },
    { title: '150+', subtitle: <Localize translate_text="countries" /> },
    { title: '1M+', subtitle: <Localize translate_text="clients" /> },
]

const why_partner_with_us_items = [
    {
        title: <Localize translate_text="Multiple income opportunities and generous commissions" />,
        subtitle: (
            <Localize translate_text="Start off as an affiliate and get ensuing access to our IB programme. Earn commission for as long as your referred clients keep trading." />
        ),
        image_name: 'multiple_income_opportunities',
        image_alt: <Localize translate_text="Multiple income opportunities" />,
    },
    {
        title: <Localize translate_text="Zero charges with prompt monthly and daily payouts" />,
        subtitle: (
            <Localize translate_text="All Deriv partnership programmes are free. Get your affiliate commissions paid to your method of choice every month and IB commissions paid to your DMT5 account daily." />
        ),
        image_name: 'daily_ib_commission',
        image_alt: <Localize translate_text="Daily IB commission" />,
    },
    {
        title: (
            <Localize translate_text="Optimise conversions with great user experience and creative support" />
        ),
        subtitle: (
            <Localize translate_text="We’ve designed a customer-centric and intuitive trading experience for Deriv that’s optimised to convert visitors into clients. We’ll also provide you with the tools and creative materials you need to drive traffic to Deriv." />
        ),
        image_name: 'marketing_material',
        image_alt: <Localize translate_text="Marketing material" />,
    },
]
const AffiliateIb = () => {
    return (
        <Layout type="partners" margin_top={10}>
            <SEO
                title={localize('Affiliate and IB programme | Deriv')}
                description={localize(
                    'Join Deriv’s affiliate and IB programmes and get a chance to be a partner with a trusted online trading provider.',
                )}
            />
            <Hero>
                <StyledHeader as="h1" color="white" align="center" lh="1.25" type="display-title">
                    {localize('Partner with a trusted')}
                </StyledHeader>
                <StyledHeader as="h1" color="white" align="center" lh="1.25" type="display-title">
                    {localize('online trading provider')}
                </StyledHeader>
                <StyledLinkButton
                    to={affiliate_signup_url}
                    external="true"
                    target="_blank"
                    is_affiliate_link
                    secondary
                >
                    {localize('Sign up as our affiliate and IB')}
                </StyledLinkButton>
            </Hero>
            <StyledSectionContainer padding="8rem 0 4rem">
                <Container direction="column">
                    <SubtitleHeader as="h4" type="sub-section-title" weight="normal" align="center">
                        {localize(
                            'Earn up to 45% lifetime commission with an online trading provider that enables anyone to trade on popular financial markets with the utmost convenience. Deriv Group Ltd – the owner of Binary.com and Deriv.com – has a proven track record of running successful referral programmes with prompt payouts.',
                        )}
                    </SubtitleHeader>
                    <DNumber items={items} justify="space-around" />
                </Container>
            </StyledSectionContainer>
            <DerivAffiliateProgramme />
            <DerivIBProgramme />
            <MinimumVolume />
            <WhyUs items={why_partner_with_us_items} />
            <WhoCanAplly />
            <MoreReason />
            <Faq />
            <CTA />
        </Layout>
    )
}

export default WithIntl()(AffiliateIb)
