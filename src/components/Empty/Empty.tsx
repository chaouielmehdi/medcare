import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

import empty from '../../assets/img/empty.png';

const Empty: FC<IProps & { show: boolean }> = ({ className, show }): ReactElement => {
	return (
		<>
			{show && (
				<div className={'d-flex justify-content-center w-100 ' + className}>
					<div>
						<img className="ml-2" width="100px" src={empty} alt="Empty" />
						<p className="c-grey mt-3">Aucune donnée</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Empty;
