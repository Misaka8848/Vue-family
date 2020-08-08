/*
 * @Author: Alter
 * @Date: 2020-07-24 18:59:48
 * @Last Modified by: Alter
 * @Last Modified time: 2020-08-07 22:57:13
 */

import className from '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Alter'
    }
  },
  render () {
    return (
      <div id={className.footer}>
        <span>Written by {this.author} </span>
      </div>
    )
  }
}
