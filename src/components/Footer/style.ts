import styled from "styled-components";

export const FooterBody = styled.footer`
    background-color: #fff;
    max-height: 600px;
`
export const ContainerFooter = styled.div`
    margin: 0 auto;
    max-width: 1500px;
    height: 100%;

`

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px 30px;
    flex-wrap: wrap;
    gap: 20px 40px;
    @media(max-width: 575px){
            &{
                justify-content: center;
            }
    }
`

export const CopyrightArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px 40px;
    padding: 20px 50px;

@media(max-width: 768px){
        &{
            flex-direction: column
        }
}

`

export const SocialNetworks = styled.div`
    ul{
        display: flex;
        gap: 20px;
    }
`
export const Copyright = styled.div``

export const PaymentMethod = styled.div`
  ul{
        display: flex;
        gap: 20px;
    }
`

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 250px;
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

`

export const ContainerAccount = styled(ContainerContact)`
    text-align: justify;
    width: 120px;
`

export const ContainerPolicy = styled(ContainerContact)`
    width: 120px;
`
