--- 
title: lineage_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - lineage_groups
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

Creates, updates, deletes, gets or lists a <code>lineage_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lineage_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.lineage_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_lineage_group"
    values={[
        { label: 'describe_lineage_group', value: 'describe_lineage_group' },
        { label: 'list_lineage_groups', value: 'list_lineage_groups' }
    ]}
>
<TabItem value="describe_lineage_group">

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
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of lineage group.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the lineage group. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the lineage group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of the lineage group.</td>
</tr>
<tr>
    <td><CopyableCode code="LineageGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lineage group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:lineage-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LineageGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the lineage group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lineage_groups">

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
    <td>The creation time of the lineage group summary.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the lineage group summary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of the lineage group summary.</td>
</tr>
<tr>
    <td><CopyableCode code="LineageGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lineage group resource. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:lineage-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LineageGroupName" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the lineage group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_lineage_group"><CopyableCode code="describe_lineage_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of properties for the requested lineage group. For more information, see Cross-Account Lineage Tracking in the Amazon SageMaker Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_lineage_groups"><CopyableCode code="list_lineage_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list of lineage groups shared with your Amazon Web Services account. For more information, see Cross-Account Lineage Tracking in the Amazon SageMaker Developer Guide.</td>
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
    defaultValue="describe_lineage_group"
    values={[
        { label: 'describe_lineage_group', value: 'describe_lineage_group' },
        { label: 'list_lineage_groups', value: 'list_lineage_groups' }
    ]}
>
<TabItem value="describe_lineage_group">

Provides a list of properties for the requested lineage group. For more information, see Cross-Account Lineage Tracking in the Amazon SageMaker Developer Guide.

```sql
SELECT
CreatedBy,
CreationTime,
Description,
DisplayName,
LastModifiedBy,
LastModifiedTime,
LineageGroupArn,
LineageGroupName
FROM aws.sagemaker.lineage_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_lineage_groups">

A list of lineage groups shared with your Amazon Web Services account. For more information, see Cross-Account Lineage Tracking in the Amazon SageMaker Developer Guide.

```sql
SELECT
CreationTime,
DisplayName,
LastModifiedTime,
LineageGroupArn,
LineageGroupName
FROM aws.sagemaker.lineage_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
