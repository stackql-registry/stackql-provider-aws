--- 
title: connectivity_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - connectivity_infos
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>connectivity_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectivity_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.connectivity_infos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connectivity_info"
    values={[
        { label: 'get_connectivity_info', value: 'get_connectivity_info' }
    ]}
>
<TabItem value="get_connectivity_info">

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
    <td><CopyableCode code="ConnectivityInfo" /></td>
    <td><code>array</code></td>
    <td>Connectivity info list.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A message about the connectivity info request.</td>
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
    <td><a href="#get_connectivity_info"><CopyableCode code="get_connectivity_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the connectivity information for a core.</td>
</tr>
<tr>
    <td><a href="#update_connectivity_info"><CopyableCode code="update_connectivity_info" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The thing name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connectivity_info"
    values={[
        { label: 'get_connectivity_info', value: 'get_connectivity_info' }
    ]}
>
<TabItem value="get_connectivity_info">

Retrieves the connectivity information for a core.

```sql
SELECT
ConnectivityInfo,
Message
FROM aws.greengrass.connectivity_infos
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connectivity_info"
    values={[
        { label: 'update_connectivity_info', value: 'update_connectivity_info' }
    ]}
>
<TabItem value="update_connectivity_info">

Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.

```sql
UPDATE aws.greengrass.connectivity_infos
SET 
ConnectivityInfo = '{{ ConnectivityInfo }}'
WHERE 
thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required
RETURNING
Message,
Version;
```
</TabItem>
</Tabs>
