--- 
title: update_signal_maps
hide_title: false
hide_table_of_contents: false
keywords:
  - update_signal_maps
  - medialive
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

Creates, updates, deletes, gets or lists a <code>update_signal_maps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="update_signal_maps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.update_signal_maps" /></td></tr>
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
    <td><a href="#start_update_signal_map"><CopyableCode code="start_update_signal_map" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates an update for the specified signal map. Will discover a new signal map if a changed discoveryEntryPointArn is provided.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>A signal map's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="start_update_signal_map"
    values={[
        { label: 'start_update_signal_map', value: 'start_update_signal_map' }
    ]}
>
<TabItem value="start_update_signal_map">

Initiates an update for the specified signal map. Will discover a new signal map if a changed discoveryEntryPointArn is provided.

```sql
EXEC aws.medialive.update_signal_maps.start_update_signal_map 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CloudWatchAlarmTemplateGroupIdentifiers": "{{ CloudWatchAlarmTemplateGroupIdentifiers }}", 
"Description": "{{ Description }}", 
"DiscoveryEntryPointArn": "{{ DiscoveryEntryPointArn }}", 
"EventBridgeRuleTemplateGroupIdentifiers": "{{ EventBridgeRuleTemplateGroupIdentifiers }}", 
"ForceRediscovery": {{ ForceRediscovery }}, 
"Name": "{{ Name }}"
}'
;
```
</TabItem>
</Tabs>
