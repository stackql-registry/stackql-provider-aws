--- 
title: clusters_for_images
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_for_images
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>clusters_for_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters_for_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.clusters_for_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_clusters_for_image"
    values={[
        { label: 'get_clusters_for_image', value: 'get_clusters_for_image' }
    ]}
>
<TabItem value="get_clusters_for_image">

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
    <td><CopyableCode code="clusterArn" /></td>
    <td><code>string</code></td>
    <td>The cluster ARN. (pattern: &lt;code&gt;arn:aws(?:-&#91;a-z0-9-&#93;+)?:(?:ecs|eks):&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterDetails" /></td>
    <td><code>array</code></td>
    <td>Details about the cluster.</td>
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
    <td><a href="#get_clusters_for_image"><CopyableCode code="get_clusters_for_image" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of clusters and metadata associated with an image.</td>
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
    defaultValue="get_clusters_for_image"
    values={[
        { label: 'get_clusters_for_image', value: 'get_clusters_for_image' }
    ]}
>
<TabItem value="get_clusters_for_image">

Returns a list of clusters and metadata associated with an image.

```sql
SELECT
clusterArn,
clusterDetails
FROM aws.inspector2.clusters_for_images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
