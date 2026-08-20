--- 
title: managed_microvm_image_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_microvm_image_versions
  - lambda_microvms
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

Creates, updates, deletes, gets or lists a <code>managed_microvm_image_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_microvm_image_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda_microvms.managed_microvm_image_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_microvm_image_versions"
    values={[
        { label: 'list_managed_microvm_image_versions', value: 'list_managed_microvm_image_versions' }
    ]}
>
<TabItem value="list_managed_microvm_image_versions">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the version was last updated.</td>
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
    <td><a href="#list_managed_microvm_image_versions"><CopyableCode code="list_managed_microvm_image_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists versions of a managed MicroVM image. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
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
<tr id="parameter-image_identifier">
    <td><CopyableCode code="image_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ARN or ID) of the managed MicroVM image to list versions for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous call. Use this token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_managed_microvm_image_versions"
    values={[
        { label: 'list_managed_microvm_image_versions', value: 'list_managed_microvm_image_versions' }
    ]}
>
<TabItem value="list_managed_microvm_image_versions">

Lists versions of a managed MicroVM image. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
created_at,
image_arn,
image_version,
updated_at
FROM aws.lambda_microvms.managed_microvm_image_versions
WHERE image_identifier = '{{ image_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
