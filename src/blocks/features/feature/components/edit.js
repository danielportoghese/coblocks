/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { RichText, InnerBlocks, withFontSizes } = wp.editor;

/**
 * Constants
 */
const ALLOWED_BLOCKS = [ 'core/button', 'core/paragraph', 'core/heading', 'core/image', 'coblocks/highlight', ];

const TEMPLATE = [
	[ 'core/heading', { placeholder: _x( 'Add feature title...', 'content placeholder' ), content: _x( 'Feature Title', 'content placeholder' ), level: 4 } ],
	[ 'core/paragraph', { placeholder: _x( 'Add feature content', 'content placeholder' ), content: _x( 'This is a feature block that you can use to highlight features.', 'content placeholder' ), } ]
];

/**
 * Block edit function
 */
class Edit extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			className,
		} = this.props;

		return [
			<Fragment>
				<div className={ className } >
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
						templateLock={ false }
						templateInsertUpdatesSelection={ false }
					/>
				</div>
			</Fragment>
		];
	}
}

export default Edit;
