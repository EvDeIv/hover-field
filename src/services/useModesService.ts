import useSWR from 'swr';
import { getModes } from '../api';

export const useModes = () => {
	const { data, error } = useSWR(` http://demo7919674.mockable.io`, getModes);

	return {
		data: data,
		isLoading: !data && !error,
		error: error,
	};
};
