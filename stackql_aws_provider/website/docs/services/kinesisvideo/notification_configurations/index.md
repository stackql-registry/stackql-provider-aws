--- 
title: notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_configurations
  - kinesisvideo
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.notification_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notification_configuration"
    values={[
        { label: 'describe_notification_configuration', value: 'describe_notification_configuration' }
    ]}
>
<TabItem value="describe_notification_configuration">

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
    <td><CopyableCode code="destination_config" /></td>
    <td><code>object</code></td>
    <td>The destination information required to deliver a notification to a customer.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates if a notification configuration is enabled or disabled. (ENABLED, DISABLED)</td>
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
    <td><a href="#describe_notification_configuration"><CopyableCode code="describe_notification_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the NotificationConfiguration for a given Kinesis video stream.</td>
</tr>
<tr>
    <td><a href="#update_notification_configuration"><CopyableCode code="update_notification_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the notification information for a stream.</td>
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
    defaultValue="describe_notification_configuration"
    values={[
        { label: 'describe_notification_configuration', value: 'describe_notification_configuration' }
    ]}
>
<TabItem value="describe_notification_configuration">

Gets the NotificationConfiguration for a given Kinesis video stream.

```sql
SELECT
destination_config,
status
FROM aws.kinesisvideo.notification_configurations
WHERE region = '{{ region }}' -- required
;
```
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

Updates the notification information for a stream.

```sql
UPDATE aws.kinesisvideo.notification_configurations
SET 
StreamName = '{{ StreamName }}',
StreamARN = '{{ StreamARN }}',
NotificationConfiguration = '{{ NotificationConfiguration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
