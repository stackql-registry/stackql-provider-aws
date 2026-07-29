--- 
title: notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_configurations
  - notifications
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

Creates, updates, deletes, gets or lists a <code>notification_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.notification_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notification_configuration"
    values={[
        { label: 'get_notification_configuration', value: 'get_notification_configuration' },
        { label: 'list_notification_configurations', value: 'list_notification_configurations' }
    ]}
>
<TabItem value="get_notification_configuration">

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
    <td>The name of the NotificationConfiguration. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_duration" /></td>
    <td><code>string</code></td>
    <td>The aggregation preference of the NotificationConfiguration. Values: LONG Aggregate notifications for long periods of time (12 hours). SHORT Aggregate notifications for short periods of time (5 minutes). NONE Don't aggregate notifications. (LONG, SHORT, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the NotificationConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the NotificationConfiguration. (pattern: &lt;code&gt;&#91;^\u0001-\u001F\u007F-\u009F&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this NotificationConfiguration. (ACTIVE, PARTIALLY_ACTIVE, INACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="subtype" /></td>
    <td><code>string</code></td>
    <td>The subtype of the notification configuration returned in the response. (ACCOUNT, ADMIN_MANAGED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notification_configurations">

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
    <td>The name of the NotificationConfiguration. Supports RFC 3986's unreserved characters. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_duration" /></td>
    <td><code>string</code></td>
    <td>The aggregation preference of the NotificationConfiguration. Values: LONG Aggregate notifications for long periods of time (12 hours). SHORT Aggregate notifications for short periods of time (5 minutes). NONE Don't aggregate notifications. (LONG, SHORT, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the NotificationConfiguration resource. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the NotificationConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the NotificationConfiguration. (pattern: &lt;code&gt;&#91;^\u0001-\u001F\u007F-\u009F&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the NotificationConfiguration. (ACTIVE, PARTIALLY_ACTIVE, INACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="subtype" /></td>
    <td><code>string</code></td>
    <td>The subtype of the notification configuration. (ACCOUNT, ADMIN_MANAGED)</td>
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
    <td><a href="#get_notification_configuration"><CopyableCode code="get_notification_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a specified NotificationConfiguration.</td>
</tr>
<tr>
    <td><a href="#list_notification_configurations"><CopyableCode code="list_notification_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-eventRuleSource"><code>eventRuleSource</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-subtype"><code>subtype</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of abbreviated NotificationConfigurations according to specified filters, in reverse chronological order (newest first).</td>
</tr>
<tr>
    <td><a href="#create_notification_configuration"><CopyableCode code="create_notification_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Creates a new NotificationConfiguration.</td>
</tr>
<tr>
    <td><a href="#update_notification_configuration"><CopyableCode code="update_notification_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a NotificationConfiguration.</td>
</tr>
<tr>
    <td><a href="#delete_notification_configuration"><CopyableCode code="delete_notification_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a NotificationConfiguration.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the NotificationConfiguration to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-channelArn">
    <td><CopyableCode code="channelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Channel to match.</td>
</tr>
<tr id="parameter-eventRuleSource">
    <td><CopyableCode code="eventRuleSource" /></td>
    <td><code>string</code></td>
    <td>The matched event source. Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, aws.ec2 and aws.cloudwatch. For more information, see Event delivery from Amazon Web Services services in the Amazon EventBridge User Guide.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned in this call. Defaults to 20.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The start token for paginated calls. Retrieved from the response of a previous ListEventRules call. Next token uses Base64 encoding.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The NotificationConfiguration status to match. Values: ACTIVE All EventRules are ACTIVE and any call can be run. PARTIALLY_ACTIVE Some EventRules are ACTIVE and some are INACTIVE. Any call can be run. Any call can be run. INACTIVE All EventRules are INACTIVE and any call can be run. DELETING This NotificationConfiguration is being deleted. Only GET and LIST calls can be run.</td>
</tr>
<tr id="parameter-subtype">
    <td><CopyableCode code="subtype" /></td>
    <td><code>string</code></td>
    <td>The subtype used to filter the notification configurations in the request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_notification_configuration"
    values={[
        { label: 'get_notification_configuration', value: 'get_notification_configuration' },
        { label: 'list_notification_configurations', value: 'list_notification_configurations' }
    ]}
>
<TabItem value="get_notification_configuration">

Returns a specified NotificationConfiguration.

```sql
SELECT
name,
aggregation_duration,
arn,
creation_time,
description,
status,
subtype
FROM aws.notifications.notification_configurations
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_notification_configurations">

Returns a list of abbreviated NotificationConfigurations according to specified filters, in reverse chronological order (newest first).

```sql
SELECT
name,
aggregation_duration,
arn,
creation_time,
description,
status,
subtype
FROM aws.notifications.notification_configurations
WHERE region = '{{ region }}' -- required
AND eventRuleSource = '{{ eventRuleSource }}'
AND channelArn = '{{ channelArn }}'
AND status = '{{ status }}'
AND subtype = '{{ subtype }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notification_configuration"
    values={[
        { label: 'create_notification_configuration', value: 'create_notification_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notification_configuration">

Creates a new NotificationConfiguration.

```sql
INSERT INTO aws.notifications.notification_configurations (
name,
description,
aggregationDuration,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}' /* required */,
'{{ aggregationDuration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
arn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notification_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: aggregationDuration
      value: "{{ aggregationDuration }}"
      valid_values: ['LONG', 'SHORT', 'NONE']
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notification_configuration"
    values={[
        { label: 'update_notification_configuration', value: 'update_notification_configuration' }
    ]}
>
<TabItem value="update_notification_configuration">

Updates a NotificationConfiguration.

```sql
UPDATE aws.notifications.notification_configurations
SET 
name = '{{ name }}',
description = '{{ description }}',
aggregationDuration = '{{ aggregationDuration }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notification_configuration"
    values={[
        { label: 'delete_notification_configuration', value: 'delete_notification_configuration' }
    ]}
>
<TabItem value="delete_notification_configuration">

Deletes a NotificationConfiguration.

```sql
DELETE FROM aws.notifications.notification_configurations
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
