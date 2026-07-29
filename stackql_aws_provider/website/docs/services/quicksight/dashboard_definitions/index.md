--- 
title: dashboard_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_definitions
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

Creates, updates, deletes, gets or lists a <code>dashboard_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dashboard_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dashboard_definition"
    values={[
        { label: 'describe_dashboard_definition', value: 'describe_dashboard_definition' }
    ]}
>
<TabItem value="describe_dashboard_definition">

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
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard described. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_publish_options" /></td>
    <td><code>object</code></td>
    <td>Dashboard publish options.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The contents of a dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors associated with this dashboard version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Status associated with the dashboard version. CREATION_IN_PROGRESS CREATION_SUCCESSFUL CREATION_FAILED UPDATE_IN_PROGRESS UPDATE_SUCCESSFUL UPDATE_FAILED DELETED (CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="theme_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the theme of the dashboard.</td>
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
    <td><a href="#describe_dashboard_definition"><CopyableCode code="describe_dashboard_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a>, <a href="#parameter-alias-name"><code>alias-name</code></a></td>
    <td>Provides a detailed description of the definition of a dashboard. If you do not need to know details about the content of a dashboard, for instance if you are trying to check the status of a recently created or updated dashboard, use the DescribeDashboard instead.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the dashboard that you're describing.</td>
</tr>
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the dashboard.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-alias-name">
    <td><CopyableCode code="alias-name" /></td>
    <td><code>string</code></td>
    <td>The alias name.</td>
</tr>
<tr id="parameter-version-number">
    <td><CopyableCode code="version-number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dashboard_definition"
    values={[
        { label: 'describe_dashboard_definition', value: 'describe_dashboard_definition' }
    ]}
>
<TabItem value="describe_dashboard_definition">

Provides a detailed description of the definition of a dashboard. If you do not need to know details about the content of a dashboard, for instance if you are trying to check the status of a recently created or updated dashboard, use the DescribeDashboard instead.

```sql
SELECT
dashboard_id,
dashboard_publish_options,
definition,
errors,
name,
request_id,
resource_status,
status,
theme_arn
FROM aws.quicksight.dashboard_definitions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND dashboard_id = '{{ dashboard_id }}' -- required
AND region = '{{ region }}' -- required
AND `version-number` = '{{ version-number }}'
AND `alias-name` = '{{ alias-name }}'
;
```
</TabItem>
</Tabs>
