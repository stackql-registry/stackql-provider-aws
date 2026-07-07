--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
  - panorama
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_node"
    values={[
        { label: 'describe_node', value: 'describe_node' },
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="describe_node">

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
    <td><CopyableCode code="AssetName" /></td>
    <td><code>string</code></td>
    <td>The node's asset name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Category" /></td>
    <td><code>string</code></td>
    <td>The node's category. (BUSINESS_LOGIC, ML_MODEL, MEDIA_SOURCE, MEDIA_SINK)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The node's description. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the node was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The node's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NodeId" /></td>
    <td><code>string</code></td>
    <td>The node's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NodeInterface" /></td>
    <td><code>object</code></td>
    <td>The node's interface.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The account ID of the node's owner. (pattern: &lt;code&gt;^&#91;0-9a-z\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PackageArn" /></td>
    <td><code>string</code></td>
    <td>The node's ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="PackageId" /></td>
    <td><code>string</code></td>
    <td>The node's package ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PackageName" /></td>
    <td><code>string</code></td>
    <td>The node's package name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PackageVersion" /></td>
    <td><code>string</code></td>
    <td>The node's package version. (pattern: &lt;code&gt;^(&#91;0-9&#93;+)\.(&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PatchVersion" /></td>
    <td><code>string</code></td>
    <td>The node's patch version. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_nodes">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that's included if more results are available. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Nodes" /></td>
    <td><code>array</code></td>
    <td>A list of nodes.</td>
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
    <td><a href="#describe_node"><CopyableCode code="describe_node" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OwnerAccount"><code>OwnerAccount</code></a></td>
    <td>Returns information about a node.</td>
</tr>
<tr>
    <td><a href="#list_nodes"><CopyableCode code="list_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-category"><code>category</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-ownerAccount"><code>ownerAccount</code></a>, <a href="#parameter-packageName"><code>packageName</code></a>, <a href="#parameter-packageVersion"><code>packageVersion</code></a>, <a href="#parameter-patchVersion"><code>patchVersion</code></a></td>
    <td>Returns a list of nodes.</td>
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
<tr id="parameter-node_id">
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-OwnerAccount">
    <td><CopyableCode code="OwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The account ID of the node's owner.</td>
</tr>
<tr id="parameter-category">
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Search for nodes by category.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of nodes to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-ownerAccount">
    <td><CopyableCode code="ownerAccount" /></td>
    <td><code>string</code></td>
    <td>Search for nodes by the account ID of the nodes' owner.</td>
</tr>
<tr id="parameter-packageName">
    <td><CopyableCode code="packageName" /></td>
    <td><code>string</code></td>
    <td>Search for nodes by name.</td>
</tr>
<tr id="parameter-packageVersion">
    <td><CopyableCode code="packageVersion" /></td>
    <td><code>string</code></td>
    <td>Search for nodes by version.</td>
</tr>
<tr id="parameter-patchVersion">
    <td><CopyableCode code="patchVersion" /></td>
    <td><code>string</code></td>
    <td>Search for nodes by patch version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_node"
    values={[
        { label: 'describe_node', value: 'describe_node' },
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="describe_node">

Returns information about a node.

```sql
SELECT
AssetName,
Category,
CreatedTime,
Description,
LastUpdatedTime,
Name,
NodeId,
NodeInterface,
OwnerAccount,
PackageArn,
PackageId,
PackageName,
PackageVersion,
PatchVersion
FROM aws.panorama.nodes
WHERE node_id = '{{ node_id }}' -- required
AND region = '{{ region }}' -- required
AND OwnerAccount = '{{ OwnerAccount }}'
;
```
</TabItem>
<TabItem value="list_nodes">

Returns a list of nodes.

```sql
SELECT
NextToken,
Nodes
FROM aws.panorama.nodes
WHERE region = '{{ region }}' -- required
AND category = '{{ category }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND ownerAccount = '{{ ownerAccount }}'
AND packageName = '{{ packageName }}'
AND packageVersion = '{{ packageVersion }}'
AND patchVersion = '{{ patchVersion }}'
;
```
</TabItem>
</Tabs>
