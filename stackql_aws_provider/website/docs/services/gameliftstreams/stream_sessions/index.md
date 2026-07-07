--- 
title: stream_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_sessions
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

Creates, updates, deletes, gets or lists a <code>stream_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gameliftstreams.stream_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream_session"
    values={[
        { label: 'get_stream_session', value: 'get_stream_session' },
        { label: 'list_stream_sessions', value: 'list_stream_sessions' }
    ]}
>
<TabItem value="get_stream_session">

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
    <td><CopyableCode code="AdditionalEnvironmentVariables" /></td>
    <td><code>object</code></td>
    <td>A set of options that you can use to control the stream session runtime environment, expressed as a set of key-value pairs. You can use this to configure the application or stream session details. You can also provide custom environment variables that Amazon GameLift Streams passes to your game client. If you want to debug your application with environment variables, we recommend that you do so in a local environment outside of Amazon GameLift Streams. For more information, refer to the Compatibility Guidance in the troubleshooting section of the Developer Guide. AdditionalEnvironmentVariables and AdditionalLaunchArgs have similar purposes. AdditionalEnvironmentVariables passes data using environment variables; while AdditionalLaunchArgs passes data using command-line arguments.</td>
</tr>
<tr>
    <td><CopyableCode code="AdditionalLaunchArgs" /></td>
    <td><code>array</code></td>
    <td>A list of CLI arguments that are sent to the streaming server when a stream session launches. You can use this to configure the application or stream session details. You can also provide custom arguments that Amazon GameLift Streams passes to your game client. AdditionalEnvironmentVariables and AdditionalLaunchArgs have similar purposes. AdditionalEnvironmentVariables passes data using environment variables; while AdditionalLaunchArgs passes data using command-line arguments.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The application streaming in this session. This value is an Amazon Resource Name (ARN) that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that's assigned to a stream session resource. When combined with the stream group resource ID, this value uniquely identifies the stream session across all Amazon Web Services Regions. Format is arn:aws:gameliftstreams:&#91;AWS Region&#93;:&#91;AWS account&#93;:streamsession/&#91;stream group resource ID&#93;/&#91;stream session resource ID&#93;. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionTimeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>The length of time that Amazon GameLift Streams should wait for a client to connect or reconnect to the stream session. This time span starts when the stream session reaches ACTIVE or PENDING_CLIENT_RECONNECTION state. If no client connects (or reconnects) before the timeout, Amazon GameLift Streams terminates the stream session.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A human-readable label for the stream session. You can update this value at any time. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.!+@/&#93;&#91;a-zA-Z0-9-_.!+@/ &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExportFilesMetadata" /></td>
    <td><code>object</code></td>
    <td>Provides details about the stream session's exported files.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Location" /></td>
    <td><code>string</code></td>
    <td>The location where Amazon GameLift Streams hosts and streams your application. For example, us-east-1. For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LogFileLocationUri" /></td>
    <td><code>string</code></td>
    <td>Access location for log files that your content generates during a stream session. These log files are uploaded to cloud storage location at the end of a stream session. The Amazon GameLift Streams application resource defines which log files to upload.</td>
</tr>
<tr>
    <td><CopyableCode code="PerformanceStatsConfiguration" /></td>
    <td><code>object</code></td>
    <td>The performance stats configuration for the stream session</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The data transfer protocol in use with the stream session. (WebRTC)</td>
</tr>
<tr>
    <td><CopyableCode code="SessionLengthSeconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum duration of a session. Amazon GameLift Streams will automatically terminate a session after this amount of time has elapsed, regardless of any existing client connections.</td>
</tr>
<tr>
    <td><CopyableCode code="SignalRequest" /></td>
    <td><code>string</code></td>
    <td>The WebRTC ICE offer string that a client generates to initiate a connection to the stream session.</td>
</tr>
<tr>
    <td><CopyableCode code="SignalResponse" /></td>
    <td><code>string</code></td>
    <td>The WebRTC answer string that the stream server generates in response to the SignalRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream session. A stream session is ready for a client to connect when in ACTIVE status. ACTIVATING: The stream session is starting and preparing to stream. ACTIVE: The stream session is ready and waiting for a client connection. A client has ConnectionTimeoutSeconds (specified in StartStreamSession) from when the session reaches ACTIVE state to establish a connection. If no client connects within this timeframe, the session automatically terminates. CONNECTED: The stream session has a connected client. A session will automatically terminate if there is no user input for 60 minutes, or if the maximum length of a session specified by SessionLengthSeconds in StartStreamSession is exceeded. ERROR: The stream session failed to activate. See StatusReason (returned by GetStreamSession and StartStreamSession) for more information. PENDING_CLIENT_RECONNECTION: A client has recently disconnected and the stream session is waiting for the client to reconnect. A client has ConnectionTimeoutSeconds (specified in StartStreamSession) from when the session reaches PENDING_CLIENT_RECONNECTION state to re-establish a connection. If no client connects within this timeframe, the session automatically terminates. RECONNECTING: A client has initiated a reconnect to a session that was in PENDING_CLIENT_RECONNECTION state. TERMINATING: The stream session is ending. TERMINATED: The stream session has ended. (ACTIVATING, ACTIVE, CONNECTED, PENDING_CLIENT_RECONNECTION, RECONNECTING, TERMINATING, TERMINATED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>A short description of the reason the stream session is in ERROR status or TERMINATED status. ERROR status reasons: applicationLogS3DestinationError: Could not write the application log to the Amazon S3 bucket that is configured for the streaming application. Make sure the bucket still exists. internalError: An internal service error occurred. Start a new stream session to continue streaming. invalidSignalRequest: The WebRTC signal request that was sent is not valid. When starting or reconnecting to a stream session, use generateSignalRequest in the Amazon GameLift Streams Web SDK to generate a new signal request. placementTimeout: Amazon GameLift Streams could not find available stream capacity to start a stream session. Increase the stream capacity in the stream group or wait until capacity becomes available. TERMINATED status reasons: apiTerminated: The stream session was terminated by an API call to TerminateStreamSession. applicationExit: The streaming application exited or crashed. The stream session was terminated because the application is no longer running. connectionTimeout: The stream session was terminated because the client failed to connect within the connection timeout period specified by ConnectionTimeoutSeconds. maxSessionLengthTimeout: The stream session was terminated because it exceeded the maximum session length timeout period specified by SessionLengthSeconds. reconnectionTimeout: The stream session was terminated because the client failed to reconnect within the reconnection timeout period specified by ConnectionTimeoutSeconds after losing connection. (internalError, invalidSignalRequest, placementTimeout, applicationLogS3DestinationError, applicationExit, connectionTimeout, reconnectionTimeout, maxSessionLengthTimeout, idleTimeout, apiTerminated)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamGroupId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon GameLift Streams stream group that is hosting the stream session. Format example: sg-1AB2C3De4. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>An opaque, unique identifier for an end-user, defined by the developer. (pattern: &lt;code&gt;&#91;-_a-zA-Z0-9/=+&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WebSdkProtocolUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of an S3 bucket that stores Amazon GameLift Streams WebSDK files. The URL is used to establish connection with the client.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stream_sessions">

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
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="ExportFilesMetadata" /></td>
    <td><code>object</code></td>
    <td>Provides details about the stream session's exported files.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Location" /></td>
    <td><code>string</code></td>
    <td>The location where Amazon GameLift Streams hosts and streams your application. For example, us-east-1. For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The data transfer protocol in use with the stream session. (WebRTC)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream session resource. ACTIVATING: The stream session is starting and preparing to stream. ACTIVE: The stream session is ready and waiting for a client connection. A client has ConnectionTimeoutSeconds (specified in StartStreamSession) from when the session reaches ACTIVE state to establish a connection. If no client connects within this timeframe, the session automatically terminates. CONNECTED: The stream session has a connected client. A session will automatically terminate if there is no user input for 60 minutes, or if the maximum length of a session specified by SessionLengthSeconds in StartStreamSession is exceeded. ERROR: The stream session failed to activate. See StatusReason (returned by GetStreamSession and StartStreamSession) for more information. PENDING_CLIENT_RECONNECTION: A client has recently disconnected and the stream session is waiting for the client to reconnect. A client has ConnectionTimeoutSeconds (specified in StartStreamSession) from when the session reaches PENDING_CLIENT_RECONNECTION state to re-establish a connection. If no client connects within this timeframe, the session automatically terminates. RECONNECTING: A client has initiated a reconnect to a session that was in PENDING_CLIENT_RECONNECTION state. TERMINATING: The stream session is ending. TERMINATED: The stream session has ended. (ACTIVATING, ACTIVE, CONNECTED, PENDING_CLIENT_RECONNECTION, RECONNECTING, TERMINATING, TERMINATED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>A short description of the reason the stream session is in ERROR status or TERMINATED status. ERROR status reasons: applicationLogS3DestinationError: Could not write the application log to the Amazon S3 bucket that is configured for the streaming application. Make sure the bucket still exists. internalError: An internal service error occurred. Start a new stream session to continue streaming. invalidSignalRequest: The WebRTC signal request that was sent is not valid. When starting or reconnecting to a stream session, use generateSignalRequest in the Amazon GameLift Streams Web SDK to generate a new signal request. placementTimeout: Amazon GameLift Streams could not find available stream capacity to start a stream session. Increase the stream capacity in the stream group or wait until capacity becomes available. TERMINATED status reasons: apiTerminated: The stream session was terminated by an API call to TerminateStreamSession. applicationExit: The streaming application exited or crashed. The stream session was terminated because the application is no longer running. connectionTimeout: The stream session was terminated because the client failed to connect within the connection timeout period specified by ConnectionTimeoutSeconds. maxSessionLengthTimeout: The stream session was terminated because it exceeded the maximum session length timeout period specified by SessionLengthSeconds. reconnectionTimeout: The stream session was terminated because the client failed to reconnect within the reconnection timeout period specified by ConnectionTimeoutSeconds after losing connection. (internalError, invalidSignalRequest, placementTimeout, applicationLogS3DestinationError, applicationExit, connectionTimeout, reconnectionTimeout, maxSessionLengthTimeout, idleTimeout, apiTerminated)</td>
</tr>
<tr>
    <td><CopyableCode code="UserId" /></td>
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
    <td><a href="#get_stream_session"><CopyableCode code="get_stream_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-stream_session_identifier"><code>stream_session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves properties for a Amazon GameLift Streams stream session resource. Specify the Amazon Resource Name (ARN) of the stream session that you want to retrieve and its stream group ARN. If the operation is successful, it returns properties for the requested resource.</td>
</tr>
<tr>
    <td><a href="#list_stream_sessions"><CopyableCode code="list_stream_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-ExportFilesStatus"><code>ExportFilesStatus</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves a list of Amazon GameLift Streams stream sessions that a stream group is hosting. To retrieve stream sessions, specify the stream group, and optionally filter by stream session status. You can paginate the results as needed. This operation returns the requested stream sessions in no particular order.</td>
</tr>
<tr>
    <td><a href="#create_stream_session_connection"><CopyableCode code="create_stream_session_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-stream_session_identifier"><code>stream_session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SignalRequest"><code>SignalRequest</code></a></td>
    <td></td>
    <td>Enables clients to reconnect to a stream session while preserving all session state and data in the disconnected session. This reconnection process can be initiated when a stream session is in either PENDING_CLIENT_RECONNECTION or ACTIVE status. The process works as follows: Initial disconnect: When a client disconnects or loses connection, the stream session transitions from CONNECTED to PENDING_CLIENT_RECONNECTION Reconnection time window: Clients have ConnectionTimeoutSeconds (defined in StartStreamSession) to reconnect before session termination Your backend server must call CreateStreamSessionConnection to initiate reconnection Session transitions to RECONNECTING status Reconnection completion: On successful CreateStreamSessionConnection, session status changes to ACTIVE Provide the new connection information to the requesting client Client must establish connection within ConnectionTimeoutSeconds Session terminates automatically if client fails to connect in time For more information about the stream session lifecycle, see Stream sessions in the Amazon GameLift Streams Developer Guide. To begin re-connecting to an existing stream session, specify the stream group ID and stream session ID that you want to reconnect to, and the signal request to use with the stream.</td>
</tr>
<tr>
    <td><a href="#terminate_stream_session"><CopyableCode code="terminate_stream_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-stream_session_identifier"><code>stream_session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently terminates an active stream session. When called, the stream session status changes to TERMINATING. You can terminate a stream session in any status except ACTIVATING. If the stream session is in ACTIVATING status, an exception is thrown.</td>
</tr>
<tr>
    <td><a href="#export_stream_session_files"><CopyableCode code="export_stream_session_files" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-stream_session_identifier"><code>stream_session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutputUri"><code>OutputUri</code></a></td>
    <td></td>
    <td>Export the files that your application modifies or generates in a stream session, which can help you debug or verify your application. When your application runs, it generates output files such as logs, diagnostic information, crash dumps, save files, user data, screenshots, and so on. The files can be defined by the engine or frameworks that your application uses, or information that you've programmed your application to output. You can only call this action on a stream session that is in progress, specifically in one of the following statuses ACTIVE, CONNECTED, PENDING_CLIENT_RECONNECTION, and RECONNECTING. You must provide an Amazon Simple Storage Service (Amazon S3) bucket to store the files in. When the session ends, Amazon GameLift Streams produces a compressed folder that contains all of the files and directories that were modified or created by the application during the stream session. AWS uses your security credentials to authenticate and authorize access to your Amazon S3 bucket. Amazon GameLift Streams collects the following generated and modified files. Find them in the corresponding folders in the .zip archive. application/: The folder where your application or game is stored. profile/: The user profile folder. temp/: The system temp folder. To verify the status of the exported files, use GetStreamSession. To delete the files, delete the object in the S3 bucket.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stream_session_identifier">
    <td><CopyableCode code="stream_session_identifier" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) or ID that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. Example ID: ABC123def4567.</td>
</tr>
<tr id="parameter-ExportFilesStatus">
    <td><CopyableCode code="ExportFilesStatus" /></td>
    <td><code>string</code></td>
    <td>Filter by the exported files status. You can specify one status in each request to retrieve only sessions that currently have that exported files status. Exported files can be in one of the following states: SUCCEEDED: The exported files are successfully stored in an S3 bucket. FAILED: The session ended but Amazon GameLift Streams couldn't collect and upload the files to S3. PENDING: Either the stream session is still in progress, or uploading the exported files to the S3 bucket is in progress.</td>
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
    defaultValue="get_stream_session"
    values={[
        { label: 'get_stream_session', value: 'get_stream_session' },
        { label: 'list_stream_sessions', value: 'list_stream_sessions' }
    ]}
>
<TabItem value="get_stream_session">

Retrieves properties for a Amazon GameLift Streams stream session resource. Specify the Amazon Resource Name (ARN) of the stream session that you want to retrieve and its stream group ARN. If the operation is successful, it returns properties for the requested resource.

```sql
SELECT
AdditionalEnvironmentVariables,
AdditionalLaunchArgs,
ApplicationArn,
Arn,
ConnectionTimeoutSeconds,
CreatedAt,
Description,
ExportFilesMetadata,
LastUpdatedAt,
Location,
LogFileLocationUri,
PerformanceStatsConfiguration,
Protocol,
SessionLengthSeconds,
SignalRequest,
SignalResponse,
Status,
StatusReason,
StreamGroupId,
UserId,
WebSdkProtocolUrl
FROM aws.gameliftstreams.stream_sessions
WHERE identifier = '{{ identifier }}' -- required
AND stream_session_identifier = '{{ stream_session_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stream_sessions">

Retrieves a list of Amazon GameLift Streams stream sessions that a stream group is hosting. To retrieve stream sessions, specify the stream group, and optionally filter by stream session status. You can paginate the results as needed. This operation returns the requested stream sessions in no particular order.

```sql
SELECT
ApplicationArn,
Arn,
CreatedAt,
ExportFilesMetadata,
LastUpdatedAt,
Location,
Protocol,
Status,
StatusReason,
UserId
FROM aws.gameliftstreams.stream_sessions
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND Status = '{{ Status }}'
AND ExportFilesStatus = '{{ ExportFilesStatus }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream_session_connection"
    values={[
        { label: 'create_stream_session_connection', value: 'create_stream_session_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream_session_connection">

Enables clients to reconnect to a stream session while preserving all session state and data in the disconnected session. This reconnection process can be initiated when a stream session is in either PENDING_CLIENT_RECONNECTION or ACTIVE status. The process works as follows: Initial disconnect: When a client disconnects or loses connection, the stream session transitions from CONNECTED to PENDING_CLIENT_RECONNECTION Reconnection time window: Clients have ConnectionTimeoutSeconds (defined in StartStreamSession) to reconnect before session termination Your backend server must call CreateStreamSessionConnection to initiate reconnection Session transitions to RECONNECTING status Reconnection completion: On successful CreateStreamSessionConnection, session status changes to ACTIVE Provide the new connection information to the requesting client Client must establish connection within ConnectionTimeoutSeconds Session terminates automatically if client fails to connect in time For more information about the stream session lifecycle, see Stream sessions in the Amazon GameLift Streams Developer Guide. To begin re-connecting to an existing stream session, specify the stream group ID and stream session ID that you want to reconnect to, and the signal request to use with the stream.

```sql
INSERT INTO aws.gameliftstreams.stream_sessions (
ClientToken,
SignalRequest,
identifier,
stream_session_identifier,
region
)
SELECT 
'{{ ClientToken }}',
'{{ SignalRequest }}' /* required */,
'{{ identifier }}',
'{{ stream_session_identifier }}',
'{{ region }}'
RETURNING
SignalResponse
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stream_sessions
  props:
    - name: identifier
      value: "{{ identifier }}"
      description: Required parameter for the stream_sessions resource.
    - name: stream_session_identifier
      value: "{{ stream_session_identifier }}"
      description: Required parameter for the stream_sessions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stream_sessions resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: SignalRequest
      value: "{{ SignalRequest }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_stream_session"
    values={[
        { label: 'terminate_stream_session', value: 'terminate_stream_session' }
    ]}
>
<TabItem value="terminate_stream_session">

Permanently terminates an active stream session. When called, the stream session status changes to TERMINATING. You can terminate a stream session in any status except ACTIVATING. If the stream session is in ACTIVATING status, an exception is thrown.

```sql
DELETE FROM aws.gameliftstreams.stream_sessions
WHERE identifier = '{{ identifier }}' --required
AND stream_session_identifier = '{{ stream_session_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_stream_session_files"
    values={[
        { label: 'export_stream_session_files', value: 'export_stream_session_files' }
    ]}
>
<TabItem value="export_stream_session_files">

Export the files that your application modifies or generates in a stream session, which can help you debug or verify your application. When your application runs, it generates output files such as logs, diagnostic information, crash dumps, save files, user data, screenshots, and so on. The files can be defined by the engine or frameworks that your application uses, or information that you've programmed your application to output. You can only call this action on a stream session that is in progress, specifically in one of the following statuses ACTIVE, CONNECTED, PENDING_CLIENT_RECONNECTION, and RECONNECTING. You must provide an Amazon Simple Storage Service (Amazon S3) bucket to store the files in. When the session ends, Amazon GameLift Streams produces a compressed folder that contains all of the files and directories that were modified or created by the application during the stream session. AWS uses your security credentials to authenticate and authorize access to your Amazon S3 bucket. Amazon GameLift Streams collects the following generated and modified files. Find them in the corresponding folders in the .zip archive. application/: The folder where your application or game is stored. profile/: The user profile folder. temp/: The system temp folder. To verify the status of the exported files, use GetStreamSession. To delete the files, delete the object in the S3 bucket.

```sql
EXEC aws.gameliftstreams.stream_sessions.export_stream_session_files 
@identifier='{{ identifier }}' --required, 
@stream_session_identifier='{{ stream_session_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"OutputUri": "{{ OutputUri }}"
}'
;
```
</TabItem>
</Tabs>
