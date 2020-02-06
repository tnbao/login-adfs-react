import adal from './adal'

export default class adalProvider {
  static _adal = null

  static init(configOptions) {
    this._adal = new adal(configOptions)
  }
  static getUser() {
    return this._adal.getCachedUser()
  }
  static login() {
    this._adal.login()
  }
  static logOut() {
    this._adal.logOut()
  }
}