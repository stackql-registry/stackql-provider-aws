--- 
title: zonal_autoshift_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - zonal_autoshift_configurations
  - arc_zonal_shift
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

Creates, updates, deletes, gets or lists a <code>zonal_autoshift_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zonal_autoshift_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_zonal_shift.zonal_autoshift_configurations" /></td></tr>
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
    <td><a href="#update_zonal_autoshift_configuration"><CopyableCode code="update_zonal_autoshift_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-zonalAutoshiftStatus"><code>zonalAutoshiftStatus</code></a></td>
    <td></td>
    <td>The zonal autoshift configuration for a resource includes the practice run configuration and the status for running autoshifts, zonal autoshift status. When a resource has a practice run configuration, ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone. You can update the zonal autoshift status to enable or disable zonal autoshift. When zonal autoshift is ENABLED, you authorize Amazon Web Services to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery. Traffic is also shifted away for the required weekly practice runs.</td>
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
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the resource that you want to update the zonal autoshift configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_zonal_autoshift_configuration"
    values={[
        { label: 'update_zonal_autoshift_configuration', value: 'update_zonal_autoshift_configuration' }
    ]}
>
<TabItem value="update_zonal_autoshift_configuration">

The zonal autoshift configuration for a resource includes the practice run configuration and the status for running autoshifts, zonal autoshift status. When a resource has a practice run configuration, ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone. You can update the zonal autoshift status to enable or disable zonal autoshift. When zonal autoshift is ENABLED, you authorize Amazon Web Services to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery. Traffic is also shifted away for the required weekly practice runs.

```sql
UPDATE aws.arc_zonal_shift.zonal_autoshift_configurations
SET 
zonalAutoshiftStatus = '{{ zonalAutoshiftStatus }}'
WHERE 
resource_identifier = '{{ resource_identifier }}' --required
AND region = '{{ region }}' --required
AND zonalAutoshiftStatus = '{{ zonalAutoshiftStatus }}' --required
RETURNING
resource_identifier,
zonal_autoshift_status;
```
</TabItem>
</Tabs>
