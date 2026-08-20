--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gameliftstreams.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td><CopyableCode code="application_log_output_uri" /></td>
    <td><code>string</code></td>
    <td>An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more ApplicationLogPaths. (pattern: &lt;code&gt;$|^s3:​//(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9._-&#93;&#123;1,61&#125;&#91;a-zA-Z0-9&#93;)(/&#91;a-zA-Z0-9._-&#93;+)*/?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_log_paths" /></td>
    <td><code>array</code></td>
    <td>Locations of log files that your content generates during a stream session. Amazon GameLift Streams uploads log files to the Amazon S3 bucket that you specify in ApplicationLogOutputUri at the end of a stream session. To retrieve stored log files, call GetStreamSession and get the LogFileLocationUri.</td>
</tr>
<tr>
    <td><CopyableCode code="application_source_uri" /></td>
    <td><code>string</code></td>
    <td>The original Amazon S3 location of uploaded stream content for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that's assigned to an application resource and uniquely identifies it across all Amazon Web Services Regions. Format is arn:aws:gameliftstreams:&#91;AWS Region&#93;:&#91;AWS account&#93;:application/&#91;resource ID&#93;. (pattern: &lt;code&gt;(^&#91;a-zA-Z0-9-&#93;+$)|(^arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_stream_groups" /></td>
    <td><code>array</code></td>
    <td>A set of stream groups that this application is associated with. You can use any of these stream groups to stream your application. This value is a set of Amazon Resource Names (ARNs) that uniquely identify stream group resources. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable label for the application. You can edit this value. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.!+@/&#93;&#91;a-zA-Z0-9-_.!+@/ &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="executable_path" /></td>
    <td><code>string</code></td>
    <td>The relative path and file name of the executable file that launches the content for streaming.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A unique ID value that is assigned to the resource when it's created. Format example: a-9ZY8X7Wv6. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="replication_statuses" /></td>
    <td><code>array</code></td>
    <td>A set of replication statuses for each location.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_environment" /></td>
    <td><code>object</code></td>
    <td>Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers. A runtime environment can be one of the following: For Linux applications Ubuntu 22.04 LTS (Type=UBUNTU, Version=22_04_LTS) For Windows applications Microsoft Windows Server 2022 Base (Type=WINDOWS, Version=2022) Proton 10.0-4 (Type=PROTON, Version=20260204) Proton 9.0-2 (Type=PROTON, Version=20250516) Proton 8.0-5 (Type=PROTON, Version=20241007) Proton 8.0-2c (Type=PROTON, Version=20230704)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the application resource. Possible statuses include the following: INITIALIZED: Amazon GameLift Streams has received the request and is initiating the work flow to create an application. PROCESSING: The create application work flow is in process. Amazon GameLift Streams is copying the content and caching for future deployment in a stream group. READY: The application is ready to deploy in a stream group. ERROR: An error occurred when setting up the application. See StatusReason for more information. DELETING: Amazon GameLift Streams is in the process of deleting the application. (INITIALIZED, PROCESSING, READY, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A short description of the status reason when the application is in ERROR status. (internalError, accessDenied, sourceModified)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that's assigned to an application resource and uniquely identifies the application across all Amazon Web Services Regions. Format is arn:aws:gameliftstreams:&#91;AWS Region&#93;:&#91;AWS account&#93;:application/&#91;resource ID&#93;. (pattern: &lt;code&gt;(^&#91;a-zA-Z0-9-&#93;+$)|(^arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable label for the application. You can edit this value. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.!+@/&#93;&#91;a-zA-Z0-9-_.!+@/ &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>An ID that uniquely identifies the application resource. Example ID: a-9ZY8X7Wv6. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_environment" /></td>
    <td><code>object</code></td>
    <td>Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers. A runtime environment can be one of the following: For Linux applications Ubuntu 22.04 LTS (Type=UBUNTU, Version=22_04_LTS) For Windows applications Microsoft Windows Server 2022 Base (Type=WINDOWS, Version=2022) Proton 10.0-4 (Type=PROTON, Version=20260204) Proton 9.0-2 (Type=PROTON, Version=20250516) Proton 8.0-5 (Type=PROTON, Version=20241007) Proton 8.0-2c (Type=PROTON, Version=20230704)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the application resource. Possible statuses include the following: INITIALIZED: Amazon GameLift Streams has received the request and is initiating the work flow to create an application. PROCESSING: The create application work flow is in process. Amazon GameLift Streams is copying the content and caching for future deployment in a stream group. READY: The application is ready to deploy in a stream group. ERROR: An error occurred when setting up the application. For more information about the error, call GetApplication and refer to StatusReason. DELETING: Amazon GameLift Streams is in the process of deleting the application. (INITIALIZED, PROCESSING, READY, DELETING, ERROR)</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves properties for an Amazon GameLift Streams application resource. Specify the ID of the application that you want to retrieve. If the operation is successful, it returns properties for the requested application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves a list of all Amazon GameLift Streams applications that are associated with the Amazon Web Services account in use. This operation returns applications in all statuses, in no particular order. You can paginate the results as needed.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuntimeEnvironment"><code>RuntimeEnvironment</code></a>, <a href="#parameter-ExecutablePath"><code>ExecutablePath</code></a>, <a href="#parameter-ApplicationSourceUri"><code>ApplicationSourceUri</code></a></td>
    <td></td>
    <td>Creates an application resource in Amazon GameLift Streams, which specifies the application content you want to stream, such as a game build or other software, and configures the settings to run it. Before you create an application, upload your application content files to an Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Getting Started in the Amazon GameLift Streams Developer Guide. Make sure that your files in the Amazon S3 bucket are the correct version you want to use. If you change the files at a later time, you will need to create a new Amazon GameLift Streams application. Creating an application is the only time Amazon GameLift Streams accesses your Amazon S3 bucket. After the application reaches READY status, you can delete the original files from your Amazon S3 bucket without affecting the application. If the request is successful, Amazon GameLift Streams begins to create an application and sets the status to INITIALIZED. When an application reaches READY status, you can use the application to set up stream groups and start streams. To track application status, call GetApplication.</td>
</tr>
<tr>
    <td><a href="#associate_applications"><CopyableCode code="associate_applications" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationIdentifiers"><code>ApplicationIdentifiers</code></a></td>
    <td></td>
    <td>When you associate, or link, an application with a stream group, then Amazon GameLift Streams can launch the application using the stream group's allocated compute resources. The stream group must be in ACTIVE status. You can reverse this action by using DisassociateApplications. If a stream group does not already have a linked application, Amazon GameLift Streams will automatically assign the first application provided in ApplicationIdentifiers as the default.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the mutable configuration settings for a Amazon GameLift Streams application resource. You can change the Description, ApplicationLogOutputUri, and ApplicationLogPaths. To update application settings, specify the application ID and provide the new values. If the operation is successful, it returns the complete updated set of settings for the application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes an Amazon GameLift Streams application resource. This also deletes the application content files stored with Amazon GameLift Streams. However, this does not delete the original files that you uploaded to your Amazon S3 bucket; you can delete these any time after Amazon GameLift Streams creates an application, which is the only time Amazon GameLift Streams accesses your Amazon S3 bucket. You can only delete an application that meets the following conditions: The application is in READY or ERROR status. You cannot delete an application that's in PROCESSING or INITIALIZED status. The application is not the default application of any stream groups. You must first delete the stream group by using DeleteStreamGroup. The application is not linked to any stream groups. You must first unlink the stream group by using DisassociateApplications. An application is not streaming in any ongoing stream session. You must wait until the client ends the stream session or call TerminateStreamSession to end the stream. If any active stream groups exist for this application, this request returns a ValidationException.</td>
</tr>
<tr>
    <td><a href="#disassociate_applications"><CopyableCode code="disassociate_applications" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationIdentifiers"><code>ApplicationIdentifiers</code></a></td>
    <td></td>
    <td>When you disassociate, or unlink, an application from a stream group, you can no longer stream this application by using that stream group's allocated compute resources. Any streams in process will continue until they terminate, which helps avoid interrupting an end-user's stream. Amazon GameLift Streams will not initiate new streams in the stream group using the disassociated application. The disassociate action does not affect the stream capacity of a stream group. To disassociate an application, the stream group must be in ACTIVE status. If you disassociate the default application, Amazon GameLift Streams will automatically choose a new default application from the remaining associated applications. To change which application is the default application, call UpdateStreamGroup and specify a new DefaultApplicationIdentifier.</td>
</tr>
<tr>
    <td><a href="#start_stream_session"><CopyableCode code="start_stream_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SignalRequest"><code>SignalRequest</code></a>, <a href="#parameter-ApplicationIdentifier"><code>ApplicationIdentifier</code></a></td>
    <td></td>
    <td>This action initiates a new stream session and outputs connection information that clients can use to access the stream. A stream session refers to an instance of a stream that Amazon GameLift Streams transmits from the server to the end-user. A stream session runs on a compute resource that a stream group has allocated. The start stream session process works as follows: Prerequisites: You must have a stream group in ACTIVE status You must have idle or on-demand capacity in a stream group in the location you want to stream from You must have at least one application associated to the stream group (use AssociateApplications if needed) Start stream request: Your backend server calls StartStreamSession to initiate connection Amazon GameLift Streams creates the stream session resource, assigns an Amazon Resource Name (ARN) value, and begins searching for available stream capacity to run the stream Session transitions to ACTIVATING status Placement completion: If Amazon GameLift Streams is successful in finding capacity for the stream, the stream session status changes to ACTIVE status and StartStreamSession returns stream connection information If Amazon GameLift Streams was not successful in finding capacity within the placement timeout period (defined according to the capacity type and platform type), the stream session status changes to ERROR status and StartStreamSession returns a StatusReason of placementTimeout Connection completion: Provide the new connection information to the requesting client Client must establish connection within ConnectionTimeoutSeconds (specified in StartStreamSession parameters) Session terminates automatically if client fails to connect in time For more information about the stream session lifecycle, see Stream sessions in the Amazon GameLift Streams Developer Guide. Timeouts to be aware of that affect a stream session: Placement timeout: The amount of time that Amazon GameLift Streams has to find capacity for a stream request. Placement timeout varies based on the capacity type used to fulfill your stream request: Always-on capacity: 75 seconds On-demand capacity: Linux/Proton runtimes: 90 seconds Windows runtime: 10 minutes Connection timeout: The amount of time that Amazon GameLift Streams waits for a client to connect to a stream session in ACTIVE status, or reconnect to a stream session in PENDING_CLIENT_RECONNECTION status, the latter of which occurs when a client disconnects or loses connection from a stream session. If no client connects before the timeout, Amazon GameLift Streams terminates the stream session. This value is specified by ConnectionTimeoutSeconds in the StartStreamSession parameters. Maximum session length: A stream session will be terminated after this amount of time has elapsed since it started, regardless of any existing client connections. This value is specified by SessionLengthSeconds in the StartStreamSession parameters. To start a new stream session, specify a stream group ID and application ID, along with the transport protocol and signal request to use with the stream session. For stream groups that have multiple locations, provide a set of locations ordered by priority using a Locations parameter. Amazon GameLift Streams will start a single stream session in the next available location. An application must be finished replicating to a remote location before the remote location can host a stream. To reconnect to a stream session after a client disconnects or loses connection, use CreateStreamSessionConnection.</td>
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
    <td>The stream group to run this stream session with. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Retrieves properties for an Amazon GameLift Streams application resource. Specify the ID of the application that you want to retrieve. If the operation is successful, it returns properties for the requested application.

```sql
SELECT
application_log_output_uri,
application_log_paths,
application_source_uri,
arn,
associated_stream_groups,
created_at,
description,
executable_path,
id,
last_updated_at,
replication_statuses,
runtime_environment,
status,
status_reason
FROM aws.gameliftstreams.applications
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Retrieves a list of all Amazon GameLift Streams applications that are associated with the Amazon Web Services account in use. This operation returns applications in all statuses, in no particular order. You can paginate the results as needed.

```sql
SELECT
arn,
created_at,
description,
id,
last_updated_at,
runtime_environment,
status
FROM aws.gameliftstreams.applications
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an application resource in Amazon GameLift Streams, which specifies the application content you want to stream, such as a game build or other software, and configures the settings to run it. Before you create an application, upload your application content files to an Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Getting Started in the Amazon GameLift Streams Developer Guide. Make sure that your files in the Amazon S3 bucket are the correct version you want to use. If you change the files at a later time, you will need to create a new Amazon GameLift Streams application. Creating an application is the only time Amazon GameLift Streams accesses your Amazon S3 bucket. After the application reaches READY status, you can delete the original files from your Amazon S3 bucket without affecting the application. If the request is successful, Amazon GameLift Streams begins to create an application and sets the status to INITIALIZED. When an application reaches READY status, you can use the application to set up stream groups and start streams. To track application status, call GetApplication.

```sql
INSERT INTO aws.gameliftstreams.applications (
Description,
RuntimeEnvironment,
ExecutablePath,
ApplicationSourceUri,
ApplicationLogPaths,
ApplicationLogOutputUri,
Tags,
ClientToken,
region
)
SELECT 
'{{ Description }}',
'{{ RuntimeEnvironment }}' /* required */,
'{{ ExecutablePath }}' /* required */,
'{{ ApplicationSourceUri }}' /* required */,
'{{ ApplicationLogPaths }}',
'{{ ApplicationLogOutputUri }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
application_log_output_uri,
application_log_paths,
application_source_uri,
arn,
associated_stream_groups,
created_at,
description,
executable_path,
id,
last_updated_at,
replication_statuses,
runtime_environment,
status,
status_reason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: Description
      value: "{{ Description }}"
    - name: RuntimeEnvironment
      description: |
        Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers. A runtime environment can be one of the following: For Linux applications Ubuntu 22.04 LTS (Type=UBUNTU, Version=22_04_LTS) For Windows applications Microsoft Windows Server 2022 Base (Type=WINDOWS, Version=2022) Proton 10.0-4 (Type=PROTON, Version=20260204) Proton 9.0-2 (Type=PROTON, Version=20250516) Proton 8.0-5 (Type=PROTON, Version=20241007) Proton 8.0-2c (Type=PROTON, Version=20230704)
      value:
        Type: "{{ Type }}"
        Version: "{{ Version }}"
    - name: ExecutablePath
      value: "{{ ExecutablePath }}"
    - name: ApplicationSourceUri
      value: "{{ ApplicationSourceUri }}"
    - name: ApplicationLogPaths
      value:
        - "{{ ApplicationLogPaths }}"
    - name: ApplicationLogOutputUri
      value: "{{ ApplicationLogOutputUri }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_applications"
    values={[
        { label: 'associate_applications', value: 'associate_applications' },
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="associate_applications">

When you associate, or link, an application with a stream group, then Amazon GameLift Streams can launch the application using the stream group's allocated compute resources. The stream group must be in ACTIVE status. You can reverse this action by using DisassociateApplications. If a stream group does not already have a linked application, Amazon GameLift Streams will automatically assign the first application provided in ApplicationIdentifiers as the default.

```sql
UPDATE aws.gameliftstreams.applications
SET 
ApplicationIdentifiers = '{{ ApplicationIdentifiers }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND ApplicationIdentifiers = '{{ ApplicationIdentifiers }}' --required
RETURNING
application_arns,
arn;
```
</TabItem>
<TabItem value="update_application">

Updates the mutable configuration settings for a Amazon GameLift Streams application resource. You can change the Description, ApplicationLogOutputUri, and ApplicationLogPaths. To update application settings, specify the application ID and provide the new values. If the operation is successful, it returns the complete updated set of settings for the application.

```sql
UPDATE aws.gameliftstreams.applications
SET 
Description = '{{ Description }}',
ApplicationLogPaths = '{{ ApplicationLogPaths }}',
ApplicationLogOutputUri = '{{ ApplicationLogOutputUri }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
application_log_output_uri,
application_log_paths,
application_source_uri,
arn,
associated_stream_groups,
created_at,
description,
executable_path,
id,
last_updated_at,
replication_statuses,
runtime_environment,
status,
status_reason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Permanently deletes an Amazon GameLift Streams application resource. This also deletes the application content files stored with Amazon GameLift Streams. However, this does not delete the original files that you uploaded to your Amazon S3 bucket; you can delete these any time after Amazon GameLift Streams creates an application, which is the only time Amazon GameLift Streams accesses your Amazon S3 bucket. You can only delete an application that meets the following conditions: The application is in READY or ERROR status. You cannot delete an application that's in PROCESSING or INITIALIZED status. The application is not the default application of any stream groups. You must first delete the stream group by using DeleteStreamGroup. The application is not linked to any stream groups. You must first unlink the stream group by using DisassociateApplications. An application is not streaming in any ongoing stream session. You must wait until the client ends the stream session or call TerminateStreamSession to end the stream. If any active stream groups exist for this application, this request returns a ValidationException.

```sql
DELETE FROM aws.gameliftstreams.applications
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_applications"
    values={[
        { label: 'disassociate_applications', value: 'disassociate_applications' },
        { label: 'start_stream_session', value: 'start_stream_session' }
    ]}
>
<TabItem value="disassociate_applications">

When you disassociate, or unlink, an application from a stream group, you can no longer stream this application by using that stream group's allocated compute resources. Any streams in process will continue until they terminate, which helps avoid interrupting an end-user's stream. Amazon GameLift Streams will not initiate new streams in the stream group using the disassociated application. The disassociate action does not affect the stream capacity of a stream group. To disassociate an application, the stream group must be in ACTIVE status. If you disassociate the default application, Amazon GameLift Streams will automatically choose a new default application from the remaining associated applications. To change which application is the default application, call UpdateStreamGroup and specify a new DefaultApplicationIdentifier.

```sql
EXEC aws.gameliftstreams.applications.disassociate_applications 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationIdentifiers": "{{ ApplicationIdentifiers }}"
}'
;
```
</TabItem>
<TabItem value="start_stream_session">

This action initiates a new stream session and outputs connection information that clients can use to access the stream. A stream session refers to an instance of a stream that Amazon GameLift Streams transmits from the server to the end-user. A stream session runs on a compute resource that a stream group has allocated. The start stream session process works as follows: Prerequisites: You must have a stream group in ACTIVE status You must have idle or on-demand capacity in a stream group in the location you want to stream from You must have at least one application associated to the stream group (use AssociateApplications if needed) Start stream request: Your backend server calls StartStreamSession to initiate connection Amazon GameLift Streams creates the stream session resource, assigns an Amazon Resource Name (ARN) value, and begins searching for available stream capacity to run the stream Session transitions to ACTIVATING status Placement completion: If Amazon GameLift Streams is successful in finding capacity for the stream, the stream session status changes to ACTIVE status and StartStreamSession returns stream connection information If Amazon GameLift Streams was not successful in finding capacity within the placement timeout period (defined according to the capacity type and platform type), the stream session status changes to ERROR status and StartStreamSession returns a StatusReason of placementTimeout Connection completion: Provide the new connection information to the requesting client Client must establish connection within ConnectionTimeoutSeconds (specified in StartStreamSession parameters) Session terminates automatically if client fails to connect in time For more information about the stream session lifecycle, see Stream sessions in the Amazon GameLift Streams Developer Guide. Timeouts to be aware of that affect a stream session: Placement timeout: The amount of time that Amazon GameLift Streams has to find capacity for a stream request. Placement timeout varies based on the capacity type used to fulfill your stream request: Always-on capacity: 75 seconds On-demand capacity: Linux/Proton runtimes: 90 seconds Windows runtime: 10 minutes Connection timeout: The amount of time that Amazon GameLift Streams waits for a client to connect to a stream session in ACTIVE status, or reconnect to a stream session in PENDING_CLIENT_RECONNECTION status, the latter of which occurs when a client disconnects or loses connection from a stream session. If no client connects before the timeout, Amazon GameLift Streams terminates the stream session. This value is specified by ConnectionTimeoutSeconds in the StartStreamSession parameters. Maximum session length: A stream session will be terminated after this amount of time has elapsed since it started, regardless of any existing client connections. This value is specified by SessionLengthSeconds in the StartStreamSession parameters. To start a new stream session, specify a stream group ID and application ID, along with the transport protocol and signal request to use with the stream session. For stream groups that have multiple locations, provide a set of locations ordered by priority using a Locations parameter. Amazon GameLift Streams will start a single stream session in the next available location. An application must be finished replicating to a remote location before the remote location can host a stream. To reconnect to a stream session after a client disconnects or loses connection, use CreateStreamSessionConnection.

```sql
EXEC aws.gameliftstreams.applications.start_stream_session 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"Description": "{{ Description }}", 
"Protocol": "{{ Protocol }}", 
"SignalRequest": "{{ SignalRequest }}", 
"ApplicationIdentifier": "{{ ApplicationIdentifier }}", 
"UserId": "{{ UserId }}", 
"Locations": "{{ Locations }}", 
"ConnectionTimeoutSeconds": {{ ConnectionTimeoutSeconds }}, 
"SessionLengthSeconds": {{ SessionLengthSeconds }}, 
"AdditionalLaunchArgs": "{{ AdditionalLaunchArgs }}", 
"AdditionalEnvironmentVariables": "{{ AdditionalEnvironmentVariables }}", 
"PerformanceStatsConfiguration": "{{ PerformanceStatsConfiguration }}", 
"RoleArn": "{{ RoleArn }}", 
"DisplayConfiguration": "{{ DisplayConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
