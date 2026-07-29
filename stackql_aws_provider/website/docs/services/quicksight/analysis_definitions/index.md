--- 
title: analysis_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_definitions
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>analysis_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.analysis_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_analysis_definition"
    values={[
        { label: 'describe_analysis_definition', value: 'describe_analysis_definition' }
    ]}
>
<TabItem value="describe_analysis_definition">

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
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the analysis described. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The definition of an analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors associated with the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Status associated with the analysis. CREATION_IN_PROGRESS CREATION_SUCCESSFUL CREATION_FAILED UPDATE_IN_PROGRESS UPDATE_SUCCESSFUL UPDATE_FAILED DELETED (CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="theme_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the theme of the analysis.</td>
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
    <td><a href="#describe_analysis_definition"><CopyableCode code="describe_analysis_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a detailed description of the definition of an analysis. If you do not need to know details about the content of an Analysis, for instance if you are trying to check the status of a recently created or updated Analysis, use the DescribeAnalysis instead.</td>
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
<tr id="parameter-analysis_id">
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the analysis that you're describing. The ID is part of the URL of the analysis.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the analysis. You must be using the Amazon Web Services account that the analysis is in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_analysis_definition"
    values={[
        { label: 'describe_analysis_definition', value: 'describe_analysis_definition' }
    ]}
>
<TabItem value="describe_analysis_definition">

Provides a detailed description of the definition of an analysis. If you do not need to know details about the content of an Analysis, for instance if you are trying to check the status of a recently created or updated Analysis, use the DescribeAnalysis instead.

```sql
SELECT
analysis_id,
definition,
errors,
name,
request_id,
resource_status,
status,
theme_arn
FROM aws.quicksight.analysis_definitions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND analysis_id = '{{ analysis_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
