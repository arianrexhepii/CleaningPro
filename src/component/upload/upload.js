import React from 'react';

const FB = window.FB;


class Upload extends React.Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            fbUser: undefined,
            accessToken: undefined,
            albumId: undefined,
        };
    }

    /**
     * @description Function to initialize Facebook login dialog
     * NOTE: publish_actions permission is depricated, thats why endpoint returns error
     */
    fbLogin = () => {
        FB.login(function (response) {
            if (response.authResponse) {
                FB.api('/me', function (response) {
                    this.setState({
                        fbUser: response
                    });
                    this.setFBAccessToken();
                    this.getFBAlbums();
                }.bind(this));
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }.bind(this), { scope: 'email, user_photos' });
    }

    /**
     * @description Gets facebook albums after granting user_photos permission
     */
    getFBAlbums = () => {
        const { fbUser } = this.state;
        FB.api(`/${fbUser.id}/albums`, function (response) {
            // We get the first element just for this example. We can display all albums and give the user
            // the chance to select on which one to upload
            this.setState({
                albumId: response.data[0].id
            });
        }.bind(this));
    }


    /**
     * @description Stores Facebook access token after checking if the status is connected
     */
    setFBAccessToken = () => {
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                this.setState({
                    accessToken: response.authResponse.accessToken
                });
            }
        }.bind(this));
    }

    /**
     * @description Upload image to profile albums
     * NOTE: /{albumId}/photos is depricated because publish_actions permission is depricated
     * SOLUTION: Use share dialog (https://developers.facebook.com/docs/sharing/reference/share-dialog)
     */
    uploadImgToFB = (evt) => {
        const uploadedFile = evt.target.files['0'];
        const isFormValid = this.isFormValid(uploadedFile);
        if (!isFormValid) {
            return;
        }

        const { albumId } = this.state;
        // imgURL will contain the path of uploaded photo
        var imgURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png';
        FB.api(`/${albumId}/photos`, 'post', { url: imgURL }, function (response) {
            if (!response || response.error) {
                console.log('Error occured:', response);
            } else {
                alert('Post ID: ' + response.id);
            }
        });
    }

    /**
     * @description Returns true if file is image/png or image/jpeg
     * @param {any} uploadedFile
     * @returns boolean
     */
    isFormValid = (uploadedFile) => {
        if (uploadedFile.type !== 'image/png' && uploadedFile.type !== 'image/jpeg') {
            alert('File not supported');
            return false;
        }

        return true;
    }

    /**
     * @description Logs out the user by removing the user from state
     */
    logOutUserFromFB = () => {
        this.setState({
            fbUser: undefined
        })
    }

    /**
     * @description Renders login button if user is not authenticated from facebook
     */
    renderLoginBtn = () => {
        const { fbUser } = this.state;
        if (!fbUser) {
            return (
                <button onClick={() => this.fbLogin()}>Login to upload file</button>
            )
        }
    }

    /**
     * @description Renders img upload input if user is authenticated in Facebook
     */
    renderImgUpload = () => {
        const { fbUser, errorMsg } = this.state;
        if (!fbUser) {
            return;
        }

        return (
            <>
                <input type="file" onChange={(evt) => this.uploadImgToFB(evt)} />
            </>
        )
    }

    /**
     * @description Renders logout button if user is authenticated in facebook
     */
    renderLogOutBtn = () => {
        const { fbUser } = this.state;
        if (fbUser) {
            return (
                <button onClick={() => this.logOutUserFromFB()}>Logout from Facebook</button>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderImgUpload()}
                {this.renderLoginBtn()}
                {this.renderLogOutBtn()}
            </>
        );
    }
}

export default Upload;