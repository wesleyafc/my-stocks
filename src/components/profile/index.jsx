import {
    ProfileContainer,
    ProfileWrapper,
    Title,
    ProfileForm,
    Label,
    SettingsProperties,
    Image,
    IconsWrapper,
    InputFile,
    Input,
    ButtonUpdate,

} from './styles';

import { BiUserCircle } from "react-icons/bi";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfileWrapper>

                <Title>Update Your Account</Title>
                {/* <SettingsAction>Delete Your Account</SettingsAction> */}


                <ProfileForm>
                    {/* <Label>Profile Picture</Label> */}

                    <SettingsProperties>
                        <Image src="https://images7.alphacoders.com/719/thumb-1920-719179.png" />
                        <Label htmlFor="fileInput" >
                            <IconsWrapper>
                                <BiUserCircle />
                            </IconsWrapper>
                        </Label>

                        <InputFile type="file" id="fileInput" />
                    </SettingsProperties>

                    <Label>Username</Label>
                    <Input type="text" placeholder="Your name" />

                    <Label>Email</Label>
                    <Input type="email" placeholder="email@any.com" />

                    <Label>Password</Label>
                    <Input type="password" placeholder="Your password" />

                    <ButtonUpdate>save changes</ButtonUpdate>
                    <ButtonUpdate>delete account</ButtonUpdate>


                </ProfileForm>
            </ProfileWrapper>
        </ProfileContainer>
    )
}


