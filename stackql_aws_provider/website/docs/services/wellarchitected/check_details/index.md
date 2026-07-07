--- 
title: check_details
hide_title: false
hide_table_of_contents: false
keywords:
  - check_details
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>check_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="check_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.check_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_check_details"
    values={[
        { label: 'list_check_details', value: 'list_check_details' }
    ]}
>
<TabItem value="list_check_details">

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
    <td><CopyableCode code="CheckDetails" /></td>
    <td><code>array</code></td>
    <td>The details about the Trusted Advisor checks related to the Well-Architected best practice.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results.</td>
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
    <td><a href="#list_check_details"><CopyableCode code="list_check_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List of Trusted Advisor check details by account related to the workload.</td>
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
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_check_details"
    values={[
        { label: 'list_check_details', value: 'list_check_details' }
    ]}
>
<TabItem value="list_check_details">

List of Trusted Advisor check details by account related to the workload.

```sql
SELECT
CheckDetails,
NextToken
FROM aws.wellarchitected.check_details
WHERE workload_id = '{{ workload_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
