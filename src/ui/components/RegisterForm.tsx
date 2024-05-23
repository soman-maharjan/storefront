"use client";

import { useState } from "react";
import { PasswordInput } from "@/checkout/components/PasswordInput";
import { TextInput } from "@/checkout/components/TextInput";
import { useRegisterUserForm } from "@/checkout/sections/GuestUser/useGuestUserForm";
import { FormProvider } from "@/checkout/hooks/useForm/FormProvider";

export const RegisterUser: React.FC<any> = () => {
	const form = useRegisterUserForm();

	const [email, setEmail] = useState("");

	const { handleChange } = form;

	return (
		<FormProvider form={form}>
			<div className="grid grid-cols-1 gap-3">
				<TextInput
					required
					name="email"
					label="Email"
					value={email}
					onChange={(event) => {
						handleChange(event);
						setEmail(event.currentTarget.value);
					}}
				/>
				<div className="mt-2">
					<PasswordInput name="password" label="Password (minimum 8 characters)" required />
				</div>
				<button
					className="rounded bg-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-700"
					type="submit"
				>
					Register
				</button>
			</div>
		</FormProvider>
	);
};
