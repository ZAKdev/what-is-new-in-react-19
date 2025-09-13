import { JSX, useActionState } from 'react';

const UseActionState = (): JSX.Element => {

    const submitHandler = async (_: any, formData: any) => {
        return formData.get('textname');
    };

    const [state, submitAction, isPending] = useActionState(submitHandler, null);

    return (
        <form action={submitAction}>
            <input type="text" name="textname" />
            <button type="submit" disabled={isPending}>
                Submit
            </button>
            {state && <p>{state}</p>}
        </form>
    );
};

export default UseActionState;
