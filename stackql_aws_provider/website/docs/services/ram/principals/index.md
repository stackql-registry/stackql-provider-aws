--- 
title: principals
hide_title: false
hide_table_of_contents: false
keywords:
  - principals
  - ram
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

Creates, updates, deletes, gets or lists a <code>principals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.principals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_principals"
    values={[
        { label: 'list_principals', value: 'list_principals' }
    ]}
>
<TabItem value="list_principals">

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
    <td>The ID of the principal that can be associated with a resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the principal was associated with the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="external" /></td>
    <td><code>boolean</code></td>
    <td>Indicates the relationship between the Amazon Web Services account the principal belongs to and the account that owns the resource share: True – The two accounts belong to same organization. False – The two accounts do not belong to the same organization.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the association between the resource share and the principal was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a resource share the principal is associated with.</td>
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
    <td><a href="#list_principals"><CopyableCode code="list_principals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the principals that you are sharing resources with or that are sharing resources with you. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
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
    defaultValue="list_principals"
    values={[
        { label: 'list_principals', value: 'list_principals' }
    ]}
>
<TabItem value="list_principals">

Lists the principals that you are sharing resources with or that are sharing resources with you. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
id,
creationTime,
external,
lastUpdatedTime,
resourceShareArn
FROM aws.ram.principals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
