import { JSX, useOptimistic, useState, startTransition } from 'react';

const OptimisticComp = (): JSX.Element => {
    const [isLiked, setIsLiked] = useState(false);

    const [optimisticLiked, setOptimisticLiked] = useOptimistic(
        isLiked,
        (currentState: boolean, optimisticValue: boolean) => {
            return optimisticValue;
        }
    );

    const submitAction = async () => {
        startTransition(() => {
            setOptimisticLiked(!isLiked);
        });

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (Math.random() < 0.5) throw new Error('Failed');
            setIsLiked((prevState) => !prevState);
        } catch (error) {
            console.error('Like failed:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="subtitle">Click Me</h2>
            <form action={submitAction}>
                <button className="btn btn-primary" type='submit'>
                    {optimisticLiked ? '❤️ Liked' : '🤍 Like'}
                </button>
            </form>
        </div>
    );
};

export default OptimisticComp;
