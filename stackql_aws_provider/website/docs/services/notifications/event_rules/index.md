--- 
title: event_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - event_rules
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

Creates, updates, deletes, gets or lists an <code>event_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.event_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_event_rules"
    values={[
        { label: 'list_event_rules', value: 'list_event_rules' },
        { label: 'get_event_rule', value: 'get_event_rule' }
    ]}
>
<TabItem value="list_event_rules">

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
    <td>The Amazon Resource Name (ARN) of the EventRule. CloudFormation stack generates this ARN and then uses this ARN to associate with the NotificationConfiguration. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;/rule/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the EventRule.</td>
</tr>
<tr>
    <td><CopyableCode code="event_pattern" /></td>
    <td><code>string</code></td>
    <td>An additional event pattern used to further filter the events this EventRule receives. For more information, see Amazon EventBridge event patterns in the Amazon EventBridge User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The event type this rule should match with the EventBridge events. It must match with atleast one of the valid EventBridge event types. For example, Amazon EC2 Instance State change Notification and Amazon CloudWatch State Change. For more information, see Event delivery from Amazon Web Services services in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9 \-\(\)&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_rules" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon EventBridge Managed Rule ARNs associated with this EventRule. These are created by User Notifications within your account so your EventRules can function.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the NotificationConfiguration associated with this EventRule. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Web Services Regions that send events to this EventRule.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The event source this rule should match with the EventBridge event sources. It must match with atleast one of the valid EventBridge event sources. Only Amazon Web Services service sourced events are supported. For example, aws.ec2 and aws.cloudwatch. For more information, see Event delivery from Amazon Web Services services in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;aws.(&#91;a-z0-9\-&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_summary_by_region" /></td>
    <td><code>object</code></td>
    <td>A list of an EventRule's status by Region. Regions are mapped to EventRuleStatusSummary.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_event_rule">

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
    <td>The ARN of the resource. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;/rule/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the EventRule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="event_pattern" /></td>
    <td><code>string</code></td>
    <td>An additional event pattern used to further filter the events this EventRule receives. For more information, see Amazon EventBridge event patterns in the Amazon EventBridge User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The event type to match. Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and Amazon CloudWatch Alarm State Change. For more information, see Event delivery from Amazon Web Services services in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9 \-\(\)&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_rules" /></td>
    <td><code>array</code></td>
    <td>A list of managed rules from EventBridge that are associated with this EventRule. These are created by User Notifications within your account so this EventRule functions.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a NotificationConfiguration. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Web Services Regions that send events to this EventRule.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The matched event source. Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, aws.ec2 and aws.cloudwatch. For more information, see Event delivery from Amazon Web Services services in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;aws.(&#91;a-z0-9\-&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_summary_by_region" /></td>
    <td><code>object</code></td>
    <td>A list of an EventRule's status by Region. Regions are mapped to EventRuleStatusSummary.</td>
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
    <td><a href="#list_event_rules"><CopyableCode code="list_event_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of EventRules according to specified filters, in reverse chronological order (newest first).</td>
</tr>
<tr>
    <td><a href="#get_event_rule"><CopyableCode code="get_event_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a specified EventRule.</td>
</tr>
<tr>
    <td><a href="#create_event_rule"><CopyableCode code="create_event_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-eventType"><code>eventType</code></a>, <a href="#parameter-regions"><code>regions</code></a></td>
    <td></td>
    <td>Creates an EventRule that is associated with a specified NotificationConfiguration.</td>
</tr>
<tr>
    <td><a href="#update_event_rule"><CopyableCode code="update_event_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing EventRule.</td>
</tr>
<tr>
    <td><a href="#delete_event_rule"><CopyableCode code="delete_event_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an EventRule.</td>
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
    <td>The Amazon Resource Name (ARN) of the EventRule to delete.</td>
</tr>
<tr id="parameter-notificationConfigurationArn">
    <td><CopyableCode code="notificationConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the NotificationConfiguration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned in this call. The default value is 20.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The start token for paginated calls. Retrieved from the response of a previous ListEventRules call. Next token uses Base64 encoding.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_event_rules"
    values={[
        { label: 'list_event_rules', value: 'list_event_rules' },
        { label: 'get_event_rule', value: 'get_event_rule' }
    ]}
>
<TabItem value="list_event_rules">

Returns a list of EventRules according to specified filters, in reverse chronological order (newest first).

```sql
SELECT
arn,
creation_time,
event_pattern,
event_type,
managed_rules,
notification_configuration_arn,
regions,
source,
status_summary_by_region
FROM aws.notifications.event_rules
WHERE notificationConfigurationArn = '{{ notificationConfigurationArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_event_rule">

Returns a specified EventRule.

```sql
SELECT
arn,
creation_time,
event_pattern,
event_type,
managed_rules,
notification_configuration_arn,
regions,
source,
status_summary_by_region
FROM aws.notifications.event_rules
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_rule"
    values={[
        { label: 'create_event_rule', value: 'create_event_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_rule">

Creates an EventRule that is associated with a specified NotificationConfiguration.

```sql
INSERT INTO aws.notifications.event_rules (
notificationConfigurationArn,
source,
eventType,
eventPattern,
regions,
region
)
SELECT 
'{{ notificationConfigurationArn }}' /* required */,
'{{ source }}' /* required */,
'{{ eventType }}' /* required */,
'{{ eventPattern }}',
'{{ regions }}' /* required */,
'{{ region }}'
RETURNING
arn,
notification_configuration_arn,
status_summary_by_region
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_rules resource.
    - name: notificationConfigurationArn
      value: "{{ notificationConfigurationArn }}"
    - name: source
      value: "{{ source }}"
    - name: eventType
      value: "{{ eventType }}"
    - name: eventPattern
      value: "{{ eventPattern }}"
    - name: regions
      value:
        - "{{ regions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_rule"
    values={[
        { label: 'update_event_rule', value: 'update_event_rule' }
    ]}
>
<TabItem value="update_event_rule">

Updates an existing EventRule.

```sql
UPDATE aws.notifications.event_rules
SET 
eventPattern = '{{ eventPattern }}',
regions = '{{ regions }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
notification_configuration_arn,
status_summary_by_region;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_rule"
    values={[
        { label: 'delete_event_rule', value: 'delete_event_rule' }
    ]}
>
<TabItem value="delete_event_rule">

Deletes an EventRule.

```sql
DELETE FROM aws.notifications.event_rules
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
