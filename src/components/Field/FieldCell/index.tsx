import { FC, useState } from 'react';
import { TSetHoveredList, TStoreKey } from '../../../types';
import { Cell } from './styled';

export interface IFieldCellProps {
	storeKey: TStoreKey;
	setHoveredList: TSetHoveredList;
}

const FieldCell: FC<IFieldCellProps> = ({ storeKey, setHoveredList }) => {
	const [active, setActive] = useState<boolean>(false);
	const handleHover = () => {
		setActive((prev) => !prev);
		setHoveredList(storeKey);
	};

	return <Cell active={active} onMouseEnter={handleHover}></Cell>;
};

export default FieldCell;
