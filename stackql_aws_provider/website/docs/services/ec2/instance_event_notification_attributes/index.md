--- 
title: instance_event_notification_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_event_notification_attributes
  - ec2
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

Creates, updates, deletes, gets or lists an <code>instance_event_notification_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_event_notification_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_event_notification_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_event_notification_attributes"
    values={[
        { label: 'describe_instance_event_notification_attributes', value: 'describe_instance_event_notification_attributes' }
    ]}
>
<TabItem value="describe_instance_event_notification_attributes">

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
    <td><CopyableCode code="IncludeAllTagsOfInstance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications. true indicates that all tag keys in the current Region are registered.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceTagKeys" /></td>
    <td><code>string</code></td>
    <td>The registered tag keys.</td>
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
    <td><a href="#describe_instance_event_notification_attributes"><CopyableCode code="describe_instance_event_notification_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the tag keys that are registered to appear in scheduled event notifications for resources in the current Region.</td>
</tr>
<tr>
    <td><a href="#register_instance_event_notification_attributes"><CopyableCode code="register_instance_event_notification_attributes" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceTagAttribute"><code>InstanceTagAttribute</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Registers a set of tag keys to include in scheduled event notifications for your resources. To remove tags, use DeregisterInstanceEventNotificationAttributes.</td>
</tr>
<tr>
    <td><a href="#deregister_instance_event_notification_attributes"><CopyableCode code="deregister_instance_event_notification_attributes" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-InstanceTagAttribute"><code>InstanceTagAttribute</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deregisters tag keys to prevent tags that have the specified tag keys from being included in scheduled event notifications for resources in the Region.</td>
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
<tr id="parameter-InstanceTagAttribute">
    <td><CopyableCode code="InstanceTagAttribute" /></td>
    <td><code>object</code></td>
    <td>Information about the tag keys to deregister.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_event_notification_attributes"
    values={[
        { label: 'describe_instance_event_notification_attributes', value: 'describe_instance_event_notification_attributes' }
    ]}
>
<TabItem value="describe_instance_event_notification_attributes">

Describes the tag keys that are registered to appear in scheduled event notifications for resources in the current Region.

```sql
SELECT
IncludeAllTagsOfInstance,
InstanceTagKeys
FROM aws.ec2.instance_event_notification_attributes
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_instance_event_notification_attributes"
    values={[
        { label: 'register_instance_event_notification_attributes', value: 'register_instance_event_notification_attributes' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_instance_event_notification_attributes">

Registers a set of tag keys to include in scheduled event notifications for your resources. To remove tags, use DeregisterInstanceEventNotificationAttributes.

```sql
INSERT INTO aws.ec2.instance_event_notification_attributes (
InstanceTagAttribute,
region,
DryRun
)
SELECT 
'{{ InstanceTagAttribute }}',
'{{ region }}',
'{{ DryRun }}'
RETURNING
IncludeAllTagsOfInstance,
InstanceTagKeys
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_event_notification_attributes
  props:
    - name: InstanceTagAttribute
      value: "{{ InstanceTagAttribute }}"
      description: Required parameter for the instance_event_notification_attributes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_event_notification_attributes resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_instance_event_notification_attributes"
    values={[
        { label: 'deregister_instance_event_notification_attributes', value: 'deregister_instance_event_notification_attributes' }
    ]}
>
<TabItem value="deregister_instance_event_notification_attributes">

Deregisters tag keys to prevent tags that have the specified tag keys from being included in scheduled event notifications for resources in the Region.

```sql
DELETE FROM aws.ec2.instance_event_notification_attributes
WHERE InstanceTagAttribute = '{{ InstanceTagAttribute }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
