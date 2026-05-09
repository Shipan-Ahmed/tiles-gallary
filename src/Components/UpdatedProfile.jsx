import { authClient, useSession } from '@/lib/auth-client';
import { Envelope } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { BiUser } from 'react-icons/bi';

const UpdatedProfile = () => {
    const { isPending } = useSession()
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());
        console.log("Updated profile data: ", updatedData);

        await authClient.updateUser({
            name: updatedData.name,
            image: updatedData.image,
        })
    }
    
    if (isPending) return <div ><span className="loading loading-bars loading-xl"></span></div>

    return (
        <Modal>
            <Button variant="secondary">Edit Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="text">
                                        <Label>Image</Label>
                                        <Input placeholder="Enter your new image URL" />
                                    </TextField>
                                   
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button onClick={() => toast.success("Successfully saved ✅")} type='submit' slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdatedProfile;