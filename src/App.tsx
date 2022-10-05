import { useState } from 'react';
import Field from './components/Field';
import HoverList from './components/HoverList';
import MyLoader from './components/Loader';
import ModeSelect from './components/ModeSelect';
import { useModes } from './services/useModesService';
import { LeftContainer, MainContainer } from './styled';
import { IHoveredList, TStoreKey } from './types';

function App() {
	const { data, isLoading } = useModes();
	const [fieldSize, setFieldSize] = useState<number>();
	const [hoveredCellsList, setHoveredCellsList] = useState<IHoveredList>({});

	const setHoveredList = (item: TStoreKey) => {
		if (hoveredCellsList[item])
			setHoveredCellsList((prev) => {
				delete prev[item];
				return { ...prev };
			});
		else setHoveredCellsList((prev) => ({ ...prev, [item]: true }));
	};

	const handleStart = (item: number) => {
		setHoveredCellsList({});
		setFieldSize(item);
	};

	return (
		<MainContainer>
			{isLoading && <MyLoader />}
			{data && (
				<>
					<LeftContainer>
						<ModeSelect modes={data} handleStart={handleStart} />
						{fieldSize && (
							<Field
								size={fieldSize}
								setHoveredList={setHoveredList}
								hoveredCellsList={hoveredCellsList}
							/>
						)}
					</LeftContainer>
					<HoverList list={hoveredCellsList} />
				</>
			)}
		</MainContainer>
	);
}

export default App;
