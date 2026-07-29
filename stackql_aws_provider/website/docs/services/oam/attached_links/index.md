--- 
title: attached_links
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_links
  - oam
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

Creates, updates, deletes, gets or lists an <code>attached_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.oam.attached_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attached_links"
    values={[
        { label: 'list_attached_links', value: 'list_attached_links' }
    ]}
>
<TabItem value="list_attached_links">

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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label that was assigned to this link at creation, with the variables resolved to their actual values.</td>
</tr>
<tr>
    <td><CopyableCode code="link_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_types" /></td>
    <td><code>array</code></td>
    <td>The resource types supported by this link.</td>
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
    <td><a href="#list_attached_links"><CopyableCode code="list_attached_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of source account links that are linked to this monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks. To find a list of links for one source account, use ListLinks.</td>
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
    defaultValue="list_attached_links"
    values={[
        { label: 'list_attached_links', value: 'list_attached_links' }
    ]}
>
<TabItem value="list_attached_links">

Returns a list of source account links that are linked to this monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks. To find a list of links for one source account, use ListLinks.

```sql
SELECT
label,
link_arn,
resource_types
FROM aws.oam.attached_links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
