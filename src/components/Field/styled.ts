import styled from 'styled-components';

interface Props {
	active: boolean;
	onMouseEnter: () => void;
}

export const CellContainer = styled.div`
	margin-top: 20px;
	width: fit-content;
	border: 1px solid black;
`;

export const CellRow = styled.div`
	display: flex;
`;

export const Cell = styled.div<Props>`
	width: 20px;
	height: 20px;
	border: 1px solid black;
	background-color: ${({ active }) => (active ? 'blue' : 'white')};
`;
