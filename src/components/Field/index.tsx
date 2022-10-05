import { FC } from 'react';
import { CellContainer, CellRow, Cell } from './styled';
import { TSetHoveredList } from '../../types/setHoveredList';
import { IHoveredList } from '../../types';

interface IFieldProps {
	size: number;
	setHoveredList: TSetHoveredList;
	hoveredCellsList: IHoveredList;
}

const Field: FC<IFieldProps> = ({ size, setHoveredList, hoveredCellsList }) => {
	const renderField = () => {
		const sizeArray = Array.from(Array(size).keys());
		const handleHover = (storeKey: string) => () => {
			setHoveredList(storeKey);
		};

		return sizeArray.map((el, idx) => (
			<CellRow key={el + '.' + idx}>
				{sizeArray.map((innerEl, innerIdx) => {
					const storeKey = idx + 1 + '.' + (innerIdx + 1);
					return (
						<Cell
							active={hoveredCellsList[storeKey]}
							onMouseEnter={handleHover(storeKey)}
							key={innerEl + '.' + innerIdx}
						/>
					);
				})}
			</CellRow>
		));
	};

	return <CellContainer>{renderField()}</CellContainer>;
};

export default Field;
