/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';


class  MessageModal extends Component {

  render(){
  return (

    <div className="modal fade" id="msgModal" tabindex="-1" role="dialog" aria-labelledby="msgModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <button type="button" className="btn btn-sm btn-primary pull-right app-new-msg js-newMsg">New message</button>
            <h4 className="modal-title">Messages</h4>
          </div>

          <div className="modal-body p-a-0 js-modalBody">
            <div className="modal-body-scroller">
              <div className="media-list media-list-users list-group js-msgGroup">
                <a href="#" className="list-group-item">
                  <div className="media">
                    <span className="media-left">
                    <img className="img-circle media-object" src="/img/avatar-fat.jpg" />
                    </span>
                    <div className="media-body">
                      <strong>Jacob Thornton</strong> and <strong>1 other</strong>
                      <div className="media-body-secondary">
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam &hellip;
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
}

export default MessageModal;
