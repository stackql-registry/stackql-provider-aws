--- 
title: app_instance_retention_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - app_instance_retention_settings
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

Creates, updates, deletes, gets or lists an <code>app_instance_retention_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_instance_retention_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_identity.app_instance_retention_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app_instance_retention_settings"
    values={[
        { label: 'get_app_instance_retention_settings', value: 'get_app_instance_retention_settings' }
    ]}
>
<TabItem value="get_app_instance_retention_settings">

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
    <td><CopyableCode code="app_instance_retention_settings" /></td>
    <td><code>object</code></td>
    <td>The retention settings for the AppInstance.</td>
</tr>
<tr>
    <td><CopyableCode code="initiate_deletion_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp representing the time at which the specified items are retained, in Epoch Seconds.</td>
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
    <td><a href="#get_app_instance_retention_settings"><CopyableCode code="get_app_instance_retention_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the retention settings for an AppInstance.</td>
</tr>
<tr>
    <td><a href="#put_app_instance_retention_settings"><CopyableCode code="put_app_instance_retention_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppInstanceRetentionSettings"><code>AppInstanceRetentionSettings</code></a></td>
    <td></td>
    <td>Sets the amount of time in days that a given AppInstance retains data.</td>
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
<tr id="parameter-app_instance_arn">
    <td><CopyableCode code="app_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_app_instance_retention_settings"
    values={[
        { label: 'get_app_instance_retention_settings', value: 'get_app_instance_retention_settings' }
    ]}
>
<TabItem value="get_app_instance_retention_settings">

Gets the retention settings for an AppInstance.

```sql
SELECT
app_instance_retention_settings,
initiate_deletion_timestamp
FROM aws.chime_sdk_identity.app_instance_retention_settings
WHERE app_instance_arn = '{{ app_instance_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_app_instance_retention_settings"
    values={[
        { label: 'put_app_instance_retention_settings', value: 'put_app_instance_retention_settings' }
    ]}
>
<TabItem value="put_app_instance_retention_settings">

Sets the amount of time in days that a given AppInstance retains data.

```sql
REPLACE aws.chime_sdk_identity.app_instance_retention_settings
SET 
AppInstanceRetentionSettings = '{{ AppInstanceRetentionSettings }}'
WHERE 
app_instance_arn = '{{ app_instance_arn }}' --required
AND region = '{{ region }}' --required
AND AppInstanceRetentionSettings = '{{ AppInstanceRetentionSettings }}' --required
RETURNING
app_instance_retention_settings,
initiate_deletion_timestamp;
```
</TabItem>
</Tabs>
