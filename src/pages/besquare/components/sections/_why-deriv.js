import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Section, ContentContainer, ImageWrapper } from '../../static/style/_why-deriv'
import { TextWrapper, Title } from '../../static/style/_common'

const query = graphql`
    query {
        why_deriv: file(relativePath: { eq: "be-square/why-deriv.png" }) {
            ...fadeIn
        }
        quil5: file(relativePath: { eq: "be-square/quil5.png" }) {
            ...fadeIn
        }
    }
`

const WhyDeriv = () => {
    const text_wrapper = {
        max_width: ['486px', '328px'],
        font_size: ['20px', '14px'],
        line_height: ['30px', '20px'],
    }
    const data = useStaticQuery(query)
    return (
        <Section>
            <ContentContainer>
                <ImageWrapper
                    data={data['why_deriv']}
                    alt="Tech students discussing about BeSquare programme"
                    grid_area="employee-image"
                />
                <div>
                    <Title as="h2" margin={[0, '0 auto']}>Why Deriv?</Title>
                    <TextWrapper
                        {...text_wrapper}
                        grid_area={['unset', 'text-1']}
                        margin={['8px 0 0', '8px 0 24px']}
                    >
                        A tech powerhouse, Deriv has succeeded in bringing together technology and
                        finance to meet the needs of a global client base for over 20 years. Our
                        products include derivative trading platforms and synthetic markets,
                        delivered to our clients via trading apps and websites. Our teams consist of
                        talented professionals based in 7 countries: Malaysia (Cyberjaya, Labuan,
                        Melaka, and Ipoh), Malta, the United Arab Emirates, Paraguay, Rwanda,
                        Cyprus, and Belarus.
                    </TextWrapper>
                </div>
                <TextWrapper
                    {...text_wrapper}
                    grid_area={['unset', 'text-2']}
                    margin={['auto 0', '40px 0 24px']}
                >
                    At Deriv, you can learn from our talented IT teams of dedicated innovators and
                    receive international exposure by collaborating with the overseas offices on
                    challenging and exciting projects. Work with
                    <br />
                    state-of-the-art technologies and enjoy the facilities of Deriv’s prestigious
                    new headquarters at Quill 5 in Cyberjaya, where a floor has been dedicated to
                    our BeSquare programme.
                </TextWrapper>
                <ImageWrapper
                    data={data['quil5']}
                    alt="Quill-5 Deriv's new headquarter in Malaysia"
                    grid_area="quil5-image"
                />
            </ContentContainer>
        </Section>
    )
}
export default WhyDeriv
