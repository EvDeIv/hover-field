import styled from 'styled-components';
interface Props {
	active: boolean;
}

export const Cell = styled.div<Props>`
	width: 20px;
	height: 20px;
	border: 1px solid black;
	background-color: ${({ active }) => (active ? 'blue' : 'white')};
`;
