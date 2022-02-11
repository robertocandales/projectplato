import styled from '@emotion/styled'
import { isMobile } from '../../shared/globalStyles'

interface IFlexLayout {
    flexDirection?: string
    align?: string
    justify?: string
    background?: string
}
export const WrapperOnboarding = styled('div')`
    display: flex;
    flex-direction: ${({ flexDirection }: IFlexLayout) => (flexDirection ? flexDirection : 'row')};
    align-items: ${({ align }: IFlexLayout) => (align ? align : 'flex-start')};
    justify-content: ${({ justify }: IFlexLayout) => (justify ? justify : 'flex-start')};
    background-color: ${({ background }: IFlexLayout) => (background ? background : '')};
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 100%));
    grid-column-gap: 50px;
    height: 100vh;
    padding: 2vh;
    ${isMobile(`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
     overflow-y: auto;
      height: 100%;
  `)}
`
