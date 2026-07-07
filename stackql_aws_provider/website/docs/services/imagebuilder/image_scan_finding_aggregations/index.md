--- 
title: image_scan_finding_aggregations
hide_title: false
hide_table_of_contents: false
keywords:
  - image_scan_finding_aggregations
  - imagebuilder
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

Creates, updates, deletes, gets or lists an <code>image_scan_finding_aggregations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_scan_finding_aggregations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_scan_finding_aggregations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_image_scan_finding_aggregations"
    values={[
        { label: 'list_image_scan_finding_aggregations', value: 'list_image_scan_finding_aggregations' }
    ]}
>
<TabItem value="list_image_scan_finding_aggregations">

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
    <td><CopyableCode code="accountAggregation" /></td>
    <td><code>object</code></td>
    <td>Returns an object that contains severity counts based on an account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="imageAggregation" /></td>
    <td><code>object</code></td>
    <td>Returns an object that contains severity counts based on the Amazon Resource Name (ARN) for a specific image.</td>
</tr>
<tr>
    <td><CopyableCode code="imagePipelineAggregation" /></td>
    <td><code>object</code></td>
    <td>Returns an object that contains severity counts based on an image pipeline ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilityIdAggregation" /></td>
    <td><code>object</code></td>
    <td>Returns an object that contains severity counts based on vulnerability ID.</td>
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
    <td><a href="#list_image_scan_finding_aggregations"><CopyableCode code="list_image_scan_finding_aggregations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the imagePipelineArn filter. If you don't specify a filter, Image Builder returns an aggregation for your account. To streamline results, you can use the following filters in your request: accountId imageBuildVersionArn imagePipelineArn vulnerabilityId</td>
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
    defaultValue="list_image_scan_finding_aggregations"
    values={[
        { label: 'list_image_scan_finding_aggregations', value: 'list_image_scan_finding_aggregations' }
    ]}
>
<TabItem value="list_image_scan_finding_aggregations">

Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the imagePipelineArn filter. If you don't specify a filter, Image Builder returns an aggregation for your account. To streamline results, you can use the following filters in your request: accountId imageBuildVersionArn imagePipelineArn vulnerabilityId

```sql
SELECT
accountAggregation,
imageAggregation,
imagePipelineAggregation,
vulnerabilityIdAggregation
FROM aws.imagebuilder.image_scan_finding_aggregations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
