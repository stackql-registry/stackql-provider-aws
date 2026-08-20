--- 
title: service_topology_edges
hide_title: false
hide_table_of_contents: false
keywords:
  - service_topology_edges
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>service_topology_edges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_topology_edges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.service_topology_edges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_topology_edges"
    values={[
        { label: 'list_service_topology_edges', value: 'list_service_topology_edges' }
    ]}
>
<TabItem value="list_service_topology_edges">

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
    <td><CopyableCode code="destination_account" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the destination resource. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region of the destination resource. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the destination resource.</td>
</tr>
<tr>
    <td><CopyableCode code="properties_" /></td>
    <td><code>array</code></td>
    <td>The properties of the topology edge.</td>
</tr>
<tr>
    <td><CopyableCode code="source_account" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the source resource. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region of the source resource. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source resource.</td>
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
    <td><a href="#list_service_topology_edges"><CopyableCode code="list_service_topology_edges" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists topology edges for a service.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_service_topology_edges"
    values={[
        { label: 'list_service_topology_edges', value: 'list_service_topology_edges' }
    ]}
>
<TabItem value="list_service_topology_edges">

Lists topology edges for a service.

```sql
SELECT
destination_account,
destination_region,
destination_resource_identifier,
properties_,
source_account,
source_region,
source_resource_identifier
FROM aws.resiliencehubv2.service_topology_edges
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
