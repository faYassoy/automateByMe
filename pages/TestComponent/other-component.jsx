import React, { useState } from 'react';
import { BadgeComponent, BreadcumbComponent, ButtonComponent, CardComponent, CheckBoxComponent, MenuBarComponent, ModalComponent, ModalConfirmComponent, ModalRightComponent, WizardComponent } from '../../components/base_component';

const OtherComponent = () => {
    const [confirm, setConfirm] = useState(false);
    const [menu, setMenu] = useState("Menu 1");
    const [modalRight, setModalRight] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className='container mx-auto my-5'>
                <BreadcumbComponent
                    items={[
                        {
                            link: "/",
                            label: 'Breadcumb 1'
                        },
                        {
                            link: "/",
                            label: 'Breadcumb 2'
                        },
                        {
                            link: "/",
                            label: 'Breadcumb 3'
                        }
                    ]}
                />
            </div>
            <div className='container mx-auto items-center flex flex-wrap my-5 gap-5'>
                <BadgeComponent label="Badge" bg={"light__primary"} color="primary" />
                <BadgeComponent label="Badge" bg={"primary"} />
                <BadgeComponent label="Badge" />
            </div>
            <div className='container mx-auto items-center flex flex-wrap my-5 gap-5'>
                <CardComponent
                    title={"Card Title"}
                    className="w-1/4"
                >
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate corrupti
                        vero autem accusantium dolores totam sapiente veniam necessitatibus,
                        enim fugiat inventore. Aspernatur ut quidem reiciendis laboriosam quam vero beatae nemo!
                    </p>
                </CardComponent>
                <CardComponent
                    title={"Card Title"}
                    className="w-1/4"
                    border="primary"
                >
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate corrupti
                        vero autem accusantium dolores totam sapiente veniam necessitatibus,
                        enim fugiat inventore. Aspernatur ut quidem reiciendis laboriosam quam vero beatae nemo!
                    </p>
                </CardComponent>
            </div>

            <div className='container mx-auto my-5'>
                <MenuBarComponent
                    items={[
                        "Menu 1",
                        "Menu 2",
                        "Menu 3"
                    ]}
                    active={menu}
                    onChange={(e) => setMenu(e)}
                />

                <WizardComponent
                    items={[
                        {
                            label: "Step 1",
                            circle_content: "1"
                        },
                        {
                            label: "Step 2",
                            circle_content: "2"
                        },
                        {
                            label: "Step 3",
                            circle_content: "3"
                        },
                        {
                            label: "Step 4",
                            circle_content: "4"
                        }
                    ]}
                    active={2}
                />
            </div>


            <div className='container mx-auto items-center flex flex-wrap my-5 gap-5'>
                <ButtonComponent
                    label={"Modal"}
                    bg="primary"
                    onClick={() => setModal(true)}
                    rounded
                />

                <ModalComponent
                    show={modal}
                    title={"Title Modal"}
                    subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    onClose={() => setModal(false)}
                    footer={(
                        <div className='flex justify-end gap-4'>
                            <ButtonComponent
                                label={"Cancel"}
                                color="danger"
                                size={"sm"}
                            />
                            <ButtonComponent
                                label={"Yes, Do it!"}
                                bg="primary"
                                size={"sm"}
                            />
                        </div>
                    )}
                >
                    <p className='text-lg leading-6 mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque non illo iusto quis. Nobis, fuga quidem. Reiciendis corporis ut praesentium, nam at dolorum aliquid eum nisi quam, nihil fugit.</p>
                    <CheckBoxComponent label={"Accept all rules!"} />
                </ModalComponent>

                <ButtonComponent
                    label={"Modal Confirm"}
                    bg="primary"
                    onClick={() => setConfirm(true)}
                    rounded
                />
                <ModalConfirmComponent
                    show={confirm}
                    title={"Modal Confirm?"}
                    onClose={() => setConfirm(false)}
                    onSubmit={() => setConfirm(false)}
                >
                    <p className='text-lg leading-6 mb-6 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque non illo iusto quis.</p>
                </ModalConfirmComponent>

                <ButtonComponent
                    label={"Modal Right"}
                    bg="primary"
                    onClick={() => setModalRight(true)}
                    rounded
                />

                <ModalRightComponent
                    show={modalRight}
                    title={"Right Modal"}
                    subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    onClose={() => setModalRight(false)}
                    width={"50%"}
                    footer={(
                        <div className='flex justify-end gap-4'>
                            <ButtonComponent
                                label={"Cancel"}
                                color="danger"
                                size={"sm"}
                            />
                            <ButtonComponent
                                label={"Yes, Do it!"}
                                bg="primary"
                                size={"sm"}
                            />
                        </div>
                    )}
                >
                    <p className='text-lg leading-6 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque non illo iusto quis. Nobis, fuga quidem. Reiciendis corporis ut praesentium, nam at dolorum aliquid eum nisi quam, nihil fugit.</p>
                    <p className='text-lg leading-6 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque non illo iusto quis. Nobis, fuga quidem. Reiciendis corporis ut praesentium, nam at dolorum aliquid eum nisi quam, nihil fugit.</p>
                    <p className='text-lg leading-6 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque non illo iusto quis. Nobis, fuga quidem. Reiciendis corporis ut praesentium, nam at dolorum aliquid eum nisi quam, nihil fugit.</p>
                    <p className='text-lg leading-6 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque non illo iusto quis. Nobis, fuga quidem. Reiciendis corporis ut praesentium, nam at dolorum aliquid eum nisi quam, nihil fugit.</p>
                    <p className='text-lg leading-6 mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque non illo iusto quis. Nobis, fuga quidem. Reiciendis corporis ut praesentium, nam at dolorum aliquid eum nisi quam, nihil fugit.</p>
                    <CheckBoxComponent label={"Accept all rules!"} />
                </ModalRightComponent>
            </div>
        </>
    );
}

export default OtherComponent;
