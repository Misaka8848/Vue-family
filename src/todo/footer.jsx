/*
 * @Author: Alter 
 * @Date: 2020-07-24 18:59:48 
 * @Last Modified by: Alter
 * @Last Modified time: 2020-07-25 20:36:29
 */

import '../assets/styles/footer.styl'

export default {
  data(){
    return {
      author : "Alter"
    }
  },
  render(){
    return (
      <div id="footer">
        <span>Written by {this.author} </span>
      </div>
    )
  }
}