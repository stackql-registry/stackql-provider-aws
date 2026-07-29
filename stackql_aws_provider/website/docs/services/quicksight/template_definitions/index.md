--- 
title: template_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - template_definitions
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

Creates, updates, deletes, gets or lists a <code>template_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.template_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_template_definition"
    values={[
        { label: 'describe_template_definition', value: 'describe_template_definition' }
    ]}
>
<TabItem value="describe_template_definition">

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
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The detailed definition of a template.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors associated with the template version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Status associated with the template. CREATION_IN_PROGRESS CREATION_SUCCESSFUL CREATION_FAILED UPDATE_IN_PROGRESS UPDATE_SUCCESSFUL UPDATE_FAILED DELETED (CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template described. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="theme_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the theme of the template.</td>
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
    <td><a href="#describe_template_definition"><CopyableCode code="describe_template_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a>, <a href="#parameter-alias-name"><code>alias-name</code></a></td>
    <td>Provides a detailed description of the definition of a template. If you do not need to know details about the content of a template, for instance if you are trying to check the status of a recently created or updated template, use the DescribeTemplate instead.</td>
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
    <td>The ID of the Amazon Web Services account that contains the template. You must be using the Amazon Web Services account that the template is in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template that you're describing.</td>
</tr>
<tr id="parameter-alias-name">
    <td><CopyableCode code="alias-name" /></td>
    <td><code>string</code></td>
    <td>The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.</td>
</tr>
<tr id="parameter-version-number">
    <td><CopyableCode code="version-number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_template_definition"
    values={[
        { label: 'describe_template_definition', value: 'describe_template_definition' }
    ]}
>
<TabItem value="describe_template_definition">

Provides a detailed description of the definition of a template. If you do not need to know details about the content of a template, for instance if you are trying to check the status of a recently created or updated template, use the DescribeTemplate instead.

```sql
SELECT
definition,
errors,
name,
request_id,
resource_status,
status,
template_id,
theme_arn
FROM aws.quicksight.template_definitions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
AND `version-number` = '{{ version-number }}'
AND `alias-name` = '{{ alias-name }}'
;
```
</TabItem>
</Tabs>
