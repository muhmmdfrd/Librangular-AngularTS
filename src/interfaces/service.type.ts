interface ICallback {
    onSuccess: (response: any) => any;
    onError: (err: any) => any;
    onComplete: () => any;
}

type onSuccess = (response: any) => any;
type onError = (err: any) => any;
type onComplete = () => any;

export { onSuccess, onError, onComplete }