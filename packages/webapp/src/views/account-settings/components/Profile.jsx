import {
	Avatar,
	Button,
	FormContainer,
	Input,
	Notification,
	Upload,
	toast,
	Card,Info
} from "@/components/ui";
import {
	HiOutlineMail,
	HiOutlineUser,
	HiOutlineUserCircle,
} from "react-icons/hi";
import { S3_URL } from "@/constants/api.constant";
import { uploadFile } from "@/services/uploads";
import { updateUser } from "@/services/user";
import { setUser } from "@/store/auth/userSlice";
import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormDesription from "./FormDesription";
import FormRow from "./FormRow";
import SocialMediaSignIn from "@/components/shared/SocialMediaSignIn";
const FORM_VALUES = ["username", "email", "profilePic"];
const Profile = () => {
	const user = useSelector((state) => state?.auth?.loggedInUser?.user);
	const { socialMediaPages, facebook, instagram, linkedIn, tiktok } =
    useSelector((state) => state.socialmedia);
	const dispatch = useDispatch();
	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
	} = useForm({
		defaultValues: useMemo(() => {
			return _.pick(user, FORM_VALUES);
		}, []),
	});

	const [loading, setLoading] = useState(false);
	const [avatar, setAvatar] = useState(null);


	useEffect(() => {
		setAvatar(user?.profilePic ? `${S3_URL}/${user?.profilePic}` : null);
	}, []);

	const onSetFormFile = async (file) => {
		const response = await uploadFile(file[0]);
		const profilePic = response.data.name;
		setAvatar(`${S3_URL}/${profilePic}`);
		setValue("profilePic", profilePic);
	};
	const onFormSubmit = async (values) => {
		setLoading(true);
		const userResponse = await updateUser(values, user.id);
		const updatedUser = { ...user, ..._.pick(userResponse.data, FORM_VALUES) };
		dispatch(setUser(updatedUser));
		toast.push(<Notification title={t("Profile updated")} type="success" />);
		setLoading(false);
	};

	const resetForm = () => {
		reset();
	};
	const { t } = useTranslation();

	const pages = _.groupBy(
		socialMediaPages?.pages,
		(row) => row?.SocialMediaType?.name
	  );
	return (
		<div className="flex flex-col gap-4">
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<FormContainer>
				<FormDesription title="General" />

				<FormRow label="Avatar">
					<Upload
						className="cursor-pointer"
						onChange={onSetFormFile}
						onFileRemove={onSetFormFile}
						showList={false}
						uploadLimit={1}
					>
						<Avatar
							src={avatar}
							className="border-2 border-white dark:border-gray-800 shadow-lg"
							size={60}
							shape="circle"
							icon={<HiOutlineUser />}
						/>
					</Upload>
				</FormRow>

				<FormRow
					label="Name"
					asterisk
					invalid={errors.username}
					errorMessage="Name is required!"
				>
					<Controller
						name="username"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Input
								type="text"
								placeholder="Name"
								autocomplete="off"
								{...field}
								prefix={<HiOutlineUserCircle className="text-xl" />}
							/>
						)}
					/>
				</FormRow>

				<FormRow
					label="Email"
					asterisk
					invalid={errors.email}
					errorMessage="Email is required!"
				>
					<Controller
						control={control}
						rules={{ required: true }}
						name="email"
						render={({ field }) => (
							<Input
								type="email"
								placeholder="Email"
								{...field}
								prefix={<HiOutlineMail className="text-xl" />}
							/>
						)}
					/>
				</FormRow>

				{/* <FormRow label="Name" name="username" errors={errors}>
					<Input
						{...register("username", { required: true })}
						type="text"
						placeholder="Name"
						autoComplete="off"
						prefix={<HiOutlineUserCircle className="text-xl" />}
					/>
				</FormRow>

				<FormRow label="Email" name="email" errors={errors}>
					<Input
						{...register("email", { required: true })}
						type="email"
						placeholder="Email"
						autoComplete="off"
						prefix={<HiOutlineMail className="text-xl" />}
					/>
				</FormRow> */}

				<div className="mt-4 ltr:text-right">
					<Button
						className="ltr:mr-2 rtl:ml-2"
						type="button"
						onClick={resetForm}
					>
						Reset
					</Button>
					<Button variant="solid" loading={loading} type="submit">
						{loading ? "Updating": "Update"}
					</Button>
				</div>
			</FormContainer>
		</form>

<Card
bodyClass="p-0"
header={
  <h5 className="flex items-center">
	Social Media Accounts
	<Info title="socialmedia-profiles" />
  </h5>
}
>
<div className="grid lg:grid-cols-2 justify-between w-full">
  <SocialMediaSignIn className="flex items-center justify-center p-4" />
</div>
</Card>
</div>
	);
};

export default Profile;
