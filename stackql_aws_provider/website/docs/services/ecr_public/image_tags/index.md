--- 
title: image_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - image_tags
  - ecr_public
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

Creates, updates, deletes, gets or lists an <code>image_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr_public.image_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_tags"
    values={[
        { label: 'describe_image_tags', value: 'describe_image_tags' }
    ]}
>
<TabItem value="describe_image_tags">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp that indicates when the image tag was created.</td>
</tr>
<tr>
    <td><CopyableCode code="imageDetail" /></td>
    <td><code>object</code></td>
    <td>An object that describes the details of an image.</td>
</tr>
<tr>
    <td><CopyableCode code="imageTag" /></td>
    <td><code>string</code></td>
    <td>The tag that's associated with the image.</td>
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
    <td><a href="#describe_image_tags"><CopyableCode code="describe_image_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the image tag details for a repository in a public registry.</td>
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
    defaultValue="describe_image_tags"
    values={[
        { label: 'describe_image_tags', value: 'describe_image_tags' }
    ]}
>
<TabItem value="describe_image_tags">

Returns the image tag details for a repository in a public registry.

```sql
SELECT
createdAt,
imageDetail,
imageTag
FROM aws.ecr_public.image_tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
