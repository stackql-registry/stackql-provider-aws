--- 
title: network_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - network_profiles
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>network_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.network_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_profile"
    values={[
        { label: 'get_network_profile', value: 'get_network_profile' }
    ]}
>
<TabItem value="get_network_profile">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network profile.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the network profile. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the network profile.</td>
</tr>
<tr>
    <td><CopyableCode code="downlinkBandwidthBits" /></td>
    <td><code>integer (int64)</code></td>
    <td>The data throughput rate in bits per second, as an integer from 0 to 104857600.</td>
</tr>
<tr>
    <td><CopyableCode code="downlinkDelayMs" /></td>
    <td><code>integer (int64)</code></td>
    <td>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</td>
</tr>
<tr>
    <td><CopyableCode code="downlinkJitterMs" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</td>
</tr>
<tr>
    <td><CopyableCode code="downlinkLossPercent" /></td>
    <td><code>integer</code></td>
    <td>Proportion of received packets that fail to arrive from 0 to 100 percent.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of network profile. Valid values are listed here. (CURATED, PRIVATE)</td>
</tr>
<tr>
    <td><CopyableCode code="uplinkBandwidthBits" /></td>
    <td><code>integer (int64)</code></td>
    <td>The data throughput rate in bits per second, as an integer from 0 to 104857600.</td>
</tr>
<tr>
    <td><CopyableCode code="uplinkDelayMs" /></td>
    <td><code>integer (int64)</code></td>
    <td>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</td>
</tr>
<tr>
    <td><CopyableCode code="uplinkJitterMs" /></td>
    <td><code>integer (int64)</code></td>
    <td>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</td>
</tr>
<tr>
    <td><CopyableCode code="uplinkLossPercent" /></td>
    <td><code>integer</code></td>
    <td>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</td>
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
    <td><a href="#get_network_profile"><CopyableCode code="get_network_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a network profile.</td>
</tr>
<tr>
    <td><a href="#create_network_profile"><CopyableCode code="create_network_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a network profile.</td>
</tr>
<tr>
    <td><a href="#update_network_profile"><CopyableCode code="update_network_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates the network profile.</td>
</tr>
<tr>
    <td><a href="#delete_network_profile"><CopyableCode code="delete_network_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a network profile.</td>
</tr>
<tr>
    <td><a href="#list_network_profiles"><CopyableCode code="list_network_profiles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Returns the list of available network profiles.</td>
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
    defaultValue="get_network_profile"
    values={[
        { label: 'get_network_profile', value: 'get_network_profile' }
    ]}
>
<TabItem value="get_network_profile">

Returns information about a network profile.

```sql
SELECT
name,
arn,
description,
downlinkBandwidthBits,
downlinkDelayMs,
downlinkJitterMs,
downlinkLossPercent,
type_,
uplinkBandwidthBits,
uplinkDelayMs,
uplinkJitterMs,
uplinkLossPercent
FROM aws.devicefarm.network_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_profile"
    values={[
        { label: 'create_network_profile', value: 'create_network_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_profile">

Creates a network profile.

```sql
INSERT INTO aws.devicefarm.network_profiles (
projectArn,
name,
description,
type,
uplinkBandwidthBits,
downlinkBandwidthBits,
uplinkDelayMs,
downlinkDelayMs,
uplinkJitterMs,
downlinkJitterMs,
uplinkLossPercent,
downlinkLossPercent,
region
)
SELECT 
'{{ projectArn }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ type }}',
{{ uplinkBandwidthBits }},
{{ downlinkBandwidthBits }},
{{ uplinkDelayMs }},
{{ downlinkDelayMs }},
{{ uplinkJitterMs }},
{{ downlinkJitterMs }},
{{ uplinkLossPercent }},
{{ downlinkLossPercent }},
'{{ region }}'
RETURNING
networkProfile
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_profiles resource.
    - name: projectArn
      value: "{{ projectArn }}"
      description: |
        The Amazon Resource Name (ARN) of the project for which you want to create a network profile.
    - name: name
      value: "{{ name }}"
      description: |
        The name for the new network profile.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the network profile.
    - name: type
      value: "{{ type }}"
      description: |
        The type of network profile to create. Valid values are listed here.
      valid_values: ['CURATED', 'PRIVATE']
    - name: uplinkBandwidthBits
      value: {{ uplinkBandwidthBits }}
      description: |
        The data throughput rate in bits per second, as an integer from 0 to 104857600.
    - name: downlinkBandwidthBits
      value: {{ downlinkBandwidthBits }}
      description: |
        The data throughput rate in bits per second, as an integer from 0 to 104857600.
    - name: uplinkDelayMs
      value: {{ uplinkDelayMs }}
      description: |
        Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
    - name: downlinkDelayMs
      value: {{ downlinkDelayMs }}
      description: |
        Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
    - name: uplinkJitterMs
      value: {{ uplinkJitterMs }}
      description: |
        Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
    - name: downlinkJitterMs
      value: {{ downlinkJitterMs }}
      description: |
        Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
    - name: uplinkLossPercent
      value: {{ uplinkLossPercent }}
      description: |
        Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
    - name: downlinkLossPercent
      value: {{ downlinkLossPercent }}
      description: |
        Proportion of received packets that fail to arrive from 0 to 100 percent.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_profile"
    values={[
        { label: 'update_network_profile', value: 'update_network_profile' }
    ]}
>
<TabItem value="update_network_profile">

Updates the network profile.

```sql
UPDATE aws.devicefarm.network_profiles
SET 
arn = '{{ arn }}',
name = '{{ name }}',
description = '{{ description }}',
type = '{{ type }}',
uplinkBandwidthBits = {{ uplinkBandwidthBits }},
downlinkBandwidthBits = {{ downlinkBandwidthBits }},
uplinkDelayMs = {{ uplinkDelayMs }},
downlinkDelayMs = {{ downlinkDelayMs }},
uplinkJitterMs = {{ uplinkJitterMs }},
downlinkJitterMs = {{ downlinkJitterMs }},
uplinkLossPercent = {{ uplinkLossPercent }},
downlinkLossPercent = {{ downlinkLossPercent }}
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
networkProfile;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_profile"
    values={[
        { label: 'delete_network_profile', value: 'delete_network_profile' }
    ]}
>
<TabItem value="delete_network_profile">

Deletes a network profile.

```sql
DELETE FROM aws.devicefarm.network_profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_network_profiles"
    values={[
        { label: 'list_network_profiles', value: 'list_network_profiles' }
    ]}
>
<TabItem value="list_network_profiles">

Returns the list of available network profiles.

```sql
EXEC aws.devicefarm.network_profiles.list_network_profiles 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"type": "{{ type }}", 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
