--- 
title: network_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - network_settings
  - wickr
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

Creates, updates, deletes, gets or lists a <code>network_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.network_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_settings"
    values={[
        { label: 'get_network_settings', value: 'get_network_settings' }
    ]}
>
<TabItem value="get_network_settings">

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
    <td><CopyableCode code="settings" /></td>
    <td><code>array</code></td>
    <td>A list of network settings, where each setting includes a name, value, and type.</td>
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
    <td><a href="#get_network_settings"><CopyableCode code="get_network_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all network-level settings for a Wickr network, including client metrics, data retention, and other configuration options.</td>
</tr>
<tr>
    <td><a href="#update_network_settings"><CopyableCode code="update_network_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-settings"><code>settings</code></a></td>
    <td></td>
    <td>Updates network-level settings for a Wickr network. You can modify settings such as client metrics, data retention, and other network-wide options.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network whose settings will be updated.</td>
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
    defaultValue="get_network_settings"
    values={[
        { label: 'get_network_settings', value: 'get_network_settings' }
    ]}
>
<TabItem value="get_network_settings">

Retrieves all network-level settings for a Wickr network, including client metrics, data retention, and other configuration options.

```sql
SELECT
settings
FROM aws.wickr.network_settings
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_settings"
    values={[
        { label: 'update_network_settings', value: 'update_network_settings' }
    ]}
>
<TabItem value="update_network_settings">

Updates network-level settings for a Wickr network. You can modify settings such as client metrics, data retention, and other network-wide options.

```sql
UPDATE aws.wickr.network_settings
SET 
settings = '{{ settings }}'
WHERE 
network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
AND settings = '{{ settings }}' --required
RETURNING
settings;
```
</TabItem>
</Tabs>
