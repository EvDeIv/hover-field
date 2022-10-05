import { FC, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { ISelectMode } from '../../types';
import { selectSyles } from './selectStyles';
import { Button, Container } from './styled';

interface IModeSelectProps {
	modes: ISelectMode[];
	handleStart: (value: number) => void;
}

const ModeSelect: FC<IModeSelectProps> = ({ modes, handleStart }) => {
	const [mode, setMode] = useState<ISelectMode>();
	const handleSelectChange = (a: SingleValue<ISelectMode>) => a && setMode(a);

	return (
		<Container>
			<Select
				placeholder={'Pick mode'}
				onChange={handleSelectChange}
				options={modes}
				getOptionLabel={({ name }) => name}
				getOptionValue={({ field }) => field + ''}
				styles={selectSyles}
			/>
			<Button
				onClick={() => {
					mode?.field && handleStart(mode?.field);
				}}
			>
				START
			</Button>
		</Container>
	);
};

export default ModeSelect;
