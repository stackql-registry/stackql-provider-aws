--- 
title: supported_instance_types
hide_title: false
hide_table_of_contents: false
keywords:
  - supported_instance_types
  - emr
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

Creates, updates, deletes, gets or lists a <code>supported_instance_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="supported_instance_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.supported_instance_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_supported_instance_types"
    values={[
        { label: 'list_supported_instance_types', value: 'list_supported_instance_types' }
    ]}
>
<TabItem value="list_supported_instance_types">

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
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The pagination token that marks the next set of results to retrieve.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_instance_types" /></td>
    <td><code>array</code></td>
    <td>The list of instance types that the release specified in ListSupportedInstanceTypesInput$ReleaseLabel supports, filtered by Amazon Web Services Region.</td>
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
    <td><a href="#list_supported_instance_types"><CopyableCode code="list_supported_instance_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list of the instance types that Amazon EMR supports. You can filter the list by Amazon Web Services Region and Amazon EMR release.</td>
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
    defaultValue="list_supported_instance_types"
    values={[
        { label: 'list_supported_instance_types', value: 'list_supported_instance_types' }
    ]}
>
<TabItem value="list_supported_instance_types">

A list of the instance types that Amazon EMR supports. You can filter the list by Amazon Web Services Region and Amazon EMR release.

```sql
SELECT
marker,
supported_instance_types
FROM aws.emr.supported_instance_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
