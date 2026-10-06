--- 
title: browsers
hide_title: false
hide_table_of_contents: false
keywords:
  - browsers
  - bedrock_agentcore
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>browsers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="browsers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.browsers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#invoke_browser"><CopyableCode code="invoke_browser" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-browser_identifier"><code>browser_identifier</code></a>, <a href="#parameter-x-amzn-browser-session-id"><code>x-amzn-browser-session-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Invokes an operating system-level action on a browser session in Amazon Bedrock AgentCore. This operation provides direct OS-level control over browser sessions, enabling mouse actions, keyboard input, and screenshots that the WebSocket-based Chrome DevTools Protocol (CDP) cannot handle — such as interacting with print dialogs, context menus, and JavaScript alerts. You send a request with exactly one action in the BrowserAction union, and receive a corresponding result in the BrowserActionResult union. The following operations are related to InvokeBrowser: StartBrowserSession GetBrowserSession StopBrowserSession</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-browser_identifier">
    <td><CopyableCode code="browser_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser associated with the session. This must match the identifier used when creating the session with StartBrowserSession.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amzn-browser-session-id">
    <td><CopyableCode code="x-amzn-browser-session-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser session on which to perform the action. This must be an active session created with StartBrowserSession.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="invoke_browser"
    values={[
        { label: 'invoke_browser', value: 'invoke_browser' }
    ]}
>
<TabItem value="invoke_browser">

Invokes an operating system-level action on a browser session in Amazon Bedrock AgentCore. This operation provides direct OS-level control over browser sessions, enabling mouse actions, keyboard input, and screenshots that the WebSocket-based Chrome DevTools Protocol (CDP) cannot handle — such as interacting with print dialogs, context menus, and JavaScript alerts. You send a request with exactly one action in the BrowserAction union, and receive a corresponding result in the BrowserActionResult union. The following operations are related to InvokeBrowser: StartBrowserSession GetBrowserSession StopBrowserSession

```sql
EXEC aws.bedrock_agentcore.browsers.invoke_browser 
@browser_identifier='{{ browser_identifier }}' --required, 
@x-amzn-browser-session-id='{{ x-amzn-browser-session-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"action": "{{ action }}"
}'
;
```
</TabItem>
</Tabs>
