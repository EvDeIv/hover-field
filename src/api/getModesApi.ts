import axios from 'axios';
import { Fetcher } from 'swr';
import { ISelectMode } from '../types';

export const getModes: Fetcher<ISelectMode[], string> = (url: string) =>
	axios.get(url).then((res) => {
		return res.data;
	});
