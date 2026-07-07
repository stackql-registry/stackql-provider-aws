--- 
title: feature_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_metadatas
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>feature_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.feature_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_feature_metadata"
    values={[
        { label: 'describe_feature_metadata', value: 'describe_feature_metadata' }
    ]}
>
<TabItem value="describe_feature_metadata">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating when the feature was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description you added to describe the feature. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FeatureGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the feature group that contains the feature. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:feature-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FeatureGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the feature group that you've specified. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;_-&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FeatureName" /></td>
    <td><code>string</code></td>
    <td>The name of the feature that you've specified. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-_&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FeatureType" /></td>
    <td><code>string</code></td>
    <td>The data type of the feature. (Integral, Fractional, String)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating when the metadata for the feature group was modified. For example, if you add a parameter describing the feature, the timestamp changes to reflect the last time you</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>The key-value pairs that you added to describe the feature.</td>
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
    <td><a href="#describe_feature_metadata"><CopyableCode code="describe_feature_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Shows the metadata for a feature within a feature group.</td>
</tr>
<tr>
    <td><a href="#update_feature_metadata"><CopyableCode code="update_feature_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FeatureGroupName"><code>FeatureGroupName</code></a>, <a href="#parameter-FeatureName"><code>FeatureName</code></a></td>
    <td></td>
    <td>Updates the description and parameters of the feature group.</td>
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
    defaultValue="describe_feature_metadata"
    values={[
        { label: 'describe_feature_metadata', value: 'describe_feature_metadata' }
    ]}
>
<TabItem value="describe_feature_metadata">

Shows the metadata for a feature within a feature group.

```sql
SELECT
CreationTime,
Description,
FeatureGroupArn,
FeatureGroupName,
FeatureName,
FeatureType,
LastModifiedTime,
Parameters
FROM aws.sagemaker.feature_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_feature_metadata"
    values={[
        { label: 'update_feature_metadata', value: 'update_feature_metadata' }
    ]}
>
<TabItem value="update_feature_metadata">

Updates the description and parameters of the feature group.

```sql
UPDATE aws.sagemaker.feature_metadatas
SET 
FeatureGroupName = '{{ FeatureGroupName }}',
FeatureName = '{{ FeatureName }}',
Description = '{{ Description }}',
ParameterAdditions = '{{ ParameterAdditions }}',
ParameterRemovals = '{{ ParameterRemovals }}'
WHERE 
region = '{{ region }}' --required
AND FeatureGroupName = '{{ FeatureGroupName }}' --required
AND FeatureName = '{{ FeatureName }}' --required;
```
</TabItem>
</Tabs>
