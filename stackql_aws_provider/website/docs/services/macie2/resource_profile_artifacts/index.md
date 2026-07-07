--- 
title: resource_profile_artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_profile_artifacts
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

Creates, updates, deletes, gets or lists a <code>resource_profile_artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_profile_artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.resource_profile_artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_profile_artifacts"
    values={[
        { label: 'list_resource_profile_artifacts', value: 'list_resource_profile_artifacts' }
    ]}
>
<TabItem value="list_resource_profile_artifacts">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="classificationResultStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis. Possible values are: COMPLETE - Amazon Macie successfully completed its analysis of the object. PARTIAL - Macie analyzed only a subset of data in the object. For example, the object is an archive file that contains files in an unsupported format. SKIPPED - Macie wasn't able to analyze the object. For example, the object is a malformed file.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon Macie found sensitive data in the object.</td>
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
    <td><a href="#list_resource_profile_artifacts"><CopyableCode code="list_resource_profile_artifacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about objects that Amazon Macie selected from an S3 bucket for automated sensitive data discovery.</td>
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
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_profile_artifacts"
    values={[
        { label: 'list_resource_profile_artifacts', value: 'list_resource_profile_artifacts' }
    ]}
>
<TabItem value="list_resource_profile_artifacts">

Retrieves information about objects that Amazon Macie selected from an S3 bucket for automated sensitive data discovery.

```sql
SELECT
arn,
classificationResultStatus,
sensitive
FROM aws.macie2.resource_profile_artifacts
WHERE resourceArn = '{{ resourceArn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
