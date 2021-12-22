/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

import { Panel, PanelBody, SelectControl } from "@wordpress/components";

import { useState } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, className }) {
	const onChangeContent = (newContent) => {
		setAttributes({ icons: newContent });
	};

	const onChangeSize = (newContent) => {
		setAttributes({ size: newContent });
	};

	// let classes = classnames({
	// 	fal: true,
	// });

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title="Attributes">
						<SelectControl
							label="Icon"
							options={[
								{
									label: "<i class='fal-alt fa-head-side-brain'></i>",
									value: "fa-head-side-brain",
								},
								{ label: "icon2", value: "fa-heart-circle" },
							]}
							onChange={onChangeContent}
						/>
						<SelectControl
							label="Size"
							options={[
								{ label: "1x", value: "fa-1x" },
								{ label: "X-Small", value: "fa-xs" },
								{ label: "Small", value: "fa-sm" },
								{ label: "Large", value: "fa-lg" },
								{ label: "2x", value: "fa-2x" },
								{ label: "3x", value: "fa-3x" },
								{ label: "4x", value: "fa-4x" },
								{ label: "5x", value: "fa-5x" },
								{ label: "6x", value: "fa-6x" },
								{ label: "7x", value: "fa-7x" },
								{ label: "8x", value: "fa-8x" },
								{ label: "9x", value: "fa-9x" },
								{ label: "10x", value: "fa-10x" },
							]}
							onChange={onChangeSize}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<i className={classnames("fal", attributes.icons, attributes.size)}></i>
		</div>
	);
}
