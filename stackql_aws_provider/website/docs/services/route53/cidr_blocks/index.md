--- 
title: cidr_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - cidr_blocks
  - route53
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

Creates, updates, deletes, gets or lists a <code>cidr_blocks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cidr_blocks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.cidr_blocks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cidr_blocks"
    values={[
        { label: 'list_cidr_blocks', value: 'list_cidr_blocks' }
    ]}
>
<TabItem value="list_cidr_blocks">

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
    <td><CopyableCode code="CidrBlock" /></td>
    <td><code>string</code></td>
    <td>Value for the CIDR block.</td>
</tr>
<tr>
    <td><CopyableCode code="LocationName" /></td>
    <td><code>string</code></td>
    <td>The location name of the CIDR block.</td>
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
    <td><a href="#list_cidr_blocks"><CopyableCode code="list_cidr_blocks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cidr_collection_id"><code>cidr_collection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a>, <a href="#parameter-nexttoken"><code>nexttoken</code></a>, <a href="#parameter-maxresults"><code>maxresults</code></a></td>
    <td>Returns a paginated list of location objects and their CIDR blocks.</td>
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
<tr id="parameter-cidr_collection_id">
    <td><CopyableCode code="cidr_collection_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the CIDR collection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The name of the CIDR collection location.</td>
</tr>
<tr id="parameter-maxresults">
    <td><CopyableCode code="maxresults" /></td>
    <td><code>string</code></td>
    <td>Maximum number of results you want returned.</td>
</tr>
<tr id="parameter-nexttoken">
    <td><CopyableCode code="nexttoken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token to indicate where the service is to begin enumerating results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cidr_blocks"
    values={[
        { label: 'list_cidr_blocks', value: 'list_cidr_blocks' }
    ]}
>
<TabItem value="list_cidr_blocks">

Returns a paginated list of location objects and their CIDR blocks.

```sql
SELECT
CidrBlock,
LocationName
FROM aws.route53.cidr_blocks
WHERE cidr_collection_id = '{{ cidr_collection_id }}' -- required
AND region = '{{ region }}' -- required
AND location = '{{ location }}'
AND nexttoken = '{{ nexttoken }}'
AND maxresults = '{{ maxresults }}'
;
```
</TabItem>
</Tabs>
