declare module "sweetalert2" {
	namespace Swal {
		function fire(
			title?: string,
			html?: string,
			icon?: SweetAlertIcon
		): Promise<SweetAlertResult>;
		function fire(options: SweetAlertOptions): Promise<SweetAlertResult>;
		function mixin(options?: SweetAlertOptions): typeof Swal;
		function isVisible(): boolean;
		function update(options: SweetAlertOptions): void;
		function close(result?: SweetAlertResult): void;
		function getPopup(): HTMLElement;
		function getTitle(): HTMLElement;
		function getHeader(): HTMLElement;
		function getProgressSteps(): HTMLElement;
		function getContent(): HTMLElement;
		function getHtmlContainer(): HTMLElement;
		function getImage(): HTMLElement;
		function getCloseButton(): HTMLElement;
		function getIcon(): HTMLElement | null;
		function getIcons(): HTMLElement[];
		function getConfirmButton(): HTMLElement;
		function getCancelButton(): HTMLElement;
		function getActions(): HTMLElement;
		function getFooter(): HTMLElement;
		function getTimerProgressBar(): HTMLElement;
		function getFocusableElements(): HTMLElement[];
		function enableButtons(): void;
		function disableButtons(): void;
		function showLoading(): void;
		function hideLoading(): void;
		function isLoading(): boolean;
		function clickConfirm(): void;
		function clickCancel(): void;
		function showValidationMessage(validationMessage: string): void;
		function resetValidationMessage(): void;
		function getInput(): HTMLInputElement;
		function disableInput(): void;
		function enableInput(): void;
		function getValidationMessage(): HTMLElement;
		function getTimerLeft(): number | undefined;
		function stopTimer(): number | undefined;
		function resumeTimer(): number | undefined;
		function toggleTimer(): number | undefined;
		function isTimerRunning(): boolean | undefined;
		function increaseTimer(n: number): number | undefined;
		function queue(steps: Array<SweetAlertOptions | string>): Promise<any>;
		function getQueueStep(): string | null;
		function insertQueueStep(
			step: SweetAlertOptions,
			index?: number
		): number;
		function deleteQueueStep(index: number): void;
		function isValidParameter(paramName: string): boolean;
		function isUpdatableParameter(paramName: string): boolean;
		function argsToParams(
			params: SweetAlertArrayOptions | [SweetAlertOptions]
		): SweetAlertOptions;
		enum DismissReason {
			cancel,
			backdrop,
			close,
			esc,
			timer,
		}
		
		const version: string;
	}

	export type SweetAlertIcon =
		| "success"
		| "error"
		| "warning"
		| "info"
		| "question";

	export type SweetAlertInput =
		| "text"
		| "email"
		| "password"
		| "number"
		| "tel"
		| "range"
		| "textarea"
		| "select"
		| "radio"
		| "checkbox"
		| "file"
		| "url";

	export type SweetAlertPosition =
		| "top"
		| "top-start"
		| "top-end"
		| "top-left"
		| "top-right"
		| "center"
		| "center-start"
		| "center-end"
		| "center-left"
		| "center-right"
		| "bottom"
		| "bottom-start"
		| "bottom-end"
		| "bottom-left"
		| "bottom-right";

	export type SweetAlertGrow = "row" | "column" | "fullscreen" | false;

	export interface SweetAlertResult {
		value?: any;
		dismiss?: Swal.DismissReason;
	}

	export interface SweetAlertShowClass {
		popup?: string;
		backdrop?: string;
		icon?: string;
	}

	export interface SweetAlertHideClass {
		popup?: string;
		backdrop?: string;
		icon?: string;
	}

	export interface SweetAlertCustomClass {
		container?: string;
		popup?: string;
		header?: string;
		title?: string;
		closeButton?: string;
		icon?: string;
		image?: string;
		content?: string;
		input?: string;
		actions?: string;
		confirmButton?: string;
		cancelButton?: string;
		footer?: string;
	}

	type SyncOrAsync<T> = T | Promise<T>;

	type ValueOrThunk<T> = T | (() => T);

	export type SweetAlertArrayOptions = [string?, string?, SweetAlertIcon?];

	export interface SweetAlertOptions {
		title?: string | HTMLElement | JQuery;
		titleText?: string;
		text?: string;
		html?: string | HTMLElement | JQuery;
		icon?: SweetAlertIcon;
		iconHtml?: string;
		footer?: string | HTMLElement | JQuery;
		backdrop?: boolean | string;
		toast?: boolean;
		target?: string | HTMLElement;
		input?: SweetAlertInput;
		width?: number | string;
		padding?: number | string;
		background?: string;
		position?: SweetAlertPosition;
		grow?: SweetAlertGrow;
		showClass?: SweetAlertShowClass;
		hideClass?: SweetAlertHideClass;
		customClass?: SweetAlertCustomClass;
		timer?: number;
		timerProgressBar?: boolean;
		animation?: ValueOrThunk<boolean>;
		heightAuto?: boolean;
		allowOutsideClick?: ValueOrThunk<boolean>;
		allowEscapeKey?: ValueOrThunk<boolean>;
		allowEnterKey?: ValueOrThunk<boolean>;
		stopKeydownPropagation?: boolean;
		keydownListenerCapture?: boolean;
		showConfirmButton?: boolean;
		showCancelButton?: boolean;
		confirmButtonText?: string;
		cancelButtonText?: string;
		confirmButtonColor?: string;
		cancelButtonColor?: string;
		confirmButtonAriaLabel?: string;
		cancelButtonAriaLabel?: string;
		buttonsStyling?: boolean;
		reverseButtons?: boolean;
		focusConfirm?: boolean;
		focusCancel?: boolean;
		showCloseButton?: boolean;
		closeButtonHtml?: string;
		closeButtonAriaLabel?: string;
		showLoaderOnConfirm?: boolean;
		preConfirm?(inputValue: any): SyncOrAsync<any | void>;
		imageUrl?: string;
		imageWidth?: number;
		imageHeight?: number;
		imageAlt?: string;
		inputPlaceholder?: string;
		inputValue?: SyncOrAsync<string>;
		inputOptions?: SyncOrAsync<
			Map<string, string> | { [inputValue: string]: string }
		>;
		inputAutoTrim?: boolean;
		inputAttributes?: { [attribute: string]: string };
		inputValidator?(inputValue: string): SyncOrAsync<string | null>;
		validationMessage?: string;
		progressSteps?: string[];
		currentProgressStep?: string;
		progressStepsDistance?: string;
		onBeforeOpen?(popup: HTMLElement): void;
		onOpen?(popup: HTMLElement): void;
		onRender?(popup: HTMLElement): void;
		onClose?(popup: HTMLElement): void;
		onAfterClose?(): void;
		onDestroy?(): void;
		scrollbarPadding?: boolean;
	}

	export default Swal;
}

declare module "sweetalert2/*/sweetalert2.js" {
	export * from "sweetalert2";
	// "export *" does not matches the default export, so do it explicitly.
	export { default } from "sweetalert2"; // eslint-disable-line
}

declare module "sweetalert2/*/sweetalert2.all.js" {
	export * from "sweetalert2";
	// "export *" does not matches the default export, so do it explicitly.
	export { default } from "sweetalert2"; // eslint-disable-line
}

interface JQuery {}

interface Promise<T> {}

interface Map<K, V> {}
