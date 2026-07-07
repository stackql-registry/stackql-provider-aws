--- 
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
  - networkmonitor
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

Creates, updates, deletes, gets or lists a <code>monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmonitor.monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

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
    <td><CopyableCode code="aggregationPeriod" /></td>
    <td><code>integer (int64)</code></td>
    <td>The aggregation period for the specified monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date when the monitor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date when the monitor was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="monitorArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the selected monitor. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitorName" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="probes" /></td>
    <td><code>array</code></td>
    <td>The details about each probe associated with that monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Lists the status of the state of each monitor. (PENDING, ACTIVE, INACTIVE, ERROR, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of key-value pairs assigned to the monitor.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitors">

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
    <td><CopyableCode code="aggregationPeriod" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time, in seconds, that metrics are collected and sent to Amazon CloudWatch. Valid values are either 30 or 60.</td>
</tr>
<tr>
    <td><CopyableCode code="monitorArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the monitor. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitorName" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the monitor. (PENDING, ACTIVE, INACTIVE, ERROR, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of key-value pairs assigned to the monitor.</td>
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
    <td><a href="#get_monitor"><CopyableCode code="get_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a specific monitor. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names.</td>
</tr>
<tr>
    <td><a href="#list_monitors"><CopyableCode code="list_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Returns a list of all of your monitors.</td>
</tr>
<tr>
    <td><a href="#create_monitor"><CopyableCode code="create_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-monitorName"><code>monitorName</code></a></td>
    <td></td>
    <td>Creates a monitor between a source subnet and destination IP address. Within a monitor you'll create one or more probes that monitor network traffic between your source Amazon Web Services VPC subnets and your destination IP addresses. Each probe then aggregates and sends metrics to Amazon CloudWatch. You can also create a monitor with probes using this command. For each probe, you define the following: source—The subnet IDs where the probes will be created. destination— The target destination IP address for the probe. destinationPort—Required only if the protocol is TCP. protocol—The communication protocol between the source and destination. This will be either TCP or ICMP. packetSize—The size of the packets. This must be a number between 56 and 8500. (Optional) tags —Key-value pairs created and assigned to the probe.</td>
</tr>
<tr>
    <td><a href="#update_monitor"><CopyableCode code="update_monitor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-aggregationPeriod"><code>aggregationPeriod</code></a></td>
    <td></td>
    <td>Updates the aggregationPeriod for a monitor. Monitors support an aggregationPeriod of either 30 or 60 seconds. This action requires the monitorName and probeId parameter. Run ListMonitors to get a list of monitor names.</td>
</tr>
<tr>
    <td><a href="#delete_monitor"><CopyableCode code="delete_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified monitor. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names.</td>
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
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If MaxResults is given a value larger than 100, only 100 results are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The list of all monitors and their states.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

Returns details about a specific monitor. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names.

```sql
SELECT
aggregationPeriod,
createdAt,
modifiedAt,
monitorArn,
monitorName,
probes,
state,
tags
FROM aws.networkmonitor.monitors
WHERE monitor_name = '{{ monitor_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_monitors">

Returns a list of all of your monitors.

```sql
SELECT
aggregationPeriod,
monitorArn,
monitorName,
state,
tags
FROM aws.networkmonitor.monitors
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND state = '{{ state }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor"
    values={[
        { label: 'create_monitor', value: 'create_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor">

Creates a monitor between a source subnet and destination IP address. Within a monitor you'll create one or more probes that monitor network traffic between your source Amazon Web Services VPC subnets and your destination IP addresses. Each probe then aggregates and sends metrics to Amazon CloudWatch. You can also create a monitor with probes using this command. For each probe, you define the following: source—The subnet IDs where the probes will be created. destination— The target destination IP address for the probe. destinationPort—Required only if the protocol is TCP. protocol—The communication protocol between the source and destination. This will be either TCP or ICMP. packetSize—The size of the packets. This must be a number between 56 and 8500. (Optional) tags —Key-value pairs created and assigned to the probe.

```sql
INSERT INTO aws.networkmonitor.monitors (
monitorName,
probes,
aggregationPeriod,
clientToken,
tags,
region
)
SELECT 
'{{ monitorName }}' /* required */,
'{{ probes }}',
{{ aggregationPeriod }},
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
aggregationPeriod,
monitorArn,
monitorName,
state,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the monitors resource.
    - name: monitorName
      value: "{{ monitorName }}"
    - name: probes
      value:
        - sourceArn: "{{ sourceArn }}"
          destination: "{{ destination }}"
          destinationPort: {{ destinationPort }}
          protocol: "{{ protocol }}"
          packetSize: {{ packetSize }}
          probeTags: "{{ probeTags }}"
    - name: aggregationPeriod
      value: {{ aggregationPeriod }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitor"
    values={[
        { label: 'update_monitor', value: 'update_monitor' }
    ]}
>
<TabItem value="update_monitor">

Updates the aggregationPeriod for a monitor. Monitors support an aggregationPeriod of either 30 or 60 seconds. This action requires the monitorName and probeId parameter. Run ListMonitors to get a list of monitor names.

```sql
UPDATE aws.networkmonitor.monitors
SET 
aggregationPeriod = {{ aggregationPeriod }}
WHERE 
monitor_name = '{{ monitor_name }}' --required
AND region = '{{ region }}' --required
AND aggregationPeriod = '{{ aggregationPeriod }}' --required
RETURNING
aggregationPeriod,
monitorArn,
monitorName,
state,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor"
    values={[
        { label: 'delete_monitor', value: 'delete_monitor' }
    ]}
>
<TabItem value="delete_monitor">

Deletes a specified monitor. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names.

```sql
DELETE FROM aws.networkmonitor.monitors
WHERE monitor_name = '{{ monitor_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
