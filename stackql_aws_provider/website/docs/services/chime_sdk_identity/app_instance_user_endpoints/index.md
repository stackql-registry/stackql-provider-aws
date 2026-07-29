--- 
title: app_instance_user_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - app_instance_user_endpoints
  - chime_sdk_identity
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

Creates, updates, deletes, gets or lists an <code>app_instance_user_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_instance_user_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_identity.app_instance_user_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_instance_user_endpoint"
    values={[
        { label: 'describe_app_instance_user_endpoint', value: 'describe_app_instance_user_endpoint' },
        { label: 'list_app_instance_user_endpoints', value: 'list_app_instance_user_endpoints' }
    ]}
>
<TabItem value="describe_app_instance_user_endpoint">

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
    <td><CopyableCode code="allow_messages" /></td>
    <td><code>string</code></td>
    <td>Boolean that controls whether the AppInstanceUserEndpoint is opted in to receive messages. ALL indicates the endpoint will receive all messages. NONE indicates the endpoint will receive no messages. (ALL, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="app_instance_user_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstanceUser. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which an AppInstanceUserEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AppInstanceUserEndpoint. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_state" /></td>
    <td><code>object</code></td>
    <td>A read-only field that represents the state of an AppInstanceUserEndpoint. Supported values: ACTIVE: The AppInstanceUserEndpoint is active and able to receive messages. When ACTIVE, the EndpointStatusReason remains empty. INACTIVE: The AppInstanceUserEndpoint is inactive and can't receive message. When INACTIVE, the corresponding reason will be conveyed through EndpointStatusReason. INVALID_DEVICE_TOKEN indicates that an AppInstanceUserEndpoint is INACTIVE due to invalid device token INVALID_PINPOINT_ARN indicates that an AppInstanceUserEndpoint is INACTIVE due to an invalid pinpoint ARN that was input through the ResourceArn field.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which an AppInstanceUserEndpoint was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the AppInstanceUserEndpoint. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource to which the endpoint belongs. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the AppInstanceUserEndpoint. (APNS, APNS_SANDBOX, GCM)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_instance_user_endpoints">

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
    <td><CopyableCode code="app_instance_user_endpoints" /></td>
    <td><code>array</code></td>
    <td>The information for each requested AppInstanceUserEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested endpoints are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_app_instance_user_endpoint"><CopyableCode code="describe_app_instance_user_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-endpoint_id"><code>endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of an AppInstanceUserEndpoint.</td>
</tr>
<tr>
    <td><a href="#list_app_instance_user_endpoints"><CopyableCode code="list_app_instance_user_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all the AppInstanceUserEndpoints created under a single AppInstanceUser.</td>
</tr>
<tr>
    <td><a href="#register_app_instance_user_endpoint"><CopyableCode code="register_app_instance_user_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-EndpointAttributes"><code>EndpointAttributes</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Registers an endpoint under an Amazon Chime AppInstanceUser. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.</td>
</tr>
<tr>
    <td><a href="#update_app_instance_user_endpoint"><CopyableCode code="update_app_instance_user_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-endpoint_id"><code>endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the details of an AppInstanceUserEndpoint. You can update the name and AllowMessage values.</td>
</tr>
<tr>
    <td><a href="#deregister_app_instance_user_endpoint"><CopyableCode code="deregister_app_instance_user_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-endpoint_id"><code>endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters an AppInstanceUserEndpoint.</td>
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
<tr id="parameter-app_instance_user_arn">
    <td><CopyableCode code="app_instance_user_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstanceUser.</td>
</tr>
<tr id="parameter-endpoint_id">
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AppInstanceUserEndpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of endpoints that you want to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested endpoints are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app_instance_user_endpoint"
    values={[
        { label: 'describe_app_instance_user_endpoint', value: 'describe_app_instance_user_endpoint' },
        { label: 'list_app_instance_user_endpoints', value: 'list_app_instance_user_endpoints' }
    ]}
>
<TabItem value="describe_app_instance_user_endpoint">

Returns the full details of an AppInstanceUserEndpoint.

```sql
SELECT
allow_messages,
app_instance_user_arn,
created_timestamp,
endpoint_attributes,
endpoint_id,
endpoint_state,
last_updated_timestamp,
name,
resource_arn,
type
FROM aws.chime_sdk_identity.app_instance_user_endpoints
WHERE app_instance_user_arn = '{{ app_instance_user_arn }}' -- required
AND endpoint_id = '{{ endpoint_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_instance_user_endpoints">

Lists all the AppInstanceUserEndpoints created under a single AppInstanceUser.

```sql
SELECT
app_instance_user_endpoints,
next_token
FROM aws.chime_sdk_identity.app_instance_user_endpoints
WHERE app_instance_user_arn = '{{ app_instance_user_arn }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_app_instance_user_endpoint"
    values={[
        { label: 'register_app_instance_user_endpoint', value: 'register_app_instance_user_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_app_instance_user_endpoint">

Registers an endpoint under an Amazon Chime AppInstanceUser. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.

```sql
INSERT INTO aws.chime_sdk_identity.app_instance_user_endpoints (
Name,
Type,
ResourceArn,
EndpointAttributes,
ClientRequestToken,
AllowMessages,
app_instance_user_arn,
region
)
SELECT 
'{{ Name }}',
'{{ Type }}' /* required */,
'{{ ResourceArn }}' /* required */,
'{{ EndpointAttributes }}' /* required */,
'{{ ClientRequestToken }}' /* required */,
'{{ AllowMessages }}',
'{{ app_instance_user_arn }}',
'{{ region }}'
RETURNING
app_instance_user_arn,
endpoint_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_instance_user_endpoints
  props:
    - name: app_instance_user_arn
      value: "{{ app_instance_user_arn }}"
      description: Required parameter for the app_instance_user_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_instance_user_endpoints resource.
    - name: Name
      value: "{{ Name }}"
    - name: Type
      value: "{{ Type }}"
      valid_values: ['APNS', 'APNS_SANDBOX', 'GCM']
    - name: ResourceArn
      value: "{{ ResourceArn }}"
    - name: EndpointAttributes
      description: |
        The attributes of an Endpoint.
      value:
        DeviceToken: "{{ DeviceToken }}"
        VoipDeviceToken: "{{ VoipDeviceToken }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: AllowMessages
      value: "{{ AllowMessages }}"
      valid_values: ['ALL', 'NONE']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_instance_user_endpoint"
    values={[
        { label: 'update_app_instance_user_endpoint', value: 'update_app_instance_user_endpoint' }
    ]}
>
<TabItem value="update_app_instance_user_endpoint">

Updates the details of an AppInstanceUserEndpoint. You can update the name and AllowMessage values.

```sql
UPDATE aws.chime_sdk_identity.app_instance_user_endpoints
SET 
Name = '{{ Name }}',
AllowMessages = '{{ AllowMessages }}'
WHERE 
app_instance_user_arn = '{{ app_instance_user_arn }}' --required
AND endpoint_id = '{{ endpoint_id }}' --required
AND region = '{{ region }}' --required
RETURNING
app_instance_user_arn,
endpoint_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_app_instance_user_endpoint"
    values={[
        { label: 'deregister_app_instance_user_endpoint', value: 'deregister_app_instance_user_endpoint' }
    ]}
>
<TabItem value="deregister_app_instance_user_endpoint">

Deregisters an AppInstanceUserEndpoint.

```sql
DELETE FROM aws.chime_sdk_identity.app_instance_user_endpoints
WHERE app_instance_user_arn = '{{ app_instance_user_arn }}' --required
AND endpoint_id = '{{ endpoint_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
