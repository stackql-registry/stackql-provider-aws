--- 
title: stream_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_urls
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

Creates, updates, deletes, gets or lists a <code>stream_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gameliftstreams.stream_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream_url"
    values={[
        { label: 'get_stream_url', value: 'get_stream_url' },
        { label: 'list_stream_urls', value: 'list_stream_urls' }
    ]}
>
<TabItem value="get_stream_url">

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
    <td><CopyableCode code="additional_environment_variables" /></td>
    <td><code>object</code></td>
    <td>The environment variables made available to the application when a stream session starts.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_launch_args" /></td>
    <td><code>array</code></td>
    <td>The command-line arguments passed to the application when a stream session starts.</td>
</tr>
<tr>
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The application that runs in the stream sessions. This value is an Amazon Resource Name (ARN) that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the stream URL across all Amazon Web Services Regions. Format is arn:aws:gameliftstreams:&#91;AWS Region&#93;:&#91;AWS account&#93;:streamurl/&#91;stream group resource ID&#93;/&#91;stream URL resource ID&#93;. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The descriptive label for the stream URL. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.!+@/&#93;&#91;a-zA-Z0-9-_.!+@/ &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_configuration" /></td>
    <td><code>object</code></td>
    <td>The virtual monitor settings for a stream session, including the resolution. If not specified, the stream session uses the default resolution of 1920 × 1080.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the stream URL expires and stops accepting new stream sessions. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of locations, in order of preference, where Amazon GameLift Streams places the stream session. For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The data transport protocol used for stream sessions started from this stream URL. (WebRTC)</td>
</tr>
<tr>
    <td><CopyableCode code="remaining_uses" /></td>
    <td><code>integer</code></td>
    <td>The number of times the stream URL can still be used to start a stream session.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that Amazon GameLift Streams assumes during stream sessions started from this stream URL. For more information, see Provide AWS credentials to your streaming application in the Amazon GameLift Streams Developer Guide. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:iam::\d&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_length_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum length of time, in seconds, that a stream session started from this stream URL can run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream URL. Possible statuses include the following: ACTIVE: The stream URL is valid and can start stream sessions. EXPIRED: The stream URL has passed its expiration time and can no longer start stream sessions. REVOKED: The stream URL was revoked and can no longer start stream sessions. LIMIT_REACHED: The stream URL has been used the maximum number of times and can no longer start stream sessions. (ACTIVE, EXPIRED, REVOKED, LIMIT_REACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about why the stream URL is in its current status. Amazon GameLift Streams populates this value when the status is REVOKED. Possible values include the following: userRevoked: You revoked the stream URL. revokedAndTerminatingSessions: You revoked the stream URL and Amazon GameLift Streams is ending its running stream sessions. revokedAndSessionsTerminated: You revoked the stream URL and its running stream sessions have ended. streamGroupDeleted: The stream group was deleted, which revoked the stream URL. applicationDeleted: The application was deleted, which revoked the stream URL. (userRevoked, revokedAndTerminatingSessions, revokedAndSessionsTerminated, streamGroupDeleted, applicationDeleted)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_group_arn" /></td>
    <td><code>string</code></td>
    <td>The stream group that runs the stream sessions. This value is an Amazon Resource Name (ARN) that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_sessions" /></td>
    <td><code>array</code></td>
    <td>A list of the stream sessions that have been started through this stream URL.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_url" /></td>
    <td><code>string</code></td>
    <td>The shareable stream URL. Distribute this URL to end users so that they can start and play a stream session in a hosted web player. Treat the stream URL as a secret. Anyone who has it can start a stream session until the stream URL expires, is revoked, or reaches its usage limit.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_url_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the stream URL resource, for example su-1AB2C3De4. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times the stream URL can start a stream session.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stream_urls">

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
    <td>The application that runs in the stream sessions. This value is an Amazon Resource Name (ARN) that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the stream URL across all Amazon Web Services Regions. Format is arn:aws:gameliftstreams:&#91;AWS Region&#93;:&#91;AWS account&#93;:streamurl/&#91;stream group resource ID&#93;/&#91;stream URL resource ID&#93;. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The descriptive label for the stream URL. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.!+@/&#93;&#91;a-zA-Z0-9-_.!+@/ &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the stream URL expires and stops accepting new stream sessions. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="remaining_uses" /></td>
    <td><code>integer</code></td>
    <td>The number of times the stream URL can still be used to start a stream session.</td>
</tr>
<tr>
    <td><CopyableCode code="session_length_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum length of time, in seconds, that a stream session started from this stream URL can run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream URL. Possible statuses include the following: ACTIVE: The stream URL is valid and can start stream sessions. EXPIRED: The stream URL has passed its expiration time and can no longer start stream sessions. REVOKED: The stream URL was revoked and can no longer start stream sessions. LIMIT_REACHED: The stream URL has been used the maximum number of times and can no longer start stream sessions. (ACTIVE, EXPIRED, REVOKED, LIMIT_REACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about why the stream URL is in its current status. Amazon GameLift Streams populates this value when the status is REVOKED. Possible values include the following: userRevoked: You revoked the stream URL. revokedAndTerminatingSessions: You revoked the stream URL and Amazon GameLift Streams is ending its running stream sessions. revokedAndSessionsTerminated: You revoked the stream URL and its running stream sessions have ended. streamGroupDeleted: The stream group was deleted, which revoked the stream URL. applicationDeleted: The application was deleted, which revoked the stream URL. (userRevoked, revokedAndTerminatingSessions, revokedAndSessionsTerminated, streamGroupDeleted, applicationDeleted)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_group_arn" /></td>
    <td><code>string</code></td>
    <td>The stream group that runs the stream sessions. This value is an Amazon Resource Name (ARN) that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. (pattern: &lt;code&gt;arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_url" /></td>
    <td><code>string</code></td>
    <td>The shareable stream URL. Distribute this URL to end users so that they can start and play a stream session in a hosted web player. Treat the stream URL as a secret. Anyone who has it can start a stream session until the stream URL expires, is revoked, or reaches its usage limit.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_url_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the stream URL resource, for example su-1AB2C3De4. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times the stream URL can start a stream session.</td>
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
    <td><a href="#get_stream_url"><CopyableCode code="get_stream_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-stream_url_identifier"><code>stream_url_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves properties for a stream URL, including its current status, usage, and the stream sessions started through it. If you delete the stream group or application that backs the stream URL, this operation updates the status of the stream URL to REVOKED.</td>
</tr>
<tr>
    <td><a href="#list_stream_urls"><CopyableCode code="list_stream_urls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-StreamGroupIdentifier"><code>StreamGroupIdentifier</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves a list of the stream URLs in the current Amazon Web Services Region for your Amazon Web Services account. You can filter the results by status or by stream group. Use the pagination parameters to retrieve results as a set of sequential pages. If you delete the stream group or application that backs a stream URL, this operation updates that stream URL's status to REVOKED.</td>
</tr>
<tr>
    <td><a href="#create_stream_url"><CopyableCode code="create_stream_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationIdentifier"><code>ApplicationIdentifier</code></a>, <a href="#parameter-UrlExpiresAfterMinutes"><code>UrlExpiresAfterMinutes</code></a></td>
    <td></td>
    <td>Creates a stream URL that grants temporary access to a stream session in a web browser without requiring an Amazon Web Services account or client integration. You can use the stream URL to start a stream session up to the number of times set by UsageLimit, until it expires after UrlExpiresAfterMinutes. Each successful use starts a new stream session. To make the request idempotent, provide a ClientToken.</td>
</tr>
<tr>
    <td><a href="#revoke_stream_url"><CopyableCode code="revoke_stream_url" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-stream_url_identifier"><code>stream_url_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Revokes a stream URL so that it can no longer start new stream sessions. By default, stream sessions that are already running continue until they end on their own. To also end running sessions, set RevocationMode to REVOKE_AND_TERMINATE_SESSIONS. Revoking a stream URL is permanent. The status of the stream URL changes to REVOKED.</td>
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
    <td>An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4. This is the stream group that owns the stream URL.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stream_url_identifier">
    <td><CopyableCode code="stream_url_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the stream URL to revoke. Specify a stream URL ID or Amazon Resource Name (ARN). Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamurl/sg-1AB2C3De4/su-1AB2C3De4. Example ID: su-1AB2C3De4.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. Valid values are 1-100. The default is 25.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Filters the list to stream URLs with the specified status. ACTIVE: The stream URL is valid and can start stream sessions. EXPIRED: The stream URL has passed its expiration time and can no longer start stream sessions. REVOKED: The stream URL was revoked and can no longer start stream sessions. LIMIT_REACHED: The stream URL has been used the maximum number of times and can no longer start stream sessions.</td>
</tr>
<tr id="parameter-StreamGroupIdentifier">
    <td><CopyableCode code="StreamGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>Filters the list to stream URLs that belong to the specified stream group. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_stream_url"
    values={[
        { label: 'get_stream_url', value: 'get_stream_url' },
        { label: 'list_stream_urls', value: 'list_stream_urls' }
    ]}
>
<TabItem value="get_stream_url">

Retrieves properties for a stream URL, including its current status, usage, and the stream sessions started through it. If you delete the stream group or application that backs the stream URL, this operation updates the status of the stream URL to REVOKED.

```sql
SELECT
additional_environment_variables,
additional_launch_args,
application_arn,
arn,
created_at,
description,
display_configuration,
expires_at,
locations,
protocol,
remaining_uses,
role_arn,
session_length_seconds,
status,
status_reason,
stream_group_arn,
stream_sessions,
stream_url,
stream_url_id,
usage_limit
FROM aws.gameliftstreams.stream_urls
WHERE identifier = '{{ identifier }}' -- required
AND stream_url_identifier = '{{ stream_url_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stream_urls">

Retrieves a list of the stream URLs in the current Amazon Web Services Region for your Amazon Web Services account. You can filter the results by status or by stream group. Use the pagination parameters to retrieve results as a set of sequential pages. If you delete the stream group or application that backs a stream URL, this operation updates that stream URL's status to REVOKED.

```sql
SELECT
application_arn,
arn,
created_at,
description,
expires_at,
remaining_uses,
session_length_seconds,
status,
status_reason,
stream_group_arn,
stream_url,
stream_url_id,
usage_limit
FROM aws.gameliftstreams.stream_urls
WHERE region = '{{ region }}' -- required
AND Status = '{{ Status }}'
AND StreamGroupIdentifier = '{{ StreamGroupIdentifier }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream_url"
    values={[
        { label: 'create_stream_url', value: 'create_stream_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream_url">

Creates a stream URL that grants temporary access to a stream session in a web browser without requiring an Amazon Web Services account or client integration. You can use the stream URL to start a stream session up to the number of times set by UsageLimit, until it expires after UrlExpiresAfterMinutes. Each successful use starts a new stream session. To make the request idempotent, provide a ClientToken.

```sql
INSERT INTO aws.gameliftstreams.stream_urls (
ApplicationIdentifier,
Protocol,
UrlExpiresAfterMinutes,
UsageLimit,
Description,
Locations,
SessionLengthSeconds,
AdditionalLaunchArgs,
AdditionalEnvironmentVariables,
RoleArn,
DisplayConfiguration,
ClientToken,
identifier,
region
)
SELECT 
'{{ ApplicationIdentifier }}' /* required */,
'{{ Protocol }}',
{{ UrlExpiresAfterMinutes }} /* required */,
{{ UsageLimit }},
'{{ Description }}',
'{{ Locations }}',
{{ SessionLengthSeconds }},
'{{ AdditionalLaunchArgs }}',
'{{ AdditionalEnvironmentVariables }}',
'{{ RoleArn }}',
'{{ DisplayConfiguration }}',
'{{ ClientToken }}',
'{{ identifier }}',
'{{ region }}'
RETURNING
additional_environment_variables,
additional_launch_args,
application_arn,
arn,
created_at,
description,
display_configuration,
expires_at,
locations,
protocol,
remaining_uses,
role_arn,
session_length_seconds,
status,
status_reason,
stream_group_arn,
stream_url,
stream_url_id,
usage_limit
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stream_urls
  props:
    - name: identifier
      value: "{{ identifier }}"
      description: Required parameter for the stream_urls resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stream_urls resource.
    - name: ApplicationIdentifier
      value: "{{ ApplicationIdentifier }}"
    - name: Protocol
      value: "{{ Protocol }}"
      valid_values: ['WebRTC']
    - name: UrlExpiresAfterMinutes
      value: {{ UrlExpiresAfterMinutes }}
    - name: UsageLimit
      value: {{ UsageLimit }}
    - name: Description
      value: "{{ Description }}"
    - name: Locations
      value:
        - "{{ Locations }}"
    - name: SessionLengthSeconds
      value: {{ SessionLengthSeconds }}
    - name: AdditionalLaunchArgs
      value:
        - "{{ AdditionalLaunchArgs }}"
    - name: AdditionalEnvironmentVariables
      value: "{{ AdditionalEnvironmentVariables }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: DisplayConfiguration
      description: |
        The virtual monitor settings for a stream session, including the resolution. If not specified, the stream session uses the default resolution of 1920 × 1080.
      value:
        Resolution:
          Width: {{ Width }}
          Height: {{ Height }}
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_stream_url"
    values={[
        { label: 'revoke_stream_url', value: 'revoke_stream_url' }
    ]}
>
<TabItem value="revoke_stream_url">

Revokes a stream URL so that it can no longer start new stream sessions. By default, stream sessions that are already running continue until they end on their own. To also end running sessions, set RevocationMode to REVOKE_AND_TERMINATE_SESSIONS. Revoking a stream URL is permanent. The status of the stream URL changes to REVOKED.

```sql
UPDATE aws.gameliftstreams.stream_urls
SET 
RevocationMode = '{{ RevocationMode }}'
WHERE 
identifier = '{{ identifier }}' --required
AND stream_url_identifier = '{{ stream_url_identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
