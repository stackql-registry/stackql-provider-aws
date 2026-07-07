--- 
title: effective_lifecycle_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_lifecycle_policies
  - opensearchserverless
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

Creates, updates, deletes, gets or lists an <code>effective_lifecycle_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_lifecycle_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.effective_lifecycle_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_effective_lifecycle_policy"
    values={[
        { label: 'batch_get_effective_lifecycle_policy', value: 'batch_get_effective_lifecycle_policy' }
    ]}
>
<TabItem value="batch_get_effective_lifecycle_policy">

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
    <td><CopyableCode code="effectiveLifecyclePolicyDetails" /></td>
    <td><code>array</code></td>
    <td>A list of lifecycle policies applied to the OpenSearch Serverless indexes.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveLifecyclePolicyErrorDetails" /></td>
    <td><code>array</code></td>
    <td>A list of resources for which retrieval failed.</td>
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
    <td><a href="#batch_get_effective_lifecycle_policy"><CopyableCode code="batch_get_effective_lifecycle_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of successful and failed retrievals for the OpenSearch Serverless indexes. For more information, see Viewing data lifecycle policies.</td>
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
    defaultValue="batch_get_effective_lifecycle_policy"
    values={[
        { label: 'batch_get_effective_lifecycle_policy', value: 'batch_get_effective_lifecycle_policy' }
    ]}
>
<TabItem value="batch_get_effective_lifecycle_policy">

Returns a list of successful and failed retrievals for the OpenSearch Serverless indexes. For more information, see Viewing data lifecycle policies.

```sql
SELECT
effectiveLifecyclePolicyDetails,
effectiveLifecyclePolicyErrorDetails
FROM aws.opensearchserverless.effective_lifecycle_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
