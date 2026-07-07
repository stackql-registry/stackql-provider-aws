--- 
title: instance_communication_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_communication_limits
  - connectcampaignsv2
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

Creates, updates, deletes, gets or lists an <code>instance_communication_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_communication_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaignsv2.instance_communication_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_communication_limits"
    values={[
        { label: 'get_instance_communication_limits', value: 'get_instance_communication_limits' }
    ]}
>
<TabItem value="get_instance_communication_limits">

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
    <td><CopyableCode code="allChannelSubtypes" /></td>
    <td><code>object</code></td>
    <td>Communication limits</td>
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
    <td><a href="#get_instance_communication_limits"><CopyableCode code="get_instance_communication_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the instance communication limits.</td>
</tr>
<tr>
    <td><a href="#put_instance_communication_limits"><CopyableCode code="put_instance_communication_limits" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-communicationLimitsConfig"><code>communicationLimitsConfig</code></a></td>
    <td></td>
    <td>Put the instance communication limits. This API is idempotent.</td>
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
<tr id="parameter-connect_instance_id">
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td></td>
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
    defaultValue="get_instance_communication_limits"
    values={[
        { label: 'get_instance_communication_limits', value: 'get_instance_communication_limits' }
    ]}
>
<TabItem value="get_instance_communication_limits">

Get the instance communication limits.

```sql
SELECT
allChannelSubtypes
FROM aws.connectcampaignsv2.instance_communication_limits
WHERE connect_instance_id = '{{ connect_instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_instance_communication_limits"
    values={[
        { label: 'put_instance_communication_limits', value: 'put_instance_communication_limits' }
    ]}
>
<TabItem value="put_instance_communication_limits">

Put the instance communication limits. This API is idempotent.

```sql
REPLACE aws.connectcampaignsv2.instance_communication_limits
SET 
communicationLimitsConfig = '{{ communicationLimitsConfig }}'
WHERE 
connect_instance_id = '{{ connect_instance_id }}' --required
AND region = '{{ region }}' --required
AND communicationLimitsConfig = '{{ communicationLimitsConfig }}' --required;
```
</TabItem>
</Tabs>
