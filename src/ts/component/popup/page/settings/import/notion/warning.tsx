import * as React from 'react';
import { Title, Button } from 'Component';
import { I, translate, analytics } from 'Lib';
import { commonStore } from 'Store';
import Head from '../../head';

class PopupSettingsPageImportNotionWarning extends React.Component<I.PopupSettings> {

	constructor (props: I.PopupSettings) {
		super(props);

		this.onImport = this.onImport.bind(this);
	};

	render () {
		return (
			<div>
				<Head {...this.props} returnTo="importNotion" name={translate('commonBack')} />
				<Title text="Some data formats will be imported as text" />

				<div className="listWrapper">
					<ol className="list">
						<li className="label">
							All <b>@mentions</b> will be converted to text
						</li>
						<li className="label">
							<b>Date ranges</b> will be imported as text
						</li>
						<li className="label">
							<b>Formulas and rollups</b> will be placed as values
						</li>
						<li className="label">
							<b>Databases</b> will look as Objects with Relations in Anytype documents
						</li>
					</ol>
				</div>

				<Button className="c36" text="Proceed" onClick={this.onImport} />
			</div>
		);
	};

	onImport (): void {
		const { close, onImport } = this.props;

		analytics.event('ImportNotionProceed');

		close();
		onImport(I.ImportType.Notion, { apiKey: commonStore.notionToken });
	};

};

export default PopupSettingsPageImportNotionWarning;