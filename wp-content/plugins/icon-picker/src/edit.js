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
import {
	InspectorControls,
	useBlockProps,
	BlockAlignmentControl,
	BlockControls
} from "@wordpress/block-editor";

import { Panel, PanelBody, SelectControl, ToggleControl } from "@wordpress/components";

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
export default function Edit({ attributes, setAttributes }) {

	const { colabStyle, icons, size } = attributes;


	const onChangeContent = (newContent) => {
		setAttributes({ icons: newContent });
	};

	const onChangeSize = (newContent) => {
		setAttributes({ size: newContent });
	};

	function updateAlignment(nextAlign) {
		setAttributes({ align: nextAlign });
	}

	const align = attributes.align;
	const classes = classnames({
		[`align${align}`]: align,
	});

	const classStyle = (colabStyle ? "is-style-icon" : "");

	const blockProps = useBlockProps({
		className: classes,
		"data-align": align,
	});

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title="Attributes">
						<SelectControl
							label="Icon"
							value={ icons }
							options={[
								{ label: "fa-head-side-brain", value: "fa-head-side-brain" },
								{ label: "fa-heart-circle", value: "fa-heart-circle" },
								{ label: "fa-drafting-compass", value: "fa-drafting-compass" },
								{ label: "fa-code", value: "fa-code" },
								{ label: "fa-clipboard-list-check", value: "fa-clipboard-list-check" },
								{ label: "fa-debug", value: "fa-debug" },
								{ label: "fa-baby", value: "fa-baby" },
								{ label: "fa-bolt", value: "fa-bolt" },
								{ label: "fa-briefcase-medical", value: "fa-briefcase-medical" },
								{ label: "fa-building", value: "fa-building" },
								{ label: "fa-bullseye-arrow", value: "fa-bullseye-arrow" },
								{ label: "fa-calculator-alt", value: "fa-calculator-alt" },
								{ label: "fa-certificate", value: "fa-certificate" },
								{ label: "fa-chart-bar", value: "fa-chart-bar" },
								{ label: "fa-chess", value: "fa-chess" },
								{ label: "fa-chevron-down", value: "fa-chevron-down" },
								{ label: "fa-chevron-left", value: "fa-chevron-left" },
								{ label: "fa-chevron-right", value: "fa-chevron-right" },
								{ label: "fa-chevron-up", value: "fa-chevron-up" },
								{ label: "fa-clock", value: "fa-clock" },
								{ label: "fa-code-branch", value: "fa-code-branch" },
								{ label: "fa-code-merge", value: "fa-code-merge" },
								{ label: "fa-database", value: "fa-database" },
								{ label: "fa-do-not-enter", value: "fa-do-not-enter" },
								{ label: "fa-draw-circle", value: "fa-draw-circle" },
								{ label: "fa-file-alt", value: "fa-file-alt" },
								{ label: "fa-file-certificate", value: "fa-file-certificate" },
								{ label: "fa-flux-capacitor", value: "fa-flux-capacitor" },
								{ label: "fa-gamepad", value: "fa-gamepad" },
								{ label: "fa-globe", value: "fa-globe" },
								{ label: "fa-graduation-cap", value: "fa-graduation-cap" },
								{ label: "fa-hands-helping", value: "fa-hands-helping" },
								{ label: "fa-handshake", value: "fa-handshake" },
								{ label: "fa-heartbeat", value: "fa-heartbeat" },
								{ label: "fa-island-tropical", value: "fa-island-tropical" },
								{ label: "fa-lightbulb-on", value: "fa-lightbulb-on" },
								{ label: "fa-lock-alt", value: "fa-lock-alt" },
								{ label: "fa-long-arrow-down", value: "fa-long-arrow-down" },
								{ label: "fa-long-arrow-left", value: "fa-long-arrow-left" },
								{ label: "fa-long-arrow-right", value: "fa-long-arrow-right" },
								{ label: "fa-long-arrow-up", value: "fa-long-arrow-up" },
								{ label: "fa-map-marked-alt", value: "fa-map-marked-alt" },
								{ label: "fa-microphone-alt", value: "fa-microphone-alt" },
								{ label: "fa-phone", value: "fa-phone" },
								{ label: "fa-phone-alt", value: "fa-phone-alt" },
								{ label: "fa-piggy-bank", value: "fa-piggy-bank" },
								{ label: "fa-portal-enter", value: "fa-portal-enter" },
								{ label: "fa-project-diagram", value: "fa-project-diagram" },
								{ label: "fa-search", value: "fa-search" },
								{ label: "fa-shapes", value: "fa-shapes" },
								{ label: "fa-tasks", value: "fa-tasks" },
								{ label: "fa-tasks-alt", value: "fa-tasks-alt" },
								{ label: "fa-text-size", value: "fa-text-size" },
								{ label: "fa-thumbs-down", value: "fa-thumbs-down" },
								{ label: "fa-thumbs-up", value: "fa-thumbs-up" },
								{ label: "fa-tools", value: "fa-tools" },
								{ label: "fa-tooth", value: "fa-tooth" },
								{ label: "fa-user", value: "fa-user" },
								{ label: "fa-user-astronaut", value: "fa-user-astronaut" },
								{ label: "fa-user-chart", value: "fa-user-chart" },
								{ label: "fa-user-crown", value: "fa-user-crown" },
								{ label: "fa-user-friends", value: "fa-user-friends" },
								{ label: "fa-users", value: "fa-users" },
								{ label: "fa-watch-fitness", value: "fa-watch-fitness" },
								{ label: "fa-watchman-monitoring", value: "fa-watchman-monitoring" },
								{ label: "fa-wrench", value: "fa-wrench" }
							]}
							onChange={onChangeContent}
						/>
						<SelectControl
							label="Size"
							value={ size }
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

						<ToggleControl
							label={ __( "COLAB Style" ) }
							onChange={ () => setAttributes( { colabStyle: ! colabStyle } ) }
							checked={ colabStyle }
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<BlockControls group="block">
				<BlockAlignmentControl
					value={attributes.align}
					onChange={updateAlignment}
				/>
			</BlockControls>
			<i
				className={classnames(
					"fal",
					attributes.icons,
					attributes.size,
					classStyle
				)}
			></i>
		</div>
	);
}
