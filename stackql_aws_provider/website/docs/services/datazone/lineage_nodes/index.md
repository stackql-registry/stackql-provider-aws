--- 
title: lineage_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - lineage_nodes
  - datazone
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

Creates, updates, deletes, gets or lists a <code>lineage_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lineage_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.lineage_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lineage_node"
    values={[
        { label: 'get_lineage_node', value: 'get_lineage_node' }
    ]}
>
<TabItem value="get_lineage_node">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data lineage node. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data lineage node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you're getting the data lineage node. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="downstreamNodes" /></td>
    <td><code>array</code></td>
    <td>The downsteam nodes of the specified data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the event described in the data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="formsOutput" /></td>
    <td><code>array</code></td>
    <td>The metadata of the specified data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The source identifier of the data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="typeName" /></td>
    <td><code>string</code></td>
    <td>The name of the type of the specified data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="typeRevision" /></td>
    <td><code>string</code></td>
    <td>The revision type of the specified data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data lineage node was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who updated the data lineage node.</td>
</tr>
<tr>
    <td><CopyableCode code="upstreamNodes" /></td>
    <td><code>array</code></td>
    <td>The upstream nodes of the specified data lineage node.</td>
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
    <td><a href="#get_lineage_node"><CopyableCode code="get_lineage_node" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-timestamp"><code>timestamp</code></a></td>
    <td>Gets the data lineage node.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain in which you want to get the data lineage node.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the data lineage node that you want to get. Both, a lineage node identifier generated by Amazon DataZone and a sourceIdentifier of the lineage node are supported. If sourceIdentifier is greater than 1800 characters, you can use lineage node identifier generated by Amazon DataZone to get the node details.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-timestamp">
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The event time stamp for which you want to get the data lineage node.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lineage_node"
    values={[
        { label: 'get_lineage_node', value: 'get_lineage_node' }
    ]}
>
<TabItem value="get_lineage_node">

Gets the data lineage node.

```sql
SELECT
id,
name,
createdAt,
createdBy,
description,
domainId,
downstreamNodes,
eventTimestamp,
formsOutput,
sourceIdentifier,
typeName,
typeRevision,
updatedAt,
updatedBy,
upstreamNodes
FROM aws.datazone.lineage_nodes
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND timestamp = '{{ timestamp }}'
;
```
</TabItem>
</Tabs>
