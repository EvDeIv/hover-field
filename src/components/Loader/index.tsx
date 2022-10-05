import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: FC = () => (
	<ContentLoader
		speed={2}
		width={512}
		height={60}
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="20" width="283" height="38" />
		<rect x="312" y="20" width="200" height="32" />
	</ContentLoader>
);

export default MyLoader;
