import styled from 'styled-components';

export const Container = styled.div`
	min-width: 200px;
	margin-left: 30px;
`;

export const Heading = styled.h2`
	text-align: center;
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-height: 80vh;
`;

export const Item = styled.div`
	width: 100px;
	background-color: #ebd392;
	padding: 10px;
	border-radius: 10px;
	margin: 3px;
`;
