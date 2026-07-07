--- 
title: auto_managements
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_managements
  - service_quotas
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

Creates, updates, deletes, gets or lists an <code>auto_managements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_managements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.auto_managements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_auto_management"><CopyableCode code="update_auto_management" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates your Service Quotas Automatic Management configuration, including notification preferences and excluded quotas. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update_auto_management"
    values={[
        { label: 'update_auto_management', value: 'update_auto_management' }
    ]}
>
<TabItem value="update_auto_management">

Updates your Service Quotas Automatic Management configuration, including notification preferences and excluded quotas. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.

```sql
UPDATE aws.service_quotas.auto_managements
SET 
OptInType = '{{ OptInType }}',
NotificationArn = '{{ NotificationArn }}',
ExclusionList = '{{ ExclusionList }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
