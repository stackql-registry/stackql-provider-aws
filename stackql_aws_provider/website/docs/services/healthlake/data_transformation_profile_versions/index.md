--- 
title: data_transformation_profile_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_transformation_profile_versions
  - healthlake
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

Creates, updates, deletes, gets or lists a <code>data_transformation_profile_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_transformation_profile_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthlake.data_transformation_profile_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_transformation_profile_versions"
    values={[
        { label: 'list_data_transformation_profile_versions', value: 'list_data_transformation_profile_versions' }
    ]}
>
<TabItem value="list_data_transformation_profile_versions">

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
    <td><CopyableCode code="change_description" /></td>
    <td><code>string</code></td>
    <td>A description of what changed in this version.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the profile. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="source_format" /></td>
    <td><code>string</code></td>
    <td>The source data format that this profile converts from. (CCDA, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="target_format" /></td>
    <td><code>string</code></td>
    <td>The target output format of the profile. (FHIR_R4)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number.</td>
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
    <td><a href="#list_data_transformation_profile_versions"><CopyableCode code="list_data_transformation_profile_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all versions of a specific data transformation profile (DRAFT and published), in reverse chronological order (newest first). Use GetDataTransformationProfile to retrieve profile content. Results are paginated. Use the NextToken parameter to retrieve additional results.</td>
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
    defaultValue="list_data_transformation_profile_versions"
    values={[
        { label: 'list_data_transformation_profile_versions', value: 'list_data_transformation_profile_versions' }
    ]}
>
<TabItem value="list_data_transformation_profile_versions">

Lists all versions of a specific data transformation profile (DRAFT and published), in reverse chronological order (newest first). Use GetDataTransformationProfile to retrieve profile content. Results are paginated. Use the NextToken parameter to retrieve additional results.

```sql
SELECT
change_description,
last_updated_at,
profile_id,
profile_name,
source_format,
target_format,
version
FROM aws.healthlake.data_transformation_profile_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
