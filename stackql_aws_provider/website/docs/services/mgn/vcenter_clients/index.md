--- 
title: vcenter_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - vcenter_clients
  - mgn
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

Creates, updates, deletes, gets or lists a <code>vcenter_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vcenter_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.vcenter_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vcenter_clients"
    values={[
        { label: 'describe_vcenter_clients', value: 'describe_vcenter_clients' }
    ]}
>
<TabItem value="describe_vcenter_clients">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Arn of vCenter client.</td>
</tr>
<tr>
    <td><CopyableCode code="datacenterName" /></td>
    <td><code>string</code></td>
    <td>Datacenter name of vCenter client.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname of vCenter client .</td>
</tr>
<tr>
    <td><CopyableCode code="lastSeenDatetime" /></td>
    <td><code>string</code></td>
    <td>Last seen time of vCenter client. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceServerTags" /></td>
    <td><code>object</code></td>
    <td>Tags for Source Server of vCenter client.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags for vCenter client.</td>
</tr>
<tr>
    <td><CopyableCode code="vcenterClientID" /></td>
    <td><code>string</code></td>
    <td>ID of vCenter client. (pattern: &lt;code&gt;vcc-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenterUUID" /></td>
    <td><code>string</code></td>
    <td>Vcenter UUID of vCenter client.</td>
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
    <td><a href="#describe_vcenter_clients"><CopyableCode code="describe_vcenter_clients" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of the installed vCenter clients.</td>
</tr>
<tr>
    <td><a href="#delete_vcenter_client"><CopyableCode code="delete_vcenter_client" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a given vCenter client by ID.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum results to be returned in DescribeVcenterClients.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next pagination token to be provided for DescribeVcenterClients.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vcenter_clients"
    values={[
        { label: 'describe_vcenter_clients', value: 'describe_vcenter_clients' }
    ]}
>
<TabItem value="describe_vcenter_clients">

Returns a list of the installed vCenter clients.

```sql
SELECT
arn,
datacenterName,
hostname,
lastSeenDatetime,
sourceServerTags,
tags,
vcenterClientID,
vcenterUUID
FROM aws.mgn.vcenter_clients
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vcenter_client"
    values={[
        { label: 'delete_vcenter_client', value: 'delete_vcenter_client' }
    ]}
>
<TabItem value="delete_vcenter_client">

Deletes a given vCenter client by ID.

```sql
DELETE FROM aws.mgn.vcenter_clients
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
