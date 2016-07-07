/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';



class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top app-navbar">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-main">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">
        <img src="img/brand-white.png" alt="brand" />
      </a>
    </div>
    <div className="navbar-collapse collapse" id="navbar-collapse-main">

        <ul className="nav navbar-nav hidden-xs">
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a data-toggle="modal" href="#msgModal">Messages</a>
          </li>
          <li>
            <a href="docs/index.html">Docs</a>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
          <li >
            <a className="app-notifications" href="/notifications">
              <span className="icon icon-bell"></span>
            </a>
          </li>
          <li>
            <button className="btn btn-default navbar-btn navbar-btn-avitar" data-toggle="popover">
              <img className="img-circle" src="img/avatar-dhg.png" />
            </button>
          </li>
        </ul>

        <form className="navbar-form navbar-right app-search" role="search">
          <div className="form-group">
            <input type="text" className="form-control" data-action="grow" placeholder="Search" />
          </div>
        </form>

        <ul className="nav navbar-nav hidden-sm hidden-md hidden-lg">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/notifications">Notifications</a></li>
          <li><a data-toggle="modal" href="#msgModal">Messages</a></li>
          <li><a href="docs/index.html">Docs</a></li>
          <li><a href="#" data-action="growl">Growl</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>

        <ul className="nav navbar-nav hidden">
          <li><a href="#" data-action="growl">Growl</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </div>
  </div>
</nav>
    );
  }
}

export default Header;
