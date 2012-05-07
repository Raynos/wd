<table class="wikitable">
  <tbody>
    <tr>
      <td width="50%" style="border: 1px solid #ccc; padding: 5px;">
        <strong>JsonWireProtocol</strong>
      </td>
      <td width="50%" style="border: 1px solid #ccc; padding: 5px;">
        <strong>wd</strong>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        GET&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/status">/status</a><br>
        Query the server's current status.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        status(cb) -> cb(err, status)
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session">/session</a><br>
        Create a new session.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        init(desired, cb) -> cb(err, sessionID)
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        GET&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId">/session/:sessionId</a><br>
        Retrieve the capabilities of the specified session.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        sessionCapabilities(cb) -> cb(err, capabilities)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        DELETE&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#DELETE_/session/:sessionId">/session/:sessionId</a><br>
        Delete the session.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        quit(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/timeouts">/session/:sessionId/timeouts</a><br>
        Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        <ul>
          <li>
            configurable type: NA (but setImplicitWaitTimeout and 
            setAsyncScriptTimeout do the same)
          </li>
          <li>
              page load timeout: <br>
              setPageLoadTimeout(ms, cb) -> cb(err)
          </li>
        </ul>         
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/timeouts/async_script">/session/:sessionId/timeouts/async_script</a><br>
        Set the amount of time, in milliseconds, that asynchronous scripts executed by <tt>/session/:sessionId/execute_async</tt> are permitted to run before they are aborted and a |Timeout| error is returned to the client.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        setAsyncScriptTimeout(ms, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/timeouts/implicit_wait">/session/:sessionId/timeouts/implicit_wait</a><br>
        Set the amount of time the driver should wait when searching for elements.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        setImplicitWaitTimeout(ms, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        GET&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/url">/session/:sessionId/url</a><br>
        Retrieve the URL of the current page.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        url(cb) -> cb(err, url)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/url">/session/:sessionId/url</a><br>
        Navigate to a new URL.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        get(url,cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/forward">/session/:sessionId/forward</a><br>
        Navigate forwards in the browser history, if possible.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        forward(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/back">/session/:sessionId/back</a><br>
        Navigate backwards in the browser history, if possible.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        back(cb) -> cb(err)
      </td>      
    </tr>    
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/refresh">/session/:sessionId/refresh</a><br>
        Refresh the current page.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        refresh(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/execute">/session/:sessionId/execute</a><br>
        Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        <ul>
          <li>
            execute script: <br>
            execute(code, cb) -> cb(code, value returned)
          </li>
          <li>
            evaluate expression: <br>
            eval(code, cb) -> cb(code, value)
          </li>
        </ul>
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/execute_async">/session/:sessionId/execute_async</a><br>
        Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        executeAsync(code, cb) -> cb(code, value returned)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        DELETE&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#DELETE_/session/:sessionId/window">/session/:sessionId/window</a><br>
        Close the current window.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        close(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        GET&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/cookie">/session/:sessionId/cookie</a><br>
        Retrieve all cookies visible to the current page.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        allCookies() -> cb(err, cookies)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/cookie">/session/:sessionId/cookie</a><br>
        Set a cookie.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        setCookie(cookie, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        DELETE&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#DELETE_/session/:sessionId/cookie">/session/:sessionId/cookie</a><br>
        Delete all cookies visible to the current page.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        deleteAllCookies(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        DELETE&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#DELETE_/session/:sessionId/cookie/:name">/session/:sessionId/cookie/:name</a><br>
        Delete the cookie with the given name.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        deleteCookie(name, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        GET&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/title">/session/:sessionId/title</a><br>
        Get the current page title.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        title(cb) -> cb(err, title)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/element">/session/:sessionId/element</a><br>
        Search for an element on the page, starting from the document root.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        <ul>
          <li>element(using, value, cb) -> cb(err, element)</li>
          <li>elementByLinkText(value, cb) -> cb(err, element)</li>
          <li>elementById(value, cb) -> cb(err, element)</li>
          <li>elementByName(value, cb) -> cb(err, element)</li>
          <li>elementByCss(value, cb) -> cb(err, element)</li>
        <ul>
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/elements">/session/:sessionId/elements</a><br>
        Search for multiple elements on the page, starting from the document root.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        <ul>
          <li>elements(using, value, cb) -> cb(err, elements)</li>
          <li>elementsByLinkText(value, cb) -> cb(err, elements)</li>
          <li>elementsById(value, cb) -> cb(err, elements)</li>
          <li>elementsByName(value, cb) -> cb(err, elements)</li>
          <li>elementsByCss(value, cb) -> cb(err, elements)</li>
        <ul>
      </td>      
    </tr>    
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/element/active">/session/:sessionId/element/active</a><br>
        Get the element on the page that currently has focus.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        active(cb) -> cb(err, element)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/element/:id/click">/session/:sessionId/element/:id/click</a><br>
        Click on an element.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        clickElement(element, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        GET&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/element/:id/text">/session/:sessionId/element/:id/text</a><br>
        Returns the visible text for the element.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        <ul>
          <li>
            text(element, cb) -> (err, text)
          </li>
          <li>
            textPresent(searchText, element, cb) -> (err, boolean)
          </li>  
        </ul>
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/element/:id/value">/session/:sessionId/element/:id/value</a><br>
        Send a sequence of key strokes to an element.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        type(element, keys, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/element/:id/clear">/session/:sessionId/element/:id/clear</a><br>
        Clear a <tt>TEXTAREA</tt> or <tt>text INPUT</tt> element's value.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        clear(element, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        GET&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/element/:id/attribute/:name">/session/:sessionId/element/:id/attribute/:name</a><br>
        Get the value of an element's attribute.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        <ul>
          <li>
            getAttribute(element, attrName, cb) -> cb(err, value)
          </li>
          <li>
            getValue(element, cb) -> cb(err, value)
          </li>
        </ul>
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/accept_alert">/session/:sessionId/accept_alert</a><br>
        Accepts the currently displayed alert dialog.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        acceptAlert(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/dismiss_alert">/session/:sessionId/dismiss_alert</a><br>
        Dismisses the currently displayed alert dialog.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        dismissAlert(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/moveto">/session/:sessionId/moveto</a><br>
        Move the mouse by an offset of the specificed element.
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        moveTo(element, xoffset, yoffset, cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/click">/session/:sessionId/click</a><br>
        Click any mouse button (at the coordinates set by the last moveto command).
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        click(button, cb) -> cb(err)  <br>
        buttons: {left: 0, middle: 1 , right: 2}
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/buttondown">/session/:sessionId/buttondown</a><br>
        Click and hold the left mouse button (at the coordinates set by the last moveto command).
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        buttonDown(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/buttonup">/session/:sessionId/buttonup</a><br>
        Releases the mouse button previously held (where the mouse is currently at).
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        buttonUp(cb) -> cb(err)
      </td>      
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 5px;">
        POST&nbsp;<a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/doubleclick">/session/:sessionId/doubleclick</a><br>
        Double-clicks at the current mouse coordinates (set by moveto).
      </td>
      <td style="border: 1px solid #ccc; padding: 5px;">
        doubleclick(button, cb) -> cb(err) <br>
        buttons: {left: 0, middle: 1 , right: 2}
      </td>      
    </tr>
  </tbody>
</table>