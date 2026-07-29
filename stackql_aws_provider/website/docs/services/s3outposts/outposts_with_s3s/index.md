--- 
title: outposts_with_s3s
hide_title: false
hide_table_of_contents: false
keywords:
  - outposts_with_s3s
  - s3outposts
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

Creates, updates, deletes, gets or lists an <code>outposts_with_s3s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outposts_with_s3s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3outposts.outposts_with_s3s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_outposts_with_s3"
    values={[
        { label: 'list_outposts_with_s3', value: 'list_outposts_with_s3' }
    ]}
>
<TabItem value="list_outposts_with_s3">

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
    <td><CopyableCode code="capacity_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Amazon S3 capacity of the outpost in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique Amazon Resource Name (ARN) for the outpost. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):outposts:&#91;a-z\-0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:outpost/(op-&#91;a-f0-9&#93;&#123;17&#125;|ec2)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique identifier for the outpost. (pattern: &lt;code&gt;^(op-&#91;a-f0-9&#93;&#123;17&#125;|\d&#123;12&#125;|ec2)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>Returns the Amazon Web Services account ID of the outpost owner. Useful for comparing owned versus shared outposts. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_outpost_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique S3 on Outposts ARN for use with Resource Access Manager (RAM). (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):s3-outposts:&#91;a-z\-0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:outpost/(op-&#91;a-f0-9&#93;&#123;17&#125;|\d&#123;12&#125;)/s3$&lt;/code&gt;)</td>
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
    <td><a href="#list_outposts_with_s3"><CopyableCode code="list_outposts_with_s3" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account. Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user from Resource Access Manager (RAM).</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Outposts to return. The limit is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When you can get additional results from the ListOutpostsWithS3 call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional Outposts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_outposts_with_s3"
    values={[
        { label: 'list_outposts_with_s3', value: 'list_outposts_with_s3' }
    ]}
>
<TabItem value="list_outposts_with_s3">

Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account. Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user from Resource Access Manager (RAM).

```sql
SELECT
capacity_in_bytes,
outpost_arn,
outpost_id,
owner_id,
s3_outpost_arn
FROM aws.s3outposts.outposts_with_s3s
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
