--- 
title: failback_replication_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - failback_replication_configurations
  - drs
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

Creates, updates, deletes, gets or lists a <code>failback_replication_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="failback_replication_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.failback_replication_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_failback_replication_configuration"
    values={[
        { label: 'get_failback_replication_configuration', value: 'get_failback_replication_configuration' }
    ]}
>
<TabItem value="get_failback_replication_configuration">

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
    <td>The name of the Failback Replication Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidthThrottling" /></td>
    <td><code>integer (int64)</code></td>
    <td>Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.</td>
</tr>
<tr>
    <td><CopyableCode code="internetProtocol" /></td>
    <td><code>string</code></td>
    <td>Which version of the Internet Protocol to use for replication of data. (IPv4 or IPv6) (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryInstanceID" /></td>
    <td><code>string</code></td>
    <td>The ID of the Recovery Instance. (pattern: &lt;code&gt;i-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usePrivateIP" /></td>
    <td><code>boolean</code></td>
    <td>Whether to use Private IP for the failback replication of the Recovery Instance.</td>
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
    <td><a href="#get_failback_replication_configuration"><CopyableCode code="get_failback_replication_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.</td>
</tr>
<tr>
    <td><a href="#update_failback_replication_configuration"><CopyableCode code="update_failback_replication_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryInstanceID"><code>recoveryInstanceID</code></a></td>
    <td></td>
    <td>Allows you to update the failback replication configuration of a Recovery Instance by ID.</td>
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
    defaultValue="get_failback_replication_configuration"
    values={[
        { label: 'get_failback_replication_configuration', value: 'get_failback_replication_configuration' }
    ]}
>
<TabItem value="get_failback_replication_configuration">

Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.

```sql
SELECT
name,
bandwidthThrottling,
internetProtocol,
recoveryInstanceID,
usePrivateIP
FROM aws.drs.failback_replication_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_failback_replication_configuration"
    values={[
        { label: 'update_failback_replication_configuration', value: 'update_failback_replication_configuration' }
    ]}
>
<TabItem value="update_failback_replication_configuration">

Allows you to update the failback replication configuration of a Recovery Instance by ID.

```sql
UPDATE aws.drs.failback_replication_configurations
SET 
recoveryInstanceID = '{{ recoveryInstanceID }}',
name = '{{ name }}',
bandwidthThrottling = {{ bandwidthThrottling }},
usePrivateIP = {{ usePrivateIP }},
internetProtocol = '{{ internetProtocol }}'
WHERE 
region = '{{ region }}' --required
AND recoveryInstanceID = '{{ recoveryInstanceID }}' --required;
```
</TabItem>
</Tabs>
