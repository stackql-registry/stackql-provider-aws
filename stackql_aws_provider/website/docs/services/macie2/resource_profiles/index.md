--- 
title: resource_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_profiles
  - macie2
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

Creates, updates, deletes, gets or lists a <code>resource_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.resource_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_profile"
    values={[
        { label: 'get_resource_profile', value: 'get_resource_profile' }
    ]}
>
<TabItem value="get_resource_profile">

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
    <td><CopyableCode code="profileUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently recalculated sensitive data discovery statistics and details for the bucket. If the bucket's sensitivity score is calculated automatically, this includes the score.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>integer</code></td>
    <td>The current sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive). By default, this score is calculated automatically based on the amount of data that Amazon Macie has analyzed in the bucket and the amount of sensitive data that Macie has found in the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScoreOverridden" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the bucket's current sensitivity score was set manually. If this value is true, the score was manually changed to 100. If this value is false, the score was calculated automatically by Amazon Macie.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>The sensitive data discovery statistics for the bucket. The statistics capture the results of automated sensitive data discovery activities that Amazon Macie has performed for the bucket.</td>
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
    <td><a href="#get_resource_profile"><CopyableCode code="get_resource_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.</td>
</tr>
<tr>
    <td><a href="#update_resource_profile"><CopyableCode code="update_resource_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the sensitivity score for an S3 bucket.</td>
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
<tr id="parameter-resourceArn">
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_profile"
    values={[
        { label: 'get_resource_profile', value: 'get_resource_profile' }
    ]}
>
<TabItem value="get_resource_profile">

Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.

```sql
SELECT
profileUpdatedAt,
sensitivityScore,
sensitivityScoreOverridden,
statistics
FROM aws.macie2.resource_profiles
WHERE resourceArn = '{{ resourceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_profile"
    values={[
        { label: 'update_resource_profile', value: 'update_resource_profile' }
    ]}
>
<TabItem value="update_resource_profile">

Updates the sensitivity score for an S3 bucket.

```sql
UPDATE aws.macie2.resource_profiles
SET 
sensitivityScoreOverride = {{ sensitivityScoreOverride }}
WHERE 
resourceArn = '{{ resourceArn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
