export const updateObj = (oldObj: any, updatedProps: any) => {
    return {
        ...oldObj,
        ...updatedProps,
    };
};
