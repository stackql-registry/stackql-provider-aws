--- 
title: notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_rules
  - codestar_notifications
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

Creates, updates, deletes, gets or lists a <code>notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codestar_notifications.notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notification_rule"
    values={[
        { label: 'describe_notification_rule', value: 'describe_notification_rule' }
    ]}
>
<TabItem value="describe_notification_rule">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notification rule. (pattern: &lt;code&gt;^arn:aws&#91;^:\s&#93;*:codestar-notifications:&#91;^:\s&#93;+:\d&#123;12&#125;:notificationrule\/(.*\S)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The name or email alias of the person who created the notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the notification rule was created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="DetailType" /></td>
    <td><code>string</code></td>
    <td>The level of detail included in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by CodeStar Notifications and/or the service for the resource for which the notification is created. (BASIC, FULL)</td>
</tr>
<tr>
    <td><CopyableCode code="EventTypes" /></td>
    <td><code>array</code></td>
    <td>A list of the event types associated with the notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the notification rule was most recently updated, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the notification rule. (pattern: &lt;code&gt;&#91;A-Za-z0-9\-_ &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Resource" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource associated with the notification rule. (pattern: &lt;code&gt;^arn:aws&#91;^:\s&#93;*:&#91;^:\s&#93;*:&#91;^:\s&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;^\s&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the notification rule. Valid statuses are on (sending notifications) or off (not sending notifications). (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Targets" /></td>
    <td><code>array</code></td>
    <td>A list of the Amazon Q Developer in chat applications topics and Amazon Q Developer in chat applications clients associated with the notification rule.</td>
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
    <td><a href="#describe_notification_rule"><CopyableCode code="describe_notification_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specified notification rule.</td>
</tr>
<tr>
    <td><a href="#create_notification_rule"><CopyableCode code="create_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventTypeIds"><code>EventTypeIds</code></a>, <a href="#parameter-DetailType"><code>DetailType</code></a></td>
    <td></td>
    <td>Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients configured for Slack) where you want to receive them.</td>
</tr>
<tr>
    <td><a href="#update_notification_rule"><CopyableCode code="update_notification_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications. To add or remove tags for a notification rule, you must use TagResource and UntagResource.</td>
</tr>
<tr>
    <td><a href="#delete_notification_rule"><CopyableCode code="delete_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a notification rule for a resource.</td>
</tr>
<tr>
    <td><a href="#list_notification_rules"><CopyableCode code="list_notification_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the notification rules for an Amazon Web Services account.</td>
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
    defaultValue="describe_notification_rule"
    values={[
        { label: 'describe_notification_rule', value: 'describe_notification_rule' }
    ]}
>
<TabItem value="describe_notification_rule">

Returns information about a specified notification rule.

```sql
SELECT
Arn,
CreatedBy,
CreatedTimestamp,
DetailType,
EventTypes,
LastModifiedTimestamp,
Name,
Resource,
Status,
Tags,
Targets
FROM aws.codestar_notifications.notification_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notification_rule"
    values={[
        { label: 'create_notification_rule', value: 'create_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notification_rule">

Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients configured for Slack) where you want to receive them.

```sql
INSERT INTO aws.codestar_notifications.notification_rules (
Name,
EventTypeIds,
Resource,
Targets,
DetailType,
ClientRequestToken,
Tags,
Status,
region
)
SELECT 
'{{ Name }}',
'{{ EventTypeIds }}' /* required */,
'{{ Resource }}',
'{{ Targets }}',
'{{ DetailType }}' /* required */,
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ Status }}',
'{{ region }}'
RETURNING
Arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notification_rules resource.
    - name: Name
      value: "{{ Name }}"
    - name: EventTypeIds
      value:
        - "{{ EventTypeIds }}"
    - name: Resource
      value: "{{ Resource }}"
    - name: Targets
      value:
        - TargetType: "{{ TargetType }}"
          TargetAddress: "{{ TargetAddress }}"
    - name: DetailType
      value: "{{ DetailType }}"
      valid_values: ['BASIC', 'FULL']
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Status
      value: "{{ Status }}"
      valid_values: ['ENABLED', 'DISABLED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notification_rule"
    values={[
        { label: 'update_notification_rule', value: 'update_notification_rule' }
    ]}
>
<TabItem value="update_notification_rule">

Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications. To add or remove tags for a notification rule, you must use TagResource and UntagResource.

```sql
UPDATE aws.codestar_notifications.notification_rules
SET 
Arn = '{{ Arn }}',
Name = '{{ Name }}',
Status = '{{ Status }}',
EventTypeIds = '{{ EventTypeIds }}',
Targets = '{{ Targets }}',
DetailType = '{{ DetailType }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notification_rule"
    values={[
        { label: 'delete_notification_rule', value: 'delete_notification_rule' }
    ]}
>
<TabItem value="delete_notification_rule">

Deletes a notification rule for a resource.

```sql
DELETE FROM aws.codestar_notifications.notification_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_notification_rules"
    values={[
        { label: 'list_notification_rules', value: 'list_notification_rules' }
    ]}
>
<TabItem value="list_notification_rules">

Returns a list of the notification rules for an Amazon Web Services account.

```sql
EXEC aws.codestar_notifications.notification_rules.list_notification_rules 
@region='{{ region }}' --required 
@@json=
'{
"Filters": "{{ Filters }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
