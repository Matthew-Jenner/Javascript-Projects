import get from "./getElement,js";

const loading = get(".loading");

export const showLoading = () => {
    loading.classlist.remove('hide-loading')
}
export const hideLoading = () => {
    loading.classlist.remove('hide-loading')
}