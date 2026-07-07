--- 
title: dataset_labels
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_labels
  - rekognition
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

Creates, updates, deletes, gets or lists a <code>dataset_labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.dataset_labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dataset_labels"
    values={[
        { label: 'list_dataset_labels', value: 'list_dataset_labels' }
    ]}
>
<TabItem value="list_dataset_labels">

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
    <td><CopyableCode code="LabelName" /></td>
    <td><code>string</code></td>
    <td>The name of the label. (pattern: &lt;code&gt;.&#123;1,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelStats" /></td>
    <td><code>object</code></td>
    <td>Statistics about the label.</td>
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
    <td><a href="#list_dataset_labels"><CopyableCode code="list_dataset_labels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images in the Amazon Rekognition Custom Labels Developer Guide.</td>
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
    defaultValue="list_dataset_labels"
    values={[
        { label: 'list_dataset_labels', value: 'list_dataset_labels' }
    ]}
>
<TabItem value="list_dataset_labels">

This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images in the Amazon Rekognition Custom Labels Developer Guide.

```sql
SELECT
LabelName,
LabelStats
FROM aws.rekognition.dataset_labels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
