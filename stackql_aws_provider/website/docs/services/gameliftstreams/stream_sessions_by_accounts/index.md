--- 
title: stream_sessions_by_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_sessions_by_accounts
  - gameliftstreams
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

Creates, updates, deletes, gets or lists a <code>stream_sessions_by_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_sessions_by_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gameliftstreams.stream_sessions_by_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_stream_sessions_by_account"
    values={[
        { label: 'list_stream_sessions_by_account', value: 'list_stream_sessions_by_account' }
    ]}
>
<TabItem value="list_stream_sessions_by_account">

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
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="export_files_metadata" /></td>
    <td><code>object</code></td>
    <td>Provides details about the stream session's exported files.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location where Amazon GameLift Streams hosts and streams your application. For example, us-east-1. For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The data transfer protocol in use with the stream session. (WebRTC)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream session resource. ACTIVATING: The stream session is starting and preparing to stream. ACTIVE: The stream session is ready and waiting for a client connection. A client has ConnectionTimeoutSeconds (specified in StartStreamSession) from when the session reaches ACTIVE state to establish a connection. If no client connects within this timeframe, the session automatically terminates. CONNECTED: The stream session has a connected client. A session will automatically terminate if there is no user input for 60 minutes, or if the maximum length of a session specified by SessionLengthSeconds in StartStreamSession is exceeded. ERROR: The stream session failed to activate. See StatusReason (returned by GetStreamSession and StartStreamSession) for more information. PENDING_CLIENT_RECONNECTION: A client has recently disconnected and the stream session is waiting for the client to reconnect. A client has ConnectionTimeoutSeconds (specified in StartStreamSession) from when the session reaches PENDING_CLIENT_RECONNECTION state to re-establish a connection. If no client connects within this timeframe, the session automatically terminates. RECONNECTING: A client has initiated a reconnect to a session that was in PENDING_CLIENT_RECONNECTION state. TERMINATING: The stream session is ending. TERMINATED: The stream session has ended. (ACTIVATING, ACTIVE, CONNECTED, PENDING_CLIENT_RECONNECTION, RECONNECTING, TERMINATING, TERMINATED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A short description of the reason the stream session is in ERROR status or TERMINATED status. ERROR status reasons: applicationLogS3DestinationError: Could not write the application log to the Amazon S3 bucket that is configured for the streaming application. Make sure the bucket still exists. internalError: An internal service error occurred. Start a new stream session to continue streaming. invalidSignalRequest: The WebRTC signal request that was sent is not valid. When starting or reconnecting to a stream session, use generateSignalRequest in the Amazon GameLift Streams Web SDK to generate a new signal request. placementTimeout: Amazon GameLift Streams could not find available stream capacity to start a stream session. Increase the stream capacity in the stream group or wait until capacity becomes available. TERMINATED status reasons: apiTerminated: The stream session was terminated by an API call to TerminateStreamSession. applicationExit: The streaming application exited or crashed. The stream session was terminated because the application is no longer running. connectionTimeout: The stream session was terminated because the client failed to connect within the connection timeout period specified by ConnectionTimeoutSeconds. maxSessionLengthTimeout: The stream session was terminated because it exceeded the maximum session length timeout period specified by SessionLengthSeconds. reconnectionTimeout: The stream session was terminated because the client failed to reconnect within the reconnection timeout period specified by ConnectionTimeoutSeconds after losing connection. (internalError, invalidSignalRequest, placementTimeout, applicationLogS3DestinationError, applicationExit, connectionTimeout, reconnectionTimeout, maxSessionLengthTimeout, idleTimeout, apiTerminated)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>An opaque, unique identifier for an end-user, defined by the developer. (pattern: &lt;code&gt;&#91;-_a-zA-Z0-9/=+&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_stream_sessions_by_account"><CopyableCode code="list_stream_sessions_by_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-ExportFilesStatus"><code>ExportFilesStatus</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves a list of Amazon GameLift Streams stream sessions that this user account has access to. In the returned list of stream sessions, the ExportFilesMetadata property only shows the Status value. To get the OutpurUri and StatusReason values, use GetStreamSession. We don't recommend using this operation to regularly check stream session statuses because it's costly. Instead, to check status updates for a specific stream session, use GetStreamSession.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ExportFilesStatus">
    <td><CopyableCode code="ExportFilesStatus" /></td>
    <td><code>string</code></td>
    <td>Filter by the exported files status. You can specify one status in each request to retrieve only sessions that currently have that exported files status.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of results to return. Use this parameter with NextToken to return results in sequential pages. Default value is 25.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Filter by the stream session status. You can specify one status in each request to retrieve only sessions that are currently in that status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_stream_sessions_by_account"
    values={[
        { label: 'list_stream_sessions_by_account', value: 'list_stream_sessions_by_account' }
    ]}
>
<TabItem value="list_stream_sessions_by_account">

Retrieves a list of Amazon GameLift Streams stream sessions that this user account has access to. In the returned list of stream sessions, the ExportFilesMetadata property only shows the Status value. To get the OutpurUri and StatusReason values, use GetStreamSession. We don't recommend using this operation to regularly check stream session statuses because it's costly. Instead, to check status updates for a specific stream session, use GetStreamSession.

```sql
SELECT
application_arn,
arn,
created_at,
export_files_metadata,
last_updated_at,
location,
protocol,
status,
status_reason,
user_id
FROM aws.gameliftstreams.stream_sessions_by_accounts
WHERE region = '{{ region }}' -- required
AND Status = '{{ Status }}'
AND ExportFilesStatus = '{{ ExportFilesStatus }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
