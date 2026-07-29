--- 
title: image_referrers
hide_title: false
hide_table_of_contents: false
keywords:
  - image_referrers
  - ecr
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

Creates, updates, deletes, gets or lists an <code>image_referrers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_referrers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.image_referrers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_image_referrers"
    values={[
        { label: 'list_image_referrers', value: 'list_image_referrers' }
    ]}
>
<TabItem value="list_image_referrers">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future ListImageReferrers request. When the results of a ListImageReferrers request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="referrers" /></td>
    <td><code>array</code></td>
    <td>The list of artifacts associated with the subject image.</td>
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
    <td><a href="#list_image_referrers"><CopyableCode code="list_image_referrers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the artifacts associated with a specified subject image. The IAM principal invoking this operation must have the ecr:BatchGetImage permission.</td>
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
    defaultValue="list_image_referrers"
    values={[
        { label: 'list_image_referrers', value: 'list_image_referrers' }
    ]}
>
<TabItem value="list_image_referrers">

Lists the artifacts associated with a specified subject image. The IAM principal invoking this operation must have the ecr:BatchGetImage permission.

```sql
SELECT
next_token,
referrers
FROM aws.ecr.image_referrers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
