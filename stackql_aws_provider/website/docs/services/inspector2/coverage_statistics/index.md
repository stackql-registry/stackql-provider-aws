--- 
title: coverage_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - coverage_statistics
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

Creates, updates, deletes, gets or lists a <code>coverage_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="coverage_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.coverage_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_coverage_statistics"
    values={[
        { label: 'list_coverage_statistics', value: 'list_coverage_statistics' }
    ]}
>
<TabItem value="list_coverage_statistics">

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
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of resources.</td>
</tr>
<tr>
    <td><CopyableCode code="group_key" /></td>
    <td><code>string</code></td>
    <td>The key associated with this group (SCAN_STATUS_CODE, SCAN_STATUS_REASON, ACCOUNT_ID, RESOURCE_TYPE, ECR_REPOSITORY_NAME, PROVIDER, PROVIDER_ACCOUNT_ID, PROVIDER_REGION, PROVIDER_ORG_ID)</td>
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
    <td><a href="#list_coverage_statistics"><CopyableCode code="list_coverage_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists Amazon Inspector coverage statistics for your environment.</td>
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
    defaultValue="list_coverage_statistics"
    values={[
        { label: 'list_coverage_statistics', value: 'list_coverage_statistics' }
    ]}
>
<TabItem value="list_coverage_statistics">

Lists Amazon Inspector coverage statistics for your environment.

```sql
SELECT
count,
group_key
FROM aws.inspector2.coverage_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
