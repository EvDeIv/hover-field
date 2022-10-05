import { FC } from 'react';
import { IHoveredList } from '../../types';
import { Container, List, Item, Heading } from './styled';

interface IHoverListPorps {
	list: IHoveredList;
}

const HoverList: FC<IHoverListPorps> = ({ list }) => {
	return (
		<Container>
			<Heading>Hover squares</Heading>
			<List>
				{Object.keys(list).map((el) => {
					const itemInfo = el.split('.');
					return (
						<Item key={el}>{`row ${itemInfo[0]} col ${itemInfo[1]}`}</Item>
					);
				})}
			</List>
		</Container>
	);
};

export default HoverList;
