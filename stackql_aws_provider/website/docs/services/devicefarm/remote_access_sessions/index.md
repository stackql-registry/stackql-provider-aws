--- 
title: remote_access_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - remote_access_sessions
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>remote_access_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remote_access_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.remote_access_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_remote_access_session"
    values={[
        { label: 'get_remote_access_session', value: 'get_remote_access_session' }
    ]}
>
<TabItem value="get_remote_access_session">

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
    <td>The name of the remote access session.</td>
</tr>
<tr>
    <td><CopyableCode code="app_upload" /></td>
    <td><code>string</code></td>
    <td>The ARN for the app to be installed onto your device. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the remote access session. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_method" /></td>
    <td><code>string</code></td>
    <td>The billing method of the remote access session. Possible values include METERED or UNMETERED. For more information about metered devices, see AWS Device Farm terminology. (METERED, UNMETERED)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the remote access session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="device" /></td>
    <td><code>object</code></td>
    <td>The device (phone or tablet) used in the remote access session.</td>
</tr>
<tr>
    <td><CopyableCode code="device_minutes" /></td>
    <td><code>object</code></td>
    <td>The number of minutes a device is used in a remote access session (including setup and teardown minutes).</td>
</tr>
<tr>
    <td><CopyableCode code="device_proxy" /></td>
    <td><code>object</code></td>
    <td>The device proxy configured for the remote access session.</td>
</tr>
<tr>
    <td><CopyableCode code="device_udid" /></td>
    <td><code>string</code></td>
    <td>Unique device identifier for the remote device. Only returned if remote debugging is enabled for the remote access session. Remote debugging is no longer supported.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint for the remote access session. This field is deprecated, and is replaced by the new endpoints.interactiveEndpoint field.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>Represents the remote endpoints for viewing and controlling a device during a remote access session.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the instance. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="interaction_mode" /></td>
    <td><code>string</code></td>
    <td>The interaction mode of the remote access session. Changing the interactive mode of remote access sessions is no longer available. (INTERACTIVE, NO_VIDEO, VIDEO_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message about the remote access session.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The result of the remote access session. Can be any of the following: PENDING. PASSED. WARNED. FAILED. SKIPPED. ERRORED. STOPPED. (PENDING, PASSED, WARNED, FAILED, SKIPPED, ERRORED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="skip_app_resign" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again. For more information about how Device Farm re-signs your apps, see Do you modify my app? in the AWS Device Farm FAQs.</td>
</tr>
<tr>
    <td><CopyableCode code="started" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the remote access session was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the remote access session. Can be any of the following: PENDING. PENDING_CONCURRENCY. PENDING_DEVICE. PROCESSING. SCHEDULING. PREPARING. RUNNING. COMPLETED. STOPPING. (PENDING, PENDING_CONCURRENCY, PENDING_DEVICE, PROCESSING, SCHEDULING, PREPARING, RUNNING, COMPLETED, STOPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the remote access session was stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The VPC security groups and subnets that are attached to a project.</td>
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
    <td><a href="#get_remote_access_session"><CopyableCode code="get_remote_access_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a link to a currently running remote access session.</td>
</tr>
<tr>
    <td><a href="#create_remote_access_session"><CopyableCode code="create_remote_access_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a>, <a href="#parameter-deviceArn"><code>deviceArn</code></a></td>
    <td></td>
    <td>Specifies and starts a remote access session.</td>
</tr>
<tr>
    <td><a href="#delete_remote_access_session"><CopyableCode code="delete_remote_access_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a completed remote access session and its results. You cannot delete a remote access session if it is still active. You cannot undo this operation.</td>
</tr>
<tr>
    <td><a href="#install_to_remote_access_session"><CopyableCode code="install_to_remote_access_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-remoteAccessSessionArn"><code>remoteAccessSessionArn</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.</td>
</tr>
<tr>
    <td><a href="#list_remote_access_sessions"><CopyableCode code="list_remote_access_sessions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Returns a list of all currently running remote access sessions.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_remote_access_session"
    values={[
        { label: 'get_remote_access_session', value: 'get_remote_access_session' }
    ]}
>
<TabItem value="get_remote_access_session">

Returns a link to a currently running remote access session.

```sql
SELECT
name,
app_upload,
arn,
billing_method,
created,
device,
device_minutes,
device_proxy,
device_udid,
endpoint,
endpoints,
instance_arn,
interaction_mode,
message,
result,
skip_app_resign,
started,
status,
stopped,
vpc_config
FROM aws.devicefarm.remote_access_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_remote_access_session"
    values={[
        { label: 'create_remote_access_session', value: 'create_remote_access_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_remote_access_session">

Specifies and starts a remote access session.

```sql
INSERT INTO aws.devicefarm.remote_access_sessions (
projectArn,
deviceArn,
appArn,
instanceArn,
name,
configuration,
interactionMode,
skipAppResign,
region
)
SELECT 
'{{ projectArn }}' /* required */,
'{{ deviceArn }}' /* required */,
'{{ appArn }}',
'{{ instanceArn }}',
'{{ name }}',
'{{ configuration }}',
'{{ interactionMode }}',
{{ skipAppResign }},
'{{ region }}'
RETURNING
remote_access_session
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: remote_access_sessions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the remote_access_sessions resource.
    - name: projectArn
      value: "{{ projectArn }}"
      description: |
        The Amazon Resource Name (ARN) of the project for which you want to create a remote access session.
    - name: deviceArn
      value: "{{ deviceArn }}"
      description: |
        The ARN of the device for which you want to create a remote access session.
    - name: appArn
      value: "{{ appArn }}"
      description: |
        The Amazon Resource Name (ARN) of the app to create the remote access session.
    - name: instanceArn
      value: "{{ instanceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the device instance for which you want to create a remote access session.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the remote access session to create.
    - name: configuration
      description: |
        The configuration information for the remote access session request.
      value:
        auxiliaryApps:
          - "{{ auxiliaryApps }}"
        billingMethod: "{{ billingMethod }}"
        vpceConfigurationArns:
          - "{{ vpceConfigurationArns }}"
        deviceProxy:
          host: "{{ host }}"
          port: {{ port }}
    - name: interactionMode
      value: "{{ interactionMode }}"
      description: |
        The interaction mode of the remote access session. Changing the interactive mode of remote access sessions is no longer available.
      valid_values: ['INTERACTIVE', 'NO_VIDEO', 'VIDEO_ONLY']
    - name: skipAppResign
      value: {{ skipAppResign }}
      description: |
        When set to true, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again. For more information on how Device Farm modifies your uploads during tests, see Do you modify my app?
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_remote_access_session"
    values={[
        { label: 'delete_remote_access_session', value: 'delete_remote_access_session' }
    ]}
>
<TabItem value="delete_remote_access_session">

Deletes a completed remote access session and its results. You cannot delete a remote access session if it is still active. You cannot undo this operation.

```sql
DELETE FROM aws.devicefarm.remote_access_sessions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="install_to_remote_access_session"
    values={[
        { label: 'install_to_remote_access_session', value: 'install_to_remote_access_session' },
        { label: 'list_remote_access_sessions', value: 'list_remote_access_sessions' }
    ]}
>
<TabItem value="install_to_remote_access_session">

Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.

```sql
EXEC aws.devicefarm.remote_access_sessions.install_to_remote_access_session 
@region='{{ region }}' --required 
@@json=
'{
"remoteAccessSessionArn": "{{ remoteAccessSessionArn }}", 
"appArn": "{{ appArn }}"
}'
;
```
</TabItem>
<TabItem value="list_remote_access_sessions">

Returns a list of all currently running remote access sessions.

```sql
EXEC aws.devicefarm.remote_access_sessions.list_remote_access_sessions 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
