// Actions file, all action signals will be defined and documented here
import { REQUEST_PAGE, RECIEVE_PAGE, SIGN_OUT } from "./actionTypes";
/* 
    RequestPage is used to simply tell react that you are requesting a new page.
    Usage: Pagination
 */
export const requestPage = (page: number) => ({
  type: REQUEST_PAGE,
  payload: {
    page
  }
});

/* 
    RecievePage is uesd to return the page number for the pagination component,
    and the array of uploads for that next page.
    Usage: Pagination
*/
export const recievePage = (page: number, uploads: Array<string>) => ({
  type: RECIEVE_PAGE,
  payload: {
    page,
    uploads
  }
});

/*
    Authenticate 
*/
export const signOut = (authed: boolean) => ({
  type: SIGN_OUT,
  payload: {
    authed
  }
});
