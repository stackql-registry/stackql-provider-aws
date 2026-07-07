--- 
title: browser_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - browser_sessions
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

Creates, updates, deletes, gets or lists a <code>browser_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="browser_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.browser_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_browser_session"
    values={[
        { label: 'get_browser_session', value: 'get_browser_session' },
        { label: 'list_browser_sessions', value: 'list_browser_sessions' }
    ]}
>
<TabItem value="get_browser_session">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the browser session.</td>
</tr>
<tr>
    <td><CopyableCode code="browserIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser.</td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>The list of certificates installed in the browser session.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the browser session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="enterprisePolicies" /></td>
    <td><code>array</code></td>
    <td>A list of files containing enterprise policies for the browser session.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>The list of browser extensions that are configured in the browser session.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the browser session was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="profileConfiguration" /></td>
    <td><code>object</code></td>
    <td>The browser profile configuration associated with this session. Contains the profile identifier that links to persistent browser data such as cookies and local storage.</td>
</tr>
<tr>
    <td><CopyableCode code="proxyConfiguration" /></td>
    <td><code>object</code></td>
    <td>The active proxy configuration for this browser session. This field is only present if proxy configuration was provided when the session was started using StartBrowserSession. The configuration includes proxy servers, domain bypass rules and the proxy authentication credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the browser session. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionReplayArtifact" /></td>
    <td><code>string</code></td>
    <td>The artifact containing the session replay information.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionTimeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>The timeout period for the browser session in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the browser session. Possible values include ACTIVE, STOPPING, and STOPPED. (READY, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="streams" /></td>
    <td><code>object</code></td>
    <td>The streams associated with this browser session. These include the automation stream and live view stream.</td>
</tr>
<tr>
    <td><CopyableCode code="viewPort" /></td>
    <td><code>object</code></td>
    <td>The configuration that defines the dimensions of a browser viewport in a browser session. The viewport determines the visible area of web content and affects how web pages are rendered and displayed. Proper viewport configuration ensures that web content is displayed correctly for the agent's browsing tasks.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_browser_sessions">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="items_" /></td>
    <td><code>array</code></td>
    <td>The list of browser sessions that match the specified criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use in a subsequent ListBrowserSessions request to get the next set of results. (pattern: &lt;code&gt;\S*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

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
    <td><a href="#get_browser_session"><CopyableCode code="get_browser_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-browser_identifier"><code>browser_identifier</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific browser session in Amazon Bedrock AgentCore. This operation returns the session's configuration, current status, associated streams, and metadata. To get a browser session, you must specify both the browser identifier and the session ID. The response includes information about the session's viewport configuration, timeout settings, and stream endpoints. The following operations are related to GetBrowserSession: StartBrowserSession ListBrowserSessions StopBrowserSession</td>
</tr>
<tr>
    <td><a href="#list_browser_sessions"><CopyableCode code="list_browser_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-browser_identifier"><code>browser_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of browser sessions in Amazon Bedrock AgentCore that match the specified criteria. This operation returns summary information about each session, including identifiers, status, and timestamps. You can filter the results by browser identifier and session status. The operation supports pagination to handle large result sets efficiently. We recommend using pagination to ensure that the operation returns quickly and successfully when retrieving large numbers of sessions. The following operations are related to ListBrowserSessions: StartBrowserSession GetBrowserSession</td>
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
    <td>The unique identifier of the browser to list sessions for. If specified, only sessions for this browser are returned. If not specified, sessions for all browsers are returned.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the browser session to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_browser_session"
    values={[
        { label: 'get_browser_session', value: 'get_browser_session' },
        { label: 'list_browser_sessions', value: 'list_browser_sessions' }
    ]}
>
<TabItem value="get_browser_session">

Retrieves detailed information about a specific browser session in Amazon Bedrock AgentCore. This operation returns the session's configuration, current status, associated streams, and metadata. To get a browser session, you must specify both the browser identifier and the session ID. The response includes information about the session's viewport configuration, timeout settings, and stream endpoints. The following operations are related to GetBrowserSession: StartBrowserSession ListBrowserSessions StopBrowserSession

```sql
SELECT
name,
browserIdentifier,
certificates,
createdAt,
enterprisePolicies,
extensions,
lastUpdatedAt,
profileConfiguration,
proxyConfiguration,
sessionId,
sessionReplayArtifact,
sessionTimeoutSeconds,
status,
streams,
viewPort
FROM aws.bedrock_agentcore.browser_sessions
WHERE browser_identifier = '{{ browser_identifier }}' -- required
AND sessionId = '{{ sessionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_browser_sessions">

Retrieves a list of browser sessions in Amazon Bedrock AgentCore that match the specified criteria. This operation returns summary information about each session, including identifiers, status, and timestamps. You can filter the results by browser identifier and session status. The operation supports pagination to handle large result sets efficiently. We recommend using pagination to ensure that the operation returns quickly and successfully when retrieving large numbers of sessions. The following operations are related to ListBrowserSessions: StartBrowserSession GetBrowserSession

```sql
SELECT
items_,
nextToken
FROM aws.bedrock_agentcore.browser_sessions
WHERE browser_identifier = '{{ browser_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
