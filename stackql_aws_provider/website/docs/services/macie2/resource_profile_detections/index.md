--- 
title: resource_profile_detections
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_profile_detections
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

Creates, updates, deletes, gets or lists a <code>resource_profile_detections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_profile_detections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.resource_profile_detections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_profile_detections"
    values={[
        { label: 'list_resource_profile_detections', value: 'list_resource_profile_detections' }
    ]}
>
<TabItem value="list_resource_profile_detections">

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
    <td>The unique identifier for the custom data identifier or managed data identifier that detected the sensitive data. For additional details about a specified managed data identifier, see Using managed data identifiers in the Amazon Macie User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom data identifier or managed data identifier that detected the sensitive data. For a managed data identifier, this value is the same as the unique identifier (id).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>If the sensitive data was detected by a custom data identifier, the Amazon Resource Name (ARN) of the custom data identifier that detected the data. Otherwise, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of occurrences of the sensitive data.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether occurrences of this type of sensitive data are excluded (true) or included (false) in the bucket's sensitivity score, if the score is calculated by Amazon Macie.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier. (CUSTOM, MANAGED)</td>
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
    <td><a href="#list_resource_profile_detections"><CopyableCode code="list_resource_profile_detections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.</td>
</tr>
<tr>
    <td><a href="#update_resource_profile_detections"><CopyableCode code="update_resource_profile_detections" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the sensitivity scoring settings for an S3 bucket.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to include in each page of a paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_profile_detections"
    values={[
        { label: 'list_resource_profile_detections', value: 'list_resource_profile_detections' }
    ]}
>
<TabItem value="list_resource_profile_detections">

Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.

```sql
SELECT
id,
name,
arn,
count,
suppressed,
type_
FROM aws.macie2.resource_profile_detections
WHERE resourceArn = '{{ resourceArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_profile_detections"
    values={[
        { label: 'update_resource_profile_detections', value: 'update_resource_profile_detections' }
    ]}
>
<TabItem value="update_resource_profile_detections">

Updates the sensitivity scoring settings for an S3 bucket.

```sql
UPDATE aws.macie2.resource_profile_detections
SET 
suppressDataIdentifiers = '{{ suppressDataIdentifiers }}'
WHERE 
resourceArn = '{{ resourceArn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
