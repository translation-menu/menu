import swal from "sweetalert2";

export const Swal = swal;

export const Input = Swal.mixin({
	input: "text",
	showCancelButton: true,
	showConfirmButton: true
});
